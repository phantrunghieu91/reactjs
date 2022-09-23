import * as t from '../types';
import { getUsers } from './userAction';

// const loginSuccess = user => ({
//   type: t.LOGIN_SUCCESS,
//   user,
// });

export const loginRequest = user => {
  return async dispatch => {
    const { email, password } = user;
    if (email === 'admin@gmail.com' && password === 'letmein') {
      dispatch({
        type: t.LOGIN_SUCCESS,
        user,
      });
      dispatch(getUsers());
    } else {
      alert('login failure!');
    }
  };
};
