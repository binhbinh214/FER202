import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header className="py-3">
      <Container className="d-flex justify-content-between">
        <img src="images/FPT_logo.png" alt="Logo" width="200" />
        <Navbar expand="lg" className="navbar-light">
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Trang Chủ</Nav.Link>
              <Nav.Link href="#">Ngành học</Nav.Link>
              <Nav.Link href="#">Tuyển sinh</Nav.Link>
              <Nav.Link href="#">Sinh viên</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="search-input d-flex align-items-center">
          <label htmlFor="search" className="me-2 text-black">
            Search
          </label>
          <input type="text" id="search" className="form-control" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
