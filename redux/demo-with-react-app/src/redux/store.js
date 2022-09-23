import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../saga/userSaga';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, thunk],
});

sagaMiddleware.run(rootSaga);

export default store;
