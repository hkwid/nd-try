import React, { Component } from 'react';
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
