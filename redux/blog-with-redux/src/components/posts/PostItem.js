import ViewPost from '../layouts/ViewPost';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/reducers/users';

export default function PostItem({ isEdit, post }) {
  const user = useSelector(state => getUser(state.users, post.userId));

  return (
    <div className='container mb-3 bg-light p-3 w-75'>
      <h3 className='text-capitalize fw-semibold fst-italic mb-2'>
        {post.title}
      </h3>
      <div className='container h-25 overflow-hidden mb-2'>{post.body}</div>
      <div className='container d-flex'>
        <ViewPost
          id={post.id}
          isEdit={isEdit}
        />{' '}
        <span> - by {user.username}</span>
      </div>
    </div>
  );
}
