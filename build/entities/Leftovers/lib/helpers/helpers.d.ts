import type { MinimalLeftover, MinimalLeftoversList, MinimalLeftoverProduct } from '../../../../entities/MinimalLeftovers/index.js';
import type { Voidable } from '../../../../shared/lib/ts/index.js';
import type { FileLeftoversList, Leftover, LeftoversList, FileLeftoverFilling, LeftoverFE, LeftoversFEList } from '../../types/index.js';
export declare const computeHaveToOrderField: (MLProduct: Voidable<MinimalLeftoverProduct>, leftoverAtEnd: number) => number;
export declare const fileModelIntoDB: (cityName: string, model: Array<FileLeftoverFilling>) => Leftover;
export declare const transformBELeftoverIntoFE: ([{ cityName, leftovers }, minimalLeftover]: [
    Leftover,
    Voidable<MinimalLeftover>
]) => LeftoverFE;
export declare const fileLeftoversToDB: (leftovers: FileLeftoversList) => {
    cityName: string;
    leftovers: {
        nomenclature: string;
        unit: string;
        leftoverAtEnd: number;
        orderedCount?: number | undefined;
        vendorCode?: string | undefined;
        incoming?: number | undefined;
        consumption?: number | undefined;
        leftoverAtStart?: number | undefined;
    }[];
}[];
export declare const transformBELeftoversListIntoFE: ([leftoversList, minimalLeftoversList]: [
    LeftoversList,
    MinimalLeftoversList
]) => LeftoversFEList;
export declare const transformFELeftoverIntoBE: ({ leftovers, cityName }: LeftoverFE) => Leftover;
export declare const transformFELeftoversListIntoBE: (leftoversFEList: LeftoversFEList) => LeftoversList;
export declare const assignLeftovers: (previous: Leftover, next: Leftover) => Leftover;
