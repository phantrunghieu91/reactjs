import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../../redux/actions/postAction';
import { Main } from '../layouts/Main';

export default function Posts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector(state => state.postReducer.posts);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPosts());
    } else {
      // console.log(posts);
    }
  }, [posts, dispatch]);

  return (
    <Main>
      <div className='container h-100 d-flex flex-column justify-content-evenly'>
        <header className='container d-flex justify-content-between mt-3'>
          <h1>Post</h1>
          <button
            className='btn btn-primary'
            onClick={() => {
              navigate('/create-post');
            }}
          >
            Add New Post
          </button>
        </header>
        <main className='container overflow-auto h-75 mt-3'>
          {posts.map((post, index) => (
            <div
              className='container bg-light mt-3 p-3 d-flex'
              key={index}
            >
              <div className='w-75'>
                <h3>{post.title}</h3>
                <div>{post.body}</div>
              </div>
              <div className='w-25 d-flex justify-content-end align-items-center'>
                <button
                  className='btn btn-success w-50'
                  onClick={() => {
                    navigate(`/post/${post.id}`);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </Main>
  );
}
