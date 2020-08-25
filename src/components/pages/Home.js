import React, { useState, useEffect }  from "react";
import { Row, Col } from "react-bootstrap";

import "../style/Home.css";

import picOfMe from "../assets/me.png"

function HomePage() {
    // Sets our State to False
        const [bodycolor, setBodycolor] = useState(false);

    // Function that will determine when to change color
    const changeBackground = () => {
        // Console Logs where you are every time you scroll
        console.log(window.scrollY)
        if(window.scrollY >= 700) {
            setBodycolor(true)
        } else {
            setBodycolor(false) 
        }
    }

    // Event Listener waiting for you to Scroll
    window.addEventListener('scroll', changeBackground)

    return(
        <Row className={bodycolor ? 'bodycolor active justify-content-center' : 'bodycolor justify-content-center'}>
            <Col md={6}>
                <p class="fillertext">Test</p>
                <p class="fillertext">Test</p>
                <p class="fillertext">Test</p>
                <p class="fillertext">Test</p>

            </Col>
        </Row>
    )
}

export default HomePage;