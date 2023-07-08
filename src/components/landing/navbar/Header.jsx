import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.scss";
import home from "../../../assets/imgs/Ellipse.png";
function Header() {
  return (
    <Navbar className="header" expand="md">
      <Container>
        <Navbar.Brand href="/">
          <img src={home} alt="home" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white">
          <span className="navbar-toggler-icon bg-white"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="#services">services</Nav.Link>
            <Nav.Link href="#skills">skills</Nav.Link>
            <Nav.Link href="#projects">projects</Nav.Link>
            <Nav.Link href="#contact">contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
