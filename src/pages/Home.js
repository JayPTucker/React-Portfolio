import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { faGithub } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';

// Add the icons to the FontAwesome library
// library.add(faGithub);


const Home = () => {
  return (
    <Row className="FrontPageRow">

      <Col className="info-panel-left" orientation="left" md={1}>

        {/* <a href="https://github.com/JayPTucker" target="_blank">
          <FontAwesomeIcon className="GithubIcon" icon={faGithub} />
        </a> */}

        <br></br><br></br>

        <a href="https://www.linkedin.com/in/jayptucker/" target="_blank">
          <p>filler</p>
        </a>

        <br></br><br></br>

        <a href="mailto:jaypaultucker@gmail.com" target="_blank">
          <p>filler</p>
        </a>
        
        <br></br><br></br>
        
      </Col>

      <Col md={8} className="FrontPageMainCol"> 
      
        <p className='title'>Hey there, my name is</p>
        <p className='name-title'>Jay Paul Tucker.</p>
        <p className='what-i-do'>Full Stack Web Developer</p>
        <p className='mini-bio'>I'm a passionate Full-Stack Developer specializing in Front-End and Back-End languages. Currently working at Apple as a Technical Expert, I'm dedicated to delivering innovative solutions. Continuously advancing my skills with IBM and Google to stay ahead in the ever-evolving field of software development.</p>
        <br></br>
        <a className="myResumeBtn" target="_blank" href="">Check out my Resume</a>

      </Col>

      <Col className="info-panel-right" orientation="left" md={1}>
        {/* Empty for now */}
      </Col>

    </Row>
    
  );
};


export default Home;
