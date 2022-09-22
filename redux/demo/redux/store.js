import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import loginMiddleware from './middlewares/loginMiddleware';
import rootReducer from './reducers/rootReducer';

const makeStore = () => configureStore({
    reducer: rootReducer,
    middleware: [loginMiddleware]
});

export const wrapper = createWrapper(makeStore);