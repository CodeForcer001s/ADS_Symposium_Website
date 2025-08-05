import React from 'react';

const FloatingCubes = () => {
    const cubes = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 40 + 20,
        duration: Math.random() * 5 + 3,
        delay: Math.random() * 2,
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
                        background: 'linear-gradient(135deg, #00f5ff40, #8a2be240)',
                        backdropFilter: 'blur(2px)',
                        border: '1px solid rgba(0, 245, 255, 0.3)',
                        animation: `float ${cube.duration}s ease-in-out infinite`,
                        animationDelay: `${cube.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingCubes;