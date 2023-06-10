import type { GetMongooseScheme } from '../../../shared/lib/ts/index.js';
import type { citiesPrefixModel } from '../model/index.js';
export type CitiesPrefix = GetMongooseScheme<typeof citiesPrefixModel>;
