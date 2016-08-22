import React from 'react';

import KpiList from '../containers/KpiList';
import DownloadCsvButton from '../containers/DownloadCsvButton';
import KpiTable from '../containers/KpiTable';

const DashboardBody = () => (
  <div>
    <KpiList />
    <DownloadCsvButton />
    <KpiTable />
  </div>
);

export default DashboardBody;
