import React from 'react';
import { motion } from 'framer-motion';
import ParticleSystem from './ParticleSystem';

const EventHero = ({ event }) => {
  return (
    <div className="event-hero relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${event.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-space-black/70 via-space-black/60 to-space-black"></div>
      
      {/* Particles */}
      <ParticleSystem count={30} color={event.color === 'nebula-cyan' ? '#06b6d4' : '#6b46c1'} />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-24 relative z-10 event-hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-cosmic-purple to-nebula-cyan text-white text-sm font-medium">
              {event.subtitle}
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 cosmic-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {event.title}
          </motion.h1>
          
          <motion.p
            className="text-xl text-stellar-silver/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {event.date} | {event.venue}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default EventHero;