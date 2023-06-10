import { useSelector } from 'react-redux';

import { Table } from '~/entities/LeftoversTable/ui/Table/Table';

import { useActions, useInitDownloadData } from '~/shared/lib/hooks';

import { selectLeftoversList, actions } from '../../model';

export const Layout = () => {
  const leftoversList = useSelector(selectLeftoversList);
  const { getLeftoversList } = useActions(actions);

  useInitDownloadData({ data: leftoversList, downloadFn: getLeftoversList });

  return <Table />;
};
