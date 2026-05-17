// src/components/Projects.jsx

import React, { useState } from 'react';
import { Row, Col, Card, Button, Badge, Modal, Container } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaChartBar, FaTimes, FaLightbulb, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// --- Functional Chart Component ---
const ImpactChart = ({ data }) => (
  <div style={{ width: '100%', height: 250, background: 'rgba(255,255,255,0.05)', borderRadius: '15px', padding: '20px' }}>
    <ResponsiveContainer>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
          cursor={{ fill: 'rgba(255,255,255,0.1)' }}
        />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index === 1 ? '#ec4899' : '#6366f1'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

// --- Data for Projects ---
const projectsData = [
  { 
    id: 1, 
    title: 'React Portfolio (Meta)', 
    tech: ['React', 'Bootstrap', 'Framer Motion'], 
    desc: 'The site you are viewing. Built for speed and accessibility (Lighthouse > 90).', 
    metrics: '95+ Lighthouse Score, fully responsive',
    image: '/PortFolio.PNG',
    challenge: 'Achieving high Lighthouse scores with heavy animations and external assets.',
    solution: 'Implemented lazy loading, image optimization, and Framer Motion view-based rendering to ensure smooth performance without compromising on visual appeal.',
    results: 'Sub 1.5s load time on 3G simulation.',
    impactData: [
      { name: 'Initial Load', value: 4.2 },
      { name: 'Optimized', value: 1.2 }
    ],
    code:'https://github.com/AbhishekGadmale/Abhishek-PortFolio.git',
    link:'https://explore-world-3.onrender.com/about'
  },
  { 
    id: 2, 
    title: 'Facial Recognition Attendance', 
    tech: ['Python', 'OpenCV', 'Flask', 'Face_recognition'], 
    desc: 'Automated attendance marking using real-time facial recognition technology.', 
    metrics: '99% Accuracy, 500ms detection time',
    image: '/Attendance System.png',
    challenge: 'Handling varied lighting conditions and high-speed processing in a web environment.',
    solution: 'Developed a custom OpenCV pipeline with histogram equalization for lighting and utilized background processing for facial encoding matching.',
    results: 'Highly reliable attendance system with near-zero false negatives.',
    impactData: [
      { name: 'Manual Prep', value: 15 },
      { name: 'Automated', value: 0.5 }
    ],
    code:'https://github.com/AbhishekGadmale/Final-Year-Project-.git',
     link:''
  },
  { 
    id: 3, 
    title: 'E-Commerce Website', 
    tech: ['React', 'Context API', 'Javascript','Bootstrap'], 
    desc: 'Full-featured E-commerce platform with search, sort, filter, and cart functionality.', 
    metrics: 'Fast search, sorting, and smooth cart functionality',
    image: '/ShopAbhi.PNG',
    challenge: 'Managing complex state for filters, cart, and user preferences efficiently.',
    solution: 'Architected the application using React Context API for lightweight state management and optimized re-renders with useMemo and useCallback hooks.',
    results: 'Fluid user experience even with large product catalogs.',
    impactData: [
      { name: 'Avg. Bounce', value: 45 },
      { name: 'Optimized', value: 22 }
    ],
    code:'https://github.com/AbhishekGadmale/ShopAbhi.git',
    link:'https://shopabhi.onrender.com/'
  },
];

// --- Project Card Component ---
const ProjectCard = ({ project, showCaseStudy }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      viewport={{ once: true }}
      className="h-100"
    >
      <Card className="project-card h-100 border-0 shadow-lg overflow-hidden">
        <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
          <Card.Img 
            variant="top" 
            src={project.image} 
            className="w-100 h-100 object-fit-cover transition-transform" 
            alt={project.title} 
          />
          <div className="project-overlay d-flex align-items-center justify-content-center">
             <Button variant="light" size="sm" onClick={() => showCaseStudy(project)} className="rounded-pill fw-bold px-3">
               Explore Case Study
             </Button>
          </div>
        </div>
        <Card.Body className="d-flex flex-column p-4">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <Card.Title className="fw-bold h5 mb-0">{project.title}</Card.Title>
            <FaChartBar className="text-primary" />
          </div>
          <div className="mb-3">
            {project.tech.map(t => (
              <Badge key={t} bg="none" className="me-2 mb-1 border border-primary text-primary small px-2 py-1">{t}</Badge>
            ))}
          </div>
          <Card.Text className="text-muted small flex-grow-1">{project.desc}</Card.Text>
          <div className="d-flex gap-2 mt-3">
            <Button variant="outline-primary" size="sm" href={project.code} className="flex-grow-1 rounded-pill">
              <FaGithub className="me-1" /> Code
            </Button>
            {project.link && (
              <Button variant="primary" size="sm" href={project.link} className="flex-grow-1 rounded-pill">
                <FaExternalLinkAlt className="me-1" /> Demo
              </Button>
            )}
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
    <Modal show={show} onHide={handleClose} size="lg" centered contentClassName="project-modal-content">
      <Modal.Body className="p-0 position-relative">
        <Button variant="link" onClick={handleClose} className="position-absolute top-0 end-0 m-3 text-light z-index-1" style={{ textDecoration: 'none' }}>
          <FaTimes size={24} />
        </Button>
        <Row className="g-0">
          <Col lg={5} className="bg-primary d-flex flex-column justify-content-center p-5 text-white">
            <h2 className="display-6 fw-bold mb-4">{project.title}</h2>
            <div className="mb-4">
              <h6 className="text-uppercase fw-bold opacity-75 mb-2">Impact Visualized</h6>
              <ImpactChart data={project.impactData} />
            </div>
            <p className="small mb-0 opacity-75">{project.metrics}</p>
          </Col>
          <Col lg={7} className="p-5 bg-dark text-light">
            <div className="mb-4">
              <h4 className="fw-bold mb-3 d-flex align-items-center">
                <FaLightbulb className="text-warning me-2" /> The Challenge
              </h4>
              <p className="text-muted">{project.challenge}</p>
            </div>
            <div className="mb-4">
              <h4 className="fw-bold mb-3 d-flex align-items-center">
                <FaCheckCircle className="text-success me-2" /> The Solution
              </h4>
              <p className="text-muted">{project.solution}</p>
            </div>
            <div>
              <h4 className="fw-bold mb-3 d-flex align-items-center">
                <FaChartBar className="text-info me-2" /> Key Results
              </h4>
              <p className="text-muted mb-0">{project.results}</p>
            </div>
          </Col>
        </Row>
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
    <div className="py-5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="text-center mb-5"
      >
        <h2 className="display-4 fw-bold mb-3">Featured Projects</h2>
        <div className="mx-auto bg-primary" style={{ width: '80px', height: '4px', borderRadius: '2px' }}></div>
      </motion.div>
      
      <Row className="g-4">
        {projectsData.map((project) => (
          <Col key={project.id} xs={12} md={6} lg={4}>
            <ProjectCard project={project} showCaseStudy={showCaseStudy} />
          </Col>
        ))}
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