import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { usersReducer } from './usersReducer';
import { storiesReducer } from './storiesReducer';
import products, * as fromProduct from './productReducer';
import cart, * as fromCart from './cartReducer';

export default combineReducers({
  loginReducer,
  usersReducer,
  storiesReducer,
  products,
  cart,
});

const getAddedIds = state => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getProduct = (state, id) => fromProduct.getProduct(state.products, id);

export const getTotal = state =>
  getAddedIds(state)
    .reduce(
      (total, id) =>
        total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2);

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id),
  }));
