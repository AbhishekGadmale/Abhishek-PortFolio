// src/components/Skills.jsx

import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJsSquare, FaBootstrap, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaAws, FaShopify, FaCodeBranch, FaPalette } from 'react-icons/fa';

const SkillBar = ({ proficiency, color }) => (
  <div className="mt-3">
    <div className="d-flex justify-content-between mb-1">
      <small className="fw-bold opacity-75">Proficiency</small>
      <small className="fw-bold" style={{ color }}>{proficiency}%</small>
    </div>
    <div className="progress" style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        whileInView={{ width: `${proficiency}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ backgroundColor: color, borderRadius: '10px' }}
      />
    </div>
  </div>
);

const skillsData = [
  { 
    category: 'Frontend',
    items: [
      { icon: FaReact, title: 'React.js', proficiency: 90, color: '#61dafb', desc: 'Expertise in Hooks, Context, and performance optimization.' },
      { icon: FaJsSquare, title: 'JavaScript', proficiency: 85, color: '#f7df1e', desc: 'Mastery of ES6+ and asynchronous programming.' },
      { icon: FaBootstrap, title: 'Bootstrap', proficiency: 95, color: '#7952b3', desc: 'Rapid development of responsive, mobile-first UIs.' },
      { icon: FaPalette, title: 'UI/UX Design', proficiency: 70, color: '#ec4899', desc: 'Creating intuitive and visually appealing interfaces.' },
    ]
  },
  { 
    category: 'Backend & Data',
    items: [
      { icon: FaNodeJs, title: 'Node.js', proficiency: 75, color: '#68a063', desc: 'Building scalable RESTful APIs and server-side logic.' },
      { icon: FaDatabase, title: 'Databases', proficiency: 70, color: '#4DB33D', desc: 'Proficient in MongoDB and relational data modeling.' },
      { icon: FaCodeBranch, title: 'API Integration', proficiency: 88, color: '#FF7F50', desc: 'Seamlessly connecting complex third-party services.' },
      { icon: FaShopify, title: 'E-commerce', proficiency: 80, color: '#96b63d', desc: 'Deep knowledge of commerce flows and platforms.' },
    ]
  },
  { 
    category: 'Tools & Cloud',
    items: [
      { icon: FaGitAlt, title: 'Git & GitHub', proficiency: 90, color: '#F1502F', desc: 'Advanced version control and team collaboration.' },
      { icon: FaAws, title: 'Cloud Services', proficiency: 65, color: '#FF9900', desc: 'Deployment and management on AWS/Vercel/Netlify.' },
    ]
  }
];

const Skills = () => {
  return (
    <div className="py-5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="text-center mb-5"
      >
        <h2 className="display-4 fw-bold mb-3">Technical Expertise</h2>
        <div className="mx-auto bg-primary" style={{ width: '80px', height: '4px', borderRadius: '2px' }}></div>
      </motion.div>

      {skillsData.map((cat, idx) => (
        <div key={idx} className="mb-5">
          <h4 className="text-primary mb-4 fw-bold text-uppercase letter-spacing-2" style={{ fontSize: '1rem' }}>{cat.category}</h4>
          <Row className="g-4">
            {cat.items.map((skill, index) => (
              <Col key={index} xs={12} md={6} lg={3}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-100"
                >
                  <Card className="skill-card h-100 p-4 border-0 shadow-sm">
                    <div className="d-flex align-items-center mb-3">
                      <div className="p-2 rounded-3 me-3" style={{ backgroundColor: `${skill.color}15` }}>
                        <skill.icon size={24} style={{ color: skill.color }} />
                      </div>
                      <Card.Title className="fw-bold mb-0" style={{ fontSize: '1.1rem' }}>{skill.title}</Card.Title>
                    </div>
                    <Card.Text className="text-muted small mb-auto">{skill.desc}</Card.Text>
                    <SkillBar proficiency={skill.proficiency} color={skill.color} />
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Skills;