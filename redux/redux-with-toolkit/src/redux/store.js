import { configureStore } from '@reduxjs/toolkit';
import groceryReducer from '../features/grocery/grocerySlice';
import modalReducer from '../features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    grocery: groceryReducer,
    modal: modalReducer,
  },
});
