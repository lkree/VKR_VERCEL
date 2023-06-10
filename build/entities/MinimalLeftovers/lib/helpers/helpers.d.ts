import type { LeftoversList } from '../../../../entities/Leftovers/types/index.js';
import type { MinimalLeftoversList } from '../../types/index.js';
import { MinimalLeftover } from '../../types/index.js';
export declare const minimalLeftoversArrayAssertObject: {
    minimalLeftoversArray: (d: Array<unknown>) => void;
};
export declare const minimalLeftoversValidationObject: {
    minimalLeftover: <T>(value: T) => value is Record<any, any>;
};
export declare const leftoversIntoMinimalLeftovers: (leftovers: LeftoversList) => MinimalLeftoversList;
export declare const assignMinimalLeftovers: (oldOne: MinimalLeftoversList, newOne: MinimalLeftoversList) => MinimalLeftoversList;
export declare const transformMinimalLeftoversDBIntoFE: (minimalLeftovers: MinimalLeftover) => {
    cityName: string;
    products: {
        nomenclature: string;
        minimalLeftover: number | undefined;
        orderingCount: number | undefined;
    }[];
};
export declare const transformMinimalLeftoversArrayDBIntoFE: (minimalLeftoversArray: Array<MinimalLeftover>) => {
    cityName: string;
    products: {
        nomenclature: string;
        minimalLeftover: number | undefined;
        orderingCount: number | undefined;
    }[];
}[];
