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

export const deleteAllTransactions = createAsyncThunk(
  'transaction/deleteTransactionByWalletId',
  async (_, thunkApi) => {
    try {
      const idList = thunkApi.getState().transaction.transactions.map(e => e.id);
      const promises = idList.map(id => client.delete(`/${id}`));
      const response = await Promise.allSettled(promises);
      return response.reduce(
        (result, resp) => {
          return result && resp.status === 'fulfilled';
        },
        [true]
      );
    } catch (error) {
      console.log(`Delete transactions by wallet id error: ${error.response.messages}`);
    }
  }
);

export const deleteTransactionById = createAsyncThunk(
  'transaction/deleteTransactionById',
  async (id, thunkApi) => {
    try {
      await client.delete(`/${id}`);
      return id;
    } catch (error) {
      console.log(`Delete transaction by id error: ${error.response.messages}`);
    }
  }
);

export const editTransaction = createAsyncThunk(
  'transaction/editTransaction',
  async (transaction, thunkApi) => {
    try {
      const { data } = await client.put(`/${transaction.id}`, transaction);
      return data;
    } catch (error) {
      console.log(`Edit transaction error: ${error.response.messages}`);
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
  selectedTransaction: {},
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    clearTransactions: state => {
      state.transactions = [];
    },
    selectingTransactionById: (state, { payload }) => {
      state.selectedTransaction = state.transactions.filter(item => item.id === payload)[0];
    },
  },
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
    // Delete all transactions of currenct wallet
    [deleteAllTransactions.pending]: state => {},
    [deleteAllTransactions.fulfilled]: (state, { payload }) => {
      if (payload) state.transactions = [];
    },
    [deleteAllTransactions.rejected]: state => {},
    // Delete transaction by id
    [deleteTransactionById.pending]: state => {},
    [deleteTransactionById.fulfilled]: (state, { payload: deletedId }) => {
      state.selectedTransaction = {};
      state.transactions = state.transactions.filter(transaction => transaction.id !== deletedId);
    },
    [deleteTransactionById.rejected]: state => {},
    // Edit transaction
    [editTransaction.pending]: state => {},
    [editTransaction.fulfilled]: (state, { payload }) => {
      state.selectedTransaction = payload;
      state.transactions = state.transactions.map(item => {
        if (item.id === payload.id) item = payload;
        return item;
      });
    },
    [editTransaction.rejected]: state => {},
  },
});

export const { clearTransactions, selectingTransactionById } = transactionSlice.actions;

export default transactionSlice.reducer;
