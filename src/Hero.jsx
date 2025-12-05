// src/components/Hero.jsx

import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

// Simple Custom Typewriter Effect Placeholder
const TypedText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 70); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <span className="typed-animation">{displayText} |</span>;
};

const Hero = ({ name }) => {
  const subtitle = 'React.js | Full-Stack | E-commerce Expert';
  
  return (
    <motion.div 
      className="hero-section text-center d-flex align-items-center" 
      style={{ minHeight: '100vh', paddingTop: '70px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{ delay: 0.5, type: 'spring' }}>
              <Image 
                src="src/Images/ProfilePic.png"
                roundedCircle 
                className="mb-4 border border-5 border-secondary shadow-lg"
                style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                alt={`${name} Profile Photo`}
                loading="lazy" 
              />
            </motion.div>
            
            <h1 className="display-3 fw-bolder text-light mb-3">
              Building Modern Web Experiences
            </h1>
            <h2 className="h4 text-secondary mb-5 hero-subtitle">
              <TypedText text={subtitle} />
            </h2>
            
            <motion.div 
              className="d-grid gap-3 d-sm-flex justify-content-sm-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <Link 
                to="projects" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                className="btn btn-lg btn-secondary fw-bold shadow-lg"
              >
                View Projects
              </Link>
              <Button 
                variant="outline-light" 
                size="lg" 
                href="public/JobApplication.pdf" 
                download
                className="shadow-lg"
              >
                Download CV
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Hero;