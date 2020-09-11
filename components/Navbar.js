import { Nav, Navbar } from "react-bootstrap";

export default function Navigator() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">Aayush Adhikari</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link onClick={aboutClick}>About</Nav.Link>
          <Nav.Link eventKey={2} onClick={contactClick}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
