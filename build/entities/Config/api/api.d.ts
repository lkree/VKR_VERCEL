/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import type { Config } from '../types/index.js';
declare class ConfigService {
    writeEmailSettings(config: Required<Config>): Promise<(import("mongoose").Document<unknown, {}, {
        emailSettings?: {
            user: string;
            password: string;
            host: string;
            port: number;
            secure: boolean;
        } | undefined;
    }> & Omit<{
        emailSettings?: {
            user: string;
            password: string;
            host: string;
            port: number;
            secure: boolean;
        } | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>) | null>;
    getEmailSettings(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
        emailSettings?: {
            user: string;
            password: string;
            host: string;
            port: number;
            secure: boolean;
        } | undefined;
    }> & Omit<{
        emailSettings?: {
            user: string;
            password: string;
            host: string;
            port: number;
            secure: boolean;
        } | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>) | null, import("mongoose").Document<unknown, {}, {
        emailSettings?: {
            user: string;
            password: string;
            host: string;
            port: number;
            secure: boolean;
        } | undefined;
    }> & Omit<{
        emailSettings?: {
            user: string;
            password: string;
            host: string;
            port: number;
            secure: boolean;
        } | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, {
        emailSettings?: {
            user: string;
            password: string;
            host: string;
            port: number;
            secure: boolean;
        } | undefined;
    }>;
    _getFullEmailSettings(): Promise<{
        host: string;
        port: number;
        secure: boolean;
        auth: {
            user: string;
            pass: string;
        };
    } | {
        host?: undefined;
        port?: undefined;
        secure?: undefined;
        auth?: undefined;
    }>;
}
export declare const configService: ConfigService;
export {};
