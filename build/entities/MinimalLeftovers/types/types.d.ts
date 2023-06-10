import type { GetMongooseScheme } from '../../../shared/lib/ts/index.js';
import type { minimalLeftoversModel } from '../model/index.js';
export type MinimalLeftover = GetMongooseScheme<typeof minimalLeftoversModel>;
export type MinimalLeftoversList = Array<MinimalLeftover>;
export type MinimalLeftoverProduct = MinimalLeftover['products'][number];
