export const isObject = (value) => Boolean(Boolean(value) && typeof value === 'object' && !Array.isArray(value));
export const isArray = (value) => Boolean(value && Array.isArray(value));
export const isString = (value) => typeof value === 'string';
export const isNumber = (value) => typeof value === 'number';
export const isPrimitive = (value) => ['boolean', 'number', 'string'].includes(typeof value);
