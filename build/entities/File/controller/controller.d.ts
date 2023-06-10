import type { NextFunction, Request, Response } from 'express';
import { BaseController, Controller } from '../../../shared/lib/BaseController/index.js';
import { fileService } from '../api/index.js';
declare class FileController extends BaseController implements Controller<typeof fileService> {
    upload(req: Request, res: Response, __: NextFunction): Promise<void>;
    acceptFile(req: Request, res: Response, __: NextFunction): Promise<void>;
    deleteExisting(_: Request, res: Response, __: NextFunction): Promise<void>;
    getFileInfo(_: Request, res: Response, __: NextFunction): Promise<void>;
}
export declare const fileController: FileController;
export {};
