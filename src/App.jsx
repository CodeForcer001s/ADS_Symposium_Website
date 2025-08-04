import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingDock from './components/FloatingDock';
import EventTimeline from './components/EventTimeLine';
import EventsSection from './components/EventsSection';
import EventCard3DCall from './components/EventCard3DCall';
// import RegistrationSection from './components/RegistrationSection';

// The MainLayout component contains our original single-page content
const MainLayout = () => {
  return (
    <>
      <main>
        {/* Home Section */}
        <section id="home" className="flex min-h-screen flex-col items-center justify-center border-b border-white/10 px-4 py-24">
          <div className="w-full max-w-6xl text-center">
            <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-wider">
              Ai-ZEN 2025 Symposium
            </h1>
            <p className="mt-4 pt-10 text-xl text-copy-light">
              Held on August 30th.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <EventTimeline />

        {/* Events Section */}
        <section id="events" className="flex min-h-screen flex-col items-center justify-center border-b border-white/10 px-4 py-24 bg-surface">
          <EventsSection />
        </section>

        {/* Registration Section */}
        <section id="register" className="flex min-h-screen flex-col items-center justify-center border-b border-white/10 px-4 py-24 bg-surface">
          <h2 className="font-serif text-5xl mb-4">Register Now</h2>
          <p className="max-w-2xl mx-auto mb-12 text-lg text-copy-light">Secure your spot for a full day of cinematic exploration. Tickets are limited!</p>
          <button className="rounded-full bg-primary px-8 py-3 font-bold text-background transition-transform hover:scale-105">
            Get Your Ticket
          </button>
        </section>
      </main>
      <FloatingDock />
    </>
  );
};

// The App component now manages the routing logic
function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the main landing page */}
        <Route path="/" element={<MainLayout />} />

        {/* Route for the dynamic event detail pages */}
        {/* The `:eventId` part is a URL parameter */}
        <Route path="/event/:eventId" element={<EventCard3DCall />} />
      </Routes>
    </Router>
  );
}

export default App;