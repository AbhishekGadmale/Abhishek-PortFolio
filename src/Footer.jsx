// src/components/Footer.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({ name }) => {
  return (
    <footer className="bg-dark text-white-50 mt-5 pt-4 pb-2 shadow-lg">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0 small">
              &copy; {name} {new Date().getFullYear()} | Full-Stack Developer & E-commerce Expert.
            </p>
            <p className="mb-0 small">
              Built with <span className="text-secondary">React, Vite, and Bootstrap</span> for high performance.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;