import fetch from 'node-fetch';
import { isArray, isObject, toCamelCase } from '../../shared/lib/helpers/index.js';
export const call = (resultType, ...props) => fetch(...props)
    .then(d => d[resultType]())
    .then(result => (resultType === 'text' ? result : isObject(result) || isArray(result) ? toCamelCase(result) : result));
