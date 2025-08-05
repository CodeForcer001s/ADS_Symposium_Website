import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const EventRules = ({ rules, color }) => {
  // Generate random stars for the background
  const stars = Array.from({ length: 150 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
  }));

  return (
    <motion.section
      className="relative py-20 overflow-hidden bg-gradient-to-b from-galaxy-black to-deep-space-blue"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Animated stars background */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: star.delay,
            }}
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
            initial={{
              top: `${Math.random() * 100}%`,
              left: "-100px",
              opacity: 0,
            }}
            animate={{
              left: "100%",
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 3,
              repeat: Infinity,
              repeatDelay: 10,
            }}
            style={{
              width: `${100 + Math.random() * 100}px`,
              transform: `rotate(${-15 + Math.random() * 30}deg)`,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={fadeInUp}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-4 cosmic-text bg-clip-text text-transparent bg-gradient-to-r from-nebula-cyan to-cosmic-purple">
          Event Rules
        </h2>

        <p className="text-xl text-stellar-silver/80 max-w-2xl mx-auto">
          Follow these cosmic guidelines to ensure a successful mission.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <Card className="nebula-card overflow-hidden bg-space-glass backdrop-blur-lg border border-nebula-cyan/30 shadow-lg shadow-cosmic-purple/20">
          <div className="absolute inset-0 bg-black/10 rounded-xl z-0" />
          <CardContent className="p-6 md:p-10 relative z-10">
            <ul className="space-y-6">
              {rules.map((rule, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start bg-space-glass-secondary p-4 rounded-lg backdrop-blur-sm border border-nebula-cyan/10 hover:border-nebula-cyan/30 transition-all duration-300"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(98, 114, 255, 0.25)",
                  }}
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cosmic-purple to-nebula-cyan text-white font-bold text-lg mr-4 flex-shrink-0 shadow-glow">
                    {index + 1}
                  </span>
                  <p className="text-stellar-silver/90 pt-1 text-lg">{rule}</p>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Animated floating planets */}
      <motion.div
        className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-cosmic-purple/20 to-nebula-cyan/10 border border-nebula-cyan/20 z-0"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 -right-16 w-32 h-32 rounded-full bg-gradient-to-br from-nebula-cyan/15 to-cosmic-purple/10 border border-nebula-cyan/20 z-0"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.section>
  );
};

export default EventRules;
