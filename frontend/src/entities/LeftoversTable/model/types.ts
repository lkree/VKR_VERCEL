import type { Nullable } from '~/shared/lib/ts';

import type { LeftoversList } from '../types';

export interface State {
  leftoversList: Nullable<LeftoversList>;
  status: 'loading' | 'idle';
}
