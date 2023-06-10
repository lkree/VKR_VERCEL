import { ApiError } from '../../../../shared/lib/ApiError/index.js';
import { isObject, leftoversSort } from '../../../../shared/lib/helpers/index.js';
import { NON_PRODUCT_LEFTOVER } from '../../const/index.js';
const isCitiesProductsLeftoversArray = (d) => {
    if (!d.some(isObject))
        throw ApiError.BadRequest('один из cityProductsLeftovers не объект');
};
export const minimalLeftoversArrayAssertObject = { minimalLeftoversArray: isCitiesProductsLeftoversArray };
export const minimalLeftoversValidationObject = { minimalLeftover: isObject };
export const leftoversIntoMinimalLeftovers = (leftovers) => leftovers.map(leftover => ({
    cityName: leftover.cityName,
    products: leftover.leftovers.map(l => ({
        nomenclature: l.nomenclature,
        minimalLeftover: NON_PRODUCT_LEFTOVER,
        orderingCount: NON_PRODUCT_LEFTOVER,
    })),
}));
export const assignMinimalLeftovers = (oldOne, newOne) => newOne.reduce((result, newItem) => {
    const oldItem = result.find(it => it.cityName === newItem.cityName);
    if (oldItem) {
        oldItem.products = newItem.products.reduce((r, newProduct) => {
            const oldProduct = r.find(it => it.nomenclature === newProduct.nomenclature);
            if (!oldProduct)
                r.push(newProduct);
            return r;
        }, oldItem.products);
    }
    else {
        result.push(newItem);
    }
    return result;
}, oldOne);
export const transformMinimalLeftoversDBIntoFE = (minimalLeftovers) => ({
    cityName: minimalLeftovers.cityName,
    products: minimalLeftovers.products.map(product => ({
        nomenclature: product.nomenclature,
        minimalLeftover: product.minimalLeftover === NON_PRODUCT_LEFTOVER ? 0 : product.minimalLeftover,
        orderingCount: product.orderingCount === NON_PRODUCT_LEFTOVER ? 0 : product.orderingCount,
    })),
});
export const transformMinimalLeftoversArrayDBIntoFE = (minimalLeftoversArray) => leftoversSort(minimalLeftoversArray.map(transformMinimalLeftoversDBIntoFE));
