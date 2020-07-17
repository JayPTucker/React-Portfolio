import React from "react";
import { Row, Col } from "react-bootstrap";

import "./style/Footer.css";

function Footer() {
    return (
        <Row className="jay-art justify-content-center text-center">
            <Col>
                <ul className="footer-nav">
                        <li>
                            <a type="button" href="/" className="discord footer-tags" data-toggle="tooltip" data-placement="top" title="JayPTucker#3366">Discord</a>
                        </li>
                        <li>
                            <a className="footer-tags" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/jay-paul-tucker-10111319a/">Linkedin</a>
                        </li>
                        <li>
                            <a className="footer-tags" rel="noopener noreferrer" target="_blank" href="https://github.com/JayPTucker">GitHub</a>
                        </li>
                        <li>
                            <a className="footer-tags" href="mailto:jayptuckerimportant@gmail.com">Hire Me</a>
                        </li>
                    </ul>

                    <p className="copyright">© 2020 <a href="https://jayptucker.github.io/">Jay Paul Tucker</a> || All rights reserved.</p>
                
            </Col>
        </Row>
    )
}

export default Footer;