import axios from 'axios';
import * as t from '../types';

export const getUserSuccess = users => ({
    type: t.FETCH_USER_SUCCESS,
    users
});

export const getUsers = () => async dispatch => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch(getUserSuccess(response.data));
};
