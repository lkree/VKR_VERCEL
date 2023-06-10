import type { Nullable, CreateRequestResponseData } from '~/shared/lib/ts';

import type { MinimalLeftovers, MinimalLeftoversList } from '../types';

export type GetMinimalLeftoversList = CreateRequestResponseData<void, MinimalLeftoversList>;

export type WriteMinimalLeftovers = CreateRequestResponseData<MinimalLeftovers, Nullable<MinimalLeftovers>>;

export type WriteMinimalLeftoversList = CreateRequestResponseData<MinimalLeftoversList, MinimalLeftoversList>;

export type DeleteMinimalLeftoversList = CreateRequestResponseData<void, MinimalLeftoversList>;
