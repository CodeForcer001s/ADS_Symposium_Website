import React from 'react';

const RegistrationSection = () => {
    return (
        <section
            id="register"
            className="flex min-h-screen flex-col items-center justify-center border-b border-white/10 px-4 py-24 bg-surface bg-black text-white"
        >
            <div className="relative z-10 flex flex-col items-center text-center">
                <h2 className="font-serif text-5xl mb-4">Register Now</h2>
                <p className="max-w-2xl mx-auto mb-12 text-lg text-copy-light">
                    Secure your spot for a full day of cinematic exploration. Tickets are limited!
                </p>

                {/* --- BORDER MAGIC BUTTON --- */}
                <a
                    // The href will be updated later with your Google Form URL
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    // This is the parent container that gives the button its shape and relative positioning
                    className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    {/* This is the animated, spinning gradient border */}
                    <span
                        className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#FACC15_50%,#E2CBFF_100%)]"
                    />

                    {/* This is the inner, visible part of the button */}
                    <span
                        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-1000 px-8 py-3 text-lg font-bold text-white backdrop-blur-3xl transition-all duration-300 hover:bg-slate-900"
                    >
                        Get Your Ticket
                    </span>
                </a>

            </div>
        </section>
    );
};

export default RegistrationSection;