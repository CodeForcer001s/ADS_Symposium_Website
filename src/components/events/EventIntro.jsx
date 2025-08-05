import React, { useState, useRef, useEffect } from "react";

const EventIntro = ({
  event = {
    title: "AVENGERS ASSEMBLE",
    subtitle: "HEROES UNITE SUMMIT",
    introduction:
      "Join Earth's Mightiest Heroes at the ultimate gathering of legendary champions. Unite with super soldiers, tech geniuses, and cosmic guardians as we explore the infinite possibilities of heroism and discover what it truly means to be a hero in the Marvel Universe.",
    date: "December 15 - 17, 2024",
    time: "9:00 AM - 8:00 PM",
    venue: "Avengers Compound",
    city: "Upstate New York",
    protocols: "47 Hero Protocols",
    entities: "5,000+ Heroes & Allies",
    classification: "SECURITY LEVEL: S.H.I.E.L.D.",
  },
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glowEffect, setGlowEffect] = useState(false);
  const [sparklePosition, setSparklePosition] = useState(0);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Glow effect interval
    const glowInterval = setInterval(() => {
      setGlowEffect(true);
      setTimeout(() => setGlowEffect(false), 300);
    }, 5000);

    // Sparkle animation
    const sparkleInterval = setInterval(() => {
      setSparklePosition((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearInterval(glowInterval);
      clearInterval(sparkleInterval);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  const eventData = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "DATE",
      value: event.date,
      dataType: "SCHEDULE",
      color: "red",
      heroTheme: "Iron Man",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      label: "TIMING",
      value: event.time,
      dataType: "TIME",
      color: "blue",
      heroTheme: "Captain America",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      label: "LOCATION",
      value: event.venue,
      subValue: event.city,
      dataType: "LOCATION",
      color: "green",
      heroTheme: "Hulk",
    },
   
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: {
        border: "border-red-500",
        text: "text-red-400",
        glow: "shadow-red-500/50",
        bg: "bg-red-500/10",
      },
      blue: {
        border: "border-blue-500",
        text: "text-blue-400",
        glow: "shadow-blue-500/50",
        bg: "bg-blue-500/10",
      },
      green: {
        border: "border-green-500",
        text: "text-green-400",
        glow: "shadow-green-500/50",
        bg: "bg-green-500/10",
      },
      yellow: {
        border: "border-yellow-500",
        text: "text-yellow-400",
        glow: "shadow-yellow-500/50",
        bg: "bg-yellow-500/10",
      },
      purple: {
        border: "border-purple-500",
        text: "text-purple-400",
        glow: "shadow-purple-500/50",
        bg: "bg-purple-500/10",
      },
      orange: {
        border: "border-orange-500",
        text: "text-orange-400",
        glow: "shadow-orange-500/50",
        bg: "bg-orange-500/10",
      },
    };
    return colors[color] || colors.red;
  };

  return (
    <div
      className="relative min-h-screen bg-black overflow-hidden"
      id="event-intro"
    >
      {/* Floating Marvel Symbols */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white text-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            {["⚡", "🛡️", "💥", "⭐", "🔥"][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Moving Sparkle Line */}
      <div
        className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transition-all duration-200"
        style={{
          top: `${sparklePosition}%`,
          background:
            "linear-gradient(90deg, transparent, #ffd700, #fff, #ffd700, transparent)",
        }}
      />

      <section ref={sectionRef} className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Status Bar */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center justify-between p-4 bg-gray-900/80 border border-red-500/30 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-bold">
                    HEROES ONLINE
                  </span>
                </div>
                <div className="text-red-400">|</div>
                <div className="text-gray-300">STATUS: ASSEMBLED</div>
              </div>
              <div className="text-yellow-400 font-bold animate-pulse">
                MISSION ACTIVE
              </div>
            </div>
          </div>

          {/* Main Hero Card */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className={`relative group transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            } ${glowEffect ? "scale-105" : ""}`}
          >
            {/* Hero Aura */}
            <div
              className="absolute -inset-8 opacity-40 blur-3xl transition-all duration-500"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                  rgba(255, 215, 0, 0.4), 
                  rgba(255, 0, 0, 0.3), 
                  rgba(0, 100, 255, 0.3),
                  rgba(255, 255, 255, 0.2),
                  transparent 70%)`,
              }}
            />

            {/* Main Hero Panel */}
            <div className="relative bg-black/95 border-2 border-gray-700 rounded-2xl overflow-hidden shadow-2xl shadow-white/10">
              {/* Hero Header */}
              <div className="bg-gray-900/90 border-b border-gray-700 p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                    <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
                  </div>
                  <span className="text-white font-bold text-lg">
                    MARVEL HERO INTERFACE
                  </span>
                </div>
                <div className="text-green-400 font-bold animate-pulse">
                  POWER LEVEL: MAXIMUM
                </div>
              </div>

              <div className="p-8 lg:p-12">
                {/* Title Section */}
                <div
                  className={`mb-12 transition-all duration-1000 delay-300 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-yellow-400 font-bold text-xl animate-pulse">
                      ⚡ HEROES ASSEMBLE PROTOCOL INITIATED...
                    </span>
                  </div>

                  <h1
                    className={`text-5xl lg:text-7xl font-black mb-6 leading-tight ${
                      glowEffect ? "animate-pulse" : ""
                    }`}
                    style={{
                      background:
                        "linear-gradient(45deg, #ff0000, #ffd700, #0066ff, #ff0000)",
                      backgroundSize: "300% 300%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      animation: "heroGradient 3s ease infinite",
                    }}
                  >
                    {event.title}
                  </h1>

                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    {event.subtitle}
                  </h2>

                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-white rounded-full animate-ping" />
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-red-500 rounded-full" />
                  </div>
                </div>

                {/* Hero Mission Brief */}
                <div
                  className={`mb-16 transition-all duration-1000 delay-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="bg-gray-900/70 border-l-4 border-red-500 p-8 rounded-r-xl shadow-lg">
                    <div className="text-yellow-400 font-bold text-xl mb-4 flex items-center gap-2">
                      🛡️ MISSION BRIEFING:
                    </div>
                    <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed font-medium">
                      {event.introduction}
                    </p>
                  </div>
                </div>

                {/* Hero Data Grid */}
                <div
                  className={`transition-all duration-1000 delay-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-10">
                    <div className="text-white font-bold text-2xl flex items-center gap-2">
                      💥 HERO INTELLIGENCE DATA
                    </div>
                    <div className="flex-1 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 rounded-full" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventData.map((data, index) => {
                      const colorClasses = getColorClasses(data.color);
                      return (
                        <div
                          key={index}
                          className={`group relative ${
                            colorClasses.bg
                          } backdrop-blur-sm rounded-xl border-2 ${
                            colorClasses.border
                          }/50 p-6 hover:${
                            colorClasses.border
                          } transition-all duration-500 hover:shadow-xl hover:${
                            colorClasses.glow
                          } hover:scale-110 hover:-translate-y-2 ${
                            isVisible
                              ? "translate-y-0 opacity-100"
                              : "translate-y-10 opacity-0"
                          }`}
                          style={{ transitionDelay: `${800 + index * 150}ms` }}
                        >
                          {/* Hero Icon */}
                          <div className="flex items-center justify-between mb-6">
                            <div
                              className={`flex items-center justify-center w-12 h-12 ${colorClasses.text} border-2 ${colorClasses.border} rounded-xl group-hover:rotate-12 transition-transform duration-300 ${colorClasses.bg}`}
                            >
                              {data.icon}
                            </div>
                            <div
                              className={`text-xs font-bold ${colorClasses.text} opacity-80 px-2 py-1 border ${colorClasses.border} rounded-full`}
                            >
                              {data.dataType}
                            </div>
                          </div>

                          {/* Data Label */}
                          <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                            {data.label}
                          </div>

                          {/* Data Value */}
                          <div
                            className={`text-xl font-black ${colorClasses.text} mb-2 drop-shadow-[0_0_8px_currentColor]`}
                          >
                            {data.value}
                          </div>

                          {/* Sub Value */}
                          {data.subValue && (
                            <div className="text-base font-semibold text-gray-300">
                              {data.subValue}
                            </div>
                          )}

                          {/* Hero Theme */}
                          <div className="absolute top-2 right-2 text-xs font-bold text-white/50">
                            {data.heroTheme}
                          </div>

                          {/* Hover Effect Lines */}
                          <div
                            className={`absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl overflow-hidden`}
                          >
                            <div
                              className={`w-full h-full ${colorClasses.text}`}
                              style={{
                                background: `repeating-linear-gradient(45deg, transparent, transparent 5px, currentColor 5px, currentColor 6px)`,
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Hero Assembly Call */}
                <div
                  className={`mt-16 transition-all duration-1000 delay-1200 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="bg-gray-900/90 border-2 border-red-500/50 rounded-xl p-8 shadow-lg shadow-red-500/20">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-red-400 font-bold text-xl flex items-center gap-2 max-md:text-sm">
                        🚀 HERO REGISTRATION ACTIVE
                      </div>
                      <div className="text-yellow-400 font-bold animate-pulse max-md:text-sm">
                        AWAITING YOUR ARRIVAL...
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSezC-3X4aeZED34Cn-mUCjc3D8ASbncAVtIHyUbPYO9ILY68g/viewform?usp=header"
                        className="flex items-center gap-4 px-10 py-5 font-black text-xl text-white rounded-xl border-2 border-white transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-white/50 group"
                        style={{
                          background:
                            "linear-gradient(45deg, #ff0000, #ffd700, #0066ff)",
                          backgroundSize: "300% 300%",
                          animation: "heroGradient 2s ease infinite",
                        }}
                      >
                        <span>REGISTER NOW</span>
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse group-hover:animate-ping" />
                      </a>

                      <div className="text-green-400 font-bold text-lg flex items-center gap-2 max-md:hidden">
                        ⚡ REGISTRATION: ONLINE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes heroGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default EventIntro;
