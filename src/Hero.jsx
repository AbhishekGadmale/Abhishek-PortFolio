// src/components/Hero.jsx

import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

// --- Typewriter Effect ---
const TypedText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <span className="text-primary fw-bold">{displayText}<span className="blink-cursor">|</span></span>;
};

const Hero = ({ name }) => {
  const subtitle = 'React.js Specialist | Full-Stack Developer | E-commerce Expert';
  
  return (
    <div className="hero-section d-flex align-items-center" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      {/* Background Blobs */}
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>
      
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="text-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h5 className="text-primary text-uppercase letter-spacing-2 mb-3 fw-bold">Available for Work</h5>
              <h1 className="display-2 fw-black mb-4">
                Design. Code.<br />
                <span className="text-gradient">Deliver Excellence.</span>
              </h1>
              <h2 className="h4 text-muted mb-5 hero-subtitle" style={{ minHeight: '1.5em' }}>
                <TypedText text={subtitle} />
              </h2>
              
              <div className="d-flex gap-3">
                <Link to="projects" smooth={true} duration={500} offset={-70}>
                  <Button variant="primary" size="lg" className="rounded-pill px-4 py-3">
                    View My Work
                  </Button>
                </Link>
                <Button 
                  variant="outline-primary" 
                  size="lg" 
                  href="/ABHISHEK GADMALE cv Latest.pdf" 
                  download 
                  className="rounded-pill px-4 py-3"
                >
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={5} className="text-center mt-5 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="position-relative d-inline-block"
            >
              <div className="profile-frame">
                <Image 
                  src="/profile.jpeg"
                  className="profile-img shadow-2xl"
                  alt={name}
                />
              </div>
              {/* Floating Tech Badges - Hidden on very small screens for clarity */}
              <motion.div 
                animate={{ y: [0, -20, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="floating-badge badge-react d-none d-sm-block"
              >
                React
              </motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="floating-badge badge-node d-none d-sm-block"
              >
                Node.js
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;