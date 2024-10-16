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

      {/* INFO BAR LEFT SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={projectVariants}
      >
        <Col className="info-panel-left" orientation="left" md={1}>
          <a className="info-panel-icons" href="https://github.com/JayPTucker" target="_blank" rel="noopener noreferrer">
            {/* SVG Icons */}
          </a>
          <br></br>
          <a className="info-panel-icons" href="https://www.linkedin.com/in/jayptucker/" target="_blank" rel="noopener noreferrer">
            {/* LinkedIn SVG */}
          </a>
          <br></br>
          <a className="info-panel-icons" href="mailto:jaypaultucker@gmail.com" target="_blank" rel="noopener noreferrer">
            {/* Mail SVG */}
          </a>
        </Col>
      </motion.div>

      {/* FRONT PAGE SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={projectVariants}
      >
        <Row className="FrontPageRow">
          <Col md={10} sm={12} className="FrontPageMainCol">
            <p className='title'>Hey there, my name is</p>
            <p className='name-title'>Jay Paul Tucker.</p>
            <p className='what-i-do'>I'm a Full Stack Web Developer</p>
            <p className='mini-bio bioDescColor'>
              Currently working Full-Time as a Technical Expert at Apple while pursuing a Bachelor's Degree in Software Engineering at Western Governors University. Currently looking for work to further my Career in Software Engineering.
            </p>
            <ButtonComponent />
          </Col>
          <GreenScreenComponent />
        </Row>
      </motion.div>

{/* ======================================= */}
      {/* PROJECTS SECTION */}
      <Row className="projectsRow justify-content-center text-center" id="projects">

        <Col md={10}>

        <motion.div
          className="witter-row"
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
              <Col md={4} sm={8}>
                <p className='witter-desc'>
                  A Platform where you can make your Wits and ideas come to life. 
                  You can follow your friends, like their posts, and much more coming in the future.
                </p>
              </Col>
            </Row>

            <a className='witter-btn' target="_blank" rel="noreferrer" href="https://witter-d4c230a6736c.herokuapp.com/witter">
              Live Link
            </a>
            <a className='witter-btn' target="_blank" rel="noreferrer" href="https://github.com/JayPTucker">
              Github Link
            </a>

          </Col>
        </motion.div>
        </Col>
      </Row>

      <Row className="projectSections justify-content-center text-center mt-4">
        <motion.div
        className="witter-row-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={projectVariants}
      >
        <Row>
          <Col md={4}>
            <p>test</p>
          </Col>
          <Col md={4}>
            <p>test</p>
          </Col>
        </Row>

        </motion.div>
      </Row>
{/* ======================================= */}

      {/* CONTACT ME SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={projectVariants}
      >
        <Row className="contactRow" id="contactRow">
          <Col md={12}>
            <p className="contactRowTitle">Get In Touch</p>
          </Col>
          <Col md={6} className="contactCol">
            <p className="contactRowText">Feel free to contact me below</p>
            <a href="mailto:jaypaultucker@gmail.com">
              <button className="contactMeBtn">Email me!</button>
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
        <Row className="creditsRow">
          <Col md={12}>
            <a className="githubLink" target="_blank" rel="noreferrer" href="https://github.com/JayPTucker/React-Portfolio">Designed and built by Jay Paul Tucker</a>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default Home;
