import React from 'react';
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

// Even though Router, Routes, Route, and Link are not used in this file, they are needed for the app to work
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "../styles/Navbar.css";


function NavbarFunc() {
  return (
    <Navbar expand="md" className="navbar">
    <Container>

      <Navbar.Brand className="navbar-title">Jay Paul Tucker</Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-collapse" />

      <Navbar.Collapse id="navbar-collapse">

        <Nav className="navbar-links-col ms-auto">
          <Nav.Link href="/" className="navbar-link"><span className='navbar-link-number'>01. </span>Home</Nav.Link>
          <Nav.Link href="/#work" className="navbar-link"><span className='navbar-link-number'>02. </span>Work</Nav.Link>
          <Nav.Link as={Link} to="/about" className="navbar-link"><span className='navbar-link-number'>03. </span>About</Nav.Link>
          <Nav.Link href="/#contact" className="navbar-link"><span className='navbar-link-number'>04. </span>Contact</Nav.Link>
          <Nav.Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1EJdzVG4qJjfpTwqXrnh_knmB5JlADeye/view?usp=sharing" className="resume-link">Resume</Nav.Link>
        </Nav>

      </Navbar.Collapse>

    </Container>
  </Navbar>
  )};

export default NavbarFunc;
