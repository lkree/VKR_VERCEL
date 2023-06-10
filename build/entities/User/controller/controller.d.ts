import type { NextFunction, Request, Response } from 'express';
import { BaseController, Controller } from '../../../shared/lib/BaseController/index.js';
import { userService } from '../api/index.js';
declare class UserController extends BaseController implements Controller<typeof userService> {
    registration(req: Request, res: Response, __: NextFunction): Promise<void>;
    login(req: Request, res: Response, __: NextFunction): Promise<void>;
    session(req: Request, res: Response, __: NextFunction): void;
    logout(req: Request, res: Response, __: NextFunction): Promise<void>;
    refresh(req: Request, res: Response, __: NextFunction): Promise<void>;
    update(req: Request, res: Response, __: NextFunction): Promise<void>;
    delete(req: Request, res: Response, __: NextFunction): Promise<void>;
    getAll(_: Request, res: Response, __: NextFunction): Promise<void>;
}
export declare const userController: UserController;
export {};
