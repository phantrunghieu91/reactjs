import { configureStore } from '@reduxjs/toolkit';
// Un-comment when need to check saga code
// import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../saga/userSaga';
import thunk from 'redux-thunk';
// Comment below rootReducer when need to check saga code
// Sign in Saga, Todo App
import rootReducer from '../redux-with-thunk/reducers/rootReducer';
import { getAllProducts } from '../redux-with-thunk/actions/shoppingAction';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, thunk],
});

store.dispatch(getAllProducts());

sagaMiddleware.run(rootSaga);

export default store;
