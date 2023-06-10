import _ from 'lodash';
import { responsiblePersonsService } from '../../../entities/Responsibles/index.js';
import { userService } from '../../../entities/User/index.js';
import { ApiError } from '../../../shared/lib/ApiError/index.js';
import { citiesPrefixModel } from '../model/index.js';
class CitiesPrefixService {
    async add({ name, prefix }) {
        if (await citiesPrefixModel.findOne({ prefix })) {
            throw ApiError.BadRequest(`Город с таким префиксом ${prefix} уже существует`);
        }
        const cityName = _.capitalize(name);
        await citiesPrefixModel.create({ name: cityName, prefix: prefix.toLowerCase() });
        await responsiblePersonsService.write({ cityName, notifyEmail: '', accountEmail: '' });
        return this.getAll();
    }
    async delete(item) {
        const record = await citiesPrefixModel.findOne(item);
        await citiesPrefixModel.deleteOne(item);
        if (record) {
            const person = await responsiblePersonsService._get({ cityName: record.name });
            if (person) {
                await responsiblePersonsService._delete(person);
                if (person.accountEmail)
                    await userService.delete({ email: person.accountEmail });
            }
        }
        return this.getAll();
    }
    async getAll() {
        return citiesPrefixModel.find();
    }
    _getCitiesSettings() {
        return this.getAll().then(d => d.reduce((result, { prefix, name }) => ({ ...result, [prefix]: name }), {}));
    }
}
export const citiesPrefixService = new CitiesPrefixService();
