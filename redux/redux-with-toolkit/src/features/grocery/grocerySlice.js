import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'http://localhost:3001/grocery';

export const getGroceryItems = createAsyncThunk('grocery/getGroceryItems', () =>
  fetch(baseUrl)
    .then(res => res.json())
    .catch(err => {
      throw err;
    })
);

const initialState = {
  groceryItems: [],
  isLoading: true,
};

const grocerySlice = createSlice({
  name: 'grocery',
  initialState,
  extraReducers: {
    [getGroceryItems.pending]: state => {
      state.isLoading = true;
    },
    [getGroceryItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.groceryItems = action.payload;
    },
    [getGroceryItems.rejected]: state => {
      state.isLoading = false;
    },
  },
  reducers: {
    clearGrocery: state => {
      console.log(state);
      state.groceryItems = [];
    },
    removeGroceryItem: (state, action) => {
      const itemId = action.payload;
      state.groceryItems = state.groceryItems.filter(
        item => item.id !== itemId
      );
    },
    increaseQuantity: (state, { payload }) => {
      state.groceryItems.find(item => item.id === payload.id).quantity += 1;
    },
    decreaseQuantity: (state, { payload }) => {
      state.groceryItems.find(item => item.id === payload).quantity -= 1;
    },
  },
});

export const {
  clearGrocery,
  removeGroceryItem,
  increaseQuantity,
  decreaseQuantity,
} = grocerySlice.actions;

export default grocerySlice.reducer;
