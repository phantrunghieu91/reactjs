import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Users from './components/users/Users';
import store from './redux/store';
import Posts from './components/posts/Posts';
import Post from './components/posts/Post';
import CreatePost from './components/posts/CreatePost';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/users'
            element={<Users />}
          />
          <Route
            path='/posts'
            element={<Posts />}
          />
          <Route
            path='/post/:postID'
            element={<Post />}
          />
          <Route
            path='/create-post'
            element={<CreatePost />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
