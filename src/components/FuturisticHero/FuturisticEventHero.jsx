import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";

// Enhanced Floating 3D Cubes Component
const FloatingCubes = ({ mousePosition }) => {
  const cubes = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        z: Math.random() * 200 + 50,
        rotateX: Math.random() * 360,
        rotateY: Math.random() * 360,
        size: Math.random() * 35 + 20,
        speed: Math.random() * 0.4 + 0.2,
        color: i % 2 === 0 ? "#00f5ff" : "#8a2be2",
      })),
    []
  );

  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.01);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className="absolute opacity-20 transition-opacity duration-300"
          style={{
            left: `${cube.x + Math.sin(time * cube.speed) * 3}%`,
            top: `${cube.y + Math.cos(time * cube.speed) * 2}%`,
            width: `${cube.size}px`,
            height: `${cube.size}px`,
            transform: `
              translateZ(${cube.z}px) 
              rotateX(${cube.rotateX + time * 15}deg) 
              rotateY(${cube.rotateY + time * 20}deg)
              translate(${(mousePosition.x - 0.5) * 30}px, ${
              (mousePosition.y - 0.5) * 30
            }px)
            `,
            background: `linear-gradient(135deg, ${cube.color}40, ${cube.color}20)`,
            backdropFilter: "blur(2px)",
            border: `1px solid ${cube.color}30`,
            borderRadius: "4px",
            animation: `float ${3 + cube.id * 0.3}s ease-in-out infinite`,
            animationDelay: `${cube.id * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Particle System
const ParticleSystem = ({ count = 40, color = "#00f5ff" }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.6 + 0.2,
          direction: Math.random() * 360,
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: (particle.x + Math.cos(particle.direction) * particle.speed) % 100,
          y: (particle.y + Math.sin(particle.direction) * particle.speed) % 100,
          opacity: 0.3 + Math.sin(Date.now() * 0.002 + particle.id) * 0.3,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${color}60`,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Dynamic Background
const DynamicBackground = ({ mousePosition }) => {
  const [currentBg, setCurrentBg] = useState(0);

  const backgrounds = [
    "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2208&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2125&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2011&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    "https://techcrunch.com/wp-content/uploads/2016/02/shutterstock_161925818.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className="absolute inset-0 z-0 transition-all duration-3000 ease-in-out"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: currentBg === index ? 1 : 0,
            transform: `scale(1.05) translate(${
              (mousePosition.x - 0.5) * 30
            }px, ${(mousePosition.y - 0.5) * 30}px)`,
            filter: "brightness(0.3) contrast(1.3) hue-rotate(200deg)",
          }}
        />
      ))}
    </>
  );
};

// Enhanced Grid Overlay
const GridOverlay = ({ mousePosition }) => {
  return (
    <div className="absolute inset-0 z-15 pointer-events-none opacity-20">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "gridMove 20s linear infinite",
          transform: `translate(${(mousePosition.x - 0.5) * 10}px, ${
            (mousePosition.y - 0.5) * 10
          }px)`,
        }}
      />
    </div>
  );
};

// Enhanced Countdown Timer
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-6">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="glass-panel p-4 rounded-lg min-w-[80px] hover:scale-105 transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
              {String(value).padStart(2, "0")}
            </div>
            <div className="text-xs text-gray-300 uppercase tracking-wider">
              {unit}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Enhanced Component
const FuturisticEventHero = ({ event }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    }
  }, []);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      return () =>
        heroElement.removeEventListener("mousemove", handleMouseMove);
    }
  }, [handleMouseMove]);

  const eventDate = "2025-08-30T09:30:00";

  return (
    <div className="relative">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            text-shadow: 0 0 20px #00f5ff60, 0 0 40px #00f5ff30;
          }
          50% {
            text-shadow: 0 0 30px #00f5ff80, 0 0 60px #00f5ff40;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes connectionPulse {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes backgroundShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .cyber-title {
          background: linear-gradient(
            135deg,
            #00f5ff 0%,
            #ffffff 30%,
            #8a2be2 60%,
            #00f5ff 100%
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glowPulse 3s ease-in-out infinite,
            backgroundShift 6s ease-in-out infinite;
        }

        .glass-panel {
          background: rgba(0, 15, 30, 0.3);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(0, 245, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(0, 245, 255, 0.1);
        }

        .cyber-button {
          background: linear-gradient(135deg, #00f5ff 0%, #8a2be2 100%);
          border: 1px solid rgba(0, 245, 255, 0.5);
          box-shadow: 0 0 20px rgba(0, 245, 255, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
        }

        .cyber-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .cyber-button:hover::before {
          left: 100%;
        }

        .cyber-button:hover {
          box-shadow: 0 0 30px rgba(0, 245, 255, 0.5),
            0 0 60px rgba(138, 43, 226, 0.3);
          transform: translateY(-2px);
        }

        .outline-button {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(0, 245, 255, 0.4);
          transition: all 0.3s ease;
        }

        .outline-button:hover {
          background: rgba(0, 245, 255, 0.1);
          border-color: rgba(0, 245, 255, 0.7);
          box-shadow: 0 0 20px rgba(0, 245, 255, 0.2);
        }

        .status-dot {
          animation: connectionPulse 2s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out both;
        }

        .subtitle-glow {
          text-shadow: 0 0 10px rgba(255, 0, 128, 0.5);
        }

        .perspective-container {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
      `}</style>

      <div
        ref={heroRef}
        className="relative overflow-hidden h-screen flex items-center justify-center perspective-container"
        style={{
          background:
            "radial-gradient(ellipse at center, #001122 0%, #000511 100%)",
        }}
      >
        {/* Background Elements */}
        <DynamicBackground mousePosition={mousePosition} />
        <GridOverlay mousePosition={mousePosition} />
        <FloatingCubes mousePosition={mousePosition} />
        <ParticleSystem count={35} color="#00f5ff" />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-24 relative z-30">
          <div className="max-w-6xl mx-auto text-center">
            {/* Event Subtitle */}
            <div
              className="mb-8 animate-fade-in-down"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="inline-flex items-center gap-2 glass-panel px-6 py-3 rounded-full hover:scale-105 transition-all duration-300">
                <div className="w-2 h-2 bg-green-400 rounded-full status-dot"></div>
                <span className="text-green-400 text-sm font-mono font-bold tracking-wider uppercase">
                  TECHNICAL SYMPOSIUM
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1
              className="text-5xl md:text-9xl lg:text-9xl font-extrabold mb-6 cyber-title leading-normal tracking-normal hover:scale-105 transition-transform duration-500"
              style={{ animation: "fadeInUp 1s ease-out 0.4s both" }}
            >
              AIZEN'25
            </h1>

            {/* Secondary Title */}
            <h2
              className="text-xl md:text-6xl text-white font-semibold text-center subtitle-glow mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              National Level Technical Symposium 2025
            </h2>

            {/* Countdown Timer */}
            <div
              className="mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <CountdownTimer targetDate={eventDate} />
            </div>

            {/* Call to Action Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSezC-3X4aeZED34Cn-mUCjc3D8ASbncAVtIHyUbPYO9ILY68g/viewform?usp=header"
                className="group px-10 py-4 cyber-button rounded-lg text-white font-bold text-lg transform hover:scale-105 transition-all duration-300 relative z-10"
                target="_blank"
              >
                <span className="flex items-center gap-3 relative z-10">
                  REGISTER NOW
                  <svg
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="#about"
                className="group px-10 py-4 outline-button rounded-lg text-cyan-400 font-bold text-lg hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Light Effect */}
        <div
          className="absolute inset-0 z-25 pointer-events-none opacity-30 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
              mousePosition.y * 100
            }%, rgba(0, 245, 255, 0.15) 0%, transparent 70%)`,
          }}
        />

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center text-cyan-400 group transition-transform duration-300 hover:scale-105 cursor-pointer">
            <span className="text-xs font-mono tracking-wider mb-1 opacity-70 group-hover:opacity-100 transition-opacity">
              SCROLL
            </span>
            <div className="w-[20px] h-[35px] border-2 border-cyan-400/60 rounded-full flex justify-center items-start group-hover:border-cyan-400 transition-colors">
              <div className="w-[3px] h-[8px] bg-cyan-400 rounded-full mt-1 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturisticEventHero;
