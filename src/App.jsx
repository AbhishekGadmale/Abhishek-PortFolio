import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Container, Spinner, Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';

// Lazy loading components for performance
const NavbarComponent = lazy(() => import('./Navbar'));
const Hero = lazy(() => import('./Hero'));
const About = lazy(() => import('./About'));
const Skills = lazy(() => import('./Skills'));
const Projects = lazy(() => import('./Projects'));
const Testimonials = lazy(() => import('./Testimonials'));
const Contact = lazy(() => import('./Contact'));
const Footer = lazy(() => import('./Footer'));

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [showScroll, setShowScroll] = useState(false);
  
  const name = "Abhishek Gadmale";

  // --- Theme Logic (Dark/Light Mode) ---
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme || 'dark';
    setTheme(initialTheme);
    document.body.className = initialTheme + '-mode';
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme + '-mode';
  };
  
  // --- Back to Top Logic ---
  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);


  return (
    <div className={`app-container ${theme}-mode`}>
      <Suspense fallback={
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Spinner animation="border" variant="secondary" />
        </div>
      }>
        <NavbarComponent name={name} toggleTheme={toggleTheme} theme={theme} />
        
        <main>
          {/* Section IDs for navigation */}
          <section id="home"><Hero name={name} /></section>
          
          {/* Wrap main content in Container, but Hero/Nav/Footer outside */}
          <Container>
            <section id="about" className="py-5"><About name={name} /></section>
            <section id="skills" className="py-5"><Skills /></section>
            <section id="projects" className="py-5"><Projects /></section>
            <section className="py-5"><Testimonials /></section>
            <section id="contact" className="py-5"><Contact /></section>
          </Container>
        </main>
        
        <Footer name={name} />
        
        {/* Back to Top Button */}
        <Button 
          variant="secondary" 
          className="rounded-circle shadow-lg p-3" 
          onClick={scrollTop} 
          style={{ 
            display: showScroll ? 'flex' : 'none', 
            position: 'fixed', 
            bottom: '30px', 
            right: '30px',
            zIndex: 1000
          }}
        >
          <FaArrowUp />
        </Button>
      </Suspense>
    </div>
  );
};

export default App;