import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Aizen25Loader = () => {
  const [loadingText, setLoadingText] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);

  const loadingTexts = [
    "INITIALIZING NEURAL NETWORKS...",
    "CONNECTING TO QUANTUM SERVERS...",
    "LOADING AI ALGORITHMS...",
    "PREPARING SYMPOSIUM DATA...",
    "SYNCHRONIZING MODULES...",
    "FINALIZING EXPERIENCE...",
  ];

  const phases = [
    { name: "BOOT", color: "from-emerald-400 to-teal-400" },
    { name: "LOAD", color: "from-blue-400 to-cyan-400" },
    { name: "SYNC", color: "from-purple-400 to-pink-400" },
    { name: "READY", color: "from-orange-400 to-red-400" },
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setLoadingText((prev) => (prev + 1) % loadingTexts.length);
    }, 2500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 25;
        if (newProgress > 100) return 0;

        // Update phase based on progress
        const phaseIndex = Math.floor((newProgress / 100) * phases.length);
        setCurrentPhase(Math.min(phaseIndex, phases.length - 1));

        return newProgress;
      });
    }, 400);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, []);

  // Matrix-like digital rain effect
  const DigitalRain = ({ delay = 0 }) => (
    <motion.div
      className="absolute text-green-400/20 text-xs font-mono leading-3"
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: window.innerHeight + 20,
        opacity: [0, 0.8, 0.8, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {Array.from({ length: 15 }, (_, i) => (
        <div key={i}>{Math.random() > 0.5 ? "1" : "0"}</div>
      ))}
    </motion.div>
  );

  // Hexagonal particle system
  const HexParticle = ({ delay = 0, size = "w-2 h-2" }) => (
    <motion.div
      className={`absolute ${size} border border-cyan-400/30`}
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
      initial={{
        scale: 0,
        rotate: 0,
        opacity: 0,
      }}
      animate={{
        scale: [0, 1, 0],
        rotate: [0, 180, 360],
        opacity: [0, 0.6, 0],
        y: [-50, window.innerHeight + 50],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  // Circuit board lines
  const CircuitLine = ({ direction = "horizontal", delay = 0 }) => (
    <motion.div
      className={`absolute bg-gradient-to-r from-transparent via-blue-400/20 to-transparent ${
        direction === "horizontal" ? "h-px w-32" : "w-px h-32"
      }`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        [direction === "horizontal" ? "x" : "y"]: ["-100%", "100vw"],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Digital Rain */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute" style={{ left: `${i * 8.33}%` }}>
            <DigitalRain delay={i * 0.5} />
          </div>
        ))}
      </div>

      {/* Floating Hex Particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 10}%`,
              top: "100%",
            }}
          >
            <HexParticle
              delay={i * 0.8}
              size={i % 2 === 0 ? "w-3 h-3" : "w-2 h-2"}
            />
          </div>
        ))}
      </div>

      {/* Circuit Lines */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <div
              className="absolute"
              style={{
                top: `${20 + i * 20}%`,
                left: "-100px",
              }}
            >
              <CircuitLine direction="horizontal" delay={i * 1.2} />
            </div>
            <div
              className="absolute"
              style={{
                left: `${15 + i * 20}%`,
                top: "-100px",
              }}
            >
              <CircuitLine direction="vertical" delay={i * 1.5} />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Phase Indicator */}
        <motion.div
          className="absolute top-8 right-8 text-right"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="text-xs text-gray-400 mb-1">SYSTEM PHASE</div>
          <motion.div
            className={`text-lg font-bold bg-gradient-to-r ${phases[currentPhase].color} bg-clip-text text-transparent`}
            key={currentPhase}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {phases[currentPhase].name}
          </motion.div>
        </motion.div>

        {/* Logo Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Main Logo */}
          <motion.div
            className="relative mb-4"
            animate={{
              filter: [
                "drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))",
                "drop-shadow(0 0 40px rgba(6, 182, 212, 0.6))",
                "drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <h1 className="text-7xl md:text-9xl font-black font-extrabold tracking-[0.2em] relative">
              <motion.span
                className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                style={{ backgroundSize: "300% 300%" }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                AIZEN
              </motion.span>

              {/* Glitch overlay effect */}
              <motion.span
                className="absolute font-extrabold inset-0 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent opacity-0"
                animate={{
                  opacity: [0, 0, 0, 0, 0.8, 0],
                  x: [0, 2, -2, 0],
                  skew: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatDelay: 3,
                  times: [0, 0.1, 0.2, 0.3, 0.4, 1],
                }}
              >
                AIZEN
              </motion.span>
            </h1>

            <motion.div
              className="text-2xl md:text-3xl text-cyan-400 tracking-[0.3em] font-light mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.7, 1] }}
              transition={{ delay: 0.8, duration: 2, repeat: Infinity }}
            >
              '25
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="text-xl md:text-2xl text-gray-300 tracking-[0.15em] font-light opacity-80 mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            TECHNICAL SYMPOSIUM
          </motion.div>

          <motion.div
            className="text-sm text-blue-400/60 tracking-[0.1em] font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            ARTIFICIAL INTELLIGENCE • ZERO TO INFINITE • EXPONENTIAL NEXUS
          </motion.div>
        </motion.div>

        {/* Advanced Loading Section */}
        <motion.div
          className="text-center space-y-6 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          {/* Primary Loading Bar */}
          <div className="relative">
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
              <motion.div
                className={`h-full bg-gradient-to-r ${phases[currentPhase].color} relative`}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>

            {/* Progress percentage */}
            <motion.div
              className="absolute -top-8 right-0 text-sm text-cyan-400 font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {Math.floor(Math.min(progress, 100))}%
            </motion.div>
          </div>

          {/* Secondary pulse bars */}
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-cyan-400/40 rounded-full"
                animate={{
                  height: [4, 20, 4],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Loading Text */}
          <div className="h-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={loadingText}
                className="text-sm text-gray-400 tracking-[0.1em] font-mono"
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{
                  opacity: [0, 1, 1, 0.7],
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{
                  opacity: { duration: 2, times: [0, 0.1, 0.8, 1] },
                  y: { duration: 0.4 },
                  filter: { duration: 0.4 },
                }}
              >
                {loadingTexts[loadingText]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* System Status */}
          <motion.div
            className="flex justify-between text-xs text-gray-500 font-mono pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 2 }}
          >
            <span>CORE: ACTIVE</span>
            <span>NET: STABLE</span>
            <span>AI: ONLINE</span>
          </motion.div>
        </motion.div>

        {/* Corner HUD Elements */}
        <motion.div
          className="absolute top-8 left-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <div className="border-l-2 border-t-2 border-cyan-400/40 w-8 h-8" />
          <div className="text-xs text-cyan-400/60 mt-2 font-mono">SYS_01</div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 right-8 text-right"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: 2.7, duration: 0.8 }}
        >
          <div className="border-r-2 border-b-2 border-cyan-400/40 w-8 h-8 ml-auto" />
          <div className="text-xs text-cyan-400/60 mt-2 font-mono">v2.5.0</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Aizen25Loader;
