import * as t from '../types';

export const postReducer = (
  state = {
    posts: [],
    post: {},
  },
  action
) => {
  switch (action.type) {
    case t.post.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts,
      };
    case t.post.FETCH_POST_SUCCESS:
      return {
        ...state,
        post: action.post,
      };
    case t.post.UPDATE_POST_SUCCESS:
      console.log(action.post);
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.post.id) post = action.post;
          return post;
        }),
        post: {},
      };
    case t.post.ADD_NEW_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.post],
      };
    default:
      return state;
  }
};
