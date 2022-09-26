import * as t from '../types';

export const getProductRequest = () => ({
  type: t.FETCH_PRODUCT_REQUEST,
});

export const getProductSuccess = products => ({
  type: t.FETCH_PRODUCT_SUCCESS,
  products,
});
