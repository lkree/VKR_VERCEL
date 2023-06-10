import { ReactEventHandler } from 'react';

import { noop } from 'lodash';

import { isPrimitive, isObject, isArray } from './typeGuards';

const EMAIL_REGEX = /.+@.+\..+/;

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const compose =
  <T extends (...args: any[]) => any>(...fns: T[]) =>
  <K extends (...args: any[]) => any>(fn: K): K =>
    fns.reduce((result, current) => current(result), fn);

type Value<T> = T extends boolean | number | string
  ? T
  : T extends unknown[] | Record<string, any>
  ? T[keyof T]
  : never;

type ReturnValue<T, K> = T extends boolean | number | string
  ? K
  : T extends unknown[] | Record<string, any>
  ? { [Key in keyof T]: K }
  : never;

export const forEachValue = <T, K extends (value: Value<T>) => any>(
  data: T,
  callback: K
): ReturnValue<T, ReturnType<K>> =>
  isPrimitive(data)
    ? (callback(data as Value<T>) as ReturnValue<T, ReturnType<K>>)
    : Object.entries(data as object).reduce((r, [name, value]) => {
        r[name as keyof typeof r] = isObject(value)
          ? forEachValue(value, callback)
          : Array.isArray(value)
          ? value.map(c => forEachValue(c, callback))
          : callback(value as Value<T>);

        return r;
      }, data as ReturnValue<T, ReturnType<K>>);

export const forEachKey = <T extends Record<string, any>>(
  data: T,
  callback: (key: string) => string
): Record<ReturnType<typeof callback>, T[keyof T]> =>
  Object.entries(data).reduce((r, [name, value]) => {
    r[callback(name)] = isObject(value) || isArray(value) ? forEachKey(value, callback) : value;

    return r;
  }, (isObject(data) ? {} : []) as Record<ReturnType<typeof callback>, T[keyof T]>);

export const deepClone = <T>(d: T): T => JSON.parse(JSON.stringify(d));

export const stopPropagation: ReactEventHandler = e => e.stopPropagation();

export const preventDefault: ReactEventHandler = e => e.preventDefault();

export const checkEmailValidity = (email: string) => EMAIL_REGEX.test(email);

export const isEqual = <T, K>(a: T, b: K) => JSON.stringify(a) === JSON.stringify(b);

export const getNonFalsyObject = <T extends Record<string, any>>(d: T) =>
  Object.entries(d).reduce((r, [key, value]) => {
    if (value) r[key as keyof T] = value;

    return r;
  }, {} as T);

export const alphabeticSortHelper = (a: string, b: string) => {
  if (a < b) return -1;
  if (a > b) return 1;

  return 0;
};

export const sortObject = <T extends Record<string, any>>(o: T) =>
  Object.keys(o)
    .sort(alphabeticSortHelper)
    .reduce((r, key) => {
      r[key as keyof T] = o[key];

      return r;
    }, {} as T);

export const getPromiseAndResRej = <T = void>() => {
  let _resolve: (d: T) => void = noop;
  let _reject: (d: T) => void = noop;

  return {
    promise: new Promise<T>((resolve, reject) => {
      _resolve = resolve;
      _reject = reject;
    }),
    resolve: _resolve,
    reject: _reject,
  };
};
