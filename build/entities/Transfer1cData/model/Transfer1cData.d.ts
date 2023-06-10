import type { CitiesSettings } from '../types/index.js';
export declare const Transfer1cData: <T extends CitiesSettings>(data: Array<Record<string, string | number>>, citiesSettings: T) => Record<string, Record<string, string>[]> | null;
