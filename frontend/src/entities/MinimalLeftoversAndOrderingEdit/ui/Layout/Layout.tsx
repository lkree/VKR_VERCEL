import { useSelector } from 'react-redux';

import { useActions, useInitDownloadData } from '~/shared/lib/hooks';

import { selectMinimalLeftoversList, actions } from '../../model';
import { Table } from '../Table';

export const Layout = () => {
  const minimalLeftoversList = useSelector(selectMinimalLeftoversList);

  const { getMinimalLeftoversList } = useActions(actions);

  useInitDownloadData({ data: minimalLeftoversList, downloadFn: getMinimalLeftoversList });

  return <Table />;
};
