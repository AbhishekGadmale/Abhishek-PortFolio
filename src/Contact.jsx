// src/components/Contact.jsx

import React, { useState } from 'react';
import { Row, Col, Form, Button, Card, Spinner } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    const [loading, setLoading] = useState(false);

    // Placeholder for form submission logic
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call delay
        setTimeout(() => {
            setLoading(false);
            // In a real deployment, Netlify/Vercel handles this submission if configured correctly:
            // The 'name' attribute on the form is critical for Netlify/Vercel forms feature.
            alert('Thank you for your message! I will get back to you soon.');
            e.target.reset(); 
        }, 2000);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.0 }}
        >
            <h2 className="text-center mb-5 text-secondary display-5 fw-bold">Get In Touch</h2>
            <Row className="justify-content-center">
                <Col lg={8}>
                    <Card style={{ backgroundColor: 'var(--card-bg)' }} className="p-4 shadow-lg border-0">
                        <Form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                            
                            {/* Hidden field for Netlify */}
                            <input type="hidden" name="form-name" value="contact" />
                            <div hidden>
                                <input name="bot-field" />
                            </div>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label className="text-light">Name</Form.Label>
                                        <Form.Control type="text" name="name" required style={{ backgroundColor: 'var(--bg-dark-end)', color: 'var(--text-light)' }} />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label className="text-light">Email</Form.Label>
                                        <Form.Control type="email" name="email" required style={{ backgroundColor: 'var(--bg-dark-end)', color: 'var(--text-light)' }} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label className="text-light">Message</Form.Label>
                                <Form.Control as="textarea" rows={4} name="message" required style={{ backgroundColor: 'var(--bg-dark-end)', color: 'var(--text-light)' }} />
                            </Form.Group>
                            
                            <Button variant="secondary" type="submit" disabled={loading} className="w-100 fw-bold">
                                {loading ? (
                                    <>
                                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </Button>
                        </Form>
                    </Card>

                    <div className="text-center mt-5">
                        <h4 className="text-secondary mb-3">Connect with me</h4>
                        <div className="d-flex justify-content-center gap-4">
                            <a href="https://github.com/AbhishekGadmale" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub size={30} className="text-light hover-primary" />
                            </a>
                            <a href="www.linkedin.com/in/abhishek-gadmale-1309b8353" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin size={30} className="text-light hover-primary" />
                            </a>
                            <a href="https://youtube.com/@YourChannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <FaYoutube size={30} className="text-light hover-primary" />
                            </a>
                            <a href="mailto:abhishek.gadmale@email.com" aria-label="Email">
                                <FaEnvelope size={30} className="text-light hover-primary" />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </motion.div>
    );
};

export default Contact;