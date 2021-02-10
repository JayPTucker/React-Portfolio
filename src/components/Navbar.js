import React from "react";
import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import favicon from "../components/assets/favicon.png"
import "./style/Navbar.css"

function Navbar() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0px";
        } else {
            document.getElementById("navbar").style.top = "-120px";
        }

        prevScrollpos = currentScrollPos;
    }

    return (
        <Row className="navbar navbar-row justify-content-center text-center sticky-top fixed-top" id="navbar">
            <Col md={2}>
                <img className="logo" alt="logo" src={favicon}></img>
            </Col>
            <Col md={8}>
                <Row>
                    <Col className="navbar-link-col">
                        <a className="navbar-link" href="https://jayptucker.com">Home</a>
                    </Col>
                    <Col className="navbar-link-col">
                        <a className="navbar-link" href="#work-row">Work</a>
                    </Col>
                    <Col className="navbar-link-col">
                        <a className="navbar-link" href="#skills-row">Skills</a>
                    </Col>
                    <Col className="navbar-link-col">
                        <a className="navbar-link" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1imWtrYo_CbS4fSQMH-904g9QVnJ42VZl/view?usp=sharing">Resume</a>
                    </Col>
                </Row>
            </Col>
            <Col md={2}>
                <Row>
                    <Col className="shortcut-col">
                        <a href="mailto:jaypaultucker@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="shortcut-icon mail-icon" icon={faEnvelope} /></a>
                    </Col>
                    {/* <Col className="shortcut-col">
                        <a href="https://discord.gg/MUPe9vf" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="shortcut-icon discord-icon" icon={faDiscord} /></a>
                    </Col> */}
                    <Col className="shortcut-col">
                        <a href="https://github.com/JayPTucker" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="shortcut-icon github-icon" icon={faGithub} /></a>
                    </Col>
                    <Col className="shortcut-col">
                        <a href="https://www.linkedin.com/in/jayptucker/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="shortcut-icon linkedin-icon" icon={faLinkedin} /></a>
                    </Col>
                    {/* <Col className="shortcut-col">
                        <a href="https://www.instagram.com/jayptucker/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="shortcut-icon instagram-icon" icon={faInstagram} /></a>
                    </Col> */}
                </Row>
            </Col>
        </Row>
    )
}

export default Navbar;