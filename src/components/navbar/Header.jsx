import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.scss";
import home from "../../assets/imgs/Ellipse.png";
function Header() {
  return (
    <Navbar className="header">
      <Container>
        <Navbar.Brand href="/">
          <img src={home} alt="home" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon "></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="#services">services</Nav.Link>
            <Nav.Link href="#skills">skills</Nav.Link>
            <Nav.Link href="#contact us">contact us</Nav.Link>
            <Nav.Link
              href="#"
              className="login"
              style={{
                background: "transparent",
                border: "2px solid #66BB87",
              }}
            >
              sign up
            </Nav.Link>
            <Nav.Link href="#" className="login">
              log in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
