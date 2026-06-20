import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Solid Icons
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
  faCircleChevronRight,
  faCodeBranch,
  faWandMagicSparkles,
  faPalette,
  faCode,
  faCloudSun,
  faLocationDot,
  faMobileScreen,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';

// Brand Icons
import {
  faNodeJs,
  faJs,
  faAws,
  faGithub,
  faBootstrap,
  faReact
} from '@fortawesome/free-brands-svg-icons';

// API
import { getRepo, getLatestCommit } from '../api/github';

// Images
import responsiveDesktop from '../img/desktop1.png';
import responsiveTablet from '../img/ipad1.png';
import responsivePhone from '../img/phone1.png';
// Project Logos
import meLogoThing from '../img/meLogoThing.png';
import witterImage from '../img/witter_project.png';
import weatherCenterLogo from '../img/weather-center.png';

// CSS
import '../styles/Projects.css';

// Animation Variants
const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1 },
  },
};

  const projects = [
    "Witter",
    "React-Portfolio",
    "weather-center"
  ];

const Projects = () => {
  // State
  const [projectData, setProjectData] = useState({});

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = {};

        for (const repoName of projects) {
          const repo = await getRepo(repoName);
          const commit = await getLatestCommit(repoName);

          data[repoName] = {
            repo,
            commit
          };
        }

        setProjectData(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadProjects();
  }, []);
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={projectVariants}
    >
      <Container fluid>
        {/* Section Header */}
        <Row className="project-intro-row justify-content-center" id="projects">
          <Col lg={8}>
            <p className="section-number"><b>02.</b> </p>
            <p className="section-title">Projects</p>
            <p className="section-description">
              A showcase of my recent work. Each project is a blend of problem-solving, 
              <br></br>
              clean code, and user-focused design.
            </p>
          </Col>
          <Col lg={2}>
            <a 
              href="https://github.com/JayPTucker" 
              className="btn view-on-github" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span> View on GitHub</span>
            </a>
          </Col>
        </Row>

        {/* Responsive Design Showcase */}
        <Row className="justify-content-center">
          <Col lg={10} md={12} sm={12}>
            <div className="project-row">
              <Row className="align-items-center">
                <Col lg={1} md={12} className="text-center">
                  <div className="responsive-icon">
                    <FontAwesomeIcon className="computer-icon" icon={faDisplay} />
                    <FontAwesomeIcon className="mobile-icon" icon={faMobile} />
                  </div>
                </Col>

                <Col lg={2} md={12}>
                  <b className="responsive-title">Built for every screen</b>
                  <p className="responsive-text">
                    Fully responsive design across desktop, tablet, and mobile devices.
                  </p>
                </Col>

                {/* Desktop View */}
                <Col lg={3} md={4} sm={4}>
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

                {/* Tablet View */}
                <Col lg={4} md={4} sm={4}>
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

                {/* Mobile View */}
                <Col lg={2} md={4} sm={4}>
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

        {/* PORTFOLIO PROJECT */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="project-row portfolio">
              <Row className="align-items-center">
                {/* Project Image */}
                <Col lg={3} md={12} className="text-center">
                  <img
                    className="projectLogo"
                    src={meLogoThing}
                    alt="React Portfolio Logo"
                  />
                </Col>

                {/* Project Details */}
                <Col lg={6} md={12}>
                  <p className="projectTitle">
                    <span>React Portfolio</span>
                    <span className="app-type-bubble">Full Stack</span>
                  </p>

                  <p className="project-desc">
                    A modern portfolio website built with React, Bootstrap, and Framer Motion to showcase projects, technical skills, and professional experience. Features responsive layouts, GitHub API integration, animated UI components, and optimized performance across desktop, tablet, and mobile devices.
                  </p>

                  {/* Skills */}
                  <div className='project-skill-bubble-group'>
                    <div className='project-skill-bubble'>
                      <FontAwesomeIcon className='bubble-icon' icon={faReact} />
                      <span>React</span>
                    </div>

                    <div className='project-skill-bubble'>
                      <FontAwesomeIcon className='bubble-icon' icon={faJs} />
                      <span>JavaScript</span>
                    </div>

                    <div className='project-skill-bubble'>
                      <FontAwesomeIcon className='bubble-icon' icon={faBootstrap} />
                      <span>Bootstrap</span>
                    </div>

                    <div className='project-skill-bubble'>
                      <FontAwesomeIcon className='bubble-icon' icon={faDisplay} />
                      <span>Responsive Design</span>
                    </div>

                    <div className='project-skill-bubble'>
                      <FontAwesomeIcon className='bubble-icon' icon={faCodeBranch} />
                      <span>GitHub API</span>
                    </div>

                    <div className='project-skill-bubble'>
                      <FontAwesomeIcon className='bubble-icon' icon={faCode} />
                      <span>REST APIs</span>
                    </div>

                    <div className='project-skill-bubble'>
                      <FontAwesomeIcon className='bubble-icon' icon={faWandMagicSparkles} />
                      <span>Framer Motion</span>
                    </div>

                    <div className='project-skill-bubble'>
                      <FontAwesomeIcon className='bubble-icon' icon={faPalette} />
                      <span>UI/UX Design</span>
                    </div>

                  </div>
                  {/* Project Links */}
                  <div className="project-links">
                    <a 
                      href="https://github.com/JayPTucker/React-Portfolio" 
                      className="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      <span>  GitHub Repo  </span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>

                    <div className="vertical-divider"></div>

                    <a 
                      href="https://jaypaultucker.org" 
                      className="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGlobe} />
                      <span>  Live Demo  </span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                </Col>

                {/* Project Status & Changelog */}
                <Col lg={3} md={12}>
                  {projectData["React-Portfolio"] && (
                    <div className="project-status">

                      <p>
                        <b className="changelog-text">Changelog via</b>
                        <span className="github-bubble">GitHub API</span>
                      </p>

                      <p>
                        <b className="changelog-text">Last Updated: </b>
                        {new Date(
                          projectData["React-Portfolio"].repo.updated_at
                        ).toLocaleDateString()}
                      </p>

                      <p>
                        <b>
                          {
                            projectData["React-Portfolio"]
                              .commit
                              .commit
                              .message
                              .split('\n')[0]
                          }
                        </b>

                        <div className="commit-body">
                          {
                            projectData["React-Portfolio"]
                              .commit
                              .commit
                              .message
                              .split('\n')
                              .slice(2, 6)
                              .join('\n')
                          }

                          {
                            projectData["React-Portfolio"]
                              .commit
                              .commit
                              .message
                              .split('\n')
                              .length > 5 && (
                              <span>
                                <br />
                                <i>
                                  ...Use the link below to view all changes.
                                </i>
                              </span>
                            )
                          }
                        </div>
                      </p>

                      <a
                        href="https://github.com/JayPTucker/React-Portfolio/commits/master/"
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View all changes </span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>

                    </div>
                  )}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* WITTER PROJECT */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="project-row witter">
              <Row className="align-items-center">
                {/* Project Image */}
                <Col lg={3} md={12} className="text-center">
                  <img
                    className="projectLogo"
                    src={witterImage}
                    alt="Witter Logo"
                  />
                </Col>

                {/* Project Details */}
                <Col lg={6} md={12}>
                  <p className="projectTitle">
                    <span>Witter</span>
                    <span className="app-type-bubble">Full Stack</span>
                  </p>

                  <p className="project-desc">
                    Witter is a full-stack social media platform that enables users to create 
                    profiles, share content, upload photos, and engage with a community-driven 
                    leaderboard. Built with Node.js, Express, MySQL, and AWS S3, it features 
                    secure authentication, encrypted credentials, and responsive design.
                  </p>

                  {/* Skills */}
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

                  {/* Project Links */}
                  <div className="project-links">
                    <a 
                      href="https://github.com/JayPTucker/Witter" 
                      className="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      <span>  GitHub Repo  </span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>

                    <div className="vertical-divider"></div>

                    <a 
                      href="https://witter-d4c230a6736c.herokuapp.com/" 
                      className="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGlobe} />
                      <span>  Live Demo  </span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                </Col>

                {/* Project Status & Changelog */}
                <Col lg={3} md={12}>
                  {projectData["Witter"] && (
                    <div className="project-status">

                      <p>
                        <b className="changelog-text">Changelog via</b>
                        <span className="github-bubble">GitHub API</span>
                      </p>

                      <p>
                        <b className="changelog-text">Last Updated: </b>
                        {new Date(
                          projectData["Witter"].repo.updated_at
                        ).toLocaleDateString()}
                      </p>

                      <p>
                        <b>
                          {
                            projectData["Witter"]
                              .commit
                              .commit
                              .message
                              .split('\n')[0]
                          }
                        </b>

                        <div className="commit-body">
                          {
                            projectData["Witter"]
                              .commit
                              .commit
                              .message
                              .split('\n')
                              .slice(2, 6)
                              .join('\n')
                          }

                          {
                            projectData["Witter"]
                              .commit
                              .commit
                              .message
                              .split('\n')
                              .length > 5 && (
                              <span>
                                <br />
                                <i>
                                  ...Use the link below to view all changes.
                                </i>
                              </span>
                            )
                          }
                        </div>
                      </p>

                      <a
                        href="https://github.com/JayPTucker/Witter/commits/main/"
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View all changes </span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>

                    </div>
                  )}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* WEATHER CENTER PROJECT */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="project-row weather-center">
              <Row className="align-items-center">
                {/* Project Image */}
                <Col lg={3} md={12} className="text-center">
                  <img
                    className="projectLogo"
                    src={weatherCenterLogo}
                    alt="Weather Center Logo"
                  />
                </Col>

                {/* Project Details */}
                <Col lg={6} md={12}>
                  <p className="projectTitle">
                    <span>Weather Center</span>
                    <span className="app-type-bubble">Full Stack</span>
                  </p>

                  <p className="project-desc">
                    Weather Center is a full-stack weather application that delivers real-time 
                    conditions and multi-day forecasts through third-party weather APIs. Built 
                    with a responsive, mobile-friendly interface, it allows users to search locations, 
                    view detailed weather data, and access live forecast updates with an optimized 
                    user experience across desktop and mobile devices.
                  </p>

                  {/* Skills */}
                  <div className='project-skill-bubble-group'>
                    <div className='project-skill-bubble'>
                      <FontAwesomeIcon className='bubble-icon' icon={faCloudSun} />
                      <span>Weather API</span>
                    </div>

                    <div className='project-skill-bubble'>
                      <FontAwesomeIcon className='bubble-icon' icon={faCode} />
                      <span>REST APIs</span>
                    </div>

                    <div className='project-skill-bubble'>
                      <FontAwesomeIcon className='bubble-icon' icon={faLocationDot} />
                      <span>Geolocation</span>
                    </div>

                    <div className='project-skill-bubble'>
                      <FontAwesomeIcon className='bubble-icon' icon={faMobileScreen} />
                      <span>Responsive Design</span>
                    </div>

                    <div className='project-skill-bubble'>
                      <FontAwesomeIcon className='bubble-icon' icon={faChartLine} />
                      <span>Live Data</span>
                    </div>

                    <div className='project-skill-bubble'>
                      <FontAwesomeIcon className='bubble-icon' icon={faPalette} />
                      <span>UI/UX Design</span>
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="project-links">
                    <a 
                      href="https://github.com/JayPTucker/weather-center" 
                      className="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      <span>  GitHub Repo  </span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>

                    <div className="vertical-divider"></div>

                    <a 
                      href="https://jayptucker.github.io/weather-center/" 
                      className="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGlobe} />
                      <span>  Live Demo  </span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                </Col>

                {/* Project Status & Changelog */}
                <Col lg={3} md={12}>
                  {projectData["weather-center"] && (
                    <div className="project-status">

                      <p>
                        <b className="changelog-text">Changelog via</b>
                        <span className="github-bubble">GitHub API</span>
                      </p>

                      <p>
                        <b className="changelog-text">Last Updated: </b>
                        {new Date(
                          projectData["weather-center"].repo.updated_at
                        ).toLocaleDateString()}
                      </p>

                      <p>
                        <b>
                          {
                            projectData["weather-center"]
                              .commit
                              .commit
                              .message
                              .split('\n')[0]
                          }
                        </b>

                        <div className="commit-body">
                          {
                            projectData["weather-center"]
                              .commit
                              .commit
                              .message
                              .split('\n')
                              .slice(2, 6)
                              .join('\n')
                          }

                          {
                            projectData["weather-center"]
                              .commit
                              .commit
                              .message
                              .split('\n')
                              .length > 5 && (
                              <span>
                                <br />
                                <i>
                                  ...Use the link below to view all changes.
                                </i>
                              </span>
                            )
                          }
                        </div>
                      </p>

                      <a
                        href="https://github.com/JayPTucker/weather-center/commits/master/"
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View all changes </span>
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
