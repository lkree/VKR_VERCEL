import type { CreateRequestResponseData } from '~/shared/lib/ts';

import type { Leftover, LeftoversList } from '../types';

export type GetUniqueProducts = CreateRequestResponseData<void, Array<string>>;

export type GetLeftoversList = CreateRequestResponseData<void, LeftoversList>;

export type UpdateLeftover = CreateRequestResponseData<Leftover, Leftover>;

export type DeleteLeftoversList = CreateRequestResponseData<void, LeftoversList>;
