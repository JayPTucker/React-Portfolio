import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import ButtonComponent from '../components/button.js';
import GreenScreenComponent from '../components/greenscreen.js';

import projectWitterImg from '../img/projectWitter.png';

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
          <Col md={12} className="FrontPageMainCol">
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

      {/* PROJECTS SECTION */}
      <Row className="projectsRow" id="projects">
        <motion.div
          className="rowHeaderTitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={projectVariants}
        >
          <span className="rowHeaderNumber">01. </span>Projects
        </motion.div>
        <hr className="customHr" />

        <motion.div
          className="project1Row d-flex align-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={projectVariants}
        >
          <Col md={6}>
            <img className="projectWitterImg projectImg" src={projectWitterImg} alt="Project Witter" />
          </Col>
          <Col md={6} className="projectsCol">
            <p className="featuredProject">Main Highlight Project</p>
            <p className="projectTitle">[WIP] Witter</p>
            <p className="projectDesc">Full Stack CRUD Application...</p>
            <a href="https://github.com/JayPTucker/witter" target="_blank" rel="noopener noreferrer">
              <svg className="githubIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="github">
                <path d="..."></path>
              </svg>
            </a>
          </Col>
        </motion.div>
      </Row>

      {/* ABOUT ME SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={projectVariants}
      >
        <Row className="aboutMeRow" id="about">
          <Col md={10} className="aboutmeCol">
            <p className='rowHeaderTitle'><span className="rowHeaderNumber">02. </span>About Me</p>
            <hr className="customHr"></hr>
            <p className="aboutmeBio bioDescColor">
              Dedicated Full Stack Web Developer with 5+ years of experience and currently pursuing a Bachelor's Degree in Software Engineering at Western Governors University. Thriving at Apple as a Technical Expert, adept in the Software Development Life Cycle, CI/CD concepts, and crafting end-to-end solutions...
            </p>
          </Col>
        </Row>
      </motion.div>

      {/* CONTACT ME SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={projectVariants}
      >
        <Row className="contactRow" id="contactRow">
          <p className='rowHeaderTitle'><span className="rowHeaderNumber">03. </span>Contact</p>
          <hr className="customHr"></hr>
          <Col md={12}>
            <p className="contactRowTitle">Get In Touch</p>
          </Col>
          <Col md={6} className="contactCol">
            <p className="contactRowText">Feel free to contact me below...</p>
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
