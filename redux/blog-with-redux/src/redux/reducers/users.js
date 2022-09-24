import { combineReducers } from 'redux';
import { user as t } from '../types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case t.FETCH_USER_SUCCESS:
      return {
        ...state,
        ...action.users.reduce((obj, user) => {
          obj[user.id] = user;
          return obj;
        }, {}),
      };
    default:
      return state;
  }
};

const allUsersId = (state = [], action) => {
  switch (action.type) {
    case t.FETCH_USER_SUCCESS:
      console.log('Users Success!');
      return action.users.map(user => user.id);
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allUsersId,
});

// selector
export const getUser = (state, id) => {
  return state.byId[id];
};

export const getAllUsers = state =>
  state.allUsersId.map(id => getUser(state, id));
