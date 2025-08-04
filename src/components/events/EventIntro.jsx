import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { fadeInUp } from '../../utils/animations';

const EventIntro = ({ event }) => {
  return (
    <motion.section 
      className="event-intro py-16"
      variants={fadeInUp}
    >
      <Card className="nebula-card overflow-hidden">
        <CardContent className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 cosmic-text">About {event.title}</h2>
            
            <p className="text-lg text-stellar-silver/90 leading-relaxed">
              {event.introduction}
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-space-black/50 px-4 py-3 rounded-lg border border-cosmic-purple/30">
                <span className="text-sm text-stellar-silver/70">Date</span>
                <p className="text-stellar-silver font-medium">{event.date}</p>
              </div>
              
              <div className="bg-space-black/50 px-4 py-3 rounded-lg border border-cosmic-purple/30">
                <span className="text-sm text-stellar-silver/70">Time</span>
                <p className="text-stellar-silver font-medium">{event.time}</p>
              </div>
              
              <div className="bg-space-black/50 px-4 py-3 rounded-lg border border-cosmic-purple/30">
                <span className="text-sm text-stellar-silver/70">Venue</span>
                <p className="text-stellar-silver font-medium">{event.venue}</p>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default EventIntro;