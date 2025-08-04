import React from 'react';
import EventCard3D from './EventCard3DCall';
import {
    IconBolt,
    IconMovie,
    IconMicrophone2,
    IconDeviceGamepad2,
    IconCube
} from '@tabler/icons-react';

// --- Data for our 5 events ---
const eventsData = [
    {
        id: 1,
        icon: IconBolt,
        title: 'CodeSync',
        description: 'An electrifying kick-off to a day of cinematic wonders and creative energy.'
    },
    {
        id: 2,
        icon: IconMovie,
        title: 'Hack or Haunt',
        description: 'Dive deep into the art of storytelling and visual narratives with industry experts.'
    },
    {
        id: 3,
        icon: IconMicrophone2,
        title: 'Data Flix',
        description: 'Explore the power of sound, from epic scores to subtle foley, in our audio workshop.'
    },
    {
        id: 4,
        icon: IconDeviceGamepad2,
        title: 'Techverse',
        description: 'A hands-on look at the intersection of cinematic techniques and interactive media.'
    },
    {
        id: 5,
        icon: IconCube,
        title: 'Prompt e flux',
        description: 'Uncover the magic of visual effects and 3D modeling that brings worlds to life.'
    }
];

const EventsSection = () => {
    return (
        <div className="w-full">
            <h2 className="font-serif text-5xl mb-4 text-center">Our Events</h2>
            <p className="max-w-2xl mx-auto mb-16 text-lg text-center text-copy-light">
                Explore the five pillars of our symposium...
            </p>

            {/* MODIFICATION HERE: Removed gap-y-20 and used place-items-center for better alignment */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                {eventsData.map((event) => (
                    <EventCard3D
                        key={event.id}
                        id={event.id}
                        icon={event.icon}
                        title={event.title}
                        description={event.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventsSection;
