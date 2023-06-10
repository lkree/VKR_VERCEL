import type { NextFunction, Request, Response } from 'express';
import type { LeftoversOverdraftList } from '../../../entities/Leftovers/types/index.js';
import { BaseController, Controller } from '../../../shared/lib/BaseController/index.js';
import { Nullable } from '../../../shared/lib/ts/index.js';
import { emailSenderService } from '../api/index.js';
declare class EmailSenderController extends BaseController implements Controller<typeof emailSenderService> {
    sendTestEmail(req: Request, res: Response, __: NextFunction): Promise<void>;
    _sendOverdraftEmails(leftoversOverdraftList: LeftoversOverdraftList, emailList: Array<{
        cityName: string;
        email: Nullable<string>;
    }>): Promise<void>;
}
export declare const emailSenderController: EmailSenderController;
export {};
