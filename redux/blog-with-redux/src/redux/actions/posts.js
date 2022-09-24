import axios from 'axios';
import { post as t } from '../types';

const client = axios.create({
  baseURL: 'http://localhost:3001/posts',
});

const getPostSuccess = posts => ({
  type: t.FETCH_POST_SUCCESS,
  posts,
});

const editPostSuccess = post => ({
  type: t.EDIT_POST_SUCCESS,
  post,
});

const addPostSuccess = post => ({
  type: t.ADD_POST_SUCCESS,
  post,
});

export const addPostRequest =
  ({ post, navigate }) =>
  async dispatch => {
    try {
      const response = await client.post('', post);
      if (response.status === 201) {
        dispatch(addPostSuccess(response.data));
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } catch (err) {
      console.log('Add new request error: ', err);
    }
  };

export const editPostRequest =
  ({ post, navigate }) =>
  async dispatch => {
    try {
      console.log('Edit post request sending');
      const response = await client.put(`/${post.id}`, post);
      if (response.status === 200) {
        dispatch(editPostSuccess(response.data));
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } catch (err) {
      console.log(`Edit post error - ${err}`);
    }
  };

export const getPostsRequest = () => async dispatch => {
  try {
    console.log('Getting posts');
    const response = await client.get();
    if (response.status === 200) dispatch(getPostSuccess(response.data));
  } catch (error) {
    console.log('Get posts error: ', error);
  }
};
