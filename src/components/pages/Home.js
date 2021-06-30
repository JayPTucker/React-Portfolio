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

// function test() {
//     var email = document.getElementById("email")
//     email.select();
//     email.setSelectionRange(0, 99999)
//     document.execCommand("copy");
//     alert("Copied the Email to your Clipboard")
// }

function HomePage() {

    document.addEventListener("touchstart", function() {},false);

    return(
        <div>
            <Row className='frontpage-row' id="front-page">
                <video autoPlay loop muted repeat className="background-vid" >
                    <source src={stars} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <Col md={6} className="text-center">
                    <img className="picOfMe" src={picOfMe} alt="Pic of Me"></img>
                </Col>
                <Col md={6} className="">
                    <p className="fp-title">Jay Paul Tucker</p>
                    <p className="fp-bio">Hey there, my name is Jay Paul Tucker.  I'm a Full-Stack Web Developer,
                    IT Specialist, <a href="#info-row" className="fp-hyperlink">& more</a>.  Located in the Raleigh, NC.</p>
                    <p className="fp-email" id="email"><b>Email:</b> jaypaultucker@gmail.com</p>

                    <Row className="fp-skill-row">
                        <Col md={4}>
                            <p className="fp-skill">UX/UI Design</p>
                            <p className="fp-skill">Database Creation</p>
                            <a href="#skills-row" className="fp-skill fp-hyperlink">& more</a>
                        </Col>
                        <Col md={6} className="text-center">
                            <a href="tel:7316764285"><button className="contact-me-btn"><FontAwesomeIcon icon={faPhone} />  CALL ME</button></a>
                            <a href="mailto:jaypaultucker@gmail.com"><button className="email-btn contact-me-btn"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>  EMAIL ME</button></a>
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
                            Over the years I have learned key skills retaining to Web and Graphic design that allows me to create eye-catching Applications that are also efficient and clean.  Thanks to the several years of Computer and IT Experience I am able to understand what a consumer actually sees when they go to your Website, so with that, I’m able to determine what needs to go where and how it needs to look.
                            </p>
                        </Col>
                        <Col md={3} className="info-section">
                            <img className="info-computer" src={computer} alt="computer"></img>
                            <p className="info-title">Code what you need</p>
                            <p className="info-bio">
                            As a Full-Stack Developer, I have created so many unique ideas, but what it comes down to is creating them.  Starting from nothing and creating something genuinely interesting and useful.  That is something I can assure you that I am able to do.  Whatever is imagined, I can assure you with the years of Coding Experience I have, I can make that imagination a reality on the screen in front of you.                            </p>
                        </Col>
                        <Col md={3} className="info-section">
                            <img className="info-internet" src={internet} alt="internet"></img>
                            <p className="info-title">Tech Skills/Experience</p>
                            <p className="info-bio">
                            I’ve worked hard for all of my Technological Skills; most of it has been self-taught and the rest I have learned by furthering my Education with Vanderbilt University through their Coding Bootcamp.  Over the years I have learned so many things about Computers themselves; how they work, how to troubleshoot problems, etc.  All of these skills combined help me become an amazing developer and asset to a team, especially with the experience I have in Projects actually working and leading a team itself.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* =================================== */}

            <Row className="work-row justify-content-center text-center" id="work-row">

                <Col md={12}>
                    <p className="work-row-title">My Projects</p>
                    <p className="sub-title">Below are a few Projects I would like to display that I have worked very hard on over the past year.<br></br>Hover over or tap on any of the projects that you would like more information on.<br></br><i>(The Live Links might take at least 30 seconds to load at first)</i></p>
                </Col>
            
                {/* ===================================
                    PROJECT 1 - TOP STOCKER
                =================================== */}
                <Row className="project-row">

                    <Col md={4}>
                        <img className="project-image" src={project1} alt="TopStocker"></img>
                    </Col>
                    <Col md={8} className="text-center justify-content-center">
                        <p className="project-title">
                            Top Stocker
                        </p>
                        <p className="project-desc">
                            Top Stocker is a Full-Stack Web Application that allows Business owners to keep proper track of the stock they have in their store. However, this isn't necessarily meant for the stock that is on the shelves, but instead it's keeping track of the extra stock they have in the back, or at the top shelf, hence the name, "Top Stocker". Top Stocker was actually based off of Lowes Home Improvement and how they manage their top stock. This was made in order for the Top Stock to be easily kept track of using Amazon's Databases.                        </p>
                    </Col>

                    <Col md={4}>
                        {/* FILLER COL */}
                    </Col>


                    <Col md={8} className="text-center justify-content-center">
                        <a href="https://topstocker.herokuapp.com/"><button className="shortcut-btn">Live Link</button></a>
                        <a href="https://github.com/JayPTucker/TopStocker"><button className="shortcut-btn">GitHub Link</button></a>
                    </Col>

                </Row>

                {/* ===================================
                    PROJECT 2 - EMPLOYEE TRACKER
                =================================== */}

                <Row className="project-row">

                    <Col md={4}>
                        <img className="project-image" src={project2} alt="Employee Tracker"></img>
                    </Col>
                    <Col md={8}>
                        <p className="project-title">
                            Employee Tracker
                        </p>
                        <p className="project-desc">
                            This is an Application that allows Business Owners/Managers to Properly Manage and Edit their Employees, Roles, etc through the Terminal and MySQL Database using NodeJS. You can add Departments, Roles, and Employees as well as edit and delete them at your desire.                        </p>
                    </Col>

                    <Col md={4}>
                        {/* FILLER COL */}
                    </Col>

                    <Col md={8} className="text-center justify-content-center">
                        <a href="https://github.com/JayPTucker/employee-tracker"><button className="shortcut-btn">GitHub Link</button></a>
                    </Col>

                </Row>

                {/* ===================================
                    PROJECT 3 - WEATHER CENTER
                =================================== */}

                <Row className="project-row">

                    <Col md={4}>
                        <img className="project-image" src={project5} alt="Weather Center"></img>
                    </Col>
                    <Col md={8}>
                        <p className="project-title">
                            The Weather Center
                        </p>
                        <p className="project-desc">
                        This is a Website made to help you better get an understanding of the Weather conditions in the areas you'd like to see. Using this Site you'll be able to gather Weather-related Data from the Area of your Choice thanks to the Open Weather API (Linked Below). You may also view the 5-Day Forecast of any area you'd like and your most recent search is saved with Local Storage, so you may go back at any point and click on it without having to search again.                        </p>
                    </Col>

                    <Col md={4}>
                        {/* FILLER COL */}
                    </Col>

                    <Col md={8} className="text-center justify-content-center">
                        <a href="https://jayptucker.github.io/weather-center/"><button className="shortcut-btn">Live Link</button></a>
                        <a href="https://github.com/JayPTucker/weather-center"><button className="shortcut-btn">GitHub Link</button></a>

                    </Col>
                </Row>

                {/* ===================================
                    PROJECT 4 - TWITCH RP
                =================================== */}

                <Row className="project-row">

                    <Col md={4}>
                        <img className="project-image" src={project4} alt="Weather Center"></img>
                    </Col>
                    <Col md={8}>
                        <p className="project-title">
                            TwitchRP
                        </p>
                        <p className="project-desc">
                            TRP is a GTA V, FiveM-Based Server.  I did Dev Work on here relating to In-game Menu Design & more using Vue.js alongside HTML/CSS, allowing me to learn how to code for the actual game itself.
                        </p>
                    </Col>

                    <Col md={4}>
                        {/* FILLER COL */}
                    </Col>

                    <Col md={8} className="text-center justify-content-center">
                        <a href="https://twitchrp.com"><button className="shortcut-btn">Website Link</button></a>
                    </Col>
                </Row>

                {/* ========================================== */}

            </Row>
            
        </div>
    )
}



export default HomePage;