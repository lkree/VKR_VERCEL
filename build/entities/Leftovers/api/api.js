import { ApiError } from '../../../shared/lib/ApiError/index.js';
import { assignLeftovers, computeHaveToOrderField, fileLeftoversToDB } from '../lib/helpers/index.js';
import { leftoversModel } from '../model/index.js';
class LeftoverService {
    async writeAll(leftovers) {
        await this.deleteAll();
        return this.create(leftovers);
    }
    async create(leftovers) {
        await leftoversModel.create(leftovers);
        return this.getAll();
    }
    async update(leftover) {
        const existingLeftover = await leftoversModel.findOne({ cityName: leftover.cityName });
        if (!existingLeftover)
            throw ApiError.BadRequest('такой записи не существует');
        return this._update(existingLeftover, leftover);
    }
    updateAll(leftovers) {
        return Promise.all(leftovers.map(l => this.update(l)));
    }
    async deleteAll() {
        await leftoversModel.deleteMany();
        return [];
    }
    async deleteOne(leftover) {
        await leftoversModel.deleteOne(leftover);
        return this.getAll();
    }
    getUniqueProducts() {
        return this.getAll().then(data => [
            ...data.reduce((result, it) => {
                it.leftovers.forEach(({ nomenclature }) => result.add(nomenclature));
                return result;
            }, new Set()),
        ]);
    }
    getAll(city) {
        return leftoversModel.find().then(d => (!city ? d : d.filter(({ cityName }) => cityName === city)));
    }
    async _update(existingLeftover, newLeftover) {
        return leftoversModel.findOneAndUpdate({ cityName: existingLeftover.cityName }, assignLeftovers(existingLeftover, newLeftover), { new: true });
    }
    _updateOrCreateAll(leftovers) {
        return Promise.all(leftovers.map(async (leftover) => {
            const existingLeftover = await leftoversModel.findOne({ cityName: leftover.cityName });
            if (existingLeftover)
                void this._update(existingLeftover, leftover);
            else
                void leftoversModel.create(leftover);
        }));
    }
    async _getLeftoversWithOverdraft(MLList) {
        const currentLeftovers = await leftoversModel.find();
        return currentLeftovers.reduce((result, leftover) => {
            const minimalLeftover = MLList.find(it => it.cityName === leftover.cityName);
            if (!minimalLeftover)
                return result;
            const overdraftList = leftover.leftovers.reduce((r, product) => {
                const minimalProduct = minimalLeftover.products.find(it => it.nomenclature === product.nomenclature);
                const haveToOrder = computeHaveToOrderField(minimalProduct, product.leftoverAtEnd);
                if (haveToOrder)
                    r.push({ nomenclature: product.nomenclature, haveToOrder, unit: product.unit });
                return r;
            }, []);
            if (overdraftList.length)
                result.push({ cityName: leftover.cityName, overdraftList });
            return result;
        }, []);
    }
    async _saveLeftoversFromFile(data) {
        await this._updateOrCreateAll(fileLeftoversToDB(data));
        return this.getAll();
    }
}
export const leftoverService = new LeftoverService();
