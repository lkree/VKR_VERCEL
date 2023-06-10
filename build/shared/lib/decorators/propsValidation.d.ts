export type ValidationObject = Record<string, (d: any) => boolean>;
export declare function propsValidation(assertObject: ValidationObject, data: unknown): asserts data is {
    [key in keyof typeof assertObject]: unknown;
};
