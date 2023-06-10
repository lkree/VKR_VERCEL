export declare const compose: <T extends (...args: any[]) => any>(...fns: T[]) => <K extends (...args: any[]) => any>(fn: K) => K;
