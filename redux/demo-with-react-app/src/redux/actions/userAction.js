import * as t from '../types';

export const fetchRequest = () => ({
    type: t.FETCH_USER
});

export const fetchSuccess = users => ({
    type: t.FETCH_USER_SUCCESS,
    users
});