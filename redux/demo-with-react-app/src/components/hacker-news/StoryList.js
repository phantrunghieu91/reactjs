import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getStoriesByType } from '../../redux-with-thunk/actions/storiesAction';
import Story from './Story';

export default function StoryList() {
  const { state } = useLocation();
  const stories = useSelector(state => state.storiesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!state) dispatch(getStoriesByType('top'));
    else dispatch(getStoriesByType(state.type));
  }, [state, dispatch]);

  return (
    <div className='container'>
      {stories &&
        stories.map(story => (
          <Story
            key={story.id}
            story={story}
          />
        ))}
    </div>
  );
}
