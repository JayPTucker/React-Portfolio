import React from "react";
import { Row, Col } from "react-bootstrap";

import "../style/Home.css";

import picOfMe from "../assets/me.png"

function HomePage() {
    return(
        <Row className="justify-content-center">
            {/* <Col md={6}>


                <p class="fillertext">Test</p>
                <p class="fillertext">Test</p>
                <p class="fillertext">Test</p>
                <p class="fillertext">Test</p>

            </Col>
            <Col md={6} className="text-center">
                <img className="picOfMe" src={picOfMe} alt="Pic of me"></img>
            </Col> */}
        </Row>
    )
}

export default HomePage;