import React from 'react';

const RegistrationSection = () => {
    return (
        // The main section container
        <section
            id="register"
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden border-b border-white/10 bg-surface px-4 py-24"
        >
            {/* Subtle background dot grid */}
            <div className="absolute inset-0 h-full w-full bg-black bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:24px_24px]"></div>

            {/* Content container, positioned above the background grid */}
            <div className="relative z-10 flex flex-col items-center text-center">

                {/* Animated Gradient Title */}
                <h2 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-red-400 to-primary bg-[200%_auto] bg-clip-text text-transparent animate-text-gradient">
                    Register Now
                </h2>

                {/* Main Description */}
                <p className="max-w-2xl mx-auto my-8 text-lg text-copy-light">
                    Secure your spot for a full day of cinematic exploration and technological marvels. Tickets are limited, but your journey is not.
                </p>

                {/* No Fee Information */}
                <p className="mb-12 text-sm font-medium text-green-400">
                    Entry is completely free—no registration fee required.
                </p>

                {/* Glowing, Shimmering Button */}
                <a
                    // The href will be added later for the Google Form
                    href="#" 
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-10 py-4 font-bold text-background shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/40 active:scale-100"
                >
                    {/* Shine/Shimmer Effect Span */}
                    <span className="absolute top-0 left-[-100%] h-full w-full -translate-x-full transform bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-500 ease-in-out group-hover:left-0 group-hover:translate-x-0"></span>

                    {/* Button Text */}
                    <span className="relative z-10">Get Your Ticket</span>
                </a>

            </div>
        </section>
    );
};

export default RegistrationSection;