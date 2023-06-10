import { ApiError } from '../../../shared/lib/ApiError/index.js';
import { transformMinimalLeftoversArrayDBIntoFE, transformMinimalLeftoversDBIntoFE } from '../lib/helpers/index.js';
import { minimalLeftoversModel } from '../model/index.js';
class MinimalLeftoversService {
    async writeAll(minimalLeftoversArray) {
        await this.deleteAll();
        await minimalLeftoversModel.create(minimalLeftoversArray);
        return this.getAll();
    }
    async write(minimalLeftover) {
        await minimalLeftoversModel.updateOne({ cityName: minimalLeftover.cityName }, minimalLeftover);
        const newItem = await minimalLeftoversModel.findOne({ cityName: minimalLeftover.cityName });
        if (newItem)
            return newItem;
        throw ApiError.ServerError('что-то пошло не так во время обновления записи');
    }
    async delete(minimalLeftover) {
        await minimalLeftoversModel.deleteOne({ cityName: minimalLeftover.cityName });
        return null;
    }
    async deleteAll() {
        await minimalLeftoversModel.deleteMany();
        return [];
    }
    getAll() {
        return minimalLeftoversModel.find();
    }
    async _get(minimalLeftover) {
        const model = await minimalLeftoversModel.findOne(minimalLeftover);
        return model ? transformMinimalLeftoversDBIntoFE(model) : null;
    }
    async _getAll() {
        return transformMinimalLeftoversArrayDBIntoFE(await minimalLeftoversModel.find());
    }
}
export const minimalLeftoversService = new MinimalLeftoversService();
