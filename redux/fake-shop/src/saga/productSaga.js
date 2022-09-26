import axios from 'axios';
import * as t from '../redux/types';
import { put, takeLatest } from 'redux-saga/effects';
import { getProductSuccess } from '../redux/actions/products';

const client = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
});

function* getProduct() {
  try {
    const response = yield client.get();
    if (response.status === 200) yield put(getProductSuccess(response.data));
  } catch (error) {
    console.log(`Error at getProduct: ${error}`);
  }
}

export default function* rootSaga() {
  yield takeLatest(t.FETCH_PRODUCT_REQUEST, getProduct);
}
