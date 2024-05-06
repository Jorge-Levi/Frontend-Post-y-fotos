// src/components/NavBar.tsx
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand>
        <LinkContainer to="/">
          <Nav.Link>Mi Aplicación</Nav.Link>
        </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* Otros enlaces aquí */}
          <LinkContainer to="/logs">
            <Nav.Link>Logs</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
