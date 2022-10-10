import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import Header from '../Header';
import SideBar from '../SideBar';

const MainLayout = ({ children }) => {
  const { username } = useSelector(state => state.user.userInfo);

  return (
    <Container
      fluid
      className='p-0 bg-secondary bg-gradient w-100 vh-100 overflow-hidden d-flex flex-column'
    >
      <Header />
      <Container
        fluid
        className='p-0 d-flex flex-grow-1'
      >
        <Row className='w-100 m-0'>
          {username && (
            <Col
              xs={2}
              sm={2}
              md={2}
              lg={2}
              xl={1}
              xxl={1}
              className='p-0'
            >
              <SideBar />
            </Col>
          )}

          <Col
            xs={username ? 10 : 12}
            md={username ? 10 : 12}
            lg={username ? 10 : 12}
          >
            {children}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MainLayout;
