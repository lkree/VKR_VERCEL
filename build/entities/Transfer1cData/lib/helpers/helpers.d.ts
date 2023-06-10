import type { Nullable } from '../../../../shared/lib/ts/index.js';
import type { CitiesKeys } from '../../types/index.js';
export declare const computeCityKey: (productName: string) => Nullable<CitiesKeys | string>;
export declare const computeProductName: (productNameWithCity: string, cityKey: ReturnType<typeof computeCityKey>) => string;
