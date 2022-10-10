import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './features/transactionSlice';
import userReducer from './features/userSlice';
import walletReducer from './features/walletSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    transaction: transactionReducer,
    wallet: walletReducer,
  },
});

export default store;
