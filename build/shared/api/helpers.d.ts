/// <reference types="node" />
import { Headers } from 'node-fetch';
export declare const computeHeaders: (headers: Record<string, string>) => Headers;
export declare const computeGetParams: (params: Record<string, string>) => import("url").URLSearchParams;
export declare const computePathWithDomain: (domain: string) => (path: string) => string;
