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
        title: 'Event One',
        description: 'An electrifying kick-off to a day of cinematic wonders and creative energy.'
    },
    {
        id: 2,
        icon: IconMovie,
        title: 'Event Two',
        description: 'Dive deep into the art of storytelling and visual narratives with industry experts.'
    },
    {
        id: 3,
        icon: IconMicrophone2,
        title: 'Event Three',
        description: 'Explore the power of sound, from epic scores to subtle foley, in our audio workshop.'
    },
    {
        id: 4,
        icon: IconDeviceGamepad2,
        title: 'Event Four',
        description: 'A hands-on look at the intersection of cinematic techniques and interactive media.'
    },
    {
        id: 5,
        icon: IconCube,
        title: 'Event Five',
        description: 'Uncover the magic of visual effects and 3D modeling that brings worlds to life.'
    }
];

const EventsSection = () => {
    return (
        <section id="events" className="bg-gray-100 py-24">
            <div className="mx-auto max-w-7xl px-4 text-center">
                <h2 className="font-serif text-5xl mb-4 text-gray-900">Our Events</h2>
                <p className="max-w-2xl mx-auto mb-16 text-lg text-gray-600">
                    Explore the five pillars of our symposium, each designed to inspire and educate.
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                    {eventsData.map((event) => (
                        <EventCard3D
                            key={event.id}
                            icon={event.icon}
                            title={event.title}
                            description={event.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
