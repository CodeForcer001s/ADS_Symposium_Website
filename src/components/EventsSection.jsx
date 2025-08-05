import React from "react";
import { motion } from "framer-motion";
import EventCard from "./events/EventCard";
import { eventsData } from "../data/eventsData";
import { staggerContainer, fadeInUp } from "../utils/animations";

const EventsSection = () => {
  return (
    <div className="w-full">
      <h2 className="font-serif text-5xl mb-4 text-center cosmic-text">
        Our Events
      </h2>
      <p className="max-w-2xl mx-auto mb-16 text-lg text-center text-copy-light">
        Explore the five pillars of our symposium...
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center"
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
  );
};

export default EventsSection;
