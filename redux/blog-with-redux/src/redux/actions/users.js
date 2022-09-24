import axios from 'axios';
import { user as t } from '../types';

const client = axios.create({
  baseURL: 'http://localhost:3001/users',
});

const getUserSuccess = users => ({
  type: t.FETCH_USER_SUCCESS,
  users,
});

export const getUsersRequest = () => async dispatch => {
  try {
    console.log('Getting user');
    const response = await client.get();
    if (response.status === 200) dispatch(getUserSuccess(response.data));
  } catch (error) {
    console.log('get User by id request error: ', error);
  }
};
