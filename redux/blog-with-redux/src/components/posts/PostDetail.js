import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Main from '../layouts/Main';
import { getPost } from '../../redux/reducers/posts';
import PostItem from './PostItem';

export default function PostDetail() {
  const { postId } = useParams();
  const post = useSelector(state => getPost(state.posts, postId));

  return (
    <Main title={'Post detail'}>
      <PostItem
        post={post}
        isEdit={true}
      />
    </Main>
  );
}
