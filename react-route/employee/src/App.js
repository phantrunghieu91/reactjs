import './App.scss';
import {NavLink, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';

function App() {
  return (
    <div className="app">
      <nav className='app__navbar'>
        <ul>
          <li>
            <NavLink to='/'
              className={({isActive}) => isActive ? 'active' : ''}
            >Home</NavLink>
          </li>
          <li>
            <NavLink to='/signin'
              className={({isActive}) => isActive ? 'active' : ''}
            >Sign in</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
