import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SigninWithSaga from './components/SigninWithSaga';
import UsersWithSaga from './components/UsersWithSaga';
import UsersWithThunk from './components/UsersWithThunk';
import SigninWithThunk from './components/SigninWithThunk';

import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/sign-in-saga' element={<SigninWithSaga />} />
          <Route path='/users-saga' element={<UsersWithSaga />} />
          <Route path='/sign-in-thunk' element={ <SigninWithThunk />} />
          <Route path='/users-thunk' element={<UsersWithThunk />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
