import * as t from '../types';
import shop from '../../api/shop';

export const receiveProducts = products => ({
  type: t.shopping.RECEIVE_PRODUCTS,
  products,
});

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products));
  });
};
