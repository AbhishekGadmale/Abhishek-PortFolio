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
    image: 'public/PortFolio.PNG',
    challenge: 'Achieving high Lighthouse scores with heavy animations.',
    solution: 'Implemented lazy loading, image optimization, and Framer Motion view-based rendering.',
    results: 'Sub 1.5s load time on 3G simulation.',
    code:'https://github.com/AbhishekGadmale/Abhishek-PortFolio.git'
  },
  { 
    id: 2, 
    title: 'Rural E-commerce Store', 
    tech: ['React', 'Node.js', 'MongoDB', 'Razorpay'], 
    desc: 'Full-stack application designed for slow rural networks with caching and PWA features.', 
    metrics: '30% faster load time, 500+ users monthly',
    image: '/placeholder-images/project-ecommerce.jpg',
    challenge: 'Optimizing product pages for low bandwidth and inconsistent connectivity.',
    solution: 'Used image placeholders (blur-up), server-side rendering (SSR), and minimal CSS bundles.',
    results: 'Significant reduction in bounce rate for mobile users.',
    code:''
  },
  { 
    id: 3, 
    title: 'YouTube Analytics Dashboard', 
    tech: ['React', 'Recharts', 'Express API'], 
    desc: 'Visual tool to track channel performance (16k subs) using official YouTube Data API.', 
    metrics: 'Real-time data visualization, custom filters',
    image: '/placeholder-images/project-youtube.jpg',
    challenge: 'Handling complex API authentication and large datasets for charting.',
    solution: 'Implemented OAuth flow and optimized data fetching with memoization.',
    results: 'Improved content strategy clarity.',
    code:''
  },
  { 
    id: 4, 
    title: 'Task Manager App', 
    tech: ['React', 'Redux', 'LocalStorage'], 
    desc: 'Simple, state-managed task manager with drag-and-drop functionality and offline sync.', 
    metrics: 'Highly intuitive UI, minimal dependency footprint',
    image: '/placeholder-images/project-task.jpg',
    challenge: 'Maintaining global state consistency across components without prop drilling.',
    solution: 'Utilized Redux Toolkit for centralized state management.',
    results: 'Robust state handling, excellent user feedback.',
    code:''
  },
  { 
    id: 5, 
    title: 'Weather API App', 
    tech: ['React', 'Axios', 'OpenWeatherMap API'], 
    desc: 'Location-based weather application featuring daily and five-day forecasts.', 
    metrics: 'Fast API response, modern animated icons',
    image: '/placeholder-images/project-weather.jpg',
    challenge: 'Handling asynchronous data fetching and error states gracefully.',
    solution: 'Used `useEffect` cleanup function and robust error boundaries.',
    results: 'Reliable data display under varying network conditions.',
    code:''
  },
  { 
    id: 6, 
    title: 'Personal Blog Platform', 
    tech: ['Next.js', 'Markdown', 'Tailwind CSS'], 
    desc: 'A static-generated blog focused on web development tutorials and Marathi content.', 
    metrics: 'SEO-optimized, dark/light mode integration',
    image: '/placeholder-images/project-blog.jpg',
    challenge: 'Integrating Markdown rendering with static site generation for performance.',
    solution: 'Used `gray-matter` and `remark` libraries within Next.js SSG functions.',
    results: 'Incredible SEO scores and rapid page loading.',
    code:''
  },
];

// --- Project Card Component ---
const ProjectCard = ({ project }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.1 }}>
      <Card className="project-card h-100 border-0 shadow-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
        <Card.Img 
          variant="top" 
          src={project.image} 
          style={{ height: '250px', objectFit: 'cover' }} 
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
            <Button variant="outline-secondary" size="sm" href="#">
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