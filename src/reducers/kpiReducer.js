import { fetchKpiData } from '../actions/kpi.js';
import json2csv from 'json2csv';

let initialState = {
  fromDate: 0,
  toDate: Date.now(),
  toDateMinDate: 0,
  downloadLink: '#',
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

const getDownloadLink = (data) => {
  //const csvData = JSON.stringify(data);
  const field = ['id', 'company', 'contact', 'product', 'productWithVideo', 'status', 'modifiedDate'];
  const csvData = json2csv({
    data: data,
    field: field
  });
  const blob = new Blob([csvData], {'type': 'text/plain'});

  if(window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(blob, 'kpi.csv');
  } else {
    if (window.URL.createObjectURL(blob)) {
      return window.URL.createObjectURL(blob);
    } else {
      return '#';
    }
  }
};

const kpiReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CHANGE_FROM_DATE':

    return Object.assign({}, state, {
      fromDate: Date.parse(action.date)/1000,
      toDateMinDate: action.date
    });

  case 'CHANGE_TO_DATE':

    return Object.assign({}, state, {
      toDate: Date.parse(action.date)/1000
    });

  case 'RECEIVE_KPI_DATA':
    return Object.assign({}, state, {
      downloadLink: getDownloadLink(action.data),
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
