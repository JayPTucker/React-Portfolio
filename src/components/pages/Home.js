import React  from "react";
import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import "../style/Home.css";

import stars from "../assets/stars.mp4";
import picOfMe from "../assets/me.png";

import pencil from "../assets/pencil.png";
import computer from "../assets/computer.png";
import internet from "../assets/internet.png";

import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";


import one from "../assets/skills/1.png"
import two from "../assets/skills/2.png"
import three from "../assets/skills/3.png"
import four from "../assets/skills/4.png"
import five from "../assets/skills/5.png"
import six from "../assets/skills/6.png"
import seven from "../assets/skills/7.png"
import eight from "../assets/skills/8.png"
import nine from "../assets/skills/9.png"
import ten from "../assets/skills/10.png"
import eleven from "../assets/skills/11.png"
import twelve from "../assets/skills/12.png"
import thirteen from "../assets/skills/13.png"
import fourteen from "../assets/skills/14.png"



function HomePage() {

    return(
        <div>
            <Row className='frontpage-row'>
                <video className="background-vid" src={stars} autoPlay loop muted></video>

                <Col md={6} className="text-center">
                    <img className="picOfMe" src={picOfMe} alt="Pic of Me"></img>
                </Col>
                <Col md={6} className="">
                    <p className="fp-title">Jay Paul Tucker</p>
                    <p className="fp-bio">Hey there, my name is Jay Paul Tucker.  I am a UI/UX Designer,
                    IT Specialist, <a href="/">& more</a>.  Located in the Western Tennessee area.</p>

                    <Row className="fp-skill-row">
                        <Col md={4}>
                            <p className="fp-skill">UX/UI Design</p>
                            <p className="fp-skill">Database Design</p>
                            <p className="fp-skill">& more</p>
                        </Col>
                        <Col md={4} className="text-center">
                            <a href="tel:7316764285"><button className="contact-me-btn"><FontAwesomeIcon icon={faPhone} /> CONTACT ME</button></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            

            <Row className="info-row text-center">
                <Col md={12}>
                    <Row className="justify-content-center">
                        <Col md={3} className="info-section">
                            <img className="info-pencil" src={pencil} alt="Pencil"></img>
                            <p className="info-title">Design what you want</p>
                            <p className="info-bio">
                                Filler Text
                            </p>
                        </Col>
                        <Col md={3} className="info-section">
                            <img className="info-computer" src={computer} alt="computer"></img>
                            <p className="info-title">Code what you need</p>
                            <p className="info-bio">
                                Filler Text
                            </p>
                        </Col>
                        <Col md={3} className="info-section">
                            <img className="info-internet" src={internet} alt="internet"></img>
                            <p className="info-title">Tech Skills/Experience</p>
                            <p className="info-bio">
                                Filler Text
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="work-row text-center justify-content-center">
                <Col md={12}>
                    <p className="work-row-title">My Recent Work</p>
                    <p>Here are a few Projects I've worked on Recently</p>
                    
                    <Row className="justify-content-center">
                        <Col md={3}>
                            <div className="container">
                                <img className="image" src={project1} alt="Witter"></img>
                                <div className="overlay">
                                    <div className="text">
                                        <p className="work-bio">
                                            Witter is a Site based off of Twitter.  It uses Databases, Password Encryption, etc, to offer a fun user experience.
                                        </p>
                                        <button className="live-link-btn">
                                            Live Link
                                        </button>
                                        <button className="github-link-btn">
                                            Github Link
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="container">
                                <img className="image" src={project2} alt="Employee Tracker"></img>
                                <div className="overlay">
                                    <div className="text">
                                        <p className="work-bio">
                                            A Highly Configured MySQL/NodeJS Based App that allows Companies to organize their employees.
                                        </p>
                                        <button className="live-link-btn">
                                            Live Link
                                        </button>
                                        <button className="github-link-btn">
                                            Github Link
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <p>Project 3</p>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col md={3}>
                            <p>Project 4</p>
                        </Col>
                        <Col md={3}>
                            <p>Project 5</p>
                        </Col>
                        <Col md={3}>
                            <p>Project 6</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            

            <Row className="skills-row text-center">
                <Col md={12} className="skill-col">
                    <p className="skills-row-title">My Skills</p>
                    <p>Below are a list of Languages/Apps that I have rated myself on from a scale of one to five; meaning how good I think I am at it.</p>
                </Col>
            </Row>
            <Row className="skills-row text-center justify-content-center">
                <Col md={4} className="skill-col">
                    <img src={one} className="skill-img" alt="skill"></img>
                    <img src={three} className="skill-img" alt="skill"></img>
                    <img src={five} className="skill-img" alt="skill"></img>
                    <img src={seven} className="skill-img" alt="skill"></img>


                </Col>
                <Col md={4} className="skill-col">
                    <img src={two} className="skill-img" alt="skill"></img>
                    <img src={four} className="skill-img" alt="skill"></img>
                    <img src={six} className="skill-img" alt="skill"></img>
                    <img src={eight} className="skill-img" alt="skill"></img>
                    <img src={ten} className="skill-img" alt="skill"></img>

                </Col>
                <Col md={4} className="skill-col">
                    <img src={twelve} className="skill-img" alt="skill"></img>
                    <img src={fourteen} className="skill-img" alt="skill"></img>
                    <img src={eleven} className="skill-img" alt="skill"></img>
                    <img src={thirteen} className="skill-img" alt="skill"></img>
                    <img src={nine} className="skill-img" alt="skill"></img>
                </Col>
            </Row>


            
        </div>
    )
}



export default HomePage;