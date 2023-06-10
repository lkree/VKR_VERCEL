import express from 'express';
import * as fs from 'fs';
import lodash from 'lodash';
import path from 'path';
import { NUMBER_SEPARATOR } from '../../../shared/const/index.js';
import { EMAIL_REGEX } from './const.js';
import { isPrimitive, isObject, isArray, isString, isNumber } from './typeGuards.js';
export const forEachValue = (data, callback) => isPrimitive(data)
    ? callback(data)
    : Object.entries(data).reduce((r, [name, value]) => {
        r[name] = isObject(value)
            ? forEachValue(value, callback)
            : isArray(value)
                ? value.map(c => forEachValue(c, callback))
                : callback(value);
        return r;
    }, data);
export const forEachKey = (data, callback) => Object.entries(data).reduce((r, [name, value]) => {
    r[callback(name)] = isObject(value) || isArray(value) ? forEachKey(value, callback) : value;
    return r;
}, (isObject(data) ? {} : []));
export const deepClone = (d) => JSON.parse(JSON.stringify(d));
export const computeWebSocketSendData = (d) => JSON.stringify(d);
export const computeDirName = (relativePath) => path.resolve(path.dirname('.') + relativePath);
export const loadJSON = (relativePath) => JSON.parse(String(fs.readFileSync(computeDirName(relativePath))));
const baseRoutingHandler = (entryPoint) => (_, res) => res.sendFile(entryPoint);
export const prepareBaseRouting = (app) => {
    const uris = ['/', '/login', '/admin', '/logout'];
    const baseRoute = baseRoutingHandler(computeDirName('/public/index.html'));
    app.use(express.static(computeDirName('/assets')));
    app.use(express.static(computeDirName('/public')));
    uris.forEach(uri => app.get(uri, baseRoute));
};
// todo whitespaces or another characters
export const removeWhiteSpaces = (s) => [...s].filter(c => c.trim()).join('');
export const computeIntegerFromString = (s) => {
    if (isNumber(s))
        return s;
    if (!isString(s))
        return null;
    const [firstString, secondString] = s.split(NUMBER_SEPARATOR);
    if (!firstString || !secondString)
        return s;
    const firstPart = +removeWhiteSpaces(firstString);
    const secondPart = +removeWhiteSpaces(secondString);
    if (isFinite(firstPart) && isFinite(secondPart))
        return firstPart + secondPart / +`1e${secondString.length}`;
    return s;
};
export const transformObjectWithStringsToNumbers = (d) => forEachValue(d, value => (isString(value) ? computeIntegerFromString(value) : value));
export const toSnakeCase = (data) => forEachKey(data, lodash.snakeCase);
export const toCamelCase = (data) => forEachKey(data, lodash.camelCase);
export const isEqual = (a, b) => JSON.parse(JSON.stringify(a)) === JSON.parse(JSON.stringify(b));
export const checkEmailValidity = (email) => EMAIL_REGEX.test(email);
export const alphabeticalSort = (a, b) => {
    const aName = a.toLowerCase();
    const bName = b.toLowerCase();
    if (aName < bName)
        return -1;
    if (aName > bName)
        return 1;
    return 0;
};
