import { alphabeticalSort, isString } from '../../../../shared/lib/helpers/index.js';
export const cityPrefixValidationObject = { prefix: isString };
export const cityNamePrefixValidationObject = { name: isString, ...cityPrefixValidationObject };
export const citiesPrefixDBIntoFE = ({ name, prefix }) => [name, prefix];
export const citiesPrefixArrayDBIntoFE = (d) => d.map(citiesPrefixDBIntoFE).sort((a, b) => alphabeticalSort(a[0], b[0]));
