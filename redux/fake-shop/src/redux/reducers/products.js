import { combineReducers } from 'redux';
import * as t from '../types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case t.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {}),
      };
    default:
      return state;
  }
};

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case t.FETCH_PRODUCT_SUCCESS:
      return action.products.map(product => product.id);
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  visibleIds,
});

// selector

export const getProduct = (state, id) => state.byId[id];
export const getProducts = state =>
  state.visibleIds.map(id => getProduct(state, id));
