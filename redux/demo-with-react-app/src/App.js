import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Users from './components/Users';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
