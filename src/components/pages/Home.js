import React  from "react";
import { Row, Col } from "react-bootstrap";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import "../style/Home.css";

import picOfMe from "../assets/me.png";

import pencil from "../assets/pencil.png";
import computer from "../assets/computer.png";
import internet from "../assets/internet.png";

import stars from "../assets/stars.mp4";

function HomePage() {
//     // Sets our State to False
//         const [bodybackground, setBodybackground] = useState(false);

//     // Function that will determine when to change background
//     const changeBackground = () => {
//         // Console Logs where you are every time you scroll
//         console.log(window.scrollY)
//         if(window.scrollY >= 200) {
//             setBodybackground(true)
//         } else {
//             setBodybackground(false) 
//         }
//     }

//     // Event Listener waiting for you to Scroll
//     window.addEventListener('scroll', changeBackground)

    return(
        <div>
            <Row className='frontpage-row'>
                <video autoPlay loop muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"
                }}>
                    <source src={stars} type="video/mp4" id="myVideo" />
                    <p>HELLO</p>
                </video>
                <Col md={6} className="text-center">
                    <img className="picOfMe" src={picOfMe} alt="Pic of Me"></img>
                </Col>
                <Col md={6} className="">
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


            

            <Row className="info-row text-center">
                <Col md={12}>
                    <Row className="justify-content-center">
                        <Col md={3} className="skill-section">
                            <img className="skill-pencil" src={pencil} alt="Pencil"></img>
                            <p className="skill-title">Design what you want</p>
                            <p className="skill-bio">
                                Based on my 8+ Mon. I've done Dev Work for Gaming Communities such as TRP to Create in-game Menus that have a consistent Design as well as Develop Websites in the Past that have caught people's eyes. I've done all of this with React, HTML, CSS, etc.
                            </p>
                        </Col>
                        <Col md={3} className="skill-section">
                            <img className="skill-computer" src={computer} alt="computer"></img>
                            <p className="skill-title">Code what you need</p>
                            <p className="skill-bio">
                            My Skills in Coding are advancing everyday. Learning new Languages all the time, so I can create the Website you need with all of the latest technologies applied into it.
                            </p>
                        </Col>
                        <Col md={3} className="skill-section">
                            <img className="skill-internet" src={internet} alt="internet"></img>
                            <p className="skill-title">Tech Skills related</p>
                            <p className="skill-bio">
                                Filler Text
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="">
                <Col md={12}>
                    <p>test</p>
                </Col>
            </Row>

            
        </div>
    )
}



export default HomePage;