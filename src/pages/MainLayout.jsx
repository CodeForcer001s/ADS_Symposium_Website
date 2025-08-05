// pages/MainLayout.jsx
import React from "react";

import FuturisticEventHero from "../components/FuturisticHero/FuturisticEventHero";

import EventTimeline from "../components/EventTimeLine";
import EventsSection from "../components/EventsSection";
import GuidelinesSection from "../components/GuidelinesSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

import FloatingDock from "../components/FloatingDock";

const MainLayout = () => {
  const eventDate = "2025-08-30T09:30:00";
  const eventDetails = {
    title: "Ai-ZEN'25",
    subtitle: "Technical Symposium",
  };

  return (
    <>
      <main>
        {/* HERO SECTION */}
        <section id="home">
          <FuturisticEventHero event={eventDetails} />
          {/* Optional Countdown */}
        </section>

        {/* ABOUT */}
        <AboutSection />

        {/* TIMELINE */}
        <EventTimeline />

        {/* EVENTS */}
        <section
          id="events"
          className="flex min-h-screen flex-col items-center justify-center border-b border-white/10 px-4 py-24 bg-surface"
        >
          <EventsSection />
        </section>
      </main>

      {/* GUIDELINES */}
      <GuidelinesSection />

      {/* CONTACT */}
      <ContactSection />

      {/* FLOATING DOCK */}
      <FloatingDock />
    </>
  );
};

export default MainLayout;
