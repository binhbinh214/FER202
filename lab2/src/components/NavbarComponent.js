import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "font-awesome/css/font-awesome.min.css";

function NavbarComponent() {
  return (
    <Navbar className="container">
      <Navbar.Brand href="#">Pizza House</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto">
          <Nav.Link href="#" active>
            Home
          </Nav.Link>
          <Nav.Link href="#">About us</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
        <Form className="Search d-flex" role="search">
          <FormControl type="search" placeholder="Search" />
          <Button variant="danger" type="submit" className="mx-2">
            <i className="fa fa-search"></i>
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
