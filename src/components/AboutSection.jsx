import React from 'react';
import { motion } from 'framer-motion';
import { CardSpotlight } from '../effects/cardEffect';
import './styles/AboutSection.css';

// Animation Variants for the paragraphs
const paragraphVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 40,
            damping: 15,
            duration: 0.8,
        }
    },
};

// Handle mouse movement for cursor effects
const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
};

const AboutSection = () => {
    return (
        <CardSpotlight 
            id="about"
            className="about-section-boundary about-card-spotlight w-full min-h-screen border-none rounded-none"
            radius={500}
            color="#1e293b"
        >
            <div className="w-full px-4 py-24 md:py-32">
                <div className="mx-auto max-w-4xl text-center about-content-container">
                    
                    {/* Main Title */}
                    <motion.h2
                        className="about-main-title text-5xl md:text-6xl font-bold"
                        whileHover={{ 
                            scale: 1.05,
                            textShadow: "0px 0px 20px rgba(251, 191, 36, 0.5)"
                        }}
                        transition={{ duration: 0.3 }}
                        onMouseMove={handleMouseMove}
                    >
                        The Event Has Passed!
                        <motion.div className="about-title-cursor-effect" />
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p 
                        className="about-subtitle mt-4 text-lg"
                        whileHover={{ 
                            scale: 1.02,
                            color: "#ffffff"
                        }}
                    >
                        Relive the highlights of Ai-ZEN'25.
                        <motion.span
                            className="about-subtitle-shimmer"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                        />
                    </motion.p>

                    <div className="mt-16 space-y-10">
                        
                        {/* First Paragraph */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ staggerChildren: 0.4 }}
                            className="space-y-10"
                        >
                            <motion.p
                                variants={paragraphVariants}
                                className="about-paragraph about-paragraph-blue text-left text-lg md:text-xl leading-relaxed"
                                whileHover={{ 
                                    scale: 1.02,
                                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.1)"
                                }}
                                onMouseMove={handleMouseMove}
                            >
                                Our technical symposium brought together bright minds for five distinct competitive events spanning software development, data analytics, and cybersecurity. Participants showcased their technical prowess in rigorous challenges, pushing the boundaries of innovation and creative problem-solving in a spirit of collaboration.
                                
                                <div className="about-mini-cursor-dot about-mini-cursor-dot-blue" />
                                <div className="about-mini-cursor-ring about-mini-cursor-ring-blue" />
                            </motion.p>
                        </motion.div>

                        {/* College and Department Info */}
                        <motion.div className="about-college-container text-center py-4">
                            <motion.h3 
                                className="about-college-name text-3xl font-semibold"
                                whileHover={{ 
                                    scale: 1.05,
                                    textShadow: "0px 0px 15px rgba(251, 191, 36, 0.3)"
                                }}
                            >
                                St. JOSEPH'S INSTITUTE OF TECHNOLOGY
                                <motion.div
                                    className="about-college-underline"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.4 }}
                                />
                            </motion.h3>
                            
                            <motion.p 
                                className="about-department-name text-lg mt-2"
                                whileHover={{ scale: 1.02 }}
                            >
                                DEPARTMENT OF ARTIFICIAL INTELLIGENCE & DATA SCIENCE
                            </motion.p>
                        </motion.div>

                        {/* Second Paragraph */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <motion.p
                                variants={paragraphVariants}
                                className="about-paragraph about-paragraph-purple text-left text-lg md:text-xl leading-relaxed"
                                whileHover={{ 
                                    scale: 1.02,
                                    boxShadow: "0 0 30px rgba(139, 92, 246, 0.1)"
                                }}
                                onMouseMove={handleMouseMove}
                            >
                                The AI & Data Science department is a hub for cutting-edge research and education. Through hands-on projects and industry collaboration, our students and faculty drive impactful advancements, preparing for careers at the forefront of technology and addressing real-world challenges.
                                
                                <div className="about-mini-cursor-dot about-mini-cursor-dot-purple" />
                                <div className="about-mini-cursor-ring about-mini-cursor-ring-purple" />
                            </motion.p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </CardSpotlight>
    );
};

export default AboutSection;