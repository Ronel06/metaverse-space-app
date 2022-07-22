import React from 'react'
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/images/landing/header/logo.png';
import fb from '../../assets/images/landing/footer/fb.png';
import tw from '../../assets/images/landing/footer/tw.png';
import ds from '../../assets/images/landing/footer/ds.png';

import './Footer.css'

const Footer = () => {
  return (
    <div className="container-fluid custom-footer d-flex flex-column justify-content-end">
      <div className="row custom-row1">
        <Nav className="d-flex flex-row justify-content-center me-auto">
          <Nav.Link className="nav-font  me-2" href="#features">ABOUT</Nav.Link>
          <Nav.Link className="nav-font  me-2" href="#download">DOWNLOAD</Nav.Link>
          <Nav.Link className="nav-font  me-2" href="#news&events">NEWS&EVENTS</Nav.Link>
          <Nav.Link className="nav-font  me-2" href="#contactus">CONTACT US</Nav.Link>
        </Nav>
      </div>
      <div className="row custom-row2 text-center align-items-center" >
          <div  className="col"><img src={logo}></img></div>
          <div  className="col">©2021 HYPERVERSE. ALL RIGHTS RESERVED</div>
          <div className="col footer-icon">
            <img src={fb}></img>
            <img src={tw}></img>
            <img src={ds}></img>
          </div>
      </div>
    </div>
  )
}

export default Footer