import type { NextFunction, Request, Response } from 'express';
import { BaseController, Controller } from '../../../shared/lib/BaseController/index.js';
import { configService } from '../api/index.js';
declare class ConfigController extends BaseController implements Controller<typeof configService> {
    writeEmailSettings(req: Request, res: Response, __: NextFunction): Promise<void>;
    getEmailSettings(_: Request, res: Response, __: NextFunction): Promise<void>;
}
export declare const configController: ConfigController;
export {};
