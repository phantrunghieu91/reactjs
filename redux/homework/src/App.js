import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Users from './components/users/Users';
import store from './redux/store';

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
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
