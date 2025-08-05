import React, { useEffect } from 'react';
import EventDetail from '../components/events/EventDetail';
import SpaceBackground from '../components/events/SpaceBackground';
import { eventsData } from '../data/eventsData';

const HackOrHaunt = () => {
  const event = eventsData.find(e => e.id === 'hack-or-haunt');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${event.title} | AI & Data Science Symposium`;
  }, [event]);
  
  return (
    <div className="min-h-screen bg-space-black text-stellar-silver">
      <SpaceBackground />
      <EventDetail event={event} />
    </div>
  );
};

export default HackOrHaunt;