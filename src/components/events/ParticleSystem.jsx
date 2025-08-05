import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ParticleSystem = ({ count = 50, color = '#06b6d4', size = 2, speed = 1 }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const particles = [];
    
    // Create particles
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.borderRadius = '50%';
      particle.style.opacity = Math.random() * 0.5 + 0.3;
      
      // Random position
      const x = Math.random() * width;
      const y = Math.random() * height;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      
      container.appendChild(particle);
      particles.push(particle);
      
      // GSAP animation
      gsap.to(particle, {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        opacity: Math.random() * 0.5 + 0.3,
        duration: 3 + Math.random() * 5 * speed,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 2,
      });
    }
    
    return () => {
      particles.forEach(particle => {
        gsap.killTweensOf(particle);
        container.removeChild(particle);
      });
    };
  }, [count, color, size, speed]);
  
  return (
    <div ref={containerRef} className="cosmic-dust" style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Particles will be added dynamically */}
    </div>
  );
};

export default ParticleSystem;