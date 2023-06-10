import { AccessLevel } from '../../../shared/const/index.js';
import type { MethodsMap } from '../../../shared/lib/ts/index.js';
import type { userController } from '../controller/index.js';
export declare const Methods: MethodsMap<typeof userController>;
export declare const DEFAULT_CREATE_USER_LEVER = AccessLevel.User;
