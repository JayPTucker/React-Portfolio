import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faCommentDots,
  faLock,
  faClock
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import '../styles/Contact.css';
import '../styles/Home.css';

import emailjs from '@emailjs/browser';

// Animation Variants
const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1 },
  },
};

function Contact() {

const [success, setSuccess] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    e.target,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  )
  .then(() => {
    setSuccess(true);
    e.target.reset();
  })
  .catch((error) => {
    console.error(error);
  });
};

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={projectVariants}
    >
    <section className="contact-section" id="contactRow">
    <Container>
        <Row className="align-items-start">

        {/* Left Side */}
        <Col lg={4}>
            <div className="contact-left">

            <p className="section-number">
                03. <FontAwesomeIcon icon={faPaperPlane} />
            </p>

            <h1 className="contact-heading">
                Let's Work
                <br />
                <span>Together</span>
            </h1>

            <p className="contact-subtitle">
                I'm always open to discussing new opportunities,
                collaborations, or interesting projects.
                Feel free to reach out!
            </p>

            {/* Email Card */}
            <div className="contact-info-card">
                <div className="contact-icon-box">
                <FontAwesomeIcon icon={faEnvelope} />
                </div>

                <div className="contact-info">
                <small>Email</small>
                <p>jaypaultucker@gmail.com</p>
                </div>
            </div>

            {/* Location Card */}
            <div className="contact-info-card">
                <div className="contact-icon-box">
                <FontAwesomeIcon icon={faLocationDot} />
                </div>

                <div className="contact-info">
                <small>Location</small>
                <p>Nashville, Tennessee</p>
                </div>
            </div>

            {/* Response Card */}
            <div className="contact-info-card">
                <div className="contact-icon-box">
                <FontAwesomeIcon icon={faClock} />
                </div>

                <div className="contact-info">
                <small>Response Time</small>
                <p>Usually within 24 hours</p>
                </div>
            </div>

            </div>
        </Col>

        {/* Right Side */}
        <Col lg={8}>
            <div className="contact-form-card">

            <h3 className="contact-form-title">
                <FontAwesomeIcon icon={faCommentDots} />
                <span>Send a Message</span>
            </h3>

                <form onSubmit={sendEmail}>

                <Row>
                    <Col md={6}>
                    <div className="input-group-custom">
                        <label>Name</label>
                        <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        minLength={2}
                        maxLength={50}
                        required
                        />
                    </div>
                    </Col>

                    <Col md={6}>
                    <div className="input-group-custom">
                        <label>Email</label>
                        <input
                        type="email"
                        name="user_email"
                        placeholder="your@email.com"
                        maxLength={100}
                        required
                        />
                    </div>
                    </Col>
                </Row>

                <div className="input-group-custom">
                    <label>Subject</label>
                    <input
                    type="text"
                    name="subject"
                    placeholder="Let's Work Together"
                    minLength={3}
                    maxLength={100}
                    required
                    />
                </div>

                <div className="input-group-custom">
                    <label>Message</label>

                    <textarea
                    rows="7"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    minLength={10}
                    maxLength={2000}
                    required
                    ></textarea>

                    <small className="input-limit">
                    Maximum 2,000 characters
                    </small>
                </div>

                <button
                    type="submit"
                    className="contact-submit-btn"
                >
                    Send Message
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>

                {success && (
                    <div className="success-message">
                    Message sent successfully!
                    </div>
                )}

                <p className="privacy-note">
                    <FontAwesomeIcon icon={faLock} />
                    Your information is safe and will never be shared.
                </p>

                </form>
            </div>
        </Col>

        </Row>

        {/* Bottom Card */}
        <Row>
        <Col lg={12}>
            <div className="contact-bottom-card">

            <div>
                <h4>
                <span className="status-dot"></span>
                Available for Work
                </h4>

                <p>
                Open to full-time roles, freelance projects,
                and collaborations.
                </p>
            </div>

            <div className="social-links">

                <a
                href="https://github.com/JayPTucker"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
                </a>

                <a
                href="https://linkedin.com/in/jayptucker"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
                </a>

                <a href="mailto:jaypaultucker@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
                Email
                </a>

            </div>

            </div>
        </Col>
        </Row>

    </Container>
    </section>
    </motion.div>
  );
}

export default Contact;