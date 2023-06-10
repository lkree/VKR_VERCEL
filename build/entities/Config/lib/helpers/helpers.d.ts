import type { Config } from '../../types/index.js';
export declare const transformBDConfigToFE: (config?: Config) => {
    user: string;
    port: number;
    secure: boolean;
    host: string;
} | {
    user?: undefined;
    port?: undefined;
    secure?: undefined;
    host?: undefined;
};
export declare const emailSettingsValidationObject: {
    $$FULL_VALUE: (d: unknown) => boolean;
};
