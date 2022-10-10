import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const SideBar = () => {
  return (
    <Navbar
      variant='dark'
      bg='dark'
      className='h-100 text-secondary d-flex flex-column justify-content-start'
      expand='md'
    >
      <Nav activeKey='/transaction'>
        <Nav.Item>Transactions</Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default SideBar;
