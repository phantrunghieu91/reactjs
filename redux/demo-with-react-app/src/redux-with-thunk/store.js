// import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
// import {ThunkMiddleware} from 'redux-thunk';

// const store = configureStore({
//     reducer: rootReducer,
//     middleware: [thunk]
// });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
