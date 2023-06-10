import type { GetMongooseScheme } from '../../../shared/lib/ts/index.js';
import type { tokenModel } from '../model/index.js';
export type Tokens = GetMongooseScheme<typeof tokenModel>;
