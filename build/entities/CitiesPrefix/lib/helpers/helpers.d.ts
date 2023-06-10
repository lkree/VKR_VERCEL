import type { CitiesPrefix } from '../../types/index.js';
export declare const cityPrefixValidationObject: {
    prefix: (value: unknown) => value is string;
};
export declare const cityNamePrefixValidationObject: {
    prefix: (value: unknown) => value is string;
    name: (value: unknown) => value is string;
};
export declare const citiesPrefixDBIntoFE: ({ name, prefix }: CitiesPrefix) => [string, string];
export declare const citiesPrefixArrayDBIntoFE: (d: Array<CitiesPrefix>) => [string, string][];
