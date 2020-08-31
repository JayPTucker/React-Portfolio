import React from "react";
import { Row, Col } from "react-bootstrap";

import "./style/Footer.css";

function Footer() {
    return (
        <Row className="footer-row text-center">
            <Col md={12}>
                <p>© 2020 <a className="hyperlink" href="https://jayptucker.com">Jay Paul Tucker</a> || All rights reserved.</p>
            </Col>
        </Row>
    )
}

export default Footer;