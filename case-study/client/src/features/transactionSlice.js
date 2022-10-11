import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3001/transactions',
});

export const createNewTransaction = createAsyncThunk(
  'transaction/createNewTransaction',
  async (transaction, thunkApi) => {
    try {
      const resp = await client.post(``, transaction);
      return resp.data;
    } catch (error) {
      console.log(`Create new transaction error: ${error.response.data}`);
    }
  }
);

export const getTransactionByWalletId = createAsyncThunk(
  'transaction/getTransactionByWalletId',
  async (walletId, thunkApi) => {
    try {
      const resp = await client.get(`?walletId=${walletId}`);
      return resp.data;
    } catch (error) {
      console.log(`Get Transactions by Wallet id error: ${error.response.data}`);
    }
  }
);

const initialState = {
  isLoading: false,
  transactions: [],
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: {
    // Create new transaction
    [createNewTransaction.pending]: state => {},
    [createNewTransaction.fulfilled]: (state, { payload }) => {
      state.transactions = [...state.transactions, payload];
    },
    [createNewTransaction.rejected]: state => {},
    // Get transactions by wallet id
    [getTransactionByWalletId.pending]: state => {},
    [getTransactionByWalletId.fulfilled]: (state, { payload }) => {
      state.transactions = payload;
    },
    [getTransactionByWalletId.rejected]: state => {},
  },
});

export default transactionSlice.reducer;
