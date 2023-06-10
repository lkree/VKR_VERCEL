import { Headers } from 'node-fetch';
export const computeHeaders = (headers) => Object.entries(headers).reduce((result, [key, value]) => {
    result.append(key, value);
    return result;
}, new Headers());
export const computeGetParams = (params) => Object.entries(params).reduce((result, [key, value]) => {
    result.append(key, value);
    return result;
}, new URLSearchParams());
export const computePathWithDomain = (domain) => (path) => `/${domain}/${path}/`;
