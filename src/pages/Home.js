import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

import ButtonComponent from '../components/button.js';
import GreenScreenComponent from '../components/greenscreen.js';

import witterImage from '../img/witterLogo.png';
import witterDesktop from '../img/witter-desktop.png';

import '../styles/Home.css';

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1 },
  },
};

const Home = () => {
  return (
    <Container fluid>

      {/* FRONT PAGE SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={projectVariants}
      >
        <Row className="FrontPageRow">
          <Col md={10} sm={12} className="FrontPageMainCol">
            <p className='title'>Hey there, I'm</p>
            <p className='name-title'>Jay Paul Tucker.</p>
            <p className='what-i-do'>Full Stack Web Developer</p>
            <p className='mini-bio bioDescColor'>
              I’m currently working as a Technical Expert at Apple while pursuing a Bachelor's Degree in Software Engineering at Western Governors University. In my spare time, I’m developing Witter, a full-stack social media platform. I’m actively seeking new opportunities to advance my career in Software Engineering.
            </p>         
            <ButtonComponent />
          </Col>
          <GreenScreenComponent />
        </Row>
      </motion.div>

{/* ======================================= */}
      {/* PROJECTS SECTION */}
      <Row className="projectsRow justify-content-center text-center" id="projects">

        <Col lg={10}>

        <motion.div
          className="project-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={projectVariants}
        >
          <Row className='justify-content-center text-center'>
            <Col md={12}>
                <img className='witterDesktop' src={witterDesktop} alt="Witter pic on Desktop and Mobile Device"></img>
            </Col>
          </Row>

          {/* Header with Logo and Title */}
          <Col md={12} className="text-center">
            <div className="projectHeader d-flex justify-content-center align-items-center">
              <img className="witterLogo" src={witterImage} alt="Witter Logo" />
              <p className="projectTitle">Witter</p>
            </div>

            <Row className='justify-content-center'>
              <Col md={8}>
                <p className='project-desc'>
                  Witter is a full-stack social media platform featuring two-factor email authentication, encrypted passwords, customizable user profiles, photo uploads via AWS S3, and a “Top Wits” leaderboard. Built with Node.js, Express, MySQL, and jQuery, it delivers a responsive, secure, and engaging user experience across devices.
                </p>
              </Col>
            </Row>

            <Row className='justify-content-center'>
              <Col md={3}>
               <button className='project-btn'>
                <a target="_blank" rel="noreferrer" href="https://witter-d4c230a6736c.herokuapp.com">
                  Live Link
                </a>
              </button>
              </Col>
              <Col md={3}>
                <button className='project-btn'>
                  <a target="_blank" rel="noreferrer" href="https://github.com/JayPTucker">
                    Github Link
                  </a>
                </button>
              </Col>
            </Row>


          </Col>
        </motion.div>
        </Col>
      </Row>

      <Row className="projectsRow justify-content-center text-center" id="projects">
        <Col lg={10}>

          <motion.div
          className="project-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={projectVariants}
        >
          <Row className='justify-content-center text-center'>
            <Col md={12}>
                {/* <img className='witterDesktop' src={witterDesktop} alt="Witter pic on Desktop and Mobile Device"></img> */}
            </Col>
          </Row>

          {/* Header with Logo and Title */}
          <Col md={12} className="text-center">
            <div className="projectHeader d-flex justify-content-center align-items-center">
              {/* <img className="witterLogo" src={witterImage} alt="Witter Logo" /> */}
              <p className="projectTitle">Weather Center</p>
            </div>

            <Row className='justify-content-center'>
              <Col md={8}>
                <p className='project-desc'>
                  Weather Center is a responsive web app that uses the OpenWeatherMap API to display current conditions and a 5-day forecast based on user input. Built with JavaScript, jQuery, and Bootstrap, it features localStorage to save and quickly access previous searches, making it easy to track weather data on any device.
                </p>
              </Col>
            </Row>

            <Row className='justify-content-center'>
              <Col md={3}>
               <button className='project-btn'>
                <a target="_blank" rel="noreferrer" href="https://github.com/JayPTucker/weather-center">
                  Live Link
                </a>
              </button>
              </Col>
              <Col md={3}>
                <button className='project-btn'>
                  <a target="_blank" rel="noreferrer" href="https://github.com/JayPTucker">
                    Github Link
                  </a>
                </button>
              </Col>
            </Row>
          </Col>

        </motion.div>
        </Col>
      </Row>
{/* ======================================= */}

      {/* CONTACT ME SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={projectVariants}
      >
        <Row className="contactRow text-center" id="contactRow">
          <Col md={12}>
            <h1 className="contactRowTitle">Get In Touch</h1>
          </Col>
            <Col md={6} className="contactCol">
              <p className="contactRowText">Feel free to contact me below</p>
              <a href="mailto:jaypaultucker@gmail.com">
                <button className="contactMeBtn">Email me!</button>
              </a>
              <a href="https://drive.google.com/file/d/1EJdzVG4qJjfpTwqXrnh_knmB5JlADeye/view?usp=sharing">
                <button className="contactMeBtn">View my Resume</button>
              </a>
            </Col>
        </Row>
      </motion.div>

      {/* CREDITS SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={projectVariants}
      >
        <Row className="justify-content-center creditsRow">
          <Col md={12}>
            <a className="githubLink" target="_blank" rel="noreferrer" href="https://github.com/JayPTucker/React-Portfolio">Designed and built by Jay Paul Tucker</a>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default Home;
