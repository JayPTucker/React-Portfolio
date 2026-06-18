import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faDatabase,
  faServer,
  faLock,
  faShieldHalved,
  faCloudArrowUp,
  faUsers,
  faArrowUpRightFromSquare,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';

import {
  faReact,
  faNodeJs,
  faPython,
  faJs,
  faAws,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

import picOfMe from '../img/picofme.jpg';
import ButtonComponent from '../components/button.js';

import witterImage from '../img/witter_project.png';

// import weatherCenter from '../img/weathercenter.png';

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
          <Col md={8} sm={12} className="FrontPageMainCol">
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
      <motion.div
        className="project-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={projectVariants}
      >
        <Row className="align-items-center">
          <Col lg={2} md={12} className="text-center">
            <img
              className="projectLogo"
              src={witterImage}
              alt="Witter Logo"
            />
          </Col>

          <Col lg={5} md={12}>
            <p className="projectTitle">
              <span>Witter</span>
              <span className="app-type-bubble">Full Stack</span>
            </p>

            <p className="project-desc">
              A full-stack social media platform featuring two-factor
              email authentication, encrypted passwords, customizable user
              profiles, photo uploads via AWS S3, and a “Top Wits”
              leaderboard.
            </p>

            <div className='project-skill-bubble-group'>
              <div className='project-skill-bubble'>
                <FontAwesomeIcon className='bubble-icon' icon={faNodeJs} />
                <span>Node.js</span>
              </div>

              <div className='project-skill-bubble'>
                <FontAwesomeIcon className='bubble-icon' icon={faJs} />
                <span>JavaScript</span>
              </div>

              <div className='project-skill-bubble'>
                <FontAwesomeIcon className='bubble-icon' icon={faServer} />
                <span>Express.js</span>
              </div>

              <div className='project-skill-bubble'>
                <FontAwesomeIcon className='bubble-icon' icon={faDatabase} />
                <span>MySQL</span>
              </div>

              <div className='project-skill-bubble'>
                <FontAwesomeIcon className='bubble-icon' icon={faAws} />
                <span>AWS S3</span>
              </div>

              <div className='project-skill-bubble'>
                <FontAwesomeIcon className='bubble-icon' icon={faLock} />
                <span>Authentication</span>
              </div>

              <div className='project-skill-bubble'>
                <FontAwesomeIcon className='bubble-icon' icon={faShieldHalved} />
                <span>Security</span>
              </div>

              <div className='project-skill-bubble'>
                <FontAwesomeIcon className='bubble-icon' icon={faCloudArrowUp} />
                <span>File Uploads</span>
              </div>

              <div className='project-skill-bubble'>
                <FontAwesomeIcon className='bubble-icon' icon={faUsers} />
                <span>Social Platform</span>
              </div>
            </div>


            {/* Hyperlinks for Github and Live Link */}
            <div className="project-links">
              <a href="https://github.com/JayPTucker/Witter" className="project-link">
                <FontAwesomeIcon icon={faGithub} />
                <span>  GitHub Repo  </span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>

              <div className="vertical-divider"></div>

              <a href="https://witter-d4c230a6736c.herokuapp.com/" className="project-link">
                <FontAwesomeIcon icon={faGlobe} />
                <span>  Live Demo  </span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
            {/* ============================================= */}
            
          </Col>

          <Col lg={2} md={12} className="text-center">
            <p>Test</p>
          </Col>

          <Col lg={3} md={12} className="text-center">
            <p>Test</p>
          </Col>

        </Row>
      </motion.div>

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
              <a href="https://drive.google.com/file/d/1G0FqwVXcEtQ6gp5xPqWjyeNZ5pLx0ksw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
