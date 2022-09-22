import * as t from '../types';

export const usersReducer = ( initialState = {
    users: [],
}, action ) => {
    switch (action.type) {
        case t.FETCH_USER_SUCCESS:
            console.log('fetch data success!');
            // console.log(action.users);
            return {
                ...initialState,
                users: action.users
            }
        default:
            return initialState;
    }
};