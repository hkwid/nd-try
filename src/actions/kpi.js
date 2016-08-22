import axios from 'axios';

export const changeFromDate = (date) => {
  return {
    type: 'CHANGE_FROM_DATE',
    date
  };
};

export const changeToDate = (date) => {
  return {
    type: 'CHANGE_TO_DATE',
    date
  };
};

export const downloadCsv = () => {
  return {
    type: 'DOWNLOAD_CSV'
  };
};

export const receiveKpiData = (data) => {
  return {
    type: 'RECEIVE_KPI_DATA',
    data
  };
};

export const failToFetchKpiData = (err) => {
  return {
    type: 'FAIL_TO_FETCH_KPI_DATA',
    err
  };
};

// Async action
export const fetchKpiData = (fromDate, toDate) => {

  return (dispatch) => {
    return axios.get('/api/kpi', {
      params: {
        fromDate: fromDate,
        toDate: toDate
      }
    })
    .then(response => {
      dispatch(receiveKpiData(response.data));
    })
    .catch(e => {
      dispatch(failToFetchKpiData(e));
    });
  };
};
