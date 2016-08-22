import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeToDate } from '../actions/kpi';
import DatePicker from 'material-ui/DatePicker';
import { fetchKpiData } from '../actions/kpi';

const mapStateToProps = (state) => {
  let minDate = new Date(state.toDateMinDate);

  return {
    fromDate: state.fromDate,
    toDate: state.toDate,
    toDateMinDate: minDate
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e, v, fromDate, toDate) => {
      dispatch(changeToDate(v));
      dispatch(fetchKpiData(fromDate, toDate));
    }
  };
};

class ToDate extends Component {

  render () {
    const { onChange, fromDate, toDate, toDateMinDate } = this.props;
    return (
      <DatePicker
        hintText='To Date'
        onChange={(e, v) => {
          onChange(e, v, fromDate, toDate);
        }}
        minDate={toDateMinDate}
      />
    );
  }
}

const ConnectedToDate = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDate);

export default ConnectedToDate;
