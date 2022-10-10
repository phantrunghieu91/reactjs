import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { updateUser } from './userSlice';

// const client = axios.create({
//   baseURL: 'https://api.apilayer.com/currency_data',
//   headers: {
//     apiKey: 'N64bLLewquc35LyEaKWkB324OsyC8404',
//   },
// });

const client = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getCurrencyList = createAsyncThunk(
  'wallet/getCurrencyList',
  async () => {
    try {
      const resp = await client.get(`/currencies`);
      return resp.data;
    } catch (error) {
      console.log('get currency list fail: ' + error);
    }
  }
);

export const getWalletById = createAsyncThunk(
  'wallet/getWalletById',
  async (id, thunkApi) => {
    try {
      const { data } = await client.get(`/wallets?id=${id}`);
      return data[0];
    } catch (error) {
      console.log(`Get Wallet by Id error: ${error}`);
    }
  }
);

export const createWallet = createAsyncThunk(
  'wallet/createWallet',
  async (requestData, thunkApi) => {
    try {
      const resp = await client.post(`/wallets`, requestData);
      const finalPayload = resp.data;
      const { userInfo } = thunkApi.getState().user;
      thunkApi.dispatch(updateUser({ ...userInfo, walletId: resp.data.id }));
      return finalPayload;
    } catch (error) {
      console.log('Create new wallet fail: ' + error);
    }
  }
);

export const updateWallet = createAsyncThunk(
  'wallet/updateWallet',
  async (wallet, thunkApi) => {
    try {
      const { data } = await client.put(`/wallets/${wallet.id}`, wallet);
      return data;
    } catch (error) {
      console.log(`Update Wallet error: ${error}`);
    }
  }
);

const initialState = {
  walletInfo: {},
  currencyList: [],
  error: null,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {},
  extraReducers: {
    [getCurrencyList.pending]: state => {},
    [getCurrencyList.fulfilled]: (state, { payload }) => {
      state.currencyList = Object.entries(payload);
    },
    [getCurrencyList.rejected]: state => {},
    // create new wallet reducer
    [createWallet.pending]: state => {},
    [createWallet.fulfilled]: (state, { payload }) => {
      // state.walletInfo = payload;
    },
    [createWallet.rejected]: state => {},
    // Get wallet by id
    [getWalletById.pending]: state => {},
    [getWalletById.fulfilled]: (state, { payload }) => {
      state.walletInfo = payload;
    },
    [getWalletById.rejected]: state => {},
    // Update wallet
    [updateWallet.pending]: state => {},
    [updateWallet.fulfilled]: (state, { payload }) => {
      state.walletInfo = payload;
    },
    [updateWallet.rejected]: state => {},
  },
});

export default walletSlice.reducer;
