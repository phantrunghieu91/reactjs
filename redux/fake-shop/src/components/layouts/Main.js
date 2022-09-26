import { Link } from 'react-router-dom';

export default function Main({ title, children }) {
  document.title = title;
  return (
    <div className='container-fluid p-0 m-0'>
      <header className='container-fluid m-0 pe-3 border-bottom'>
        <nav className='navbar'>
          <Link
            to='/'
            className='navbar-brand fw-semibold fs-3'
          >
            Shop
          </Link>
        </nav>
      </header>
      <main className='container-fluid p-0 m-0'>{children}</main>
    </div>
  );
}
