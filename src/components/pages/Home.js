import React  from "react";
import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import "../style/Home.css";

import stars from "../assets/stars.mp4";
import picOfMe from "../assets/me.png";

import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

import certificate from "../assets/certificate.png";
import certificate2 from "../assets/certificate2.png";
import certificate3 from "../assets/certificate3.png";



function HomePage() {

    document.addEventListener("touchstart", function() {},false);

    return(
        <div>
            <Row className='frontpage-row' id="front-page">

                <Col md={5} className="text-center">
                    {/* <img className="picOfMe" src={picOfMe} alt="Pic of Me"></img> */}
                </Col>
                <Col md={7}>
                    
                </Col>
            </Row>
        

            {/* =========================================================================================================================== */}
            {/* WORK ROW */}
            {/* =========================================================================================================================== */}
            <Row className="work-row justify-content-center text-center" id="work-row">

                <Col md={12}>
                    <p className="work-row-title">My Projects</p>
                    <p className="sub-title">Below are a few Projects I would like to display that I have worked very hard on over the past year.<br></br><br></br>Hover over or tap on any of the projects that you would like more information on.<br></br><br></br><i>(The Live Links might take at least 30 seconds to load at first)</i></p>
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
                        {/* <a href="https://topstocker.herokuapp.com/"><button className="shortcut-btn">Live Link</button></a> */}
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
                        <a href="https://drive.google.com/file/d/1Bmulf7ZZtzbtcX-LvcvxexnjyobPNK6L/view?usp=sharing"><button className="shortcut-btn">Video Link</button></a>

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
            </Row>

            {/* =========================================================================================================================== */}
            {/* END WORK ROW */}
            {/* =========================================================================================================================== */}


            {/* =========================================================================================================================== */}
            {/* EDUCATION ROW */}
            {/* =========================================================================================================================== */}

            <Row className="education-row text-center justify-content-center" id="education-row">
                <p className="work-row-title">Education</p>
                <Row>
                    <Col md={6}>
                        <img src={certificate} alt="Vanderbilt University Certificate" className="edu-img"></img>
                    </Col>

                    <Col md={6}>
                        <p className="edu-title">Vanderbilt University Web Development Bootcamp</p>
                        <p className="edu-date">2020</p>
                        <p className="edu-bio">A 6-month intensive boot camp program focused on gaining technical programming and market-driven skills in the Web
                        Development field. Graduated with an A- at the top of the class.</p>
                    </Col>
                </Row>

                <hr></hr>

                <Row>
                    <Col md={6}>
                        <img src={certificate2} alt="Google Technical Support Funamentals Certification" className="edu-img"></img>
                    </Col>

                    <Col md={6}>
                        <p className="edu-title">Google Technical Support Fundamentals Certifcation</p>
                        <p className="edu-date">2023</p>
                        <p className="edu-bio2">● Understand how the binary system works<br></br>
                        ● Assemble a computer from scratch <br></br>
                        ● Choose and install an operating system on a computer <br></br>
                        ● Understand what the Internet is, how it works, and the impact it has in the modern world <br></br>
                        ● Learn how applications are created and how they work under the hood of a computer<br></br>
                        ● Utilize common problem-solving methodologies and soft skills in an Information Technology setting</p>
                    </Col>

                    
                </Row>

                <hr></hr>

                <Row>
                    <Col md={6}>
                        <img src={certificate3} alt="Google Bits and Bytes of Computer Networking" className="edu-img"></img>
                    </Col>

                    <Col md={6}>
                        <p className="edu-title">Google Networking Certification</p>
                        <p className="edu-date">2023</p>
                        <p className="edu-bio">● Describe computer networks in terms of a five-layer model<br></br>
                        ● Understand all of the standard protocols involved with TCP/IP communications<br></br>
                        ● Grasp powerful network troubleshooting tools and techniques<br></br>
                        ● Learn network services like DNS and DHCP that help make computer networks run<br></br>
                        ● Understand cloud computing, everything as a service, and cloud storage</p>
                    </Col>

                    
                </Row>
                
            </Row>
            
            
        </div>
    )
}



export default HomePage;