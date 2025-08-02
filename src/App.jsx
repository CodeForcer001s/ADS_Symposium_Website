import React from 'react';
import FloatingDock from './components/FloatingDock';
import EventTimeline from './components/EventTimeLine';
import EventsSection from './components/EventsSection';

const Section = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`flex min-h-screen flex-col items-center justify-center border-b border-white/10 px-4 py-24 ${className}`}>
      <div className="w-full max-w-6xl text-center">
        {children}
      </div>
    </section>
  );
};

// Reusable Title component
const SectionTitle = ({ children }) => {
  return <h2 className="font-serif text-5xl mb-4">{children}</h2>;
};

// Reusable Subtitle component
const SectionSubtitle = ({ children }) => {
  return <p className="max-w-2xl mx-auto mb-12 text-lg text-copy-light">{children}</p>;
};


function App() {
  return (
    <>
      <main>
        {/* --- Home Section --- */}
        <Section id="home" >
          <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-wider">
            Ai-ZEN 2025 Symposium
          </h1>
          <p className="mt-4 pt-10 text-xl text-copy-light">
            Held on August 30th.
          </p>
        </Section>

        {/* --- Timeline Section --- */}
        <EventTimeline />

        {/* --- Events Section --- */}
        <Section id="events" className="bg-surface">
          {/* Add event cards here */}
          <EventsSection />
        </Section>

        {/* --- Registration Section --- */}
        <Section id="register" className="bg-surface">
          <SectionTitle>Register Now</SectionTitle>
          <SectionSubtitle>Secure your spot for a full day of cinematic exploration. Tickets are limited!</SectionSubtitle>
          <button className="rounded-full bg-primary px-8 py-3 font-bold text-background transition-transform hover:scale-105">
            Get Your Ticket
          </button>
        </Section>
      </main>

      {/* The Floating Dock is placed outside the main content flow */}
      <FloatingDock />
    </>
  );
}

export default App;