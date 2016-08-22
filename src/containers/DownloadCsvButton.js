import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';


const mapStateToProps = (state) => {
  return {
    downloadLink: state.downloadLink
  };
};

let DownloadCsvButton = ({
  downloadLink
}) => (
  <RaisedButton
    id='download'
    href={downloadLink}
    label='Download as CSV'
    download='kpi.csv'
  />
);

DownloadCsvButton = connect(
  mapStateToProps
)(DownloadCsvButton);

export default DownloadCsvButton;
