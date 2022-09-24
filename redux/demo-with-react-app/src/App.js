import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SigninWithSaga from './components/SigninWithSaga';
import UsersWithSaga from './components/UsersWithSaga';
import UsersWithThunk from './components/UsersWithThunk';
import SigninWithThunk from './components/SigninWithThunk';

import store from './redux/store';
import Todo from './components/todos/Todo';
import ShopPage from './components/shop/ShopPage';
import HackerNews from './components/hacker-news';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Home />}
          ></Route>
          <Route
            path='/sign-in-saga'
            element={<SigninWithSaga />}
          />
          <Route
            path='/users-saga'
            element={<UsersWithSaga />}
          />
          <Route
            path='/sign-in-thunk'
            element={<SigninWithThunk />}
          />
          <Route
            path='/users-thunk'
            element={<UsersWithThunk />}
          />
          <Route
            path='/todo'
            element={<Todo />}
          />
          <Route
            path='/shopping'
            element={<ShopPage />}
          />
          <Route
            path='/hacker-news'
            element={<HackerNews />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
