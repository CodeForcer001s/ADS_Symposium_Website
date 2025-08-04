import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingDock from './components/FloatingDock';
import CountdownTimer from './components/CountdownTimer';
import EventTimeline from './components/EventTimeLine';
import EventsSection from './components/EventsSection';
import EventCard3DCall from './components/EventCard3DCall';
import GuidelinesSection from './components/GuidelinesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection'; 
import RegistrationSection from './components/RegistrationSection';
import FuturisticEventHero from './components/FuturisticHero/FuturisticEventHero';

// The MainLayout component contains our original single-page content
const MainLayout = () => {
  const eventDate = "2025-08-30T09:30:00";
  const eventDetails = {
    title: "Ai-ZEN'25",
    subtitle: "Technical Symposium",
  };
  return (
    <>
      <main>
        {/* Home Section */}
        {/* <section id="home" className="flex min-h-screen flex-col items-center justify-center border-b border-white/10 px-4 py-24 bg-[url('herobg.png')]">
          <div className="w-full max-w-6xl text-center">
            <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-wider">
              Ai-ZEN'25 Symposium
            </h1>
            <CountdownTimer targetDate={eventDate} />
          </div>
        </section> */}

        <section id="home">
          <FuturisticEventHero event={eventDetails} />
        </section>

        {/* --- ABOUT SECTION PLACED HERE --- */}
        <AboutSection />

        {/* Timeline Section */}
        <EventTimeline />

        {/* Events Section */}
        <section id="events" className="flex min-h-screen flex-col items-center justify-center border-b border-white/10 px-4 py-24 bg-surface">
          <EventsSection />
        </section>

        {/* Registration Section */}
        <RegistrationSection />
      </main>

      {/* --- GUIDELINES SECTION PLACED HERE --- */}
      <GuidelinesSection />

      {/* --- CONTACT SECTION PLACED HERE --- */}
      <ContactSection />


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