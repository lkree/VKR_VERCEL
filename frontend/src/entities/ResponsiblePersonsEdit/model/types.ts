import type { Nullable } from '~/shared/lib/ts';

import type { ResponsiblePersonArray } from '../types';

export interface State {
  responsiblePersonArray: Nullable<ResponsiblePersonArray>;
}
