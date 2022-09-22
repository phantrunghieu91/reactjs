import { login } from '../types';

export const LoginRequest = user => ({
    type: login.REQUEST,
    user
});

export const LoginSuccess = user => ({
    type: login.SUCCESS,
    user
});

export const LoginFail = message => ({
    type: login.FAIL,
    message
})