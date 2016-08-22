import React from 'react';
import { connect } from 'react-redux';
import { changeFromDate } from '../actions/kpi';
import DatePicker from 'material-ui/DatePicker';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e, v) => {
      dispatch(changeFromDate(v));
    }
  };
};

let FromDate = ({
  onChange
}) => (
  <DatePicker
    hintText='From Date'
    onChange={(e, v) => {
      onChange(e, v);
    }}
  />
);

FromDate = connect(
  mapStateToProps,
  mapDispatchToProps
)(FromDate);

export default FromDate;
