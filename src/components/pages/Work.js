import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import work1 from "../assets/img-work/work-1-img.png";
import work2 from "../assets/img-work/work-2-img.png";
import work3 from "../assets/img-work/work-3-img.png";
import work4 from "../assets/img-work/work-4-img.png";
import work5 from "../assets/img-work/work-5-img.png";
import work6 from "../assets/img-work/work-6-img.png";



import "../style/Work.css";

function Work() {
    return(
        <Container fluid>
            <Row className="work-1 justify-content-center text-center">
                <Col>
                    <br/><br/>
                    <img className="work-1-img" src={work1}></img>
                    <p className="work-1-title">Witter</p>
                    <p className="work-1-tech-used">jQuery / MySQL2 / Express / Sequelize / NodeJS / & more</p>
                    <br/>
                    <p className="work-desc">Welcome to Witter!  This is an Website that was based off of the Well-Known Social Media platform known as Twitter.
                        can Login and Register an Account where your Password is Encrypted and you may post "Wits", much like "Tweets" to your desire.
                    </p>
                    <button className="work-btn work-1-btn" onclick="window.location.href='https://github.com/KiaraM-glitch/NaKiNoJay'">View on GitHub</button>
                    <button className="work-btn work-1-btn" onclick="window.location.href='https://nakinojay.herokuapp.com/'">Live Link</button>
                    <br/><br/>
                </Col>
            </Row>

            <Row className="work-2 justify-content-center text-center">
                <Col>
                    <br/><br/>
                    <img class="work-2-img" src={work2}></img>
                    <p class="work-2-title">Employee Tracker</p>
                    <p class="work-2-tech-used">MySQL / cFonts / Inquirer</p>
                    <p class="work-desc">This is Employee Tracker; a NodeJS-Based Application used in Order to keep track of Company's Employees,
                        Roles, and even Departments.  You can do many things with this app as seen in the image above.  It uses MySQL to save all
                        of your Data securely into the Database, so that you may use or edit it anytime.
                    </p>
                    <button class="work-btn work-2-btn" onclick="window.location.href='https://github.com/JayPTucker/employee-tracker'">View on GitHub</button>
                    <br/><br/>
                </Col>
            </Row>

            <Row className="work-3 justify-content-center text-center">
                <Col>
                    <br/><br/>
                    <img class="work-3-img" src={work3}></img>
                    <p class="work-3-title">J's Cookbook</p>
                    <p class="work-3-tech-used">jQuery / Materialize / OpenWeather API / Spoonacular API</p>
                    <br/>
                    <p class="work-desc">Welcome to Witter!  This is an Website that was based off of the Well-Known Social Media platform known as Twitter.
                        can Login and Register an Account where your Password is Encrypted and you may post "Wits", much like "Tweets" to your desire.
                    </p>
                    <button class="work-btn work-3-btn" onclick="window.location.href='https://github.com/JayPTucker/js-cookbook'">View on GitHub</button>
                    <button class="work-btn work-3-btn" onclick="window.location.href='https://jayptucker.github.io/js-cookbook/'">Live Link</button>
                    <br/><br/>
                </Col>
            </Row>

            <Row className="work-4 justify-content-center text-center">
                <Col>
                    <br/><br/>
                    <img class="work-4-img" src={work4}></img>
                    <p class="work-4-title">Password Generator</p>
                    <p class="work-4-tech-used">HTML / CSS / JavaScript</p>
                    <br/>
                    <p class="work-desc">
                        This was a basic project I did that would let you create Randomized passcodes.  It would essentially use Javascript and
                        take any and every letter or character and set them as a possbile variant for your password and you could also set how long you
                        wanted said password to be.
                    </p>
                    <button class="work-btn work-4-btn" onclick="window.location.href='https://github.com/JayPTucker/password-generator'">View on GitHub</button>
                    <button class="work-btn work-4-btn" onclick="window.location.href='https://jayptucker.github.io/password-generator/'">Live Link</button>
                    <br/><br/>
                </Col>
            </Row>

            <Row className="work-5 justify-content-center text-center">
                <Col>
                    <br/><br/>
                    <img class="work-5-img" src={work5}></img>
                    <p class="work-5-title">JS Timed Quiz</p>
                    <p class="work-5-tech-used">HTML / CSS / JavaScript / Local Storage</p>
                    <br/>
                    <p class="work-desc">This Website was a personal challenge as I was learning my way through Javascript to create a timed Quiz
                        and then have a points and leaderboard System.  This Application was aimed to achieve that Goal entirely.
                    </p>
                    <button class="work-btn work-5-btn" onclick="window.location.href='https://github.com/JayPTucker/quiz-about-me'">View on GitHub</button>
                    <button class="work-btn work-5-btn" onclick="window.location.href='https://jayptucker.github.io/quiz-about-me/'">Live Link</button>
                    <br/><br/>
                </Col>
            </Row>

            <Row className="work-6 justify-content-center text-center">
                <Col>
                    <br/><br/>
                    <img class="work-6-img" src={work6}></img>
                    <p class="work-6-title">Weather Center</p>
                    <p class="work-6-tech-used">HTML / CSS / JavaScript / OpenWeatherAPI / Local Storage</p>
                    <br/>
                    <p class="work-desc">This is an App to simply check your Weather based on the area you're in.  It can show any city you want along
                        with a 5-Day-Forecast as well to see what's coming up in the future.  It uses Local Storage to save previously searched Cities as well.
                    </p>
                    <button class="work-btn work-6-btn" onclick="window.location.href='https://github.com/JayPTucker/weather-dashboard'">View on GitHub</button>
                    <button class="work-btn work-6-btn" onclick="window.location.href='https://jayptucker.github.io/weather-dashboard/'">Live Link</button>
                    <br/><br/>
                </Col>
            </Row>
        </Container>
    )
}

export default Work;