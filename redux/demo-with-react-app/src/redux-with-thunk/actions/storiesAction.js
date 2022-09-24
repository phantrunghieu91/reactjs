import * as t from '../types';
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0',
});

const receiveStories = stories => ({
  type: t.RECEIVE_STORIES,
  stories,
});

export const getStoriesByType = type => async dispatch => {
  try {
    const { data: storyIds } = await client.get(`/${type}stories.json`);
    const stories = await Promise.all(storyIds.slice(0, 10).map(getStory));
    dispatch(receiveStories(stories));
  } catch (error) {
    console.log(`Error while getting stories: ${error}`);
  }
};

const getStory = async id => {
  try {
    const response = await client.get(`/item/${id}.json?print=pretty`);
    return response.data;
  } catch (error) {
    console.log('Error while getting story by id ', error);
  }
};
