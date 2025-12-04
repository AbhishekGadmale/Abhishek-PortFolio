// src/components/About.jsx

import React from 'react';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaYoutube } from 'react-icons/fa';

const aboutVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = ({ name }) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={aboutVariants}
    >
      <h2 className="text-center mb-5 text-secondary display-5 fw-bold">About Me</h2>
      <Row className="align-items-center">
        {/* Photo Column (40% on desktop, stacked on mobile) */}
        <Col lg={5} className="mb-4 mb-lg-0 text-center">
          <Image 
            src="/placeholder-images/about-photo.jpg" 
            fluid 
            rounded 
            className="shadow-lg"
            style={{ maxWidth: '400px' }}
            alt={`${name} working`}
            loading="lazy"
          />
        </Col>
        
        {/* Bio and Timeline Column (60% on desktop) */}
        <Col lg={7}>
          <p className="lead text-light">
            Hello, I'm Abhishek Gadmale, an ambitious full-stack developer and freelancer hailing from rural Maharashtra, India.
          </p>
          <p className="text-muted">
            I am currently transitioning into full-stack development from a background in content creation, driven by a passion for scalable e-commerce solutions. My expertise lies in the modern stack: **React.js, JavaScript, HTML/CSS, and Node.js**, acquired through rigorous self-study and courses like the Coursera/Meta program. I prioritize active contribution on **GitHub** and strive for excellence in performance and accessibility.
          </p>
          <p className="text-muted">
            Being **bilingual (Marathi and English), I enjoy building applications that cater to diverse linguistic user bases. My journey involved overcoming procrastination, which has fueled my dedication to mastering complex frontend and backend challenges.
          </p>

          <h4 className="mt-4 text-secondary">My Journey & Timeline</h4>
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex align-items-center bg-transparent border-secondary text-light">
              <FaGraduationCap className="me-3 text-primary" size={20} />
              <div>
                2025: Online Full-Stack Course Completion
                <p className="small text-muted mb-0">Achieved certification in advanced React and Node development, focusing on MERN stack projects.</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center bg-transparent border-secondary text-light">
              <FaYoutube className="me-3 text-primary" size={20} />
              <div>
                2024: YouTube Channel Revival
                <p className="small text-muted mb-0">Revived technical content channel, growing to 16k+ subscribers**, honing communication and instructional skills.</p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </motion.div>
  );
};

export default About;