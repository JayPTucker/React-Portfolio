import React from "react";
import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faDiscord, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import "./Navbar.css"

function Navbar() {
    return (
        <Row className="navbar-row justify-content-center text-center">
            <Col md={2}>
                {/* FILLER */}
            </Col>
            <Col md={8}>
                <a className="navbar-link" href="/">Home</a>
            </Col>
            <Col md={2}>
                <Row>
                    <Col className="shortcut-col">
                        <a href="/"><FontAwesomeIcon className="shortcut-icon mail-icon" icon={faEnvelope} /></a>
                    </Col>
                    <Col className="shortcut-col">
                        <a href="/"><FontAwesomeIcon className="shortcut-icon discord-icon" icon={faDiscord} /></a>
                    </Col>
                    <Col className="shortcut-col">
                        <a href="/"><FontAwesomeIcon className="shortcut-icon github-icon" icon={faGithub} /></a>
                    </Col>
                    <Col className="shortcut-col">
                        <a href="/"><FontAwesomeIcon className="shortcut-icon linkedin-icon" icon={faLinkedin} /></a>
                    </Col>
                    <Col className="shortcut-col">
                        <a href="https://www.youtube.com/channel/UCGtcNXMyBFkXJUcZpyrizIg?view_as=subscriber"><FontAwesomeIcon className="shortcut-icon youtube-icon" icon={faYoutube} /></a>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Navbar;