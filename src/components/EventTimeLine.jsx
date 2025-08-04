import React from 'react';
import {
    IconAward, IconCode, IconDoorEnter, IconGhost, IconChartBar, IconWorld,
    IconMessageChatbot, IconToolsKitchen2, IconCoffee, IconLogout
} from '@tabler/icons-react';

// Data for the compact timeline. Grid positions are final.
const eventsData = [
    // --- General Events on the Main Track (Row 2) ---
    { id: 'inaug', title: 'Inauguration', icon: IconDoorEnter, grid: 'col-start-1 col-span-2', row: 2, color: 'bg-yellow-800/80' },
    { id: 'tea', title: 'Tea Break', icon: IconCoffee, grid: 'col-start-3 col-span-1', row: 2, color: 'bg-stone-600/80' },
    { id: 'break1', title: 'Break', icon: null, grid: 'col-start-6 col-span-1', row: 2, color: 'bg-gray-800/50' },
    { id: 'lunch', title: 'Lunch', icon: IconToolsKitchen2, grid: 'col-start-9 col-span-2', row: 2, color: 'bg-amber-400/80 text-black' },
    { id: 'leave', title: 'Leave Campus', icon: IconLogout, grid: 'col-start-15 col-span-1', row: 2, color: 'bg-gray-700/80' },

    // --- Competition Tracks (Rows 3-7) ---
    // Round 1
    { id: 'cs1', title: 'CodeSync R1', icon: IconCode, grid: 'col-start-4 col-span-2', row: 3, color: 'bg-blue-900/80' },
    { id: 'hoh1', title: 'Hack or Haunt R1', icon: IconGhost, grid: 'col-start-4 col-span-2', row: 4, color: 'bg-purple-900/80' },
    { id: 'df1', title: 'Data Flix R1', icon: IconChartBar, grid: 'col-start-4 col-span-2', row: 5, color: 'bg-green-900/80' },
    { id: 'tv1', title: 'Techverse R1', icon: IconWorld, grid: 'col-start-4 col-span-2', row: 6, color: 'bg-cyan-900/80' },
    { id: 'pef1', title: 'Prompt R1', icon: IconMessageChatbot, grid: 'col-start-4 col-span-2', row: 7, color: 'bg-pink-900/80' },

    // Round 2
    { id: 'cs2', title: 'R2', icon: IconCode, grid: 'col-start-7 col-span-2', row: 3, color: 'bg-blue-800/80' },
    { id: 'hoh2', title: 'R2', icon: IconGhost, grid: 'col-start-7 col-span-2', row: 4, color: 'bg-purple-800/80' },
    { id: 'df2', title: 'R2', icon: IconChartBar, grid: 'col-start-7 col-span-2', row: 5, color: 'bg-green-800/80' },
    { id: 'tv2', title: 'R2', icon: IconWorld, grid: 'col-start-7 col-span-2', row: 6, color: 'bg-cyan-800/80' },
    { id: 'pef2', title: 'R2', icon: IconMessageChatbot, grid: 'col-start-7 col-span-2', row: 7, color: 'bg-pink-800/80' },

    // Final Round
    { id: 'cs3', title: 'Final', icon: IconCode, grid: 'col-start-11 col-span-2', row: 3, color: 'bg-blue-700/80' },
    { id: 'hoh3', title: 'Final', icon: IconGhost, grid: 'col-start-11 col-span-2', row: 4, color: 'bg-purple-700/80' },
    { id: 'df3', title: 'Final', icon: IconChartBar, grid: 'col-start-11 col-span-2', row: 5, color: 'bg-green-700/80' },
    { id: 'tv3', title: 'Final', icon: IconWorld, grid: 'col-start-11 col-span-2', row: 6, color: 'bg-cyan-700/80' },
    { id: 'pef3', title: 'Final', icon: IconMessageChatbot, grid: 'col-start-11 col-span-2', row: 7, color: 'bg-pink-700/80' },
];

const EventBlock = ({ event }) => {
    const { title, icon: Icon, grid, row, color } = event;
    const rowClass = `row-start-${row}`;

    return (
        <div className={`flex flex-col justify-center items-center text-center p-2 m-px rounded-md border border-white/10 text-xs text-white ${grid} ${rowClass} ${color}`}>
            {Icon && <Icon className="h-4 w-4 mb-1 flex-shrink-0" />}
            <span className="font-semibold truncate">{title}</span>
        </div>
    );
};

const EventTimeline = () => {
    // --- Generate classic time slots for the header ---
    // Total duration: 8:00 AM to 3:30 PM is 7.5 hours = 15 slots of 30 mins
    const timeSlots = Array.from({ length: 15 }, (_, i) => {
        const totalMinutes = 8 * 60 + i * 30;
        const hour24 = Math.floor(totalMinutes / 60);
        const minute = totalMinutes % 60;
        const hour12 = hour24 >= 13 ? hour24 - 12 : (hour24 === 0 ? 12 : hour24);
        return `${hour12}:${minute === 0 ? '00' : minute}`;
    });

    return (
        <section id="timeline" className="w-full mx-auto py-24 px-4">
            <div className="text-center">
                <h2 className="font-serif text-5xl mb-4">Event Timeline</h2>
                <p className="max-w-2xl mx-auto mb-12 text-lg text-copy-light">
                    A compact overview of the day's proceedings.
                </p>
            </div>

            <div className="w-full max-w-7xl mx-auto rounded-xl border border-white/20 bg-black/90 p-4 backdrop-blur-sm">
                <div className="grid grid-cols-15 grid-rows-7 gap-1">

                    {/* --- Time Slot Headers (Row 1) - Back to the classic style --- */}
                    {timeSlots.map((time, index) => (
                        <div key={time} className={`col-start-${index + 1} col-span-1 row-start-1 text-center font-sans text-xs text-gray-400 py-1 border-r border-gray-800`}>
                            {time}
                        </div>
                    ))}

                    {/* Events Rendered from Data */}
                    {eventsData.map((event) => (
                        <EventBlock key={event.id} event={event} />
                    ))}

                    {/* Central "Results" Box */}
                    <div className="col-start-13 col-span-2 row-start-2 row-span-6 flex flex-col items-center justify-center text-center bg-yellow-400/90 text-black rounded-lg p-4 border-2 border-yellow-300">
                        <IconAward className="h-10 w-10 mb-2" />
                        <h3 className="font-serif text-2xl font-bold">Results</h3>
                        <p className="text-sm font-semibold">2:30 PM</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventTimeline;