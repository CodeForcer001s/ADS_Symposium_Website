import React from 'react';
import {
    IconDoorEnter, IconCut, IconToolsKitchen2, IconRobot, IconError404,
    IconWaveSine, IconMusic, IconFeather, IconLock, IconDeviceHeartMonitor
} from '@tabler/icons-react';

// --- Data for the Timeline ---
// We define our timeline events as an array of objects.
// This makes the JSX clean and easy to manage.
const eventsData = [
    { id: 1, title: 'The Grand Premiere', icon: IconDoorEnter, grid: 'col-start-1 col-span-2', row: 'row-start-2', color: 'bg-red-900/50 border-red-700' },
    { id: 2, title: 'The Digital Heist (Workshop)', href: '#', icon: IconCut, grid: 'col-start-3 col-span-4', row: 'row-start-2', color: 'bg-purple-900/50 border-purple-700' },
    { id: 3, title: 'Lunch Break', icon: IconToolsKitchen2, grid: 'col-start-7 col-span-2', row: 'row-start-2', color: 'bg-amber-400 border-amber-500 text-black' },
    { id: 4, title: 'The Digital Heist (Pt. 2)', href: '#', icon: IconCut, grid: 'col-start-9 col-span-3', row: 'row-start-2', color: 'bg-purple-900/50 border-purple-700' },
    { id: 5, title: 'Core Meltdown', icon: IconRobot, grid: 'col-start-3 col-span-2', row: 'row-start-3', color: 'bg-blue-900/50 border-blue-700' },
    { id: 6, title: 'Glitch in the Matrix', href: '#', icon: IconError404, grid: 'col-start-5 col-span-3', row: 'row-start-4', color: 'bg-orange-800/50 border-orange-600' },
    { id: 7, title: 'Rhythm Riot', icon: IconWaveSine, grid: 'col-start-6 col-span-4', row: 'row-start-5', color: 'bg-indigo-900/50 border-indigo-700' },
    { id: 8, title: 'Soundtrack Scramble', icon: IconMusic, grid: 'col-start-3 col-span-4', row: 'row-start-6', color: 'bg-pink-900/50 border-pink-700' },
    { id: 9, title: 'From Script to Screen', href: '#', icon: IconFeather, grid: 'col-start-3 col-span-4', row: 'row-start-7', color: 'bg-green-900/50 border-green-700' },
    { id: 10, title: 'The Final Cut (Escape Room)', href: '#', icon: IconLock, grid: 'col-start-3 col-span-4', row: 'row-start-8', color: 'bg-cyan-900/50 border-cyan-700' },
    { id: 11, title: 'Beyond the Silver Screen (VR)', href: '#', icon: IconDeviceHeartMonitor, grid: 'col-start-3 col-span-4', row: 'row-start-9', color: 'bg-teal-900/50 border-teal-700' },
    { id: 10, title: 'The End', href: '#', icon: IconLock, grid: 'col-start-15 col-span-16', row: 'row-start-6', color: 'bg-cyan-900/50 border-cyan-700' },
];

// Generate time slots from 8:00 to 3:30 in 30-minute increments
const timeSlots = Array.from({ length: 16 }, (_, i) => {
    const hour = (8 + Math.floor((i * 30) / 60)) % 12 ;
    const minute = (i * 30) % 60;
    return `${hour}:${minute === 0 ? '00' : minute}`;
});


// A sub-component for each event block to keep the main component clean
const EventBlock = ({ event }) => {
    const { title, href, icon: Icon, grid, row, color } = event;

    const classNames = `
        event-block flex items-center gap-2.5 p-4 m-1 rounded-lg border text-sm text-white
        transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50
        bg-gradient-to-r from-white/5 to-transparent
        ${grid} ${row} ${color}
    `;

    const content = (
        <>
            <Icon className="h-5 w-5 flex-shrink-0" />
            <span>{title}</span>
        </>
    );

    if (href) {
        return <a href={href} className={classNames}>{content}</a>;
    }
    return <div className={classNames}>{content}</div>;
};


const EventTimeline = () => {
    return (
        // The main timeline container section
        <section id="timeline" className="w-full max-w-7xl mx-auto py-16 px-4">
            <h2 className="font-serif text-5xl mb-4 text-center">Event Timeline</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-copy-light text-center">
                A full day of immersive workshops and creative showcases, laid out for you to explore.
            </p>

            {/* The scrollable container for the timeline itself */}
            <div className="w-80% overflow-x-auto rounded-xl border border-white/20 bg-black p-4 backdrop-blur-sm">
                {/* 
                  The Grid: We use an arbitrary value for grid-cols to define our 15x 30-minute slots.
                  Each slot is 80px wide. min-w-[1240px] forces the container to scroll.
                */}
                <div className="grid min-w-[1240px] grid-cols-[repeat(16,80px)]">
                    {/* --- Time Slot Headers --- */}
                    {timeSlots.map((time, index) => (
                        <div key={time} className="col-span-1 border-r border-gray-700/50 py-2.5 text-left font-serif text-gray-500">
                            {time}
                        </div>
                    ))}

                    {/* --- Events Rendered from Data --- */}
                    {eventsData.map((event) => (
                        <EventBlock key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventTimeline;