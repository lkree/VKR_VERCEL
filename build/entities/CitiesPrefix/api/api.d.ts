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
import type { CitiesPrefix } from '../types/index.js';
declare class CitiesPrefixService {
    add({ name, prefix }: CitiesPrefix): Promise<(import("mongoose").Document<unknown, {}, {
        name: string;
        prefix: string;
    }> & Omit<{
        name: string;
        prefix: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    delete(item: Pick<CitiesPrefix, 'prefix'>): Promise<(import("mongoose").Document<unknown, {}, {
        name: string;
        prefix: string;
    }> & Omit<{
        name: string;
        prefix: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    getAll(): Promise<(import("mongoose").Document<unknown, {}, {
        name: string;
        prefix: string;
    }> & Omit<{
        name: string;
        prefix: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    _getCitiesSettings(): Promise<{}>;
}
export declare const citiesPrefixService: CitiesPrefixService;
export {};
