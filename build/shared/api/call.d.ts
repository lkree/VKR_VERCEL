/// <reference types="node" />
export declare const call: <T>(resultType: 'text' | 'json', url: URL | import("node-fetch").RequestInfo, init?: import("node-fetch").RequestInit | undefined) => Promise<T>;
