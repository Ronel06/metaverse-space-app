import React from 'react'
import './Navigation.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/images/landing/header/logo.png';




const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <div className="container-fluid">
        <Navbar.Brand className="logo-header" href="#home"><img src={logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-font  me-2" href="#features">ABOUT</Nav.Link>
            <Nav.Link className="nav-font  me-2" href="#download">DOWNLOAD</Nav.Link>
            <Nav.Link className="nav-font  me-2" href="#news&events">NEWS&EVENTS</Nav.Link>
            <Nav.Link className="nav-font  me-2" href="#contactus">CONTACT US</Nav.Link>
          </Nav>
          <Nav>
            <div>
              <Button className="btn-login me-2" variant="primary" size="sm">
                Login
              </Button>
              <Button className="btn-signup" variant="secondary" size="sm">
                Register
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
  )
}

export default Navigation