import type { GetMongooseScheme } from '../../../shared/lib/ts/index.js';
import type { userModel } from '../model/index.js';
export type DBUser = GetMongooseScheme<typeof userModel>;
export type FEUser = Omit<DBUser, 'password'>;
