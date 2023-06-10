import _ from 'lodash';
import { SHARED_KEY } from '../../../shared/const/index.js';
import { isArray, isString } from '../../../shared/lib/helpers/index.js';
import { NOMENCLATURE_FIELD_NAME } from '../const/index.js';
import { computeCityKey, computeProductName, isCityKey } from '../lib/helpers/index.js';
const isProductsEqual = (a, b) => a[NOMENCLATURE_FIELD_NAME] === b[NOMENCLATURE_FIELD_NAME];
export const Transfer1cData = (data, citiesSettings) => {
    if (!isArray(data))
        return null;
    return Object.entries(data.reduce((result, oneLineData) => {
        const productNameWithCity = oneLineData[NOMENCLATURE_FIELD_NAME];
        if (!productNameWithCity || !isString(productNameWithCity))
            return result;
        const key = computeCityKey(productNameWithCity);
        const productName = computeProductName(productNameWithCity, key);
        const resultData = {
            ...oneLineData,
            [NOMENCLATURE_FIELD_NAME]: _.capitalize(productName.trim().toLowerCase()),
        };
        const cityKey = isCityKey(key, citiesSettings) ? citiesSettings[key] : null;
        const findHelper = isProductsEqual.bind(null, resultData);
        if (cityKey) {
            if (!result[cityKey]?.find(findHelper)) {
                result[cityKey]?.push(resultData);
            }
        }
        else if (!result[SHARED_KEY].find(findHelper)) {
            result[SHARED_KEY].push(resultData);
        }
        return result;
    }, Object.values(citiesSettings).reduce((r, v) => {
        r[v] = [];
        return r;
    }, { [SHARED_KEY]: [] }))).reduce((r, [key, value]) => {
        if (value.length)
            r[key] = value;
        return r;
    }, {});
};
