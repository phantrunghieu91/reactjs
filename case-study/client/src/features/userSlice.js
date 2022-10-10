import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3001/users',
});

export const getUserByUsername = createAsyncThunk(
  'user/getUserByUsername',
  async (requestData, thunkApi) => {
    try {
      const { data } = await client.get(`/?username=${requestData.username}`);
      if (data.length === 0) return { error: 'Username isnt exist!' };
      else {
        if (data[0].password === requestData.password)
          return { user: data[0], error: '' };
        else return { error: 'Username or password is wrong!' };
      }
    } catch (error) {
      console.log(`Get user error: ${error}`);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkApi) => {
    try {
      const resp = await client.put(`/${user.id}`, user);
      return resp.data;
    } catch (error) {
      console.log(`Update user error: ${error}`);
    }
  }
);

export const createNewUser = createAsyncThunk(
  'user/createNewUser',
  async (user, thunkApi) => {
    try {
      const { data: usernameCheck } = await client.get(
        `/?username=${user.username}`
      );
      if (usernameCheck.length === 0) {
        const { data: emailCheck } = await client.get(`?email=${user.email}`);
        if (emailCheck.length === 0) {
          const resp = await client.post(``, user);
          return { user: resp.data, error: '' };
        } else {
          return { error: `Email already exist!` };
        }
      } else {
        return { error: `Username already exist!` };
      }
    } catch (err) {
      console.log(`Create account error: ${err}`);
    }
  }
);

const initialState = {
  isloading: false,
  userInfo: {},
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signOut: state => {
      state.userInfo = {};
    },
  },
  extraReducers: {
    // Get user by username reducer
    [getUserByUsername.pending]: state => {
      state.isLoading = true;
    },
    [getUserByUsername.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      if (payload.error !== '') {
        state.error = payload.error;
      } else {
        state.error = payload.error;
        state.userInfo = payload.user;
      }
    },
    [getUserByUsername.rejected]: state => {
      state.isLoading = false;
    },
    // Update user
    [updateUser.pending]: state => {},
    [updateUser.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
    },
    [updateUser.rejected]: state => {},
    // Create new user
    [createNewUser.pending]: state => {},
    [createNewUser.fulfilled]: (state, { payload }) => {
      if (state.error !== '') {
        state.error = payload.error;
      } else {
        state.error = payload.error;
        state.userInfo = payload.user;
      }
    },
    [createNewUser.rejected]: state => {},
  },
});

export const { signOut } = userSlice.actions;

export default userSlice.reducer;
