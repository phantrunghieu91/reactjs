import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/productSaga';
import { getProductRequest } from './actions/products';
import reducers from './reducers';

const sagaMidldleware = createSagaMiddleware();

const middleware = [sagaMidldleware];

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMidldleware.run(rootSaga);

store.dispatch(getProductRequest());

export default store;
