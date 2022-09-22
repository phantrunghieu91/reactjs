import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import * as t from '../redux/types';
import {
  deleteUserSuccess,
  fetchUserSuccess,
} from '../redux/actions/userAction';

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users',
});

function* getUsers() {
  try {
    console.log('Getting data...');
    const response = yield client.get();
    yield put(fetchUserSuccess(response.data));
  } catch (err) {
    console.log(`Error - getusers : ${err}`);
  }
}

function* deleteUser(action) {
  try {
    console.log('Delete request sending ...');
    const response = yield client.delete(`/${action.userID}`);
    if (response.status === 200) {
      yield put(deleteUserSuccess(action.userID));
    }
  } catch (errors) {
    console.log(`ERROR - deleteUser : ${errors}`);
  }
}

export default function* rootSaga() {
  yield takeLatest(t.user.FETCH_USER, getUsers);
  yield takeLatest(t.user.DELETE_USER, deleteUser);
}
