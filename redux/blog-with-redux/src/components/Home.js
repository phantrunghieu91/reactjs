import Main from './layouts/Main';
import PostList from './posts/PostList';

const Home = () => {
  return (
    <Main title='Home page'>
      <PostList />
    </Main>
  );
};

export default Home;
