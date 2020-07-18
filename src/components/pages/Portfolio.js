import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Portfoliopng from "../assets/portfolio.png";

function Portfolio() {
    return(
        <Row className="justify-content-center text-center">
            <Col>
                <img src={Portfoliopng} alt="My Portfolio"></img>
            </Col>
        </Row>
    )
}

export default Portfolio;