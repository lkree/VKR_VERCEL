import { ApiError } from '../../../shared/lib/ApiError/index.js';
import { isObject } from '../../../shared/lib/helpers/index.js';
import { FULL_VALUE } from './const.js';
export function propsValidation(assertObject, data) {
    if (!isObject(data))
        throw ApiError.BadRequest('не переданы аргументы');
    Object.entries(assertObject).forEach(([property, typeGuard]) => {
        if (!typeGuard(property === FULL_VALUE ? data : data[property])) {
            throw ApiError.BadRequest(`что-то не так с переданным аргументом ${property}. Он не прошёл проверку ${typeGuard.name}`);
        }
    });
}
