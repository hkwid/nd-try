import { fetchKpiData } from '../actions/kpi.js';

let initialState = {
  fromDate: 0,
  toDate: Date.now(),
  toDateMinDate: 0,
  numShop: 0,
  numProduct: 0,
  numProductWithVideo: 0,
  kpiData: []
};

const getSumFromArryElem = (arr, key) => {
  let sum = 0;

  arr.forEach((elem) => {
    if (elem[key]) {
      sum += elem[key];
    }
  });
  return sum;
};

const kpiReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CHANGE_FROM_DATE':
    console.log(action.date);
    //parse date to unix timestamp
    fetchKpiData(state.fromDate, state.toDate);

    return Object.assign({}, state, {
      fromDate: Date.parse(action.date)/1000,
      toDateMinDate: action.date
    });

  case 'CHANGE_TO_DATE':
    console.log(action.date);
    //parse date to unix timestamp
    fetchKpiData(state.fromDate, state.toDate);

    return Object.assign({}, state, {
      toDate: Date.parse(action.date)/1000
    });

  // DownloadCsv
  case 'RECEIVE_KPI_DATA':
    // console.log(`receive kpi data: ${action.data}`);

    return Object.assign({}, state, {
      numShop: Object.keys(action.data).length,
      numProduct: getSumFromArryElem(action.data, 'product'),
      numProductWithVideo: getSumFromArryElem(action.data, 'productWithVideo'),
      kpiData: action.data,
    });

  case 'FAIL_TO_FETCH_KPI':
    console.log(action.err);
    return state;

  default:
    return state;
  }
};

export default kpiReducer;
