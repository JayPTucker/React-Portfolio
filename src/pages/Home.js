import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faNodeJs,
  faPython,
  faJs,
} from '@fortawesome/free-brands-svg-icons';

import picOfMe from '../img/picofme.jpg';

import ButtonComponent from '../components/button.js';
import Projectsection from '../pages/Projects.js';
import Contactsection from '../pages/Contact.js';

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
        <Row className="FrontPageRow" id="home">
          <Col md={7} sm={12} className="FrontPageMainCol">
            <p className='title'>01.  Hey there, I'm</p>
            <p className='name-title'>Jay Paul Tucker.</p>
            <p className='what-i-do'>Software Engineering Student<br></br>
                  Full Stack Web Developer</p>
            <p className='mini-bio bioDescColor'>
              Software Engineering student and Full Stack Web Developer with 5+ years of experience supporting technology systems, solving complex technical problems, and building real-world software solutions.
            </p>

            <div className='skill-bubble-group'>
              <div className='skill-bubble'>
                <FontAwesomeIcon className='bubble-icon' icon={faGraduationCap} />
                <span>Top 2% at WGU</span>
              </div>
              <div className='skill-bubble'>
                <FontAwesomeIcon className='bubble-icon' icon={faReact} />
                <span>React</span>
              </div>
              <div className='skill-bubble'>
                <FontAwesomeIcon className='bubble-icon' icon={faNodeJs} />
                <span>Node.js</span>
              </div>
              <div className='skill-bubble'>
                <FontAwesomeIcon className='bubble-icon' icon={faDatabase} />
                <span>SQL</span>
              </div>
              <div className='skill-bubble'>
                <FontAwesomeIcon className='bubble-icon' icon={faJs} />
                <span>JavaScript</span>
              </div>
              <div className='skill-bubble'>
                <FontAwesomeIcon className='bubble-icon' icon={faPython} />
                <span>Python</span>
              </div>
            </div>

            <ButtonComponent />
          </Col>
          <Col md={4} sm={12} className="text-center">
            <img className="picOfMe" src={picOfMe} alt="Jay Paul Tucker" />
          </Col>
        </Row>
      </motion.div>

{/* ======================================= */}

    {/* PROJECTS SECTION */}
    <Projectsection />

{/* ======================================= */}

      {/* CONTACT ME SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={projectVariants}
      >
        <Contactsection />
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
