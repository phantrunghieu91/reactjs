import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Header = () => {
  const userLogined = useSelector(state => state.loginReducer.userLogined);

  return (
    <header className='container-fluid p-0'>
      <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
        <div className='container-fluid'>
          <Link
            to='/'
            className='navbar-brand'
          >
            Demo redux
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse'
            id='navbarNav'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link
                  to='/'
                  className='nav-link'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                {!userLogined.email ? (
                  <Link
                    to='/sign-in-saga'
                    className='nav-link'
                  >
                    Sign in Saga
                  </Link>
                ) : (
                  <Link
                    to='/users-saga'
                    className='nav-link'
                  >
                    Users Saga
                  </Link>
                )}
              </li>
              <li className='nav-item'>
                {!userLogined.email ? (
                  <Link
                    to='/sign-in-thunk'
                    className='nav-link'
                  >
                    Sign in Thunk
                  </Link>
                ) : (
                  <Link
                    to='/users-thunk'
                    className='nav-link'
                  >
                    Users Thunk
                  </Link>
                )}
              </li>
              <li>
                <Link
                  to='/todo'
                  className='nav-link'
                >
                  Todo App
                </Link>
              </li>
              <li>
                <Link
                  to='/shopping'
                  className='nav-link'
                >
                  Shopping cart
                </Link>
              </li>
              <li>
                <Link
                  to='/hacker-news'
                  className='nav-link'
                >
                  Hacker News
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
