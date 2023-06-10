import { Express } from 'express';
type Value<T> = T extends boolean | number | string ? T : T extends unknown[] | Record<string, any> ? T[keyof T] : never;
type ReturnValue<T, K> = T extends boolean | number | string ? K : T extends unknown[] | Record<string, any> ? {
    [Key in keyof T]: K;
} : never;
export declare const forEachValue: <T, K extends (value: Value<T>) => any>(data: T, callback: K) => ReturnValue<T, ReturnType<K>>;
export declare const forEachKey: <T extends Record<string, any>>(data: T, callback: (key: string) => string) => Record<string, T[keyof T]>;
export declare const deepClone: <T>(d: T) => T;
export declare const computeWebSocketSendData: (d: string | number | boolean | object | symbol | [
]) => string;
export declare const computeDirName: (relativePath: string) => string;
export declare const loadJSON: <T>(relativePath: string) => T;
export declare const prepareBaseRouting: (app: Express) => void;
export declare const removeWhiteSpaces: (s: string) => string;
export declare const computeIntegerFromString: (s: unknown) => string | number | null;
export declare const transformObjectWithStringsToNumbers: (d: Record<string, any>) => {
    [x: string]: any;
};
export declare const toSnakeCase: <T extends Record<string, any>>(data: T) => T;
export declare const toCamelCase: <T extends Record<string, any>>(data: T) => T;
export declare const isEqual: <T, K>(a: T, b: K) => boolean;
export declare const checkEmailValidity: (email: string) => boolean;
export declare const alphabeticalSort: (a: string, b: string) => 1 | -1 | 0;
export {};
