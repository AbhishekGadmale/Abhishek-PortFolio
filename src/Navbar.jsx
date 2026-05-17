// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavbarComponent = ({ name, toggleTheme, theme }) => {
  const [expanded, setExpanded] = useState(false);
  
  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <Navbar 
      fixed="top" 
      expand="md" 
      bg="dark" 
      variant="dark" 
      expanded={expanded} 
      onToggle={setExpanded}
      className="shadow-lg py-3 navbar-custom"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          {name} - <span className="text-secondary">Full-Stack Dev</span>
        </Navbar.Brand>
        
        {/* Custom Toggle for mobile: hamburger menu */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0">
          <FaBars color="white" />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" onClick={() => setExpanded(false)}>
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link mx-2 cursor-pointer"
              >
                {link}
              </Link>
            ))}
            
            {/* Theme Toggle Button */}
            <Button 
              variant="outline-secondary" 
              className="ms-md-3 mt-3 mt-md-0 d-flex align-items-center justify-content-center" 
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;