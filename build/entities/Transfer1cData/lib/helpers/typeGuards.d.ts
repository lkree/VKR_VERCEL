import type { CitiesSettings } from '../../types/index.js';
export declare const isCityKey: <T extends CitiesSettings>(v: unknown, citiesSettings: T) => v is keyof T;
