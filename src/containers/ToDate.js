import React from 'react';
import { connect } from 'react-redux';
import { changeToDate } from '../actions/kpi';
import DatePicker from 'material-ui/DatePicker';

const mapStateToProps = (state) => {
  let minDate = new Date(state.toDateMinDate);

  return {
    toDateMinDate: minDate
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e, v) => {
      dispatch(changeToDate(v));
    }
  };
};

let ToDate = ({
  toDateMinDate,
  onChange
}) => (
  <DatePicker
    hintText='To Date'
    onChange={(e, v) => {
      onChange(e, v);
    }}
    minDate={toDateMinDate}
  />
);

ToDate = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDate);

export default ToDate;
