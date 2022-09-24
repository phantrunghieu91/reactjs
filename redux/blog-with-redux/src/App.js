import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import PostDetail from './components/posts/PostDetail';
import store from './redux/store';
import EditPost from './components/posts/EditPost';
import NewPost from './components/posts/NewPost';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={<Home />}
            />
            <Route
              path='/post/:postId'
              element={<PostDetail />}
            />
            <Route
              path='/edit/:postId'
              element={<EditPost />}
            />
            <Route
              path='/new-post'
              element={<NewPost />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
