// src/components/About.jsx

import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaUserTie } from 'react-icons/fa';

const About = ({ name }) => {
  return (
    <div className="py-5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="text-center mb-5"
      >
        <h2 className="display-4 fw-bold mb-3">About Me</h2>
        <div className="mx-auto bg-primary" style={{ width: '80px', height: '4px', borderRadius: '2px' }}></div>
      </motion.div>

      <Row className="g-4">
        {/* Main Bio Column */}
        <Col lg={8}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="project-card p-4 h-100 border-0 shadow-lg mb-4">
              <h3 className="h4 fw-bold mb-4 text-primary d-flex align-items-center">
                <FaUserTie className="me-2" /> Professional Profile
              </h3>
              <p className="lead mb-4">
                I'm a <span className="text-primary fw-bold">Full-Stack Developer</span> based in Mumbai, dedicated to engineering high-performance, production-grade web applications.
              </p>
              <p className="text-muted mb-4">
                My journey is defined by a transition from academic excellence to real-world problem solving. With a <span className="fw-bold text-main">BSc in Information Technology from Mumbai University (8.62 CGPA)</span>, I combine strong theoretical foundations with a year of intensive focus on building scalable products.
              </p>
              <p className="text-muted">
                I thrive on the challenge of taking complex ideas from concept to production. Whether it's architecting a complete e-commerce ecosystem or optimizing real-time computer vision pipelines, my goal is always to deliver software that is robust, user-centric, and technically sound.
              </p>
            </Card>

            <Row className="g-4">
              <Col md={6}>
                <Card className="skill-card p-4 border-0 shadow-sm h-100">
                  <h5 className="fw-bold mb-3 text-primary"><FaRocket className="me-2" /> Recent Impact</h5>
                  <ul className="list-unstyled text-muted small">
                    <li className="mb-2">✓ Delivered a full-stack Real Estate app for a freelance client on time.</li>
                    <li className="mb-2">✓ Built ShopAbhi: E-commerce with Razorpay & JWT.</li>
                    <li className="mb-0">✓ Engineered a Face Recognition system with 95% accuracy.</li>
                  </ul>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="skill-card p-4 border-0 shadow-sm h-100">
                  <h5 className="fw-bold mb-3 text-primary"><FaCode className="me-2" /> Engineering Focus</h5>
                  <p className="text-muted small mb-0">
                    Currently deepening my expertise in <span className="fw-bold">System Design</span> and <span className="fw-bold">Scalability</span>. I'm looking for a team where I can contribute to meaningful products and grow alongside world-class engineers.
                  </p>
                </Card>
              </Col>
            </Row>
          </motion.div>
        </Col>

        {/* Education & Achievements Column */}
        <Col lg={4}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-100"
          >
            <Card className="project-card p-4 h-100 border-0 shadow-lg">
              <h3 className="h4 fw-bold mb-4 text-primary d-flex align-items-center">
                <FaGraduationCap className="me-2" /> Education
              </h3>
              <div className="mb-4">
                <h6 className="fw-bold mb-1">BSc in Information Technology</h6>
                <p className="text-primary mb-1 small">Mumbai University</p>
                <Badge bg="primary" className="rounded-pill px-3">8.62 CGPA</Badge>
              </div>
              
              <hr className="opacity-10" />
              
              <h3 className="h5 fw-bold mb-3 mt-4">Key Projects</h3>
              <div className="mb-3">
                <h6 className="small fw-bold mb-1">ShopAbhi (E-commerce)</h6>
                <p className="text-muted extra-small">Full MERN stack, Razorpay, Admin Analytics.</p>
              </div>
              <div className="mb-3">
                <h6 className="small fw-bold mb-1">Face Recognition System</h6>
                <p className="text-muted extra-small">Python, OpenCV, 95% Precision.</p>
              </div>
              <div>
                <h6 className="small fw-bold mb-1">Real Estate Platform</h6>
                <p className="text-muted extra-small">Production-grade freelance delivery.</p>
              </div>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default About;