// src/components/Navigation.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          React App
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/posts">
            Posts
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
