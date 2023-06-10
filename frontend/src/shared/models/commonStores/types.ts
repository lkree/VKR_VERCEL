import type { User } from '~/shared/api/user';
import type { AlertState, ModalState } from '~/shared/lib/hooks';
import type { Nullable } from '~/shared/lib/ts';

export interface CommonState {
  user: Nullable<User>;
  alertsSettingsList: Array<AlertState>;
  modalSettingsList: Array<ModalState>;
  errors: {
    messagesList: Array<string>;
  };
}
