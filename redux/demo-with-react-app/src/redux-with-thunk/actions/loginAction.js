import * as t from '../types';
import { getUsers } from './userAction';

const loginSuccess = user => ({
  type: t.LOGIN_SUCCESS,
  user,
});

export const loginRequest = user => {
  return async dispatch => {
    const { username, password } = user;
    if (username === 'admin' && password === '123') {
      dispatch(loginSuccess(user));
      dispatch(getUsers());
    } else {
      alert('login failure!');
    }
  };
};
