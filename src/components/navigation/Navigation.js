import React from 'react'
import './Navigation.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/images/landing/header/logo.png';




const Navigation = () => {
  return (
    <Navbar className=" nav-container sticky-top d-flex py-1 ps-5 pe-5"  expand="lg" bg="dark" variant="dark">
      <div className="container-fluid ms-2 me-2 p-0 justify-content-center ">
        <div>
        <Navbar.Brand className="me-5" href="/"><img src={logo}></img></Navbar.Brand>
        <Navbar.Toggle className="toggle-btn mt-3" aria-controls="responsive-navbar-nav"/>
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" me-auto d-sm-flex flex-sm-row justify-content-sm-between mt-sm-3 mb-sm-3">  
            <Nav.Link className="nav-font  me-3" href="#features">ABOUT</Nav.Link>
            <Nav.Link className="nav-font  me-3" href="downloads">DOWNLOAD</Nav.Link>
            <Nav.Link className="nav-font  me-3" href="#news&events">NEWS&EVENTS</Nav.Link>
            <Nav.Link className="nav-font  me-3" href="#contactus">CONTACT US</Nav.Link>
          </Nav>
          <Nav className='d-flex flex-row justify-content-center  '>
              <Button className="btn-login me-3" variant="primary" size="sm">
                Login
              </Button>
              <Button className="btn-signup" variant="secondary" size="sm">
                Register
              </Button>
          </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
  )
}

export default Navigation