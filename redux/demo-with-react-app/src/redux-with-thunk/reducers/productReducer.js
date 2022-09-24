import { combineReducers } from 'redux';
import * as t from '../types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case t.shopping.RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {}),
      };
    case t.shopping.ADD_TO_CART:
      const { productId } = action;
      return {
        ...state,
        [productId]: products(state[productId], action),
      };
    default:
      return state;
  }
};

const products = (state, action) => {
  switch (action.type) {
    case t.shopping.ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1,
      };
    default:
      return state;
  }
};

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case t.shopping.RECEIVE_PRODUCTS:
      return action.products.map(product => product.id);
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  visibleIds,
});

// Selector

export const getProduct = (state, id) => state.byId[id];
export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id));
