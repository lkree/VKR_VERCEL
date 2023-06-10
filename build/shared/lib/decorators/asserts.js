import { ApiError } from '../../../shared/lib/ApiError/index.js';
import { isObject } from '../../../shared/lib/helpers/index.js';
import { FULL_VALUE } from './const.js';
export function assert(assertObject, data) {
    if (!isObject(data))
        throw ApiError.BadRequest('не переданы аргументы');
    Object.entries(assertObject).forEach(([property, typeGuard]) => typeGuard(property === FULL_VALUE ? data : data[property]));
}
