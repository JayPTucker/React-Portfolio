import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";

// Even though Router, Routes, Route, and Link are not used in this file, they are needed for the app to work
import "../styles/Navbar.css";


function NavbarFunc() {
  return (
    <Navbar expand="md" className="navbar">
    <Container>

      <Navbar.Brand>
        <img className="navbar-logo" alt="My logo" src="./favicon.ico"></img>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-collapse" />

      <Navbar.Collapse id="navbar-collapse">

        <Nav className="navbar-links-col ms-auto">
          <Nav.Link href="/#projects" className="navbar-link" rel="noopener noreferrer"><span className='navbar-link-number'>01. </span>Projects</Nav.Link>
          <Nav.Link href="/#about" className="navbar-link" rel="noopener noreferrer"><span className='navbar-link-number'>02. </span>About</Nav.Link>
          {/* <Nav.Link href="/#experience" className="navbar-link" rel="noopener noreferrer"><span className='navbar-link-number'>02. </span>Experience</Nav.Link> */}
          <Nav.Link href="/#contactRow" className="navbar-link" rel="noopener noreferrer"><span className='navbar-link-number'>03. </span>Contact</Nav.Link>
          <Nav.Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1EJdzVG4qJjfpTwqXrnh_knmB5JlADeye/view?usp=sharing" className="resume-link">Resume</Nav.Link>
        </Nav>

      </Navbar.Collapse>

    </Container>
  </Navbar>
  )};

export default NavbarFunc;
