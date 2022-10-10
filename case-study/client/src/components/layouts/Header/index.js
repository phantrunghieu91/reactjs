import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../../features/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useSelector(state => state.user.userInfo);
  return (
    <Navbar
      expand='md'
      bg='dark'
      variant='dark'
      className='border-bottom border-secondary'
    >
      <Container
        fluid
        className='d-flex'
      >
        <Navbar.Brand
          as={Link}
          to='/'
        >
          MoneyManager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar' />
        <Navbar.Collapse id='navbar'>
          <Nav className='w-100'>
            {username && (
              <Container
                fluid
                className='d-flex justify-content-end align-items-center'
              >
                <span className='text-light'>{username}, </span>
                <Nav.Link
                  as={Link}
                  onClick={e => {
                    e.preventDefault();
                    dispatch(signOut());
                    navigate('/');
                  }}
                >
                  Sign out
                </Nav.Link>
              </Container>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
