import { AnyFunction } from '../../shared/lib/ts/index.js';
import type { Config } from './types.js';
export declare const loadConfig: () => Config;
export declare const saveConfig: (config: Config, cb?: AnyFunction) => void;
