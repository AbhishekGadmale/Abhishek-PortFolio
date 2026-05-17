// src/components/Footer.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({ name }) => {
  return (
    <footer className="footer-custom mt-5 pt-5 pb-4 shadow-lg">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-2 fw-bold opacity-75">
              &copy; {name} {new Date().getFullYear()}
            </p>
            <p className="mb-0 small opacity-50">
              Full-Stack Developer & E-commerce Expert
            </p>
            <p className="mt-3 small">
              Built with <span className="text-primary fw-bold">React, Vite, and Bootstrap</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;