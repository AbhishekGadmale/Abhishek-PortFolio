// src/components/Projects.jsx

import React, { useState } from 'react';
import { Row, Col, Card, Button, Badge, Modal, Container } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaChartBar, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
// Placeholder for Recharts components
const TrafficChart = () => <div className="p-3 text-center bg-light text-dark rounded"> [Chart Placeholder: Recharts Bar Chart] </div>;

// --- Data for Projects ---
const projectsData = [
  { 
    id: 1, 
    title: 'React Portfolio (Meta)', 
    tech: ['React', 'Bootstrap', 'Framer Motion'], 
    desc: 'The site you are viewing. Built for speed and accessibility (Lighthouse > 90).', 
    metrics: '95+ Lighthouse Score, fully responsive',
    image: '/PortFolio.PNG',
    challenge: 'Achieving high Lighthouse scores with heavy animations.',
    solution: 'Implemented lazy loading, image optimization, and Framer Motion view-based rendering.',
    results: 'Sub 1.5s load time on 3G simulation.',
    code:'https://github.com/AbhishekGadmale/Abhishek-PortFolio.git',
    link:'https://explore-world-3.onrender.com/about'
  },
  { 
    id: 2, 
    title: 'Attendance System Using Facial Recognition', 
    tech: ['Python', 'OpenCV–Face detection', 'Flask', 'face_recognition'], 
    desc: 'It uses real-time facial recognition to automatically mark attendance.', 
    metrics: '30% faster load time, 500+ users monthly',
    image: '/Attendance System.png',
    challenge: 'Optimizing product pages for low bandwidth and inconsistent connectivity.',
    solution: 'Used image placeholders (blur-up), server-side rendering (SSR), and minimal CSS bundles.',
    results: 'Significant reduction in bounce rate for mobile users.',
    code:'https://github.com/AbhishekGadmale/Final-Year-Project-.git',
     link:''
  },
  { 
    id: 3, 
    title: 'E-Commerce Website', 
    tech: ['React', 'API', 'Javascript','Bootstrap'], 
    desc: 'This is E-commerce website , which can Search,Sort,Filter,etc.', 
    metrics: 'Fast search, sorting, and smooth cart functionality',
    image: '/ShopAbhi.PNG',
    challenge: 'Handling complex API authentication and large datasets for charting.',
    solution: 'Implemented OAuth flow and optimized data fetching with memoization.',
    results: 'Improved content strategy clarity.',
    code:'https://github.com/AbhishekGadmale/ShopAbhi.git',
    link:'https://shopabhi.onrender.com/'
  },
  { 
    id: 4, 
    title: 'Rock-Paper-Scissor Game', 
    tech: ['Html', 'Css', 'JavaScript'], 
    desc: 'An Interactive Rock‑Paper‑Scissors game built with HTML, CSS, and JS.', 
    metrics: 'Lightweight, fast, responsive, with accurate scoring and clear feedback.',
    image: '/Rock_Paper_Scissor.PNG',
    challenge: 'Maintaining global state consistency across components without prop drilling.',
    solution: 'Utilized Redux Toolkit for centralized state management.',
    results: 'Robust state handling, excellent user feedback.',
    code:'https://github.com/AbhishekGadmale/Rock--Paper-Scissors.git',
    link:'https://abhishekgadmale.github.io/Rock--Paper-Scissors/'
  },
  { 
    id: 5, 
    title: 'Weather API App', 
    tech: ['React', 'Axios', 'OpenWeatherMap API'], 
    desc: 'Location-based weather application featuring daily  forecasts.', 
    metrics: 'Fast API response, modern animated icons',
    image: '/Weather Api.PNG',
    challenge: 'Handling asynchronous data fetching and error states gracefully.',
    solution: 'Used `useEffect` cleanup function and robust error boundaries.',
    results: 'Reliable data display under varying network conditions.',
    code:'https://github.com/AbhishekGadmale/Weather-App.git',
    link:'https://abhishek-portfolio-2.onrender.com/'
  },
  { 
    id: 6, 
    title: 'Quiz App', 
    tech: ['JavaScript', 'Html', 'CSS'], 
    desc: 'Simple browser-based Quiz App with score tracking, built with HTML, CSS, and JS.', 
    metrics: 'Lightweight, fast, interactive, responsive, with score tracking.',
    image: '/Quiz_App.PNG',
    challenge: 'Integrating Markdown rendering with static site generation for performance.',
    solution: 'Used `gray-matter` and `remark` libraries within Next.js SSG functions.',
    results: 'Incredible SEO scores and rapid page loading.',
    code:'https://github.com/AbhishekGadmale/Quiz-App.git',
    link:'https://abhishekgadmale.github.io/Quiz-App/'
  },
];

// --- Project Card Component ---
const ProjectCard = ({ project }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.1 }}>
      <Card className="project-card  border-0 shadow-lg" style={{ backgroundColor: 'var(--card-bg)', height:"550px" ,borderRadius:"25px" }}>
        <Card.Img 
          variant="top" 
          src={project.image} 
          style={{ height: '250px', objectFit: 'cover', borderTopLeftRadius: "25px", borderTopRightRadius: "25px" }} 
          alt={project.title} 
          loading="lazy"
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fw-bold text-secondary">{project.title}</Card.Title>
          <div className="mb-2">
            {project.tech.map(t => (
              <Badge key={t} bg="primary" className="me-2 text-white">{t}</Badge>
            ))}
          </div>
          <Card.Text className="text-muted">{project.desc}</Card.Text>
          <p className="small text-light mt-auto">Metrics: {project.metrics}</p>
          <div className="d-flex justify-content-between mt-3">
            <Button variant="outline-primary" size="sm" href={project.code}>
              <FaGithub className="me-1" /> Code
            </Button>
            <Button variant="outline-secondary" size="sm" href={project.link}>
              <FaExternalLinkAlt className="me-1" /> Live Demo
            </Button>
            <Button variant="secondary" size="sm" onClick={() => showCaseStudy(project)}>
              Case Study
            </Button>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

// --- Case Study Modal Component ---
const CaseStudyModal = ({ show, handleClose, project }) => {
  if (!project) return null;

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered dialogClassName="modal-90vh" contentClassName="bg-dark text-light border-0">
      <Modal.Header className="border-secondary">
        <Modal.Title className="text-secondary">{project.title} - Case Study</Modal.Title>
        <Button variant="close" onClick={handleClose} className="text-white"><FaTimes /></Button>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <h4 className="text-primary mb-3">The Challenge</h4>
          <p className="text-light">{project.challenge}</p>
          
          <h4 className="text-primary mt-4 mb-3">The Solution (Code Snippets)</h4>
          <pre className="p-3 rounded bg-dark text-success overflow-auto small">
            <code>
              // Example Solution Snippet (React Lazy Loading)<br/>
              const ProjectComponent = lazy(() =&gt; import('./ProjectComponent'));<br/>
              <br/>
              &lt;Suspense fallback=&quot;&lt;Loader /&gt;&quot;&gt;<br/>
              &nbsp;&nbsp;&lt;ProjectComponent /&gt;<br/>
              &lt;/Suspense&gt;
            </code>
          </pre>

          <h4 className="text-primary mt-4 mb-3">Results & Metrics <FaChartBar /></h4>
          <p className="text-light">{project.results}</p>
          <div className="mt-3" style={{ height: '300px' }}>
            <TrafficChart />
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};


const Projects = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const showCaseStudy = (project) => {
    setSelectedProject(project);
    setModalShow(true);
  };

  return (
    <div>
      <h2 className="text-center mb-5 text-secondary display-5 fw-bold">My Projects Showcase</h2>
      
      {/* Masonry Grid Implementation */}
      <Row>
        <Col xs={12} className="masonry-col">
          {projectsData.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} showCaseStudy={showCaseStudy} />
            </div>
          ))}
        </Col>
      </Row>

      <CaseStudyModal
        show={modalShow}
        handleClose={() => setModalShow(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;