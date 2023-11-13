import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const BottomNavbar = () => {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark" style={{ justifyContent: 'center' }}>
      <Nav>
        <Nav.Link href="/search">Procurar</Nav.Link>
        <Nav.Link href="/contracts">Contratos</Nav.Link>
        <Nav.Link href="/ofert">Oferecer</Nav.Link>
        <Nav.Link href="/messages">Mensagens</Nav.Link>
        <Nav.Link href="/profile">Perfil</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default BottomNavbar;
