import type { NextFunction, Request, Response } from 'express';
import { BaseController, Controller } from '../../../shared/lib/BaseController/index.js';
import { citiesPrefixService } from '../api/index.js';
declare class CitiesPrefixController extends BaseController implements Controller<typeof citiesPrefixService> {
    add(req: Request, res: Response, __: NextFunction): Promise<void>;
    delete(req: Request, res: Response, __: NextFunction): Promise<void>;
    getAll(_: Request, res: Response, __: NextFunction): Promise<void>;
}
export declare const citiesPrefixController: CitiesPrefixController;
export {};
