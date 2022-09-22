import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { loginSuccess } from '../redux/actions/loginAction';
import { fetchRequest, fetchSuccess } from '../redux/actions/userAction';
import * as t from '../redux/types';

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

function* getUsers() {
    try {
        const response = yield client.get();
        yield put(fetchSuccess(response.data));
    } catch (errors) {
        console.log(`Error - getusers: ${errors}`);
    }
}

// Check sign in user info
function* authSagaFun(action) {
    console.log('Authenticating....');
    const user = action.user;
    if(user.email === 'admin@gmail.com' && user.password === 'letmein') {
        yield put(loginSuccess(user));
        yield put(fetchRequest());
    }
}

export default function* rootSaga() {
    yield takeLatest(t.LOGIN, authSagaFun);
    yield takeLatest(t.FETCH_USER, getUsers);
}