export declare const isObject: <T>(value: T) => value is Record<any, any>;
export declare const isArray: (value: unknown) => value is unknown[];
export declare const isString: (value: unknown) => value is string;
export declare const isNumber: (value: unknown) => value is number;
export declare const isPrimitive: (value: unknown) => value is string | number | boolean;
