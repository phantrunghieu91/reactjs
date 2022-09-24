import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <h1>Hacker News</h1>
      <div className='navbar fw-bold fs-4 bg-light p-3'>
        <button
          className='nav-link btn btn-light'
          onClick={() => {
            navigate(`/hacker-news`, { state: { type: 'top' } });
          }}
        >
          Top Stories
        </button>
        <button
          className='nav-link btn btn-light'
          onClick={() => {
            navigate(`/hacker-news`, { state: { type: 'new' } });
          }}
        >
          Latest Stories
        </button>
        <button
          className='nav-link btn btn-light'
          onClick={() => {
            navigate(`/hacker-news`, { state: { type: 'best' } });
          }}
        >
          Hot Stories
        </button>
      </div>
    </div>
  );
};

export default Header;
