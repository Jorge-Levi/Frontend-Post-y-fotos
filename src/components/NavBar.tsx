import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand as={LinkContainer} to="/">
        <Nav.Link>Mi Aplicación</Nav.Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
