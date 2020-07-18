import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ImJay from "../assets/im-jay.png";
import BarryArt from "../assets/jay-png-full.png";
import meIRL from "../assets/me-irl.png";
import more from "../assets/more.png";
import pencil from "../assets/pencil.png";
import laptop from "../assets/laptop.png";

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

            {/* ------------------------------------------ */}

            <Row className="justify-content-center text-center">
                <Col>
                    <img className="more" src={more} alt="Three Dots to indicate more on the page"></img>
                </Col>
            </Row>

            {/* ------------------------------------------ */}

            <Row className="justify-content-center text-center">
                <Col>
                    <p className="bolder-title">What I can do.</p>
                </Col>
            </Row>

            <Row className="justify-content-center text-center">
                <Col>
                    <img className="pencil" src={pencil} alt="Picture of a Pencil"></img>
                    <p className="text-title">Design what you want.</p>
                    <p className="text">I have a lot of experience when it comes to Web Design.  You can see that by judging this Website's design and also what's 
                        on my Work page as well.  My skills range from Basic-Advanced HTML/CSS all the way to Bootstrap, Materialize, etc.
                    </p>
                </Col>
            </Row>

            {/* ------------------------------------------ */}

            <Row className="justify-content-center text-center">
                <Col>
                    <img class="laptop" src={laptop} alt="Picture of a Laptop"></img>
                </Col>
            </Row>

            <Row className="justify-content-center text-center">
                <Col>
                    <p className="text-title">Code what you need.</p>
                    <p className="text">My Skills in Coding are advancing everyday. Learning new Languages all the time, so I can create the Website you need with all of
                        the latest technologies applied into it.<br/><br/>
                        <u>My Main Language Skill-Set:</u>
                        <br/><br/>
                        | HTML | CSS | JavaScript | jQuery | Git | Bootstrap | MySQL | Sequelize | Heroku | Express | API | Handlebars | NodeJS | & More
                    </p>
                </Col>
            </Row>

            {/* ------------------------------------------ */}

            <Row className="justify-content-center text-center">
                <Col>
                    <img className="more" src={more} alt="Three Dots to indicate more on the page"></img>
                </Col>
            </Row>

            {/* ------------------------------------------ */}

            <Row className="justify-content-center text-center">
                <Col>
                    <p class="bolder-title">I can help!</p>
                    <p class="text-title">I'm open to any job offers.</p>
                    <p class="text">If my Site and Work has peaked your interest and you'd like to know more about me and what I can do, please
                        contact me below, or if you wanna just say hey - go for it!
                    </p>
                    <button target="_blank" onclick="location.href='mailto:jayptuckerimportant@gmail.com'" class="message-me">MESSAGE ME</button>
                </Col>
            </Row>
            

        </Container>
    )
}

export default Home;