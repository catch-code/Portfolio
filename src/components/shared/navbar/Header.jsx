import { Navbar, Nav, Container } from "react-bootstrap"
import "./navbar.scss"
import home from "../../../assets/imgs/Ellipse.png"
import { Link } from "react-router-dom"
import { useState } from "react"

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const addClass = () => {
    setIsActive((current) => !current);
  };
  return (
    <Navbar className="header" expand="md">
      <Container className={isActive ? "bg" : ""}>
        <Navbar.Brand href="/">
          <img src={home} alt="home" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white">
          <span className="navbar-toggler-icon bg-white" onClick={addClass}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto p-2">
            <Nav.Link href="/">home</Nav.Link>
            <Nav.Link href="#services">services</Nav.Link>
            <Nav.Link href="#skills">skills</Nav.Link>
            <Nav.Link href="#projects">projects</Nav.Link>
            <Nav.Link href="#contact">contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
