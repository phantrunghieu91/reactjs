import { Router } from 'next/router';
import { login } from '../types';

export const loginReducer = ( initialState = {
    users: [],
    userLogined: '',
    message: ''
}, action) => {
    switch(action.type) {
        case login.SUCCESS:
            console.log('Success!');
            return {
                ...initialState,
                userLogined: 'Admin',
                message: 'Success'
            }
        case login.FAIL:
            console.log('Fail!');
            return {
                ...initialState,
                message: action.message
            }
        default:
            return initialState;
    }
};