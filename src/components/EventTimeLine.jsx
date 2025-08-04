import React from 'react';
import {
    IconAward, IconCode, IconDoorEnter, IconGhost, IconChartBar, IconWorld,
    IconMessageChatbot, IconToolsKitchen2, IconCoffee, IconLogout
} from '@tabler/icons-react';

// --- NEW Data for the Timeline ---
// Now using direct grid column numbers for placement. No calculation needed.
// colStart: The grid column where the event begins (1-indexed).
// colSpan: How many 30-minute grid columns the event occupies.
const eventsData = [
    // --- General Events on the Main Track (Row 2) ---
    { id: 'inaug', title: 'Inauguration', icon: IconDoorEnter, grid: 'col-start-1 col-span-2', row: 2, color: 'bg-yellow-800/80 border-yellow-600' },
    { id: 'tea', title: 'Tea Break', icon: IconCoffee, grid: 'col-start-3 col-span-1', row: 2, color: 'bg-stone-500/80 border-stone-400' },
    { id: 'break1', title: 'Break', icon: null, grid: 'col-start-6 col-span-1', row: 2, color: 'bg-gray-800/50 border-gray-700' },
    { id: 'lunch', title: 'Lunch Break', icon: IconToolsKitchen2, grid: 'col-start-9 col-span-2', row: 2, color: 'bg-amber-400/80 border-amber-500 text-black' },
    { id: 'break2', title: 'Break', icon: null, grid: 'col-start-13 col-span-1', row: 2, color: 'bg-gray-800/50 border-gray-700' },
    { id: 'valedictory', title: 'Valedictory & Results', icon: IconAward, grid: 'col-start-14 col-span-1', row: 2, color: 'bg-yellow-800/80 border-yellow-600' },
    { id: 'leave', title: 'Leave Campus', icon: IconLogout, grid: 'col-start-15 col-span-3', row: 2, color: 'bg-gray-700/80 border-gray-500' },

    // --- Competition Tracks (Rows 3-7) ---
    // Round 1: Starts at col 4 (9:30), spans 2 cols (60 min)
    { id: 'cs1', title: 'CodeSync R1', icon: IconCode, grid: 'col-start-4 col-span-2', row: 3, color: 'bg-blue-900/80 border-blue-700' },
    { id: 'hoh1', title: 'Hack or Haunt R1', icon: IconGhost, grid: 'col-start-4 col-span-2', row: 4, color: 'bg-purple-900/80 border-purple-700' },
    { id: 'df1', title: 'Data Flix R1', icon: IconChartBar, grid: 'col-start-4 col-span-2', row: 5, color: 'bg-green-900/80 border-green-700' },
    { id: 'tv1', title: 'Techverse R1', icon: IconWorld, grid: 'col-start-4 col-span-2', row: 6, color: 'bg-cyan-900/80 border-cyan-700' },
    { id: 'pef1', title: 'Prompt e flux R1', icon: IconMessageChatbot, grid: 'col-start-4 col-span-2', row: 7, color: 'bg-pink-900/80 border-pink-700' },

    // Round 2: Starts at col 7 (11:00), spans 2 cols (60 min)
    { id: 'cs2', title: 'CodeSync R2', icon: IconCode, grid: 'col-start-7 col-span-2', row: 3, color: 'bg-blue-800/80 border-blue-600' },
    { id: 'hoh2', title: 'Hack or Haunt R2', icon: IconGhost, grid: 'col-start-7 col-span-2', row: 4, color: 'bg-purple-800/80 border-purple-600' },
    { id: 'df2', title: 'Data Flix R2', icon: IconChartBar, grid: 'col-start-7 col-span-2', row: 5, color: 'bg-green-800/80 border-green-600' },
    { id: 'tv2', title: 'Techverse R2', icon: IconWorld, grid: 'col-start-7 col-span-2', row: 6, color: 'bg-cyan-800/80 border-cyan-600' },
    { id: 'pef2', title: 'Prompt e flux R2', icon: IconMessageChatbot, grid: 'col-start-7 col-span-2', row: 7, color: 'bg-pink-800/80 border-pink-600' },

    // Final Round: Starts at col 11 (1:00 PM), spans 2 cols (60 min)
    { id: 'cs3', title: 'CodeSync Final', icon: IconCode, grid: 'col-start-11 col-span-2', row: 3, color: 'bg-blue-700/80 border-blue-500' },
    { id: 'hoh3', title: 'Hack or Haunt Final', icon: IconGhost, grid: 'col-start-11 col-span-2', row: 4, color: 'bg-purple-700/80 border-purple-500' },
    { id: 'df3', title: 'Data Flix Final', icon: IconChartBar, grid: 'col-start-11 col-span-2', row: 5, color: 'bg-green-700/80 border-green-500' },
    { id: 'tv3', title: 'Techverse Final', icon: IconWorld, grid: 'col-start-11 col-span-2', row: 6, color: 'bg-cyan-700/80 border-cyan-500' },
    { id: 'pef3', title: 'Prompt e flux Final', icon: IconMessageChatbot, grid: 'col-start-11 col-span-2', row: 7, color: 'bg-pink-700/80 border-pink-500' },
];

// --- Generate time slots from 8:00 AM to 4:00 PM in 12-hour format ---
const timeSlots = Array.from({ length: 17 }, (_, i) => {
    const totalMinutes = 8 * 60 + i * 30;
    const hour24 = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;

    // Convert 24-hour to 12-hour format
    const hour12 = hour24 >= 13 ? hour24 - 12 : (hour24 === 0 ? 12 : hour24);

    return `${hour12}:${minute === 0 ? '00' : minute}`;
});


// --- Reusable EventBlock component (UNCHANGED) ---
const EventBlock = ({ event }) => {
    // The `row` prop is now applied directly through the `grid` prop logic below
    const { title, href, icon: Icon, grid, row, color } = event;

    const classNames = `
        event-block flex items-center gap-2.5 p-4 m-1 rounded-lg border text-sm text-white
        transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50
        bg-gradient-to-r from-white/5 to-transparent
        ${grid} row-start-${row} ${color}
    `;

    // Render content with or without icon
    const content = (
        <>
            {Icon && <Icon className="h-5 w-5 flex-shrink-0" />}
            <span className="truncate">{title}</span>
        </>
    );

    if (href) {
        return <a href={href} className={classNames}>{content}</a>;
    }
    return <div className={classNames}>{content}</div>;
};


// --- Main Timeline Component (UNCHANGED) ---
const EventTimeline = () => {
    return (
        <section id="timeline" className="w-full max-w-7xl mx-auto py-16 px-4">
            <h2 className="font-serif text-5xl mb-4 text-center">Event Timeline</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-copy-light text-center">
                A full day of immersive workshops and creative showcases, laid out for you to explore.
            </p>

            <div className="w-full overflow-x-auto rounded-xl border border-white/20 bg-black/90 p-4 backdrop-blur-sm">
                <div className="grid min-w-[1360px] grid-cols-[repeat(17,80px)]">
                    {/* Time Slot Headers */}
                    {timeSlots.map((time) => (
                        <div key={time} className="col-span-1 border-r border-gray-700/50 py-2.5 text-left font-serif text-gray-500">
                            {time}
                        </div>
                    ))}

                    {/* Events Rendered from Data */}
                    {eventsData.map((event) => (
                        <EventBlock key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventTimeline;