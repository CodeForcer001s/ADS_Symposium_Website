import React, { useState, useEffect } from 'react';

const backgrounds = [
    "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2208&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2125&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2011&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
];

const DynamicBackground = ({ mousePosition }) => {
    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setCurrentBg((prev) => (prev + 1) % backgrounds.length), 6000);
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
                        transform: `scale(1.1) translate(${(mousePosition.x - 0.5) * 40}px, ${(mousePosition.y - 0.5) * 40}px)`,
                        filter: "brightness(0.3) contrast(1.4) hue-rotate(200deg)",
                    }}
                />
            ))}
        </>
    );
};

export default DynamicBackground;