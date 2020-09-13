import React  from "react";
import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import "../style/Home.css";

import stars from "../assets/stars.mp4";
import picOfMe from "../assets/me.png";

import pencil from "../assets/pencil.png";
import computer from "../assets/computer.png";
import internet from "../assets/internet.png";

import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";


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

    document.addEventListener("touchstart", function() {},false);

    return(
        <div>
            <Row className='frontpage-row' id="front-page">
                <video className="background-vid" autoPlay loop muted>
                    <source src={stars} type="video/mp4" />
                </video>

                <Col md={6} className="text-center">
                    <img className="picOfMe" src={picOfMe} alt="Pic of Me"></img>
                </Col>
                <Col md={6} className="">
                    <p className="fp-title">Jay Paul Tucker</p>
                    <p className="fp-bio">Hey there, my name is Jay Paul Tucker.  I am a UX/UI Developer,
                    IT Specialist, <a href="#info-row" className="fp-hyperlink">& more</a>.  Located in the Western Tennessee area.</p>

                    <Row className="fp-skill-row">
                        <Col md={4}>
                            <p className="fp-skill">UX/UI Design</p>
                            <p className="fp-skill">Database Creation</p>
                            <a href="#skills-row" className="fp-skill fp-hyperlink">& more</a>
                        </Col>
                        <Col md={6} className="text-center">
                            <a href="tel:7316764285"><button className="contact-me-btn"><FontAwesomeIcon icon={faPhone} />  CALL ME</button></a>
                            {/* <a href="mailto:jayptuckerimportant@gmail.com" class="email-link">jayptuckerimportant@gmail.com</a> */}
                            <a href="mailto:jayptuckerimportant@gmail.com"><button className="contact-me-btn"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>  EMAIL ME</button></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            

            <Row className="info-row text-center" id="info-row">
                <Col md={12}>
                    <Row className="justify-content-center">
                        <Col md={3} className="info-section">
                            <img className="info-pencil" src={pencil} alt="Pencil"></img>
                            <p className="info-title">Design what you want</p>
                            <p className="info-bio">
                                I have 2+ years of Experience with Graphic Design as well as 8+ Months of Experience in HTML, CSS, React, and other Languages relating to design.  I'll make what you want and take the critiquing where it is needed.
                            </p>
                        </Col>
                        <Col md={3} className="info-section">
                            <img className="info-computer" src={computer} alt="computer"></img>
                            <p className="info-title">Code what you need</p>
                            <p className="info-bio">
                                My Skills in Coding are advancing everyday.  Whether that's learning Database creation and management, creating full-stack applications, & more.  I'm a fast learner and capable of adapting to new skills and technologies that are released with time.
                            </p>
                        </Col>
                        <Col md={3} className="info-section">
                            <img className="info-internet" src={internet} alt="internet"></img>
                            <p className="info-title">Tech Skills/Experience</p>
                            <p className="info-bio">
                                I have always kept up with the latest Technologies.  Ranging from Computers all the way to Tech in general.  I've had 4+ Years of Experience in IT Support, Building Computers, General Computer and Internet Support.  (I can basically fix your WiFi).
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="work-row text-center justify-content-center" id="work-row">
                <Col md={12}>
                    <p className="work-row-title">My Recent Work</p>
                    <p className="sub-title">Below are a few Projects I would like to Display that I have worked very hard on over the past year.</p>
                    
                    <Row className="justify-content-center text-center">
                        <Col md={4} className="container">
                            <img className="image" src={project1} alt="Witter"></img>
                            <div className="overlay">
                                <Col md={12} className="text">
                                    <p className="work-bio">
                                        Witter is a Site I created with a group that was based off of Twitter.  It uses MySQL, Password Encryption, etc, to offer a fun, simple social media experience.
                                    </p>

                                    <a target="_blank" rel="noopener noreferrer" href="https://nakinojay.herokuapp.com/">
                                        <button className="live-link-btn">
                                            Live Link
                                        </button>
                                    </a>
                    
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/JayPTucker/NaKiNoJay">
                                        <button className="github-link-btn">
                                            Github Link
                                        </button>
                                    </a>

                                </Col>
                            </div>
                        </Col>

                        <Col md={4} className="container">
                            <img className="image" src={project2} alt="Employee Tracker"></img>
                            <div className="overlay">
                                <Col md={12} className="text">
                                    <p className="work-bio">
                                        A Highly Configured MySQL, jQuery, NodeJS-Based Application that allows Companies to thoroughly organize their employees through a Database.
                                    </p>
                    
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/JayPTucker/employee-tracker">
                                        <button className="github-link-btn">
                                            Github Link
                                        </button>
                                    </a>
                                </Col>
                            </div>
                        </Col>

                        <Col md={4} className="container">
                            <img className="image" src={project3} alt="Employee Tracker"></img>
                            <div className="overlay">
                                <Col md={12} className="text">
                                    <p className="work-bio">
                                        My Old Portfolio Website that was Coded in HTML/CSS that gave it a seamless and responsive design.
                                    </p>
                                    
                                    <a target="_blank" rel="noopener noreferrer" href="https://jayptucker.github.io/">
                                        <button className="live-link-btn">
                                            Live Link
                                        </button>
                                    </a>
                    
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/JayPTucker/JayPTucker.github.io">
                                        <button className="github-link-btn">
                                            Github Link
                                        </button>
                                    </a>
                                </Col>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4} className="container">
                            <img className="image" src={project4} alt="Employee Tracker"></img>
                            <div className="overlay">
                                <Col md={12} className="text">
                                    <p className="work-bio">
                                        TRP is a GTA V, FiveM-Based Server.  I did Dev Work on here relating to In-game Menu Design & more using Vue.js alongside HTML/CSS.
                                    </p>
                                    
                                    <a target="_blank" rel="noopener noreferrer" href="https://twitchrp.com">
                                        <button className="live-link-btn">
                                            Live Link
                                        </button>
                                    </a>
                                </Col>
                            </div>
                        </Col>

                        <Col md={4} className="container">
                            <img className="image" src={project5} alt="Employee Tracker"></img>
                            <div className="overlay">
                                <Col md={12} className="text">
                                    <p className="work-bio">
                                        Weather Center is a Website that uses WeatherAPI in order to assist you in getting the Weather from anywhere you want.
                                    </p>
                                    
                                    <a target="_blank" rel="noopener noreferrer" href="https://jayptucker.github.io/weather-center/">
                                        <button className="live-link-btn">
                                            Live Link
                                        </button>
                                    </a>
                    
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/JayPTucker/weather-center">
                                        <button className="github-link-btn">
                                            Github Link
                                        </button>
                                    </a>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            

            <Row className="skills-row text-center justify-content-center" id="skills-row">
                <Col md={12}>
                <Row>
                    <Col md={12} className="skill-col">
                        <p className="skills-row-title">My Skills</p>
                        <p className="skills-sub-title">Below are a list of Languages/Apps that I have rated myself on from a scale of one to five; meaning how knowledgeable I am in it.</p>
                    </Col>
                </Row>
                <Row>
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
                </Col>
            </Row>


            
        </div>
    )
}



export default HomePage;