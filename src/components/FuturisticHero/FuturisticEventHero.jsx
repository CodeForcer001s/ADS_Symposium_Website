// src/components/FuturisticHero/FuturisticEventHero.jsx

import React, { useState, useEffect, useRef } from 'react';
import DynamicBackground from './DynamicBackground';
import FloatingCubes from './FloatingCubes';
import GridOverlay from './GridOverlay';
import ParticleSystem from './ParticleSystem';
import CountdownTimer from '../CountdownTimer'; // It imports the newly styled timer
import './FuturisticHero.css';

const FuturisticEventHero = ({ event }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
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
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // The target date for the countdown timer
    const eventDate = "2025-08-30T09:30:00";

    return (
      <div
        ref={heroRef}
        className="relative overflow-hidden h-screen flex items-center justify-center perspective-container"
        style={{
          background:
            "radial-gradient(ellipse at center, #001122 0%, #000511 100%)",
        }}
      >
        <DynamicBackground mousePosition={mousePosition} />
        <GridOverlay />
        <FloatingCubes />
        <ParticleSystem />

        <div className="container mx-auto px-4 py-24 relative z-30">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 animate-fade-in-down [animation-delay:0.2s]">
              <div className="inline-flex items-center gap-2 glass-panel px-6 py-3 rounded-full hover:scale-105 transition-all duration-300">
                <div className="w-2 h-2 bg-green-400 rounded-full status-dot"></div>
                <span className="text-green-400 text-sm font-mono tracking-wider uppercase">
                  {event?.subtitle || "National Level Technical Symposium 2025"}
                </span>
              </div>
            </div>

            <h1
              className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 cyber-title leading-tight tracking-tight hover:scale-105 transition-transform duration-500 font-sans"
              style={{ animationDelay: "0.4s" }}
            >
           AIZEN'25
            </h1>
           <h2 class="text-xl md:text-3xl text-white font-semibold text-center 
           text-transparent bg-clip-text 
           drop-shadow-[0_0_10px_rgba(255,0,128,0.5)] 
           mt-6 mb-6">
  National Level Technical Symposium 2025
</h2>

            <div className="mb-12 animate-fade-in-up [animation-delay:0.6s]">
              <div className="inline-block glass-panel rounded-xl">
                <CountdownTimer targetDate={eventDate} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up [animation-delay:0.8s]">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSezC-3X4aeZED34Cn-mUCjc3D8ASbncAVtIHyUbPYO9ILY68g/viewform?usp=header"
                className="group px-10 py-4 cyber-button rounded-lg text-white font-bold text-lg transform hover:scale-105 transition-all duration-300 relative z-10"
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
    );
};

export default FuturisticEventHero;