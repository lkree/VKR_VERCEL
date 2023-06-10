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
import type { MinimalLeftoversList } from '../../../entities/MinimalLeftovers/index.js';
import type { LeftoversList, Leftover, FileLeftoversList } from '../types/index.js';
import { LeftoversOverdraftList } from '../types/index.js';
declare class LeftoverService {
    writeAll(leftovers: LeftoversList): Promise<(import("mongoose").Document<unknown, {}, {
        cityName: string;
        leftovers: {
            nomenclature: string;
            unit: string;
            leftoverAtEnd: number;
            orderedCount?: number | undefined;
            vendorCode?: string | undefined;
            incoming?: number | undefined;
            consumption?: number | undefined;
            leftoverAtStart?: number | undefined;
        }[];
    }> & Omit<{
        cityName: string;
        leftovers: {
            nomenclature: string;
            unit: string;
            leftoverAtEnd: number;
            orderedCount?: number | undefined;
            vendorCode?: string | undefined;
            incoming?: number | undefined;
            consumption?: number | undefined;
            leftoverAtStart?: number | undefined;
        }[];
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    create(leftovers: LeftoversList): Promise<(import("mongoose").Document<unknown, {}, {
        cityName: string;
        leftovers: {
            nomenclature: string;
            unit: string;
            leftoverAtEnd: number;
            orderedCount?: number | undefined;
            vendorCode?: string | undefined;
            incoming?: number | undefined;
            consumption?: number | undefined;
            leftoverAtStart?: number | undefined;
        }[];
    }> & Omit<{
        cityName: string;
        leftovers: {
            nomenclature: string;
            unit: string;
            leftoverAtEnd: number;
            orderedCount?: number | undefined;
            vendorCode?: string | undefined;
            incoming?: number | undefined;
            consumption?: number | undefined;
            leftoverAtStart?: number | undefined;
        }[];
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    update(leftover: Leftover): Promise<(import("mongoose").Document<unknown, {}, {
        cityName: string;
        leftovers: {
            nomenclature: string;
            unit: string;
            leftoverAtEnd: number;
            orderedCount?: number | undefined;
            vendorCode?: string | undefined;
            incoming?: number | undefined;
            consumption?: number | undefined;
            leftoverAtStart?: number | undefined;
        }[];
    }> & Omit<{
        cityName: string;
        leftovers: {
            nomenclature: string;
            unit: string;
            leftoverAtEnd: number;
            orderedCount?: number | undefined;
            vendorCode?: string | undefined;
            incoming?: number | undefined;
            consumption?: number | undefined;
            leftoverAtStart?: number | undefined;
        }[];
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>) | null>;
    updateAll(leftovers: LeftoversList): Promise<((import("mongoose").Document<unknown, {}, {
        cityName: string;
        leftovers: {
            nomenclature: string;
            unit: string;
            leftoverAtEnd: number;
            orderedCount?: number | undefined;
            vendorCode?: string | undefined;
            incoming?: number | undefined;
            consumption?: number | undefined;
            leftoverAtStart?: number | undefined;
        }[];
    }> & Omit<{
        cityName: string;
        leftovers: {
            nomenclature: string;
            unit: string;
            leftoverAtEnd: number;
            orderedCount?: number | undefined;
            vendorCode?: string | undefined;
            incoming?: number | undefined;
            consumption?: number | undefined;
            leftoverAtStart?: number | undefined;
        }[];
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>) | null)[]>;
    deleteAll(): Promise<never[]>;
    deleteOne(leftover: Pick<Leftover, 'cityName'>): Promise<(import("mongoose").Document<unknown, {}, {
        cityName: string;
        leftovers: {
            nomenclature: string;
            unit: string;
            leftoverAtEnd: number;
            orderedCount?: number | undefined;
            vendorCode?: string | undefined;
            incoming?: number | undefined;
            consumption?: number | undefined;
            leftoverAtStart?: number | undefined;
        }[];
    }> & Omit<{
        cityName: string;
        leftovers: {
            nomenclature: string;
            unit: string;
            leftoverAtEnd: number;
            orderedCount?: number | undefined;
            vendorCode?: string | undefined;
            incoming?: number | undefined;
            consumption?: number | undefined;
            leftoverAtStart?: number | undefined;
        }[];
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    getUniqueProducts(): Promise<unknown[]>;
    getAll(city?: string): Promise<(import("mongoose").Document<unknown, {}, {
        cityName: string;
        leftovers: {
            nomenclature: string;
            unit: string;
            leftoverAtEnd: number;
            orderedCount?: number | undefined;
            vendorCode?: string | undefined;
            incoming?: number | undefined;
            consumption?: number | undefined;
            leftoverAtStart?: number | undefined;
        }[];
    }> & Omit<{
        cityName: string;
        leftovers: {
            nomenclature: string;
            unit: string;
            leftoverAtEnd: number;
            orderedCount?: number | undefined;
            vendorCode?: string | undefined;
            incoming?: number | undefined;
            consumption?: number | undefined;
            leftoverAtStart?: number | undefined;
        }[];
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    _update(existingLeftover: Leftover, newLeftover: Leftover): Promise<(import("mongoose").Document<unknown, {}, {
        cityName: string;
        leftovers: {
            nomenclature: string;
            unit: string;
            leftoverAtEnd: number;
            orderedCount?: number | undefined;
            vendorCode?: string | undefined;
            incoming?: number | undefined;
            consumption?: number | undefined;
            leftoverAtStart?: number | undefined;
        }[];
    }> & Omit<{
        cityName: string;
        leftovers: {
            nomenclature: string;
            unit: string;
            leftoverAtEnd: number;
            orderedCount?: number | undefined;
            vendorCode?: string | undefined;
            incoming?: number | undefined;
            consumption?: number | undefined;
            leftoverAtStart?: number | undefined;
        }[];
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>) | null>;
    _updateOrCreateAll(leftovers: LeftoversList): Promise<void[]>;
    _getLeftoversWithOverdraft(MLList: MinimalLeftoversList): Promise<LeftoversOverdraftList>;
    _saveLeftoversFromFile(data: FileLeftoversList): Promise<(import("mongoose").Document<unknown, {}, {
        cityName: string;
        leftovers: {
            nomenclature: string;
            unit: string;
            leftoverAtEnd: number;
            orderedCount?: number | undefined;
            vendorCode?: string | undefined;
            incoming?: number | undefined;
            consumption?: number | undefined;
            leftoverAtStart?: number | undefined;
        }[];
    }> & Omit<{
        cityName: string;
        leftovers: {
            nomenclature: string;
            unit: string;
            leftoverAtEnd: number;
            orderedCount?: number | undefined;
            vendorCode?: string | undefined;
            incoming?: number | undefined;
            consumption?: number | undefined;
            leftoverAtStart?: number | undefined;
        }[];
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
}
export declare const leftoverService: LeftoverService;
export {};
