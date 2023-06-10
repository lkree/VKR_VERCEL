import { ApiError } from '../../../../shared/lib/ApiError/index.js';
import { isArray, isObject } from '../../../../shared/lib/helpers/index.js';
const DEFAULT_ERROR = 'В переданных остатках есть ошибки';
export function assertLeftover(d) {
    if (isObject(d) && 'cityName' in d && 'leftovers' in d) {
        const { leftovers } = d;
        if (isArray(leftovers)) {
            const leftover = leftovers[0];
            if (isObject(leftover) && 'nomenclature' in leftover) {
                return;
            }
        }
    }
    throw ApiError.BadRequest(DEFAULT_ERROR);
}
export function assertLeftovers(d) {
    if (isArray(d)) {
        d.forEach(assertLeftover);
        return;
    }
    throw ApiError.BadRequest(DEFAULT_ERROR);
}
