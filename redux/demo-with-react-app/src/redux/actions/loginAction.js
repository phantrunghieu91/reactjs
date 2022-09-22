import * as t from '../types';

export const loginRequest = user => ({
    type: t.LOGIN,
    user
});

export const loginSuccess = user => ({
    type: t.LOGIN_SUCCESS,
    user
});