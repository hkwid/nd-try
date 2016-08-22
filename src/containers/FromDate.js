import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { changeFromDate } from '../actions/kpi';
import DatePicker from 'material-ui/DatePicker';

import { fetchKpiData } from '../actions/kpi';

const mapStateToProps = (state) => {
  return {
    fromDate: state.fromDate,
    ToDate: state.toDate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e, v, fromDate, toDate) => {
      dispatch(changeFromDate(v));
      dispatch(fetchKpiData(fromDate, toDate));
    }
  };
};

class FromDate extends Component {

  render () {
    const { onChange, fromDate, toDate } = this.props;
    return  (
      <DatePicker
        hintText='From Date'
        onChange={(e, v) => {
          onChange(e, v, fromDate, toDate);
        }}
      />
    );
  }
}

const ConnectedFromDate = connect(
  mapStateToProps,
  mapDispatchToProps
)(FromDate);

export default ConnectedFromDate;
