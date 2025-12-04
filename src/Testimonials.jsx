// src/components/Testimonials.jsx

import React from 'react';
import { Card, Carousel, Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonialsData = [
    {
        quote: "Abhishek delivered excellent React work, integrating a complex payment gateway flawlessly. Highly recommend his attention to detail.",
        name: "Mr. Ramesh K.",
        title: "NetTech Solutions (Client)",
        rating: 5,
        photo: '/placeholder-images/client1.jpg'
    },
    {
        quote: "A driven developer. He mastered Node.js and RESTful APIs much faster than expected. His proactive approach is commendable.",
        name: "Dr. Priya S.",
        title: "Coursera Mentor",
        rating: 5,
        photo: '/placeholder-images/client2.jpg'
    },
    {
        quote: "His e-commerce platform built for rural use was a game-changer. It was fast, accessible, and exactly what we needed.",
        name: "Mrs. Leena G.",
        title: "Local Business Owner",
        rating: 5,
        photo: '/placeholder-images/client3.jpg'
    }
];

const Testimonials = () => {
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <FaStar key={i} color={i < rating ? '#ffc107' : '#e4e5e9'} className="me-1" />
        ));
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.0 }}
        >
            <h2 className="text-center mb-5 text-secondary display-5 fw-bold">Client Testimonials</h2>
            
            <Carousel controls={false} indicators={true} interval={5000} className="shadow-lg p-4" data-bs-theme="dark">
                {testimonialsData.map((t, index) => (
                    <Carousel.Item key={index}>
                        <Card className="text-center mx-auto border-0" style={{ maxWidth: '800px', backgroundColor: 'var(--card-bg)' }}>
                            <Card.Body className="p-4">
                                <Image src={t.photo} roundedCircle style={{ width: '80px', height: '80px', objectFit: 'cover' }} className="mb-3 border border-3 border-secondary" loading="lazy" />
                                <blockquote className="blockquote mb-0">
                                    <p className="lead text-light">"{t.quote}"</p>
                                    <footer className="blockquote-footer mt-3 text-muted">
                                        {t.name} <cite title={t.title}>, {t.title}</cite>
                                    </footer>
                                </blockquote>
                                <div className="mt-2">{renderStars(t.rating)}</div>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
        </motion.div>
    );
};

export default Testimonials;