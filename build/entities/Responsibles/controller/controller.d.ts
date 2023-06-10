import type { NextFunction, Request, Response } from 'express';
import { BaseController, Controller } from '../../../shared/lib/BaseController/index.js';
import { responsiblePersonsService } from '../api/index.js';
declare class ResponsiblePersonsController extends BaseController implements Controller<typeof responsiblePersonsService> {
    write(req: Request, res: Response, __: NextFunction): Promise<void>;
    getAll(_: Request, res: Response, __: NextFunction): Promise<void>;
    _getUsersEmailByCity(cities: Array<string>): Promise<{
        cityName: string;
        email: string | null;
    }[]>;
}
export declare const responsiblePersonsController: ResponsiblePersonsController;
export {};
