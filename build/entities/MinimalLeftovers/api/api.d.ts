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
import type { MinimalLeftover, MinimalLeftoversList } from '../types/index.js';
declare class MinimalLeftoversService {
    writeAll(minimalLeftoversArray: MinimalLeftoversList): Promise<(import("mongoose").Document<unknown, {}, {
        cityName: string;
        products: {
            nomenclature: string;
            minimalLeftover?: number | undefined;
            orderingCount?: number | undefined;
        }[];
    }> & Omit<{
        cityName: string;
        products: {
            nomenclature: string;
            minimalLeftover?: number | undefined;
            orderingCount?: number | undefined;
        }[];
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    write(minimalLeftover: MinimalLeftover): Promise<import("mongoose").Document<unknown, {}, {
        cityName: string;
        products: {
            nomenclature: string;
            minimalLeftover?: number | undefined;
            orderingCount?: number | undefined;
        }[];
    }> & Omit<{
        cityName: string;
        products: {
            nomenclature: string;
            minimalLeftover?: number | undefined;
            orderingCount?: number | undefined;
        }[];
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    delete(minimalLeftover: MinimalLeftover): Promise<null>;
    deleteAll(): Promise<never[]>;
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
        cityName: string;
        products: {
            nomenclature: string;
            minimalLeftover?: number | undefined;
            orderingCount?: number | undefined;
        }[];
    }> & Omit<{
        cityName: string;
        products: {
            nomenclature: string;
            minimalLeftover?: number | undefined;
            orderingCount?: number | undefined;
        }[];
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[], import("mongoose").Document<unknown, {}, {
        cityName: string;
        products: {
            nomenclature: string;
            minimalLeftover?: number | undefined;
            orderingCount?: number | undefined;
        }[];
    }> & Omit<{
        cityName: string;
        products: {
            nomenclature: string;
            minimalLeftover?: number | undefined;
            orderingCount?: number | undefined;
        }[];
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, {
        cityName: string;
        products: {
            nomenclature: string;
            minimalLeftover?: number | undefined;
            orderingCount?: number | undefined;
        }[];
    }>;
    _get(minimalLeftover: Pick<MinimalLeftover, 'cityName'>): Promise<{
        cityName: string;
        products: {
            nomenclature: string;
            minimalLeftover: number | undefined;
            orderingCount: number | undefined;
        }[];
    } | null>;
    _getAll(): Promise<{
        cityName: string;
        products: {
            nomenclature: string;
            minimalLeftover: number | undefined;
            orderingCount: number | undefined;
        }[];
    }[]>;
}
export declare const minimalLeftoversService: MinimalLeftoversService;
export {};
