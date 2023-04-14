import React from "react";
import { Row, Col } from "react-bootstrap";

import favicon from "./assets/favicon.png"
import "./style/Navbar.css"

// Below is the code for the navbar. It is a React component that is imported into the App.js file 
// and it is rendered on the page. The navbar is a sticky, fixed-top element that is hidden when 
// the user scrolls down and is revealed when the user scrolls up. The navbar is also responsive 
// and will collapse into a hamburger menu on smaller screens.
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
        <Row className="navbar sticky-top fixed-top" id="navbar">
            <Col md={3}>
                <p className="navbar-title">Jay Paul Tucker</p>
            </Col>

            <Col md={9} className="navbar-links-col">
                <a className="navbar-link" href="https://jayptucker.com">Home</a>
                <a className="navbar-link" href="#projects">Work</a>
                <a className="navbar-link">About</a>
                <a className="navbar-link" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1EJdzVG4qJjfpTwqXrnh_knmB5JlADeye/view?usp=sharing">Resume</a>
            </Col>

            {/* <a href="mailto:jaypaultucker@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="shortcut-icon mail-icon" icon={faEnvelope} /></a>
            <a href="https://github.com/JayPTucker" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="shortcut-icon github-icon" icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/jayptucker/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="shortcut-icon linkedin-icon" icon={faLinkedin} /></a> */}

        </Row>
    )
}

export default Navbar;
