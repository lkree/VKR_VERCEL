import { userService } from '../../../entities/User/index.js';
import { ApiError } from '../../../shared/lib/ApiError/index.js';
import { responsiblePersonsModel } from '../model/index.js';
class ResponsiblePersonsService {
    async write(responsiblePerson) {
        const oldItem = await responsiblePersonsModel.findOne({ cityName: responsiblePerson.cityName });
        if (oldItem)
            await responsiblePersonsModel.updateOne({ cityName: responsiblePerson.cityName }, responsiblePerson);
        else
            await responsiblePersonsModel.create(responsiblePerson);
        if (responsiblePerson.password && responsiblePerson.accountEmail) {
            await Promise.all([
                oldItem?.accountEmail && oldItem.accountEmail !== responsiblePerson.accountEmail
                    ? userService.delete({ email: oldItem.accountEmail })
                    : void 0,
                userService
                    ._getUserInfo({ email: responsiblePerson.accountEmail })
                    .then(d => (d ? 'update' : 'registration'))
                    .then(method => void userService[method]({
                    email: responsiblePerson.accountEmail,
                    password: responsiblePerson.password,
                    cityBounding: responsiblePerson.cityName,
                })),
            ]);
        }
        const newItem = await responsiblePersonsModel.findOne({ cityName: responsiblePerson.cityName });
        if (newItem)
            return newItem;
        throw ApiError.ServerError('что-то пошло не так во время обновления записи');
    }
    getAll() {
        return responsiblePersonsModel.find();
    }
    _get(personData) {
        return responsiblePersonsModel.findOne(personData);
    }
    async _delete(personData) {
        await responsiblePersonsModel.deleteOne(personData);
    }
    _getUserEmailByCity(cityName) {
        return responsiblePersonsModel.findOne({ cityName }).then(r => ({ cityName, email: r?.notifyEmail ?? null }));
    }
}
export const responsiblePersonsService = new ResponsiblePersonsService();
