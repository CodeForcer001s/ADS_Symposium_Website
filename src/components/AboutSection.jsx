import React from 'react';
import { motion } from 'framer-motion';

// --- Animation Variants for the paragraphs only ---
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

const AboutSection = () => {
    return (
        <section id="about" className="w-full border-b border-white/10 bg-background px-4 py-24 md:py-32">
            <div className="mx-auto max-w-4xl text-center">

                {/* --- MODIFIED Header with Hover-to-Reveal Gradient --- */}
                <h2
                    className="font-serif text-5xl md:text-6xl font-bold text-amber-400 
                     transition-all duration-500 ease-in-out
                     bg-gradient-to-r from-amber-400 via-red-500 to-amber-300 
                     bg-clip-text hover:text-transparent"
                >
                    The Event Has Passed!
                </h2>

                <p className="mt-4 text-lg text-copy-light">
                    Relive the highlights of Ai-ZEN'25.
                </p>

                {/* The motion.div now only wraps the paragraphs */}
                <div className="mt-16 space-y-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ staggerChildren: 0.4 }}
                        className="space-y-10"
                    >
                        <motion.p
                            variants={paragraphVariants}
                            className="text-left text-lg md:text-xl leading-relaxed text-copy"
                        >
                            Our technical symposium brought together bright minds for five distinct competitive events spanning software development, data analytics, and cybersecurity. Participants showcased their technical prowess in rigorous challenges, pushing the boundaries of innovation and creative problem-solving in a spirit of collaboration.
                        </motion.p>
                    </motion.div>

                    {/* --- MODIFIED College Name - Now has no animation and is always visible --- */}
                    <div className="text-center py-4">
                        <h3 className="font-serif text-3xl font-semibold text-primary">
                            St. JOSEPH'S INSTITUTE OF TECHNOLOGY
                        </h3>
                        <p className="text-lg text-copy-light">DEPARTMENT OF ARTIFICIAL INTELLIGENCE & DATA SCIENCE</p>
                    </div>

                    {/* This motion.div ensures the second paragraph animates independently */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.p
                            variants={paragraphVariants}
                            className="text-left text-lg md:text-xl leading-relaxed text-copy"
                        >
                            The AI & Data Science department is a hub for cutting-edge research and education. Through hands-on projects and industry collaboration, our students and faculty drive impactful advancements, preparing for careers at the forefront of technology and addressing real-world challenges.
                        </motion.p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;