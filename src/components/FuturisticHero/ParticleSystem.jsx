import React from 'react';

const ParticleSystem = ({ count = 40 }) => {
    const particles = Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 3 + 1}px`,
        animationDuration: `${Math.random() * 20 + 10}s`,
        animationDelay: `${Math.random() * 10}s`,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full bg-cyan-400 opacity-50 animate-grid-move"
                    style={{ ...p, boxShadow: `0 0 ${p.size * 3}px #00f5ff80` }}
                />
            ))}
        </div>
    );
};

export default ParticleSystem;