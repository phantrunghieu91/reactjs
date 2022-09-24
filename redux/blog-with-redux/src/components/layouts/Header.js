import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header
      className='container-fluid p-0'
      style={{ height: '10%' }}
    >
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary m-0'>
        <div className='container-fluid'>
          <NavLink
            to='/'
            className='navbar-brand fs-3'
          >
            Redux Blog
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse d-flex justify-content-end'
            id='navbarNavAltMarkup'
          >
            <div className='navbar-nav fs-5'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
              >
                Home
              </NavLink>
              <NavLink
                to='/new-post'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
              >
                New Post
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
