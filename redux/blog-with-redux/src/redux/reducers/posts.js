import { combineReducers } from 'redux';
import { post as t } from '../types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case t.FETCH_POST_SUCCESS:
      return {
        ...state,
        ...action.posts.reduce((obj, post) => {
          obj[post.id] = post;
          return obj;
        }, {}),
      };
    case t.EDIT_POST_SUCCESS:
      return {
        ...state,
        [action.post.id]: posts(state[action.post.id], action),
      };
    case t.ADD_POST_SUCCESS:
      return {
        ...state,
        [action.post.id]: action.post,
      };
    default:
      return state;
  }
};

const allPostsId = (state = [], action) => {
  switch (action.type) {
    case t.FETCH_POST_SUCCESS:
      return action.posts.map(post => post.id);
    case t.ADD_POST_SUCCESS:
      return [...state, action.post.id];
    default:
      return state;
  }
};

const posts = (state, action) => {
  switch (action.type) {
    case t.EDIT_POST_SUCCESS:
      return action.post;
    case t.ADD_POST_SUCCESS:
      return action.post;
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allPostsId,
});

export const getPost = (state, id) => state.byId[id];
export const getAllPosts = state =>
  state.allPostsId.map(id => getPost(state, id));
