import * as t from '../types';

const initialState = {
  addedIds: [],
  quantityById: {},
};

const addedIds = (state = initialState, action) => {
  switch (action.type) {
    case t.shopping.ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case t.shopping.ADD_TO_CART:
      const { productId } = action;
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      };
    default:
      return state;
  }
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case t.shopping.ADD_TO_CART:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      };
    case t.shopping.CHECKOUT_REQUEST:
      return initialState;
    case t.shopping.CHECKOUT_FAILURE: // Return action.cart so that can checkout again
      return action.cart;
    default:
      return state;
  }
};

export default cart;

// Selector function
export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0;
export const getAddedIds = state => state.addedIds;
