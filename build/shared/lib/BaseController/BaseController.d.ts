import type { RequestParamHandler } from 'express-serve-static-core';
import type { ValidateMethodName } from '../../../shared/lib/ts/index.js';
export type Controller<T extends Record<string, any>> = Record<ValidateMethodName<keyof T>, RequestParamHandler>;
declare abstract class AbstractController {
}
export declare const BaseController: new () => AbstractController;
export {};
