import shop from '../../api/shop';
import * as t from '../types';

const addToCartUnsafe = productId => ({
  type: t.shopping.ADD_TO_CART,
  productId,
});

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};

const checkoutRequest = () => ({
  type: t.shopping.CHECKOUT_REQUEST,
});

const checkoutSuccess = cart => ({
  type: t.shopping.CHECKOUT_SUCCESS,
  cart,
});

const checkoutFailure = cart => ({
  type: t.shopping.CHECKOUT_FAILURE,
  cart,
});

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState();
  dispatch(checkoutRequest());
  shop.buyProducts(products, () => {
    dispatch(checkoutSuccess(cart));
    // dispatch(checkoutFailure(cart));
  });
};
