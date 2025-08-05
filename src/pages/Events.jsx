import React from 'react';
import { motion } from 'framer-motion';
import EventCard from '../components/events/EventCard';
import SpaceBackground from '../components/events/SpaceBackground';
import { eventsData } from '../data/eventsData';
import { staggerContainer, fadeInUp } from '../utils/animations';

const Events = () => {
  return (
    <div className="min-h-screen bg-space-black text-stellar-silver">
      <SpaceBackground />
      
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 cosmic-text">
            Cosmic Events
          </h1>
          <p className="text-xl text-stellar-silver/80 max-w-3xl mx-auto">
            Explore our interstellar lineup of AI and Data Science challenges at St. Joseph's Institute of Technology
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {eventsData.map((event, index) => (
            <motion.div 
              key={event.id}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Events;