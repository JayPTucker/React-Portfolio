import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImJay from "../assets/im-jay.png";
import BarryArt from "../assets/jay-png-full.png";
import meIRL from "../assets/me-irl.png";

import "../style/Home.css";

function Home() {
    return(     
        <Container> 
            <Row className="jay-art justify-content-center text-center" style={{ backgroundImage: `url(${BarryArt})` }}>
                <Col>
                    <img className="im-jay" src={ImJay} alt="art of me"></img>
                </Col>
            </Row>

            <Row className="justify-content-center text-center">
                <Col md={10}>
                    <img className="irl-pic" src={meIRL}></img>

                    <h1 className="hi">Hi.</h1>
                    <p className="mini-bio">I'm a Web Designer, Developer, Video Editor, and Computer Enthusiest/Tech Guru around the Dyersburg, Tennessee area.  
                        I have a passion for Web Design, Database Development, and genuinely enjoy creating fun applications 
                        that are User Friendly, Useful, and Efficient.  I also have a vast knowledge when it comes to Computers and or
                        technology in general and have had plenty of experience in Video Editing using Premiere Pro. 
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;