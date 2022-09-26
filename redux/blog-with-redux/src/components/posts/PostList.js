import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/reducers/posts';
import PostItem from './PostItem';

export default function PostList() {
  const posts = useSelector(state => getAllPosts(state.posts));

  return (
    <div className='container h-100 overflow-auto'>
      {posts.map(post => (
        <PostItem
          isEdit={false}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
}
