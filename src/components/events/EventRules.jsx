import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const EventRules = ({ rules, color }) => {
  return (
    <motion.section 
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 cosmic-text">Event Rules</h2>
        <p className="text-lg text-stellar-silver/80 max-w-2xl mx-auto">
          Follow these cosmic guidelines to ensure a successful mission.
        </p>
      </motion.div>
      
      <Card className="nebula-card overflow-hidden max-w-4xl mx-auto">
        <CardContent className="p-8">
          <ul className="space-y-4">
            {rules.map((rule, index) => (
              <motion.li 
                key={index}
                variants={fadeInUp}
                className="flex items-start"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-cosmic-purple to-nebula-cyan text-white font-medium mr-4 flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-stellar-silver/90 pt-1">{rule}</p>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default EventRules;