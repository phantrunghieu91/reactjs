import * as t from '../types';

export const userReducer = (
  state = {
    users: [],
  },
  action
) => {
  switch (action.type) {
    case t.user.FETCH_USER_SUCCESS:
      console.log('fetch data success!');
      return {
        users: action.users,
      };
    case t.user.DELETE_USER_SUCCESS:
      console.log('Delete user success!');
      return {
        users: state.users.filter(user => user.id !== action.userID),
      };
    default:
      return state;
  }
};
