import React, { useState, useEffect } from "react";

// Card Spotlight Effect Component
const CardSpotlight = ({
  children,
  className,
  radius = 500,
  color = "#ffffff",
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: `radial-gradient(${radius}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${color}15, transparent 40%)`,
      }}
      id="about"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="relative z-10">{children}</div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
            animation: "gridMove 20s linear infinite",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Enhanced About Section Component
const AboutSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleGlobalMouseMove = (e) => {
    if (!isMobile) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("mousemove", handleGlobalMouseMove);
      return () =>
        window.removeEventListener("mousemove", handleGlobalMouseMove);
    }
  }, [isMobile]);

  return (
    <div className="relative">
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(30px, 30px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease infinite;
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .neon-glow {
          text-shadow: 0 0 5px #3b82f6, 0 0 10px #3b82f6, 0 0 15px #3b82f6;
        }

        @media (min-width: 768px) {
          .neon-glow {
            text-shadow: 0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6;
          }
        }

        .slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @media (min-width: 768px) {
          @keyframes slideInLeft {
            from {
              transform: translateX(-100px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInRight {
            from {
              transform: translateX(100px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-2px) scale(1.01);
        }

        @media (min-width: 768px) {
          .hover-lift:hover {
            transform: translateY(-5px) scale(1.02);
          }
        }

        @media (max-width: 767px) {
          .gradient-text {
            background-size: 200% 200%;
          }
        }
      `}</style>

      <CardSpotlight
        id="about"
        className="w-full min-h-screen relative"
        radius={isMobile ? 300 : 600}
        color="#3b82f6"
      >
        <div className="w-full px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10">
          <div className="mx-auto max-w-6xl">
            {/* Hero Section */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="relative inline-block">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 gradient-text leading-tight px-2">
                  The Event Has Arrived!
                </h1>
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-full -z-10" />
              </div>

              <div className="relative overflow-hidden px-4">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-extrabold max-w-3xl mx-auto leading-relaxed">
                  REGISTER FOR{" "}
                  <span className="font-bold neon-glow text-blue-400">
                    AI-ZEN 25
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] animate-[shimmer_2s_infinite]" />
                </p>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
              {/* Left Column - Main Content */}
              <div
                className={`space-y-6 sm:space-y-8 ${
                  isVisible.content1 ? "slide-in-left" : "opacity-0"
                }`}
                id="content1"
                data-animate
              >
                <div className="glass-morphism rounded-xl sm:rounded-2xl p-6 sm:p-8 hover-lift group">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Technical Excellence
                    </h3>
                  </div>

                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Our technical symposium will stand as a landmark event that
                    brought together some of the brightest minds to compete in
                    five distinct events spanning
                    <span className="text-blue-400 font-semibold">
                      {" "}
                      software development
                    </span>
                    ,
                    <span className="text-purple-400 font-semibold">
                      {" "}
                      data analytics
                    </span>
                    , and The participants will have demonstrated exceptional
                    technical prowess and innovation through a series of
                    rigorous challenges. This symposium is set to inspire future
                    collaborations, ignite a culture of creative
                    problem-solving, and push the boundaries of what students
                    and tech enthusiasts can achieve in
                    competitive environments.
                  </p>

                  <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
                    {[
                      "AI/ML",
                      "Data Science",
                      "Cybersecurity",
                      "Web Dev",
                      "Innovation",
                    ].map((tag, index) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs sm:text-sm text-blue-300 border border-blue-500/30"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Stats/Visual */}
              <div
                className={`${
                  isVisible.content2 ? "slide-in-right" : "opacity-0"
                }`}
                id="content2"
                data-animate
              >
                <div className="glass-morphism rounded-xl sm:rounded-2xl p-6 sm:p-8 hover-lift">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
                    Event Highlights
                  </h3>

                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {[
                      {
                        number: "5",
                        label: "Competitions",
                        color: "from-blue-500 to-cyan-500",
                      },
                      {
                        number: "100+",
                        label: "Participants",
                        color: "from-purple-500 to-pink-500",
                      },
                      {
                        number: "6-8",
                        label: "Hours",
                        color: "from-green-500 to-emerald-500",
                      },
                      {
                        number: "∞",
                        label: "Innovation",
                        color: "from-orange-500 to-red-500",
                      },
                    ].map((stat, index) => (
                      <div key={stat.label} className="text-center group">
                        <div
                          className={`text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {stat.number}
                        </div>
                        <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Institution Section */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="glass-morphism rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 hover-lift max-w-4xl mx-auto">
                <div className="relative">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 relative leading-tight">
                    ST. JOSEPH'S INSTITUTE OF TECHNOLOGY
                    <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  </h2>
                </div>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-6 sm:mt-8 font-medium">
                  DEPARTMENT OF ARTIFICIAL INTELLIGENCE & DATA SCIENCE
                </p>

                <div className="mt-6 sm:mt-8 flex justify-center space-x-4 sm:space-x-6 md:space-x-8">
                  {[
                    { icon: "🎓", label: "Excellence" },
                    { icon: "🚀", label: "Innovation" },
                    { icon: "🤝", label: "Collaboration" },
                    { icon: "💡", label: "Research" },
                  ].map((item, index) => (
                    <div key={item.label} className="text-center group">
                      <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 group-hover:scale-125 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Department Info */}
            <div
              className={`${
                isVisible.content3 ? "slide-in-left" : "opacity-0"
              }`}
              id="content3"
              data-animate
            >
              <div className="glass-morphism rounded-xl sm:rounded-2xl p-6 sm:p-8 hover-lift">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
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
                    </div>
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                      Driving Innovation Forward
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      The AI & Data Science department is a hub for cutting-edge
                      research and education. Through hands-on projects and
                      industry collaboration, our students and faculty drive
                      impactful advancements, preparing for careers at the
                      forefront of technology and addressing real-world
                      challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Cursor Effect - Only on desktop */}
        {!isMobile && (
          <div
            className="fixed w-4 h-4 sm:w-6 sm:h-6 pointer-events-none z-50 mix-blend-difference"
            style={{
              left: mousePosition.x - (isMobile ? 8 : 12),
              top: mousePosition.y - (isMobile ? 8 : 12),
              background:
                "radial-gradient(circle, rgba(59,130,246,0.8) 0%, transparent 70%)",
              borderRadius: "50%",
              transition: "all 0.1s ease",
            }}
          />
        )}
      </CardSpotlight>
    </div>
  );
};

export default AboutSection;
