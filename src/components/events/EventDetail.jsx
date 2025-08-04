import React from 'react';
import { motion } from 'framer-motion';
import EventHero from './EventHero';
import EventIntro from './EventIntro';
import EventRounds from './EventRounds';
import EventRules from './EventRules';
import OrganizerCard from './OrganizerCard';
import { Button } from '../ui/button';
import { staggerContainer } from '../../utils/animations';
import organizersData from '../../data/organizersData';

const EventDetail = ({ event }) => {
  // Get organizer data for this event
  const eventOrganizers = event.organizers.map(id => organizersData[id]);
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="event-detail pb-20"
    >
      <EventHero event={event} />
      
      <div className="container mx-auto px-4">
        <EventIntro event={event} />
        
        <EventRounds rounds={event.rounds} color={event.color} />
        
        <EventRules rules={event.rules} color={event.color} />
        
        {/* Organizers Section */}
        <motion.section 
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center cosmic-text">Event Organizers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventOrganizers.map((organizer, index) => (
              <OrganizerCard 
                key={organizer.name} 
                organizer={organizer} 
                delay={index * 0.1} 
              />
            ))}
          </div>
        </motion.section>
        
        {/* Registration Button */}
        <div className="mt-16 text-center">
          <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
            <Button 
              variant="cosmic" 
              size="lg"
              className="px-8 py-6 text-lg font-medium space-button"
            >
              Register for {event.title}
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default EventDetail;