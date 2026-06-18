import React from 'react';
// For GitHub API
import { useEffect, useState } from 'react';
import { getRepo, getLatestCommit } from '../api/github';
// ======================
import { Row, Col, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faServer,
  faLock,
  faShieldHalved,
  faCloudArrowUp,
  faUsers,
  faArrowUpRightFromSquare,
  faGlobe,
  faMobile,
  faDisplay,
  faCircleChevronRight
} from '@fortawesome/free-solid-svg-icons';
import {
  faNodeJs,
  faJs,
  faAws,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

import responsiveDesktop from '../img/desktop1.png';
import responsiveTablet from '../img/ipad1.png';
import responsivePhone from '../img/phone1.png';

import witterImage from '../img/witter_project.png';

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1 },
  },
};

const Projects = () => {


    // For GitHub API Cont...
    const [witterRepo, setWitterRepo] = useState(null);
    const [witterCommit, setWitterCommit] = useState(null);
    // ======================
  
    useEffect(() => {
      async function loadRepoData() {
        try {
          const repo = await getRepo("Witter");
          const commit = await getLatestCommit("Witter");
  
          setWitterRepo(repo);
          setWitterCommit(commit);
        } catch (error) {
          console.error(error);
        }
      }
  
      loadRepoData();
    }, []);
  
  return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={projectVariants}
        id="projects"
      >
        <Container fluid>
        <Row className="project-intro-row justify-content-center">
          <Col lg={8}>
            <p className="section-number">02.</p>
            <p className="section-title">Projects</p>
            <p className="section-description">A showcase of my recent work.  Each project is a blend of problem-solving, 
              <br></br>clean code, and user-focused design.</p>
          </Col>
          <Col lg={2}>
            <a href="https://github.com/JayPTucker" className="btn view-on-github" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              <span> View on GitHub</span>
            </a>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="project-row">
              <Row className="align-items-center">

                <Col lg={1} md={12} className="text-center">
                  <div className="responsive-icon">
                    <FontAwesomeIcon
                      className="computer-icon"
                      icon={faDisplay}
                    />

                    <FontAwesomeIcon
                      className="mobile-icon"
                      icon={faMobile}
                    />
                  </div>
                </Col>

                {/* Mini Bio */}
                <Col lg={2} md={12}>
                  <b className="responsive-title">Built for every screen</b>
                  <p className="responsive-text">Fully responsive design across desktop, tablet, and mobile devices.</p>
                </Col>

                {/* Desktop */}
                <Col lg={3} md={12}>
                  <span className="resolution-item">
                    <FontAwesomeIcon
                      className="circle-icon circle1"
                      icon={faCircleChevronRight}
                    />
                    <span className="responsive-text">
                      Desktop
                      <br />
                      <span className="res-text">1920px+</span>
                    </span>
                    <img src={responsiveDesktop} alt="Desktop" className="desktop-img" />
                  </span>
                </Col>

                {/* Tablet */}
                <Col lg={4} md={12}>
                  <span className="resolution-item">
                    <FontAwesomeIcon
                      className="circle-icon circle2"
                      icon={faCircleChevronRight}
                    />
                    <span className="responsive-text">
                      Tablet
                      <br />
                      <span className="res-text">768px - 1023px</span>
                    </span>
                    <img src={responsiveTablet} alt="Tablet" className="tablet-img" />
                  </span>
                </Col>


                {/* Mobile */}
                <Col lg={2} md={12}>
                  <span className="resolution-item">
                    <FontAwesomeIcon
                      className="circle-icon circle3"
                      icon={faCircleChevronRight}
                    />
                    <span className="responsive-text">
                      Mobile
                      <br />
                      <span className="res-text">320px - 767px</span>
                    </span>
                    <img src={responsivePhone} alt="Mobile" className="phone-img" />
                  </span>
                </Col>

              </Row>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="project-row">
              <Row className="align-items-center">
                <Col lg={3} md={12} className="text-center">
                  <img
                    className="projectLogo"
                    src={witterImage}
                    alt="Witter Logo"
                  />
                </Col>

                <Col lg={6} md={12}>
            <p className="projectTitle">
              <span>Witter</span>
              <span className="app-type-bubble">Full Stack</span>
            </p>

            <p className="project-desc">
              Witter is a full-stack social media platform that enables users to create profiles, share content, upload photos, and engage with a community-driven leaderboard. Built with Node.js, Express, MySQL, and AWS S3, it features secure authentication, encrypted credentials, and responsive design.
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
              <a href="https://github.com/JayPTucker/Witter" className="project-link" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
                <span>  GitHub Repo  </span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>

              <div className="vertical-divider"></div>

              <a href="https://witter-d4c230a6736c.herokuapp.com/" className="project-link" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGlobe} />
                <span>  Live Demo  </span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
            {/* ============================================= */}
            
          </Col>

          <Col lg={3} md={12}>
            
            {witterRepo && (
              <div className="project-status">
                <p>
                  

                  <p>
                    <b className="changelog-text">Changelog via</b>
                    <span className="github-bubble">GitHub API</span>
                  </p>

                  <b className="changelog-text">Last Updated:{" "}</b>
                  {new Date(witterRepo.updated_at).toLocaleDateString()}
                </p>

                <p>
                  <b>{witterCommit?.commit.message.split('\n')[0]}</b>
                  <br></br>
                  <p className="commit-body">
                    {witterCommit?.commit.message.split('\n').slice(2, 6).join('\n')}
                    {witterCommit?.commit.message.split('\n').length > 5 && (
                      <span><br></br><i>...Use the link below to view all changes.</i></span>
                    )}
                  </p>
                </p>

                <a href="https://github.com/JayPTucker/Witter/commits/main/" className="project-link" target="_blank" rel="noopener noreferrer">
                  <span>  View all changes </span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            )}
          </Col>

        </Row>
            </div>
          </Col>
        </Row>
        </Container>
      </motion.div>
  );
};

export default Projects;
