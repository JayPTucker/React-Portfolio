import React from "react";
import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faDiscord, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import favicon from "../components/assets/favicon.png"
import "./Navbar.css"

function Navbar() {

    return (
        <Row className="navbar navbar-row justify-content-center text-center">
            <Col md={2}>
                <img className="logo" alt="logo" src={favicon}></img>
            </Col>
            <Col md={8}>
                <Row>
                    <Col className="navbar-link-col">
                        <a className="navbar-link" href="/">Home</a>
                    </Col>
                    <Col className="navbar-link-col">
                        <a className="navbar-link" href="/">Work</a>
                    </Col>
                    <Col className="navbar-link-col">
                        <a className="navbar-link" href="/">Portfolio</a>
                    </Col>
                </Row>
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