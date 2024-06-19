import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function MyNav() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#"></Navbar.Brand>
      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./">Főoldal</Nav.Link>
            <Nav.Link href="./about">Rólam</Nav.Link>
            <Nav.Link href="./book">Könyv</Nav.Link>
            <Nav.Link href="./contact">Kapcsolat</Nav.Link>
            <Nav.Link href="./blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
