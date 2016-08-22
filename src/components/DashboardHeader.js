import React from 'react';
import FromDate from '../containers/FromDate';
import ToDate from '../containers/ToDate';

const DashboardHeader = () => (
  <div>
    <p>{'Key Performance Indicator'}</p>
    <FromDate />
    <ToDate />
  </div>
);

export default DashboardHeader;
