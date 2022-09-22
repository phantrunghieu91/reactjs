import * as t from '../types';

export const loginReducer = ( initialState = {
    userLogined: {}
}, action ) => {
    switch (action.type) {
        case t.LOGIN_SUCCESS:
            return {
                userLogined: action.user
            }
        default:
            return initialState;
    }
};