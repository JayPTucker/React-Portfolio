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

        <Col md={12}>

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

            <Row className='justify-content-center'>
              <Col md={2}>
               <button className='witter-btn'>
                <a target="_blank" rel="noreferrer" href="https://witter-d4c230a6736c.herokuapp.com">
                Live Link
                </a>
              </button>
              </Col>
              <Col md={2}>
                <button className='witter-btn'>
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

      <Row className="projectSections justify-content-center text-center mt-4">
        <motion.div
        className="witter-row-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={projectVariants}
      >
        {/* <Row>
          <Col md={4}>
            <p>test</p>
          </Col>
          <Col md={4}>
            <p>test</p>
          </Col>
        </Row> */}

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
        <Row className="contactRow text-center" id="contactRow">
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
