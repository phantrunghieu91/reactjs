import * as t from '../types';
import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3001/posts',
});

const getPostsSuccess = posts => ({
  type: t.post.FETCH_POSTS_SUCCESS,
  posts,
});

const getPostSuccess = post => ({
  type: t.post.FETCH_POST_SUCCESS,
  post,
});

export const getPost = postID => async dispatch => {
  const response = await client.get(`/${postID}`);
  console.log(response);
  dispatch(getPostSuccess(response.data));
};

export const getPosts = () => async dispatch => {
  const response = await client.get(`?userId=1`);
  dispatch(getPostsSuccess(response.data));
};

export const editPost = (id, post) => async dispatch => {
  const response = await client.put(`/${id}`, post);
  dispatch({
    type: t.post.UPDATE_POST_SUCCESS,
    post: response.data,
  });
};

export const createPost = post => async dispatch => {
  post.userId = 1;
  const response = await client.post('', post);
  dispatch({
    type: t.post.ADD_NEW_POST_SUCCESS,
    post: response.data,
  });
};
