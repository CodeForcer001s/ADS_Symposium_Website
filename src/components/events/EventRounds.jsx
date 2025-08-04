import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from 'gsap';

const EventRounds = ({ rounds, color }) => {
  const timelineRef = useRef(null);
  
  // GSAP animation for the timeline
  useGSAP(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;
    
    gsap.from('.event-round-item', {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 0.8,
      scrollTrigger: {
        trigger: timeline,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });
  }, []);
  
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4 cosmic-text">Event Rounds</h2>
        <p className="text-lg text-stellar-silver/80 max-w-2xl mx-auto">
          Navigate through the cosmic journey of this event, each round presenting unique challenges.
        </p>
      </motion.div>
      
      <div className="event-rounds-timeline relative" ref={timelineRef}>
        {rounds.map((round, index) => (
          <div 
            key={round.name}
            className={`event-round-item ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}
          >
            <Card className="holographic overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 cosmic-text">{round.name}</h3>
                <p className="text-stellar-silver/80 mb-4">{round.description}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-space-black/50 text-sm border border-cosmic-purple/30">
                  <span className="text-stellar-silver/70">Duration: </span>
                  <span className="text-stellar-silver">{round.duration}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventRounds;