import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const BottomNavbar = () => {
  return (
    <div className='mt-5'>
      <br />
      <br />

      <Navbar fixed="bottom" bg="dark" variant="dark" style={{ justifyContent: 'center' }} >
        <Nav>
          <Nav.Link href="/contracts">Contratos</Nav.Link>
          <Nav.Link href="/messages">Mensagens</Nav.Link>
          <Nav.Link href="/profile">Perfil</Nav.Link>
          <Nav.Link href="/search">Pesquisar</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default BottomNavbar;
