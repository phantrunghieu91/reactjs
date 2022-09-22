import * as t from '../types';

export const fetchUserRequest = () => ({
  type: t.user.FETCH_USER,
});

export const fetchUserSuccess = users => ({
  type: t.user.FETCH_USER_SUCCESS,
  users,
});

export const deleteUserRequest = userID => ({
  type: t.user.DELETE_USER,
  userID,
});

export const deleteUserSuccess = userID => ({
  type: t.user.DELETE_USER_SUCCESS,
  userID,
});
