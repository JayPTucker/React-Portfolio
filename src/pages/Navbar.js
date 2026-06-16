import React, { useState, useEffect } from 'react';
import { Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Even though Router, Routes, Route, and Link are not used in this file, they are needed for the app to work
import "../styles/Navbar.css";


function NavbarFunc() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Create Intersection Observer to detect which section is in view
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('[id="home"], [id="projects"], [id="contactRow"]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <Navbar expand="md" className="navbar">
    <Container>

      <Navbar.Brand>
        <img className="navbar-logo" alt="My logo" src="./favicon.ico"></img>
        <span className="navbar-logo-text">Jay Paul Tucker</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-collapse" />

      <Navbar.Collapse id="navbar-collapse">

        <div className="navbar-links-col ms-auto">
          <a href="/#home" className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`} rel="noopener noreferrer"><span className='navbar-link-number'>01. </span>Home</a>
          <a href="/#projects" className={`navbar-link ${activeSection === 'projects' ? 'active' : ''}`} rel="noopener noreferrer"><span className='navbar-link-number'>02. </span>Projects</a>
          <a href="/#contactRow" className={`navbar-link ${activeSection === 'contactRow' ? 'active' : ''}`} rel="noopener noreferrer"><span className='navbar-link-number'>03. </span>Contact</a>
          <a className="info-panel-icons" href="https://github.com/JayPTucker" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="nav-icon" icon={faGithub} size="2x" />
          </a>
          <a className="info-panel-icons" href="https://www.linkedin.com/in/jayptucker/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="nav-icon" icon={faLinkedin} size="2x" />
          </a>
          <a className="info-panel-icons" href="mailto:jaypaultucker@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="nav-icon" icon={faEnvelope} size="2x" />
          </a>

          <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1G0FqwVXcEtQ6gp5xPqWjyeNZ5pLx0ksw/view?usp=sharing" className="resume-link">Resume</a>
        </div>

        <script src="https://kit.fontawesome.com/80cf9508d8.js" crossOrigin="anonymous"></script>

      </Navbar.Collapse>

    </Container>
  </Navbar>
  )};

export default NavbarFunc;
