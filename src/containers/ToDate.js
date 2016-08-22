import React from 'react';
import { connect } from 'react-redux';
import { changeToDate } from '../actions/kpi';
import DatePicker from 'material-ui/DatePicker';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e, v) => {
      dispatch(changeToDate(v));
    }
  };
};

let ToDate = ({
  onChange
}) => (
  <DatePicker
    hintText='To Date'
    onChange={(e, v) => {
      onChange(e, v);
    }}
  />
);

ToDate = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDate);

export default ToDate;
