import React from 'react';
import { Row, Col } from "react-bootstrap";

// Even though Router, Routes, Route, and Link are not used in this file, they are needed for the app to work
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
  return (
  <Row className="navbar sticky-top fixed-top">
    <Col md={4}>
        <p className="navbar-title">Jay Paul Tucker</p>
    </Col>

    <Col md={8} className="navbar-links-col">
        <a className="navbar-link" href="/">Home</a>
        <a className="navbar-link" href="/#work">Work</a>
        <Link to="/about" className="navbar-link">About</Link>
        <a className="navbar-link" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1EJdzVG4qJjfpTwqXrnh_knmB5JlADeye/view?usp=sharing">Resume</a>
    </Col>
  </Row>
  )};

export default Navbar;
