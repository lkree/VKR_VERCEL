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
import type { LeftoversList } from '../../../entities/Leftovers/index.js';
import { BaseController, Controller } from '../../../shared/lib/BaseController/index.js';
import { minimalLeftoversService } from '../api/index.js';
declare class MinimalLeftoversController extends BaseController implements Controller<typeof minimalLeftoversService> {
    writeAll(req: Request, res: Response, __: NextFunction): Promise<void>;
    write(req: Request, res: Response, __: NextFunction): Promise<void>;
    delete(req: Request, res: Response, __: NextFunction): Promise<void>;
    deleteAll(_: Request, res: Response, __: NextFunction): Promise<void>;
    getAll(_: Request, res: Response, __: NextFunction): Promise<void>;
    _updateAll(leftovers: LeftoversList): Promise<(import("mongoose").Document<unknown, {}, {
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
}
export declare const minimalLeftoversController: MinimalLeftoversController;
export {};
