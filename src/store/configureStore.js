import { createStore, applyMiddleware } from 'redux';
import KpiReducer from '../reducers/kpiReducer.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(logger(), thunk);

const configureStore = () => {
  const store = createStore(KpiReducer, middleware);
  return store;
};

// const initialState = {
//   fetching: false,
//   fetched: false,
//   users: [],
//   error: null
// };

// const reducer = (state=initialState, action) => {
//   switch (action.type) {
//   case 'FETCH_USERS_START':
//     return Object.assign({}, state, {
//       fetching: true
//     });
//   case 'FETCH_USERS_ERROR':
//     return Object.assign({}, state, {
//       fetching: false,
//       error: action.payload
//     });
//   case 'RECEIVE_USERS':
//     return Object.assign({}, state, {
//       fetching: false,
//       fetched: true,
//       users: action.payload
//     });
//   default:
//     return state;
//   }
// };
//
//
// store.dispatch((dispatch) => {
//   dispatch({type: 'FETCH_USERS_START'});
//   axios.get('http://rest.learncode.academy/api/wstern/users')
//     .then((response) => {
//       dipstach({type: 'RECEIVE_USERS', payload: response.data });
//     })
//     .catch((err) => {
//       dispatch({type: 'FETCH_USERS_ERROR', payload: err});
//     });
//   // do something async
// });

export default configureStore;
