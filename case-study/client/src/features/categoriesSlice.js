import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const client = axios.create({ baseURL: 'http://localhost:3001' });

export const getIncomeCategories = createAsyncThunk('categories/getIncomeCateogories', async () => {
  try {
    const { data: income } = await client.get(`/incomeCategories`);
    return income;
  } catch (error) {
    console.log(`get income categories error : ${error.response.data}`);
  }
});
export const getExpenseCategories = createAsyncThunk(
  'categories/getExpenseCateogories',
  async () => {
    try {
      const { data: expense } = await client.get(`/expenseCategories`);
      return expense;
    } catch (error) {
      console.log(`get expense categories error : ${error.response.data}`);
    }
  }
);
export const getDebtLoanCategories = createAsyncThunk(
  'categories/getDebtLoanCateogories',
  async () => {
    try {
      const { data: debtLoan } = await client.get(`/debtLoanCategories`);
      return debtLoan;
    } catch (error) {
      console.log(`get debt n loan categories error : ${error.response.data}`);
    }
  }
);

const initialState = {
  income: [],
  expense: [],
  debtLoan: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducer: {},
  extraReducers: {
    [getExpenseCategories.pending]: state => {},
    [getExpenseCategories.fulfilled]: (state, { payload }) => {
      state.expense = payload;
    },
    [getExpenseCategories.rejected]: state => {},
    [getIncomeCategories.pending]: state => {},
    [getIncomeCategories.fulfilled]: (state, { payload }) => {
      state.income = payload;
    },
    [getIncomeCategories.rejected]: state => {},
    [getDebtLoanCategories.pending]: state => {},
    [getDebtLoanCategories.fulfilled]: (state, { payload }) => {
      state.debtLoan = payload;
    },
    [getDebtLoanCategories.rejected]: state => {},
  },
});

export default categoriesSlice.reducer;
