export type AssertObject = Record<string, (d: any) => void>;
export declare function assert(assertObject: AssertObject, data: unknown): asserts data is {
    [key in keyof typeof assertObject]: unknown;
};
