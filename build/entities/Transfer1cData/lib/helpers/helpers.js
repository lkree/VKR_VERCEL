import lodash from 'lodash';
import { isString } from '../../../../shared/lib/helpers/index.js';
export const computeCityKey = (productName) => {
    const indexCityStarts = productName.lastIndexOf('(');
    const indexCityEnds = productName.lastIndexOf(')');
    if (indexCityStarts >= 0 && indexCityEnds >= 0) {
        return productName.slice(indexCityStarts + 1, indexCityEnds).toLowerCase();
    }
    return null;
};
export const computeProductName = (productNameWithCity, cityKey) => {
    if (!isString(cityKey) || !isString(productNameWithCity))
        return productNameWithCity;
    const indexOfCityStarts = productNameWithCity.lastIndexOf(lodash.upperFirst(cityKey));
    return (productNameWithCity.slice(0, indexOfCityStarts - 2) +
        productNameWithCity.slice(indexOfCityStarts + cityKey.length + 1)).trim();
};
