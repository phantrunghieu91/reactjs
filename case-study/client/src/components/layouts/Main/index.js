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
        <Row className='w-100'>
          <Col
            xs={2}
            md={2}
            lg={2}
          >
            {username && <SideBar />}
          </Col>
          <Col
            xs={10}
            md={10}
            lg={10}
          >
            {children}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MainLayout;
