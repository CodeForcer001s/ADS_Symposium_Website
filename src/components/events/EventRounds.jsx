import React, { useRef, useEffect, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion";

const EventRounds = ({ rounds }) => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (timelineRef.current) {
      const rect = timelineRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [timelineRef]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const floatingY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 0.8,
      },
    },
  };

  const dotVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 300,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      y: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        delay: 0.3,
      },
    },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 400,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      rotateX: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
      },
    },
    hover: {
      scale: 1.02,
      rotateX: 2,
      y: -10,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[600px] right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </motion.div>

      <motion.div
        className="w-full bg-neutral-950 font-sans"
        ref={containerRef}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: 0.1,
              }}
            >
              Event{" "}
              <motion.span
                className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Timeline
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: 0.3,
              }}
            >
              Journey through each milestone of our event, featuring
              collaborative moments and key achievements.
            </motion.p>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="relative max-w-7xl mx-auto pb-20 px-4 md:px-8 lg:px-10">
          <motion.div
            ref={timelineRef}
            className="relative"
            variants={containerVariants}
          >
            <AnimatePresence>
              {rounds.map((round, index) => {
                const TimelineItem = ({ children }) => {
                  const ref = useRef(null);
                  const isInView = useInView(ref, {
                    once: true,
                    margin: "-100px",
                  });

                  return (
                    <motion.div
                      ref={ref}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      variants={itemVariants}
                      className="timeline-item relative"
                    >
                      {children}
                    </motion.div>
                  );
                };

                return (
                  <TimelineItem key={round.name || index}>
                    {/* Mobile Layout */}
                    <div className="block lg:hidden mb-16">
                      {/* Mobile Timeline Dot */}
                      <motion.div
                        className="flex items-center mb-6"
                        variants={contentVariants}
                      >
                        <motion.div
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center shadow-lg mr-4"
                          variants={dotVariants}
                          whileHover="hover"
                          whileTap={{ scale: 0.9 }}
                        >
                          <motion.span
                            className="text-white font-bold text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            {index + 1}
                          </motion.span>
                        </motion.div>
                        <motion.h3
                          className="text-xl font-bold text-white"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {round.name || `Round ${index + 1}`}
                        </motion.h3>
                      </motion.div>

                      {/* Mobile Image */}
                      {round.image && (
                        <motion.div
                          className="mb-6 rounded-2xl overflow-hidden shadow-2xl"
                          variants={imageVariants}
                          whileHover="hover"
                        >
                          <motion.img
                            src={round.image}
                            alt={round.name || `Round ${index + 1}`}
                            className="w-full h-48 object-cover"
                            whileHover={{
                              scale: 1.1,
                              transition: { duration: 0.4 },
                            }}
                          />
                        </motion.div>
                      )}

                      {/* Mobile Content */}
                      <motion.div
                        className="bg-neutral-900 rounded-2xl p-6 shadow-lg border border-neutral-800"
                        variants={cardVariants}
                        whileHover="hover"
                      >
                        <motion.p
                          className="text-neutral-300 text-base leading-relaxed mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          {round.description}
                        </motion.p>
                        {round.duration && (
                          <motion.div
                            className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-800 text-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "rgb(147 51 234 / 0.2)",
                            }}
                          >
                            <motion.svg
                              className="w-4 h-4 mr-2 text-purple-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ rotate: [0, 360] }}
                              transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </motion.svg>
                            <span className="text-neutral-400">
                              {round.duration}
                            </span>
                          </motion.div>
                        )}
                      </motion.div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:block">
                      <motion.div
                        className={`flex items-center gap-16 mb-20 ${
                          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                        variants={itemVariants}
                      >
                        {/* Image Side */}
                        <motion.div
                          className="flex-1 max-w-lg"
                          variants={imageVariants}
                          whileHover="hover"
                        >
                          {round.image ? (
                            <motion.div
                              className="relative group"
                              whileHover={{
                                rotateY: index % 2 === 0 ? 5 : -5,
                                transition: { duration: 0.6 },
                              }}
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30"
                                animate={{
                                  scale: [1, 1.05, 1],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />
                              <motion.img
                                src={round.image}
                                alt={round.name || `Round ${index + 1}`}
                                className="relative w-full h-80 object-cover rounded-2xl shadow-2xl"
                                whileHover={{
                                  scale: 1.03,
                                  rotateX: 2,
                                  transition: { duration: 0.4 },
                                }}
                              />
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                            </motion.div>
                          ) : (
                            <motion.div
                              className="w-full h-80 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-purple-700"
                              whileHover={{
                                scale: 1.02,
                                borderColor: "rgb(147 51 234)",
                                transition: { duration: 0.3 },
                              }}
                            >
                              <div className="text-center">
                                <motion.svg
                                  className="w-16 h-16 mx-auto mb-4 text-purple-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  animate={{
                                    y: [0, -5, 0],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </motion.svg>
                                <motion.p
                                  className="text-purple-500 font-medium"
                                  animate={{
                                    opacity: [0.7, 1, 0.7],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                >
                                  Collaboration Image
                                </motion.p>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>

                        {/* Timeline Dot */}
                        <div className="relative flex-shrink-0">
                          <motion.div
                            className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl relative z-10"
                            variants={dotVariants}
                            whileHover="hover"
                            whileTap={{ scale: 0.9 }}
                          >
                            <motion.span
                              className="text-white font-bold text-lg"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: 0.5,
                                type: "spring",
                                stiffness: 200,
                              }}
                            >
                              {index + 1}
                            </motion.span>
                          </motion.div>
                          {/* Animated rings */}
                          <motion.div
                            className="absolute inset-0 rounded-full border-4 border-purple-400/30"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.7, 0, 0.7],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeOut",
                            }}
                          />
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-blue-400/20"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeOut",
                              delay: 0.5,
                            }}
                          />
                        </div>

                        {/* Content Side */}
                        <motion.div
                          className="flex-1 max-w-lg"
                          variants={contentVariants}
                          whileHover="hover"
                        >
                          <motion.div
                            className="bg-neutral-900 rounded-2xl p-8 shadow-xl border border-neutral-800 hover:border-purple-600 group relative overflow-hidden"
                            variants={cardVariants}
                            whileHover="hover"
                          >
                            {/* Gradient overlay */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-br from-purple-950/10 via-blue-950/10 to-cyan-950/10 rounded-2xl"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />

                            <div className="relative z-10">
                              <motion.div
                                className="flex items-center justify-between mb-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                              >
                                <motion.h3
                                  className="text-2xl md:text-3xl font-bold text-white"
                                  whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.2 },
                                  }}
                                >
                                  {round.name || `Round ${index + 1}`}
                                </motion.h3>
                                <motion.div
                                  className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                                  animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.7, 1, 0.7],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                />
                              </motion.div>

                              <motion.p
                                className="text-neutral-300 text-lg leading-relaxed mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                              >
                                {round.description}
                              </motion.p>

                              {round.duration && (
                                <motion.div
                                  className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30 border border-purple-800"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.7 }}
                                  whileHover={{
                                    scale: 1.05,
                                    boxShadow:
                                      "0 0 20px rgba(147, 51, 234, 0.3)",
                                    transition: { duration: 0.2 },
                                  }}
                                >
                                  <motion.svg
                                    className="w-4 h-4 mr-2 text-purple-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{
                                      duration: 10,
                                      repeat: Infinity,
                                      ease: "linear",
                                    }}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </motion.svg>
                                  <span className="text-sm font-medium text-purple-400">
                                    {round.duration}
                                  </span>
                                </motion.div>
                              )}
                            </div>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </TimelineItem>
                );
              })}
            </AnimatePresence>

            {/* Animated Timeline Line */}
            <motion.div
              style={{ height: height + "px" }}
              className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 w-[3px] bg-gradient-to-b from-transparent via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Particles with Advanced Motion */}
        <motion.div
          style={{ y: floatingY }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 100,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                y: -100,
                scale: [0, 1, 0.5, 1, 0],
                opacity: [0, 0.8, 0.4, 0.8, 0],
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth +
                    (Math.random() - 0.5) * 200,
                ],
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EventRounds;
