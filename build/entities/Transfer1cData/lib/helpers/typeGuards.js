import { isString } from '../../../../shared/lib/helpers/index.js';
export const isCityKey = (v, citiesSettings) => Boolean(v && isString(v) && v in citiesSettings);
