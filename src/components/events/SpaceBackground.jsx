import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SpaceBackground = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Create stars
    const starCount = 200;
    const stars = [];
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random size
      const size = Math.random();
      if (size < 0.6) {
        star.classList.add('small');
      } else if (size < 0.9) {
        star.classList.add('medium');
      } else {
        star.classList.add('large');
      }
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 4}s`;
      
      container.appendChild(star);
      stars.push(star);
    }
    
    // Create nebula effect
    const nebula = document.createElement('div');
    nebula.style.position = 'absolute';
    nebula.style.width = '100%';
    nebula.style.height = '100%';
    nebula.style.background = 'radial-gradient(circle at 70% 30%, rgba(107, 70, 193, 0.2) 0%, transparent 60%), radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.2) 0%, transparent 60%)';
    nebula.style.opacity = '0.7';
    nebula.style.pointerEvents = 'none';
    container.appendChild(nebula);
    
    // GSAP animation for nebula
    gsap.to(nebula, {
      opacity: 0.5,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    
    // Shooting stars
    const createShootingStar = () => {
      const shootingStar = document.createElement('div');
      shootingStar.style.position = 'absolute';
      shootingStar.style.width = '2px';
      shootingStar.style.height = '2px';
      shootingStar.style.backgroundColor = '#fff';
      shootingStar.style.borderRadius = '50%';
      shootingStar.style.boxShadow = '0 0 4px 2px rgba(255, 255, 255, 0.7)';
      
      const startX = Math.random() * width;
      const startY = Math.random() * (height / 3);
      
      shootingStar.style.left = `${startX}px`;
      shootingStar.style.top = `${startY}px`;
      
      container.appendChild(shootingStar);
      
      gsap.to(shootingStar, {
        x: -300 - Math.random() * 300,
        y: 300 + Math.random() * 300,
        opacity: 0,
        duration: 1 + Math.random() * 2,
        onComplete: () => {
          container.removeChild(shootingStar);
        },
      });
    };
    
    // Create shooting stars at random intervals
    const shootingStarInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        createShootingStar();
      }
    }, 3000);
    
    return () => {
      clearInterval(shootingStarInterval);
      stars.forEach(star => container.removeChild(star));
      container.removeChild(nebula);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="space-background">
      {/* Stars and nebula effects will be added dynamically */}
    </div>
  );
};

export default SpaceBackground;