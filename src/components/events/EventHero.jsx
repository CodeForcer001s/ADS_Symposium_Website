import React, { useState, useEffect, useRef } from "react";

// Floating 3D Cubes Component
const FloatingCubes = ({ mousePosition }) => {
  const cubes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random() * 200 + 50,
    rotateX: Math.random() * 360,
    rotateY: Math.random() * 360,
    size: Math.random() * 40 + 20,
    speed: Math.random() * 0.5 + 0.2,
  }));

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className="absolute opacity-20"
          style={{
            left: `${cube.x}%`,
            top: `${cube.y}%`,
            width: `${cube.size}px`,
            height: `${cube.size}px`,
            transform: `
              translateZ(${cube.z}px) 
              rotateX(${cube.rotateX + Date.now() * 0.001}deg) 
              rotateY(${cube.rotateY + Date.now() * 0.001}deg)
              translate(${(mousePosition.x - 0.5) * 30}px, ${
              (mousePosition.y - 0.5) * 30
            }px)
            `,
            background: `linear-gradient(135deg, #00f5ff40, #8a2be240)`,
            backdropFilter: "blur(2px)",
            border: "1px solid rgba(0, 245, 255, 0.3)",
            animation: `float ${3 + cube.id * 0.5}s ease-in-out infinite`,
            animationDelay: `${cube.id * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
};

// Particle System
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
          size: Math.random() * 4 + 1,
          speed: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
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
          opacity: 0.3 + Math.sin(Date.now() * 0.002 + particle.id) * 0.5,
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
            boxShadow: `0 0 ${particle.size * 3}px ${color}80`,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
    </div>
  );
};

// Dynamic Background Manager
const DynamicBackground = ({ mousePosition }) => {
  const [currentBg, setCurrentBg] = useState(0);

  const backgrounds = [
    "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2208&auto=format&fit=crop", // Tech cityscape
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2125&auto=format&fit=crop", // Space station
    "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2011&auto=format&fit=crop", // Galaxy
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop", // Nebula
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
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
            transform: `scale(1.1) translate(${
              (mousePosition.x - 0.5) * 40
            }px, ${(mousePosition.y - 0.5) * 40}px)`,
            filter: "brightness(0.3) contrast(1.4) hue-rotate(200deg)",
          }}
        />
      ))}
    </>
  );
};

// Grid Overlay
const GridOverlay = () => {
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
        }}
      />
    </div>
  );
};

// Status Indicator Component
const StatusIndicator = ({ label, value, color = "#00f5ff" }) => {
  return (
    <div className="glass-panel p-4 text-center hover:scale-105 transition-all duration-300">
      <div className="text-xs uppercase tracking-wider mb-2" style={{ color }}>
        {label}
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
    </div>
  );
};

const FuturisticEventHero = ({ event }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [connectionStatus, setConnectionStatus] = useState("ESTABLISHING");
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      return () =>
        heroElement.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const statuses = ["ESTABLISHING", "CONNECTING", "NEURAL LINK ESTABLISHED"];
    let index = 0;
    const interval = setInterval(() => {
      setConnectionStatus(statuses[index]);
      index = (index + 1) % statuses.length;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            text-shadow: 0 0 20px #00f5ff80, 0 0 40px #00f5ff40,
              0 0 60px #00f5ff20;
          }
          50% {
            text-shadow: 0 0 30px #00f5ff, 0 0 60px #00f5ff80,
              0 0 90px #00f5ff40;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
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

        @keyframes hologramShimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .cyber-title {
          background: linear-gradient(
            135deg,
            #00f5ff 0%,
            #ffffff 25%,
            #8a2be2 50%,
            #00f5ff 75%,
            #ffffff 100%
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glowPulse 3s ease-in-out infinite;
        }

        .glass-panel {
          background: rgba(0, 15, 30, 0.4);
          backdrop-filter: blur(20px);
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
          box-shadow: 0 0 30px rgba(0, 245, 255, 0.6),
            0 0 60px rgba(138, 43, 226, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          transform: translateY(-3px);
        }

        .outline-button {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(0, 245, 255, 0.4);
          transition: all 0.3s ease;
        }

        .outline-button:hover {
          background: rgba(0, 245, 255, 0.1);
          border-color: rgba(0, 245, 255, 0.8);
          box-shadow: 0 0 20px rgba(0, 245, 255, 0.2);
        }

        .status-dot {
          animation: connectionPulse 2s ease-in-out infinite;
        }

        .hologram-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 245, 255, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: hologramShimmer 2s infinite;
        }

        .perspective-container {
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .transition-3000 {
          transition-duration: 3000ms;
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
        {/* Dynamic Background */}
        <DynamicBackground mousePosition={mousePosition} />

        {/* Grid Overlay */}
        <GridOverlay />

        {/* Floating 3D Cubes */}
        <FloatingCubes mousePosition={mousePosition} />

        {/* Particles */}
        <ParticleSystem count={35} color="#00f5ff" />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-24 relative z-30">
          <div className="max-w-6xl mx-auto text-center">
            {/* Subtitle */}
            <div
              className="mb-8"
              style={{ animation: "fadeInDown 0.8s ease-out 0.2s both" }}
            >
              <div className="inline-flex items-center gap-2 glass-panel px-6 py-3 rounded-full hover:scale-105 transition-all duration-300">
                <div className="w-2 h-2 bg-green-400 rounded-full status-dot"></div>
                <span className="text-green-400 text-sm font-mono tracking-wider uppercase">
                  {event?.subtitle || "Technology Symposium"}
                </span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full status-dot"></div>
              </div>
            </div>

            {/* Main Title */}
            <h1
              className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 cyber-title leading-tight tracking-tight hover:scale-105 transition-transform duration-500"
              style={{
                animation: "fadeInUp 1s ease-out 0.4s both",
                fontWeight: "900",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              {event?.title || "Innovation Summit"}
            </h1>

            {/* Event Details */}
            <div
              className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
              style={{ animation: "fadeInUp 1s ease-out 0.6s both" }}
            >
              <div className="flex items-center gap-3 glass-panel px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300">
                <div className="w-3 h-3 bg-cyan-400 rounded-sm status-dot"></div>
                <span className="text-cyan-400 font-mono text-lg tracking-wider">
                  {event?.date || "March 15, 2024"}
                </span>
              </div>
              <div className="hidden md:block w-px h-8 bg-cyan-400/30"></div>
              <div className="flex items-center gap-3 glass-panel px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300">
                <div className="w-3 h-3 bg-purple-400 rounded-sm status-dot"></div>
                <span className="text-purple-400 font-mono text-lg tracking-wider">
                  {event?.venue || "Convention Center"}
                </span>
              </div>
            </div>

            {/* Call to Action */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              style={{ animation: "fadeInUp 1s ease-out 0.8s both" }}
            >
              <a
                href="https://docs.google.com/forms/d/1URbyQNnrZZnfrGXEsy1P8N7vzLwsyE2J-uDHbxK5beM/edit"
                className="group px-10 py-4 cyber-button rounded-lg text-white font-bold text-lg transform hover:scale-105 transition-all duration-300 relative z-10"
              >
                <span className="flex items-center gap-3 relative z-10">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
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
                href="#event-intro"
                className="group px-10 py-4 outline-button rounded-lg text-cyan-400 font-bold text-lg hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                LEARN MORE
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Light Effect */}
        <div
          className="absolute inset-0 z-25 pointer-events-none opacity-30 transition-all duration-500"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
              mousePosition.y * 100
            }%, rgba(0, 245, 255, 0.15) 0%, transparent 70%)`,
          }}
        />

        {/* Hologram Effects */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <div className="hologram-effect w-full h-full opacity-20"></div>
        </div>

        {/* Scroll Indicator */}
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center text-cyan-400 group transition-transform duration-300 hover:scale-105">
            <span className="text-[10px] font-mono tracking-wider mb-1 opacity-70">
              SCROLL
            </span>
            <div className="w-[20px] h-[35px] border-2 border-cyan-400/60 rounded-full flex justify-center items-start">
              <div className="w-[3px] h-[8px] bg-cyan-400 rounded-full mt-1 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturisticEventHero;
