import React from 'react';
import {
    IconTicket, IconUserCheck, IconClock, IconBus, IconAlarm, IconToolsKitchen2, IconBuildingCommunity
} from '@tabler/icons-react';

// --- Data for the Guidelines ---
// Storing the guidelines in an array makes the code cleaner and easier to update.
const guidelines = [
    { icon: IconTicket, text: "All participants should bring their registration slip along with their college ID card." },
    { icon: IconUserCheck, text: "Participants will be permitted to enter the campus only in formal dress code." },
    { icon: IconClock, text: "The offline registration process will end by 9:30 AM on the day of the event." },
    { icon: IconBus, text: "College buses will be available from all parts of the city." },
    { icon: IconAlarm, text: "All events will commence at the scheduled time. Participants are requested to be punctual." },
    { icon: IconToolsKitchen2, text: "Breakfast and lunch will be provided by our college." },
    { icon: IconBuildingCommunity, text: "Proper decorum must be maintained in accordance with the college rules while inside the college campus." },
];

const GuidelinesSection = () => {
    return (
        <section id="guidelines" className="w-full border-b border-white/10 bg-surface bg-black text-white px-4 py-24">
            <div className="mx-auto max-w-5xl">

                <div className="text-center mb-16">
                    <h2 className="font-serif text-5xl font-bold">Guidelines to Know</h2>
                    <p className="mt-4 text-lg text-copy-light">A few important things to ensure a smooth event experience for everyone.</p>
                </div>

                {/* Grid layout for the guidelines */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                    {guidelines.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            {/* Icon */}
                            <div className="flex-shrink-0">
                                <item.icon className="h-8 w-8 text-primary" stroke={1.5} />
                            </div>
                            {/* Text */}
                            <div>
                                <p className="text-lg text-copy">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GuidelinesSection;