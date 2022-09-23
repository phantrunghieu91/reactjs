import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from '../saga/userSaga';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
