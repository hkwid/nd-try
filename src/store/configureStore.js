import { createStore, applyMiddleware, compose } from 'redux';
import KpiReducer from '../reducers/kpiReducer.js';
import thunk from 'redux-thunk';


const configureStore = () => {
  const store = createStore(
    KpiReducer,
    undefined,
    compose(
      applyMiddleware(thunk)
    )
  );
  return store;
};

export default configureStore;
