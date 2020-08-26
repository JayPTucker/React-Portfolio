import React, { useState }  from "react";
import { Row, Col } from "react-bootstrap";

import "../style/Home.css";

import picOfMe from "../assets/me.png"

function HomePage() {
    // Sets our State to False
        const [bodybackground, setBodybackground] = useState(false);

    // Function that will determine when to change background
    const changeBackground = () => {
        // Console Logs where you are every time you scroll
        console.log(window.scrollY)
        if(window.scrollY >= 350) {
            setBodybackground(true)
        } else {
            setBodybackground(false) 
        }
    }

    // Event Listener waiting for you to Scroll
    window.addEventListener('scroll', changeBackground)

    return(
        <Row className={bodybackground ? 'bodybackground active fontpage-row' : 'bodybackground frontpage-row'}>
            <Col md={6} className="text-center">
                <img className="picOfMe" src={picOfMe} alt="Pic of Me"></img>
            </Col>
            <Col md={6}>
                <p className="fp-title">Jay Paul Tucker</p>
                <p className="fp-bio">Hey there, my name is Jay Paul Tucker.  I am a UI/UX Designer, <br></br>
                IT Specialist, <a href="/">& more</a>.  Located in West Tennessee region.</p>

                <Row className="fp-skill-row">
                    <Col md={4}>
                        <p className="fp-skill">UX/UI Design</p>
                        <p className="fp-skill">Database Design</p>
                        <p className="fp-skill">& more</p>
                    </Col>
                    <Col md={4} className="text-center">
                        <button className="contact-me-btn">CONTACT ME</button>
                    </Col>

                </Row>
            </Col>
        </Row>
    )
}

export default HomePage;