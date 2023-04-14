import React from 'react';
import { Row, Col } from "react-bootstrap";

// Even though Router, Routes, Route, and Link are not used in this file, they are needed for the app to work
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {
  return (
  <Row className="navbar sticky-top fixed-top" id="navbar">
    <Col md={3}>
        <p className="navbar-title">Jay Paul Tucker</p>
    </Col>

    <Col md={9} className="navbar-links-col">
        <a className="navbar-link" href="/">Home</a>
        <a className="navbar-link" href="/#work">Work</a>
        <Link to="/about" className="navbar-link">About</Link>
        <a className="navbar-link" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1EJdzVG4qJjfpTwqXrnh_knmB5JlADeye/view?usp=sharing">Resume</a>
    </Col>

    {/* <a href="mailto:jaypaultucker@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="shortcut-icon mail-icon" icon={faEnvelope} /></a>
    <a href="https://github.com/JayPTucker" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="shortcut-icon github-icon" icon={faGithub} /></a>
    <a href="https://www.linkedin.com/in/jayptucker/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="shortcut-icon linkedin-icon" icon={faLinkedin} /></a> */}

  </Row>
  );
};

export default Navbar;
