import _ from 'lodash';
import { leftoversSort } from '../../../../shared/lib/helpers/index.js';
import { BASE_ORDERED_COUNT, MINIMAL_LEFTOVER_AT_END } from '../../const/index.js';
export const computeHaveToOrderField = (MLProduct, leftoverAtEnd) => (!MLProduct?.minimalLeftover
    ? BASE_ORDERED_COUNT
    : MLProduct.minimalLeftover >= leftoverAtEnd
        ? MLProduct?.orderingCount
        : BASE_ORDERED_COUNT) ?? BASE_ORDERED_COUNT;
export const fileModelIntoDB = (cityName, model) => ({
    cityName,
    leftovers: model.map(l => ({
        nomenclature: l.Номенклатура,
        unit: l['Ед. изм.'],
        leftoverAtEnd: l['Конечный остаток'] ?? MINIMAL_LEFTOVER_AT_END,
        ...(l['Начальный остаток'] && { leftoverAtStart: l['Начальный остаток'] }),
        ...(l['Артикул'] && { vendorCode: l['Артикул'] }),
        ...(l['Приход'] && { incoming: l['Приход'] }),
        ...(l['Расход'] && { consumption: l['Расход'] }),
    })),
});
export const transformBELeftoverIntoFE = ([{ cityName, leftovers }, minimalLeftover]) => ({
    cityName,
    leftovers: leftovers.map(l => ({
        nomenclature: l.nomenclature,
        unit: l.unit,
        orderedCount: l.orderedCount ?? BASE_ORDERED_COUNT,
        leftoverAtEnd: l.leftoverAtEnd,
        haveToOrder: computeHaveToOrderField(minimalLeftover?.products.find(it => it.nomenclature === l.nomenclature), l.leftoverAtEnd),
    })),
});
export const fileLeftoversToDB = (leftovers) => Object.entries(leftovers).map(([key, value]) => fileModelIntoDB(key, value));
export const transformBELeftoversListIntoFE = ([leftoversList, minimalLeftoversList]) => leftoversSort(leftoversList.map(leftover => transformBELeftoverIntoFE([leftover, minimalLeftoversList.find(mll => mll.cityName === leftover.cityName)])));
export const transformFELeftoverIntoBE = ({ leftovers, cityName }) => ({
    cityName,
    leftovers: leftovers.map(l => ({
        nomenclature: l.nomenclature,
        unit: l.unit,
        orderedCount: l.orderedCount ?? BASE_ORDERED_COUNT,
        leftoverAtEnd: l.leftoverAtEnd,
    })),
});
export const transformFELeftoversListIntoBE = (leftoversFEList) => leftoversFEList.map(transformFELeftoverIntoBE);
export const assignLeftovers = (previous, next) => ({
    cityName: previous.cityName,
    leftovers: next.leftovers.reduce((r, nextOne, i) => {
        const existingOne = r.find(it => it.nomenclature === nextOne.nomenclature);
        if (existingOne) {
            existingOne.leftoverAtEnd = nextOne.leftoverAtEnd;
            r[i] = _.extend(existingOne, nextOne);
        }
        return r;
    }, previous.leftovers),
});
