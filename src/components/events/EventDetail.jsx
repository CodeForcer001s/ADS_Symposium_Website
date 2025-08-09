import React from "react";
import { motion } from "framer-motion";
import EventHero from "./EventHero";
import EventIntro from "./EventIntro";
import EventRounds from "./EventRounds";
import EventRules from "./EventRules";
import OrganizerCard from "./OrganizerCard";
import { Button } from "../ui/button";
import { staggerContainer } from "../../utils/animations";
import organizersData from "../../data/organizersData";

const EventDetail = ({ event }) => {
  const eventOrganizers =
    event.organizers?.map((id) => organizersData[id]) || [];

  // Enhanced cosmic corner elements with more variety
  const cornerElements = [
    // Top-left elements
    {
      id: "tl-1",
      type: "circle",
      size: 280,
      position: { top: "3%", left: "2%" },
      gradient: ["#6272FF", "#8C52FF"],
      opacity: 0.03,
      animation: { y: [0, -30, 0], x: [0, 10, 0], duration: 12, delay: 0 },
    },
    {
      id: "tl-2",
      type: "triangle",
      size: 120,
      position: { top: "12%", left: "8%" },
      gradient: ["#8C52FF", "#6272FF"],
      opacity: 0.08,
      animation: { y: [0, 20, 0], rotate: [0, 15, 0], duration: 8, delay: 2 },
    },
    {
      id: "tl-3",
      type: "diamond",
      size: 90,
      position: { top: "8%", left: "15%" },
      gradient: ["#00D4FF", "#8C52FF"],
      opacity: 0.06,
      animation: { rotate: [0, 360], duration: 20, delay: 1 },
    },

    // Top-right elements
    {
      id: "tr-1",
      type: "circle",
      size: 200,
      position: { top: "6%", right: "3%" },
      gradient: ["#8C52FF", "#6272FF"],
      opacity: 0.04,
      animation: { y: [0, -25, 0], x: [0, -15, 0], duration: 10, delay: 1 },
    },
    {
      id: "tr-2",
      type: "hexagon",
      size: 100,
      position: { top: "15%", right: "10%" },
      gradient: ["#6272FF", "#00D4FF"],
      opacity: 0.07,
      animation: {
        rotate: [0, 20, 0],
        scale: [1, 1.1, 1],
        duration: 7,
        delay: 3,
      },
    },
    {
      id: "tr-3",
      type: "star",
      size: 80,
      position: { top: "20%", right: "5%" },
      gradient: ["#00D4FF", "#8C52FF"],
      opacity: 0.09,
      animation: {
        rotate: [0, -180],
        scale: [1, 0.8, 1],
        duration: 15,
        delay: 0.5,
      },
    },

    // Middle elements (new)
    {
      id: "ml-1",
      type: "circle",
      size: 150,
      position: { top: "40%", left: "1%" },
      gradient: ["#6272FF", "#00D4FF"],
      opacity: 0.04,
      animation: { y: [0, 30, 0], duration: 14, delay: 2.5 },
    },
    {
      id: "mr-1",
      type: "triangle",
      size: 110,
      position: { top: "45%", right: "2%" },
      gradient: ["#8C52FF", "#6272FF"],
      opacity: 0.05,
      animation: {
        rotate: [0, -25, 0],
        x: [0, -20, 0],
        duration: 11,
        delay: 1.8,
      },
    },

    // Bottom-left elements
    {
      id: "bl-1",
      type: "circle",
      size: 240,
      position: { bottom: "8%", left: "5%" },
      gradient: ["#6272FF", "#8C52FF"],
      opacity: 0.03,
      animation: { y: [0, 35, 0], x: [0, 15, 0], duration: 13, delay: 0.5 },
    },
    {
      id: "bl-2",
      type: "triangle",
      size: 95,
      position: { bottom: "18%", left: "12%" },
      gradient: ["#00D4FF", "#6272FF"],
      opacity: 0.08,
      animation: {
        y: [0, -20, 0],
        rotate: [0, -15, 0],
        duration: 9,
        delay: 1.5,
      },
    },
    {
      id: "bl-3",
      type: "hexagon",
      size: 70,
      position: { bottom: "25%", left: "3%" },
      gradient: ["#8C52FF", "#00D4FF"],
      opacity: 0.07,
      animation: {
        rotate: [0, 25, 0],
        scale: [1, 1.2, 1],
        duration: 6,
        delay: 3.2,
      },
    },

    // Bottom-right elements
    {
      id: "br-1",
      type: "circle",
      size: 300,
      position: { bottom: "2%", right: "1%" },
      gradient: ["#8C52FF", "#6272FF"],
      opacity: 0.02,
      animation: { y: [0, 40, 0], x: [0, -20, 0], duration: 16, delay: 0 },
    },
    {
      id: "br-2",
      type: "hexagon",
      size: 130,
      position: { bottom: "12%", right: "8%" },
      gradient: ["#6272FF", "#00D4FF"],
      opacity: 0.06,
      animation: {
        rotate: [0, -20, 0],
        scale: [1, 0.9, 1],
        duration: 10,
        delay: 2,
      },
    },
    {
      id: "br-3",
      type: "diamond",
      size: 85,
      position: { bottom: "20%", right: "15%" },
      gradient: ["#00D4FF", "#8C52FF"],
      opacity: 0.08,
      animation: { rotate: [0, -360], duration: 25, delay: 1.2 },
    },
  ];

  // Floating geometric shapes
  const floatingShapes = Array.from({ length: 20 }).map((_, i) => ({
    id: `floating-${i}`,
    type: ["circle", "triangle", "diamond", "hexagon"][
      Math.floor(Math.random() * 4)
    ],
    size: 20 + Math.random() * 40,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    gradient: [
      ["#6272FF", "#8C52FF"],
      ["#8C52FF", "#00D4FF"],
      ["#00D4FF", "#6272FF"],
      ["#8C52FF", "#6272FF"],
    ][Math.floor(Math.random() * 4)],
    opacity: 0.03 + Math.random() * 0.05,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 5,
  }));

  // Render shape based on type
  const renderShape = (element) => {
    const gradientId = `${element.id}-gradient`;

    switch (element.type) {
      case "triangle":
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient
                id={gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={element.gradient[0]} />
                <stop offset="100%" stopColor={element.gradient[1]} />
              </linearGradient>
            </defs>
            <polygon points="50,15 90,85 10,85" fill={`url(#${gradientId})`} />
          </svg>
        );

      case "hexagon":
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient
                id={gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={element.gradient[0]} />
                <stop offset="100%" stopColor={element.gradient[1]} />
              </linearGradient>
            </defs>
            <polygon
              points="50,5 90,30 90,70 50,95 10,70 10,30"
              fill={`url(#${gradientId})`}
            />
          </svg>
        );

      case "diamond":
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient
                id={gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={element.gradient[0]} />
                <stop offset="100%" stopColor={element.gradient[1]} />
              </linearGradient>
            </defs>
            <polygon
              points="50,10 90,50 50,90 10,50"
              fill={`url(#${gradientId})`}
            />
          </svg>
        );

      case "star":
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient
                id={gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={element.gradient[0]} />
                <stop offset="100%" stopColor={element.gradient[1]} />
              </linearGradient>
            </defs>
            <polygon
              points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
              fill={`url(#${gradientId})`}
            />
          </svg>
        );

      default: // circle
        return null; // Will use CSS background for circles
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="event-detail pb-20 relative overflow-hidden bg-black"
    >
      {/* Deep space gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90 z-0"></div>

      {/* Radial gradient overlays for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-purple-900/10 via-transparent to-transparent z-0"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-blue-900/10 via-transparent to-transparent z-0"></div>

      {/* Enhanced Cosmic Corner Elements */}
      {cornerElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute z-1"
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            ...element.position,
            background:
              element.type === "circle"
                ? `radial-gradient(circle, ${element.gradient[0]} 0%, ${element.gradient[1]} 100%)`
                : "transparent",
            borderRadius: element.type === "circle" ? "50%" : "0",
            transform: "translate(-50%, -50%)",
            opacity: element.opacity,
          }}
          animate={element.animation}
          transition={{
            duration: element.animation.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.animation.delay,
          }}
        >
          {element.type !== "circle" && renderShape(element)}
        </motion.div>
      ))}

      {/* Floating geometric shapes */}
      {floatingShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute z-1"
          initial={{
            top: `${shape.initialY}%`,
            left: `${shape.initialX}%`,
            opacity: 0,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: shape.type !== "circle" ? [0, 360] : 0,
            opacity: [0, shape.opacity, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            background:
              shape.type === "circle"
                ? `radial-gradient(circle, ${shape.gradient[0]} 0%, ${shape.gradient[1]} 100%)`
                : "transparent",
            borderRadius: shape.type === "circle" ? "50%" : "0",
          }}
        >
          {shape.type !== "circle" && renderShape(shape)}
        </motion.div>
      ))}

      {/* Enhanced floating particles with varied sizes and colors */}
      <div className="absolute inset-0 overflow-hidden z-1">
        {Array.from({ length: 80 }).map((_, i) => {
          const colors = ["#6272FF", "#8C52FF", "#00D4FF", "#FFFFFF"];
          const color = colors[Math.floor(Math.random() * colors.length)];
          const size = 1 + Math.random() * 3;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              initial={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0.3],
                y: [0, -100 - Math.random() * 200, -300],
              }}
              transition={{
                duration: 4 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut",
              }}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                boxShadow: `0 0 ${size * 2}px ${color}`,
              }}
            />
          );
        })}
      </div>

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 z-1">
        <svg
          className="w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#6272FF"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Pulsing cosmic rings */}
      <div className="absolute inset-0 z-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute border rounded-full"
            style={{
              top: "50%",
              left: "50%",
              width: `${200 + i * 150}px`,
              height: `${200 + i * 150}px`,
              borderColor: `rgba(98, 114, 255, ${0.1 - i * 0.015})`,
              borderWidth: "1px",
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <EventHero event={event} />

      <div className="container mx-auto px-4 relative z-10">
        <EventIntro event={event} />

        <EventRounds rounds={event.rounds} color={event.color} />

        <EventRules rules={event.rules} color={event.color} />

        {/* Organizers Section */}
        <motion.section
          className="mt-20 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Enhanced corner decorators */}
          <div className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-nebula-cyan/20 z-0">
            <div className="absolute top-0 left-0 w-4 h-4 bg-nebula-cyan/30 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute -top-8 -right-8 w-16 h-16 border-t-2 border-r-2 border-nebula-cyan/20 z-0">
            <div className="absolute top-0 right-0 w-4 h-4 bg-cosmic-purple/30 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 border-b-2 border-l-2 border-cosmic-purple/20 z-0">
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-cosmic-purple/30 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-nebula-cyan/20 z-0">
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-nebula-cyan/30 rounded-full animate-pulse"></div>
          </div>

          <div className="text-center mb-12 relative z-10">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-nebula-cyan to-transparent opacity-60"></div>
            <motion.h2
              className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-nebula-cyan to-cosmic-purple"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Event Organizers
            </motion.h2>
            <p className="text-lg text-stellar-silver/80 max-w-2xl mx-auto">
              Our cosmic crew guiding you through this stellar journey
            </p>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cosmic-purple to-transparent opacity-60"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
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
        <motion.div
          className="mt-16 text-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Enhanced corner decorators for button section */}
          <div className="absolute -top-12 left-1/4 w-20 h-20 border-t-2 border-l-2 border-nebula-cyan/15 z-0">
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-nebula-cyan/20 to-transparent rounded-full"></div>
          </div>
          <div className="absolute -top-12 right-1/4 w-20 h-20 border-t-2 border-r-2 border-cosmic-purple/15 z-0">
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-bl from-cosmic-purple/20 to-transparent rounded-full"></div>
          </div>
          <div className="absolute -bottom-12 left-1/4 w-20 h-20 border-b-2 border-l-2 border-cosmic-purple/15 z-0">
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-tr from-cosmic-purple/20 to-transparent rounded-full"></div>
          </div>
          <div className="absolute -bottom-12 right-1/4 w-20 h-20 border-b-2 border-r-2 border-nebula-cyan/15 z-0">
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-tl from-nebula-cyan/20 to-transparent rounded-full"></div>
          </div>

          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative z-10"
          >
            <motion.div
              className="relative"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple to-nebula-cyan blur-xl opacity-70 rounded-full animate-pulse -z-10"></div>
              <a href="https://conoscenza2025.stjosephstechnology.ac.in/registration/">
                <Button
                  variant="cosmic"
                  size="lg"
                  className="px-10 py-7 text-xl font-bold relative z-10 bg-gradient-to-r from-cosmic-purple to-nebula-cyan hover:from-nebula-cyan hover:to-cosmic-purple transition-all duration-500"
                >
                  <span className="relative z-20">
                    Register for {event.title}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple to-nebula-cyan rounded-full opacity-100 z-0"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple to-nebula-cyan rounded-full scale-110 opacity-0 hover:opacity-30 transition-opacity duration-300 z-0"></div>
                </Button>
              </a>
            </motion.div>
          </a>

          <p className="mt-4 text-stellar-silver/70 relative z-10">
            Registration closes on 20.08.2025{event.registrationDeadline}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EventDetail;
