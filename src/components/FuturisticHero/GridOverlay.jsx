import React from 'react';

const GridOverlay = () => (
    <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        <div
            className="w-full h-full animate-grid-move"
            style={{
                backgroundImage: `
          linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
        `,
                backgroundSize: "50px 50px",
            }}
        />
    </div>
);

export default GridOverlay;