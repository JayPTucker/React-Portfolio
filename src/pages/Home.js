import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import '../styles/Home.css';

import ButtonComponent from '../components/button.js';
import GreenScreenComponent from '../components/greenscreen.js';

import projectWitterImg from '../img/projectWitter.png';
import project2Img from '../img/project-2.gif';
import project3Img from '../img/project-3.gif';

const Home = () => {

  return (
    <Container fluid>
      {/* =========================================================== */}
      {/* ================== INFO BAR LEFT SECTION ================== */}

      <Col className="info-panel-left" orientation="left" md={1}>
        {/* GITHUB ICON */}
        <a className="info-panel-icons" href="https://github.com/JayPTucker" target="_blank" rel="noopener noreferrer">
          <svg className="githubIcon" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
            <path d="M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z"></path>
          </svg>
        </a>

        <br></br>

        {/* LINKED IN ICON */}
        <a className="info-panel-icons" href="https://www.linkedin.com/in/jayptucker/" target="_blank" rel="noopener noreferrer">
          <svg className="linkedinIcon" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="linkedin">
            <path d="M17.5,8.999a5.41868,5.41868,0,0,0-2.56543.64453A.99918.99918,0,0,0,14,8.999H10a.99943.99943,0,0,0-1,1v12a.99942.99942,0,0,0,1,1h4a.99942.99942,0,0,0,1-1v-5.5a1,1,0,1,1,2,0v5.5a.99942.99942,0,0,0,1,1h4a.99942.99942,0,0,0,1-1v-7.5A5.50685,5.50685,0,0,0,17.5,8.999Zm3.5,12H19v-4.5a3,3,0,1,0-6,0v4.5H11v-10h2v.70313a1.00048,1.00048,0,0,0,1.78125.625A3.48258,3.48258,0,0,1,21,14.499Zm-14-12H3a.99943.99943,0,0,0-1,1v12a.99942.99942,0,0,0,1,1H7a.99942.99942,0,0,0,1-1v-12A.99943.99943,0,0,0,7,8.999Zm-1,12H4v-10H6ZM5.01465,1.542A3.23283,3.23283,0,1,0,4.958,7.999h.02832a3.23341,3.23341,0,1,0,.02832-6.457ZM4.98633,5.999H4.958A1.22193,1.22193,0,0,1,3.58887,4.77051c0-.7461.55957-1.22852,1.42578-1.22852A1.2335,1.2335,0,0,1,6.41113,4.77051C6.41113,5.5166,5.85156,5.999,4.98633,5.999Z"></path></svg> 
        </a>

        <br></br>

        {/* MAIL ICON */}
        <a className="info-panel-icons" href="mailto:jaypaultucker@gmail.com" target="_blank" rel="noopener noreferrer">
          <svg className="emailIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="email">
            <path d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"></path>
            <path d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"></path>
            <path d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"></path>
          </svg>        
        </a>

        <br></br>
        <br></br>
        <br></br>

      </Col>

      {/* ====================================================== */}
      {/* ================== FRONT PAGE SECTION ================== */}


      <Row className="FrontPageRow">

        <Col md={12} className="FrontPageMainCol"> 
          <p className='title'>Hey there, my name is</p>
          <p className='name-title'>Jay Paul Tucker.</p>
          <p className='what-i-do'>I'm a Full Stack Web Developer</p>
          <p className='mini-bio bioDescColor'>
          Certified Full Stack Web Developer with 5+ years of experience in Front and Back-End development; currently at Apple as a Technical Expert. Pursuing Bachelors in Software Engineering at Western Governors University. Expertise in Software Development Life Cycle, CI/CD, APIs, and end-to-end solutions. Proactive problem-solver driving results and positive change. Adaptable to rapid changes, committed to continuous learning, and passionate about IT, programming, innovation, Electric Vehicles, and Virtual Reality.
          </p>
          <br></br>
          <br></br>
          <ButtonComponent></ButtonComponent>
        </Col>

        <GreenScreenComponent></GreenScreenComponent>
      </Row>

      
      {/* =========================================================== */}
      {/* ==================== PROJECTS SECTION ==================== */}
      <Row className="projectsRow" id="projects">
        {/* PAGE TITLE */}
        <p className='rowHeaderTitle'><span className="rowHeaderNumber">01. </span>Projects</p>
        <hr className="customHr"></hr>

          <Row className="project1Row d-flex align-items-center">
          {/* PROJECT 1: */}
          <Col md={6}>
            <img className="projectWitterImg projectImg" src={projectWitterImg} alt="Project Witter"></img>
          </Col>
          <Col md={6} className="project1Col projectsCol">
            <p className="featuredProject">Main Highlight Project</p>
            <p className="projectTitle">[WIP] Witter</p>
            <div className="project1Desc projectDesc">
              <p>
                Full Stack CRUD Application inspired by multiple social media platforms.  Includes an in-depth login and registration system
                with password encryption and Email two-factor authentication.  Allows you to create, read, update, or destroy "Wits" whcih may include
                text, photos, or even videos.  More features to come as this is a Work-In-Progress.
                </p>
            </div>
            <p className="skillsUsed">Passport bcrypt Sequelize MySQL Node.js inquirer Javascript jQuery HTML CSS Express</p>
            <a className="skills-github" href="https://github.com/JayPTucker/witter" target="_blank" rel="noopener noreferrer">
              <svg className="githubIcon" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                <path d="M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z"></path>
              </svg>
            </a>
          </Col>
        </Row>

        <Row className="project1Row d-flex align-items-center">
            {/* PROJECT 3: */}
          <Col md={6}>
            <img className="project3Img projectImg" src={project3Img} alt="Project 3"></img>
          </Col>
          <Col md={6} className="project1Col projectsCol">
            <p className="featuredProject">Featured Project</p>
            <p className="projectTitle">FS Hockey Portfolio</p>
            <div className="project1Desc projectDesc">
              <p>This is a Portfolio Website made for Online Persona FSHockey to show off his well-known 3D Models using Blender/Unity.  The Website is created using React, HTML, CSS and utilizes Bootstrap and other elements for a great User Experience</p>
            </div>
            <p className="skillsUsed">React, HTML, CSS, JavaScript, Bootstrap, ffmpeg</p>

            <div className="button-container">
              <form action="https://fshockey.netlify.app" target="_blank" rel="noopener noreferrer">
                <button className='visit-site-btn' type="submit">Visit Site</button>
              </form>
              <a className="info-panel-icons" href="https://github.com/JayPTucker/fshockey" target="_blank" rel="noopener noreferrer">
                <svg className="githubIcon" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                  <path d="M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z"></path>
                </svg>
              </a>
            </div>

          </Col>
        </Row>

        <Row className="project1Row d-flex align-items-center">
          {/* PROJECT 1: */}
          <Col md={6}>
            <img className="project1Img projectImg" src={project2Img} alt="Project 1"></img>
          </Col>
          <Col md={6} className="project1Col projectsCol">
            <p className="featuredProject">Featured Project</p>
            <p className="projectTitle">Employee Tracker</p>
            <div className="project1Desc projectDesc">
              <p>Employee Tracker is a command-line, MySQL-Based, application that allows businesses to manage their employee information. Users can view, add, update, and delete employee records, as well as view and manage department and role information.</p>
            </div>
            <p className="skillsUsed">MySQL Node.js inquirer Javascript ES6 Console.table</p>
            <a className="skills-github" href="https://github.com/JayPTucker/employee-tracker" target="_blank" rel="noopener noreferrer">
              <svg className="githubIcon" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                <path d="M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z"></path>
              </svg>
            </a>
          </Col>
        </Row>

      </Row>

      {/* ====================================================== */}
      {/* ================== ABOUT ME SECTION ================== */}

      <Row className="aboutMeRow" id="about">

        <Col md={10} className="aboutmeCol">
          {/* PAGE TITLE */}
          <p className='rowHeaderTitle'><span className="rowHeaderNumber">02. </span>About Me</p>
          <hr className="customHr"></hr>

          <p className="aboutmeBio bioDescColor">
            Certified Full Stack Web Developer with 5+ years of experience in Front and Back-End development, alongside years of
            debugging expertise. Knowledge in the Software Development Life Cycle, CI/CD concepts, APIs, and creating end-to-
            end solutions. Currently working at Apple as a Technical Expert, advancing knowledge in fast-paced work environments
            and in collaboration with a large team that benefits from a feedback culture. Proactive problem-solver dedicated to
            promoting positive change within the workplace. Adaptable to rapid changing work environments and always seeking
            out new learning opportunities to enhance overall skillset. Enthusiastic about tackling challenges and learning new
            development languages, libraries, and frameworks to make lasting impacts on the user experience.
          </p>
        </Col>
      </Row>


      {/* ====================================================== */}
      {/* ================== CONTACT ME SECTION ================== */}
      <Row className="contactRow" id="contactRow">
      <p className='rowHeaderTitle'><span className="rowHeaderNumber">03. </span>Contact</p>
      <hr className="customHr"></hr>
        <Col md={12}>
          <p className="contactRowTitle">Get In Touch</p>
        </Col>
        <Col md={6} className="contactCol">
          <p className="contactRowText">Feel free to contact me below, I am currently looking for work and am open to any opportunities.  My response time is same-day.  Thank you!</p>
          <br></br>
          <a href="mailto:jaypaultucker@gmail.com">
            <button className="contactMeBtn">Email me!</button>
          </a>
        </Col>
      </Row>

      {/* ====================================================== */}
      {/* ================== CREDITS SECTION ================== */}
      <Row className="creditsRow">
        <Col md={12}>
          <a className="githubLink" target="_blank" rel="noreferrer" href="https://github.com/JayPTucker/React-Portfolio">Designed and built by Jay Paul Tucker</a>
        </Col>
      </Row>


      {/* =========================================================== */}
      {/* ================== INFO BAR RIGHT SECTION ================== */}

      <Col className="info-panel-right" orientation="left" md={1}>
        
        <a className="vertical-text" href="mailto:jaypaultucker@gmail.com">jaypaultucker@gmail.com</a>
        <br></br><br></br><br></br>

      </Col>

    </Container>
    
  );
};


export default Home;
