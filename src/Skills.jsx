// src/components/Skills.jsx

import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJsSquare, FaBootstrap, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaAws, FaShopify, FaCodeBranch, FaPalette } from 'react-icons/fa';

// Custom component for the skill bar
const SkillBar = ({ proficiency, color }) => (
  <div className="progress mt-2" style={{ height: '8px', backgroundColor: 'var(--text-muted)' }}>
    <div
      className="progress-bar"
      role="progressbar"
      style={{ width: `${proficiency}%`, backgroundColor: color }}
      aria-valuenow={proficiency}
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
);

const skillsData = [
  { icon: FaReact, title: 'React.js', proficiency: 90, color: '#61dafb', desc: 'Built interactive UIs for e-commerce, using Hooks and Context.' },
  { icon: FaJsSquare, title: 'JavaScript (ES6+)', proficiency: 85, color: '#f7df1e', desc: 'Core language mastery for both frontend and backend logic.' },
  { icon: FaNodeJs, title: 'Node.js / Express', proficiency: 75, color: '#68a063', desc: 'Developed scalable RESTful APIs and server-side logic.' },
  { icon: FaDatabase, title: 'MongoDB / SQL', proficiency: 70, color: '#4DB33D', desc: 'Experienced in data modeling and database management.' },
  { icon: FaBootstrap, title: 'Bootstrap CSS', proficiency: 95, color: '#7952b3', desc: 'Ensured mobile-first, fully responsive design quickly.' },
  { icon: FaShopify, title: 'E-commerce Platforms', proficiency: 80, color: '#96b63d', desc: 'Custom theme and app development for headless commerce.' },
  { icon: FaGitAlt, title: 'Git & GitHub', proficiency: 90, color: '#F1502F', desc: 'Proficient in version control, branching, and pull requests.' },
  { icon: FaCodeBranch, title: 'API Integration', proficiency: 88, color: '#FF7F50', desc: 'Seamlessly integrated third-party APIs (e.g., payment, weather).' },
  { icon: FaAws, title: 'Cloud/Deployment', proficiency: 65, color: '#FF9900', desc: 'Basic knowledge of AWS (S3, EC2) and Vercel/Netlify deploy.' },
  { icon: FaHtml5, title: 'Semantic HTML5', proficiency: 95, color: '#E34F26', desc: 'Focus on high accessibility and SEO standards.' },
  { icon: FaCss3Alt, title: 'Advanced CSS/SASS', proficiency: 80, color: '#1572B6', desc: 'Custom styling, flexbox, and CSS Grid layouts.' },
  { icon: FaPalette, title: 'UI/UX Design', proficiency: 70, color: '#DAA520', desc: 'Skilled in translating mockups into functional interfaces.' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Skills = () => {
  return (
    <motion.div>
      <h2 className="text-center mb-5 text-secondary display-5 fw-bold">Skills & Proficiency</h2>
      
      <motion.div 
        className="row" 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skillsData.map((skill, index) => (
          <Col 
            key={index} 
            xs={12}      // 1-column mobile
            md={6}      // 2x6 tablet
            lg={3}      // 3x4 desktop
            className="mb-4"
          >
            <motion.div className="skill-card h-100" variants={itemVariants}>
              <Card style={{ backgroundColor: 'var(--card-bg)' }} text="light" className="p-4 border-0 shadow-sm">
                <skill.icon size={40} style={{ color: skill.color }} className="mb-3" />
                <Card.Title className="fw-bold">{skill.title}</Card.Title>
                <Card.Text className="text-muted small">{skill.desc}</Card.Text>
                <SkillBar proficiency={skill.proficiency} color={skill.color} />
                <small className="text-end mt-1 text-secondary fw-bold">{skill.proficiency}%</small>
              </Card>
            </motion.div>
          </Col>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;