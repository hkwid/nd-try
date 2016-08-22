import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

const mapStateToProps = (state) => {
  return {
    kpiData: state.kpiData
  };
};

const handleDownload = (data) => {
  const blob = new Blob([data], {'type': 'text/plain'});
  console.log(`handleDownload: ${data}`);

  if(window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(blob, 'kpi.csv');
  } else {
    if (window.URL.createObjectURL(blob)) {
      console.log(window.URL.createObjectURL(blob));
      // document.getElementById('download').href = window.URL.createObjectURL(blob);
    } else {
      document.getElementById('download').href = '#';
    }

  }
};

let DownloadCsvButton = (kpiData) => (
  <RaisedButton
    id='download'
    href='#'
    label='Download as CSV'
    download='kpi.csv'
    onClick={handleDownload(kpiData)}
  />
);

DownloadCsvButton = connect(
  mapStateToProps
)(DownloadCsvButton);

export default DownloadCsvButton;
