import { useMemo, useState } from 'react';
import { Alert, AlertProps } from 'react-bootstrap';

import type { Queue } from '~/shared/lib/hooks/useQueue';
import type { Nullable } from '~/shared/lib/ts';

import { useUIQueue } from './useUIQueue';

export type AlertState = AlertProps;

export const useShowAlert = () => {
  const [alertState, setAlertState] = useState<Nullable<AlertState>>(null);
  const queue: Queue<AlertState> = useUIQueue(
    3000,
    () => setAlertState(queue.get()!),
    () => setAlertState(null)
  );

  return useMemo(
    () => ({
      setAlertState: (props: AlertState) => queue.push(props),
      Alert: () => (
        <>
          {Boolean(alertState) && (
            <Alert {...alertState} show style={{ position: 'absolute', top: 0, width: '100%', left: 0 }} />
          )}
        </>
      ),
    }),
    [alertState]
  );
};
