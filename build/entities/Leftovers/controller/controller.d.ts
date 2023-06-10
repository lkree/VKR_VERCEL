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
import type { NextFunction, Request, Response } from 'express';
import { BaseController, Controller } from '../../../shared/lib/BaseController/index.js';
import { leftoverService } from '../api/index.js';
import type { FileLeftoversList } from '../types/index.js';
declare class LeftoverController extends BaseController implements Controller<typeof leftoverService> {
    create(req: Request, res: Response, __: NextFunction): Promise<void>;
    writeAll(req: Request, res: Response, __: NextFunction): Promise<void>;
    update(req: Request, res: Response, __: NextFunction): Promise<void>;
    updateAll(req: Request, res: Response, __: NextFunction): Promise<void>;
    deleteOne(req: Request, res: Response, __: NextFunction): Promise<void>;
    deleteAll(_: Request, res: Response, __: NextFunction): Promise<void>;
    getUniqueProducts(_: Request, res: Response, __: NextFunction): Promise<void>;
    getAll(req: Request, res: Response, __: NextFunction): Promise<void>;
    _getAll(): Promise<(import("mongoose").Document<unknown, {}, {
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
    _getLeftoversWithOverdraft(): Promise<import("../types/index.js").LeftoversOverdraftList>;
    _saveLeftoversFromFile(fileLeftoversList: FileLeftoversList): Promise<(import("mongoose").Document<unknown, {}, {
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
export declare const leftoverController: LeftoverController;
export {};
