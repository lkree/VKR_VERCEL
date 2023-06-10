import { useLayoutEffect } from 'react';

interface Props {
  data: unknown;
  downloadFn: () => unknown | Promise<unknown>;
}

export const useInitDownloadData = ({ downloadFn, data }: Props) => {
  useLayoutEffect(() => {
    if (!data) void downloadFn();
  }, []);
};
