import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import "../styles/Home.css";


const Home = () => {
  return (

      <Row className="FrontPageRow">

        <Col className="info-panel-left" md={1}>
          <p>Github</p>
          <p>Linkedin</p>
          <p>Gmail</p>
          <p>Instagram</p>

        </Col>

        <Col md={10} className="FrontPageMainCol"> 
        
          <p>Hey there, my name is</p>
          <p>Jay Paul Tucker.</p>
          <p>I'm a passionate Full-Stack Developer specializing in Front-End and Back-End languages. Currently working at Apple as a Technical Expert, I'm dedicated to delivering innovative solutions. Continuously advancing my skills with IBM and Google to stay ahead in the ever-evolving field of software development.</p>

        </Col>

        <Col className="info-panel-right" md={1}>
          <p>test</p>
        </Col>

      </Row>
    
  );
};

export default Home;
