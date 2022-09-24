import * as t from '../types';

export const storiesReducer = (state = [], action) => {
  switch (action.type) {
    case t.RECEIVE_STORIES:
      return action.stories;
    default:
      return state;
  }
};
