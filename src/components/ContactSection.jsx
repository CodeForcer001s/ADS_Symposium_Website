// src/components/ContactSection.jsx

import React from 'react';
import {
    IconPhone,
    IconBus,
    IconMapPin,
    IconBrandInstagram
} from '@tabler/icons-react';

// --- Data remains unchanged ---
const staffCoordinators = [
    { name: 'Mrs J Gold Beulah Patturose', phone: '9788123607' },
    { name: 'Mr. S. Abilash', phone: '8838411849' },
    { name: 'Mrs Shanthakumari', phone: '9486948611' },
];

const studentCoordinators = [
    { name: 'P Balaji', phone: '9345579217' },
    { name: 'M P Yuvashree', phone: '9025564678' },
];


// --- CoordinatorCard component with inverted colors ---
const CoordinatorCard = ({ title, coordinators }) => (
    // MODIFIED: White background, black border, and a subtle shadow for depth
    <div className="w-full rounded-xl border border-black/10 bg-white p-6 shadow-md">
        {/* MODIFIED: Darker, rich text color for the title */}
        <h3 className="mb-4 font-serif text-2xl font-semibold text-amber-800">{title}</h3>
        <ul className="space-y-3">
            {coordinators.map((coord) => (
                // MODIFIED: Darker text for coordinator names
                <li key={coord.name} className="flex flex-wrap items-center justify-between gap-2 text-gray-800">
                    <span>{coord.name}</span>
                    {/* MODIFIED: Darker text and hover color for the phone link */}
                    <a
                        href={`tel:${coord.phone}`}
                        className="flex items-center gap-2 text-gray-600 transition-colors hover:text-amber-700"
                    >
                        <IconPhone size={16} />
                        {coord.phone}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);


const ContactSection = () => {
    return (
        // --- MODIFIED: Main section now has a white background ---
        <section id="contact" className="w-full bg-black px-4 py-24">
            <div className="mx-auto max-w-5xl">
                {/* MODIFIED: Dark text for the main header */}
                <h2 className="mb-12 text-center font-serif text-5xl font-bold text-white">Contact Us</h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <CoordinatorCard title="Staff Coordinators" coordinators={staffCoordinators} />
                    <CoordinatorCard title="Student Coordinators" coordinators={studentCoordinators} />
                </div>

                <div className="mt-20 text-center">
                    <div className="flex items-center justify-center gap-12 md:gap-16">

                        {/* --- MODIFIED: Links now use dark text and a dark hover color --- */}
                        <a
                            href="https://conoscenza2024.stjosephstechnology.ac.in/incognito/img/transport.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 text-gray-600 transition-all duration-300 hover:scale-110 hover:text-amber-700"
                            aria-label="View Bus Routes"
                        >
                            <IconBus className="h-12 w-12" stroke={1.5} />
                            <span className="font-semibold">Bus Routes</span>
                        </a>

                        <a
                            href="https://www.google.com/maps/place/St.Joseph's+Institute+of+Technology/@12.8698794,80.2158547,17z/data=!4m6!3m5!1s0x3a525bbb618d3ea9:0x90b3767be093efaa!8m2!3d12.8698794!4d80.2184296!16s%2Fm%2F0cr5_zr?authuser=0&coh=219816&entry=tts&g_ep=EgoyMDI0MDgxMS4wKgBIAVAD"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 text-gray-600 transition-all duration-300 hover:scale-110 hover:text-amber-700"
                            aria-label="View Location on Google Maps"
                        >
                            <IconMapPin className="h-12 w-12" stroke={1.5} />
                            <span className="font-semibold">Location</span>
                        </a>

                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 text-gray-600 transition-all duration-300 hover:scale-110 hover:text-amber-700"
                            aria-label="Follow us on Instagram"
                        >
                            <IconBrandInstagram className="h-12 w-12" stroke={1.5} />
                            <span className="font-semibold">Instagram</span>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;