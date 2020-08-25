import React, { useState }  from "react";
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
        if(window.scrollY >= 350) {
            setBodycolor(true)
        } else {
            setBodycolor(false) 
        }
    }

    // Event Listener waiting for you to Scroll
    window.addEventListener('scroll', changeBackground)

    return(
        <Row className={bodycolor ? 'bodycolor active fontpage-row justify-content-center' : 'bodycolor frontpage-row justify-content-center'}>
            <Col md={6} className="text-center">
                <img className="picOfMe" src={picOfMe} alt="Pic of Me"></img>
            </Col>
            <Col md={6}>
                <p className="fp-title">Jay Paul Tucker</p>
                <p className="fp-bio">Hey there, my name is Jay Paul Tucker.  I am a UI/UX Designer, <br></br>
                IT Specialist, & more.  Located in West Tennessee region.</p>

                <Row className="fp-skill-row text-center">
                    <Col>
                        <a className="fp-skill" href="/">UI/UX Design</a>
                    </Col>
                    <Col>
                        <a className="fp-skill" href="/">Databases</a>
                    </Col>
                    <Col>
                        <a className="fp-skill" href="/">Web Design</a>
                    </Col>
                    <Col>
                        <a className="fp-skill" href="/">Front-end</a>
                    </Col>
                    <Col>
                        <a className="fp-skill" href="/">Back-end</a> 
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default HomePage;