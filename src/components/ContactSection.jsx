import React from 'react';
import {
    IconPhone,
    IconBus,
    IconMapPin,
    IconBrandInstagram
} from '@tabler/icons-react';

// Data extracted from the image
const staffCoordinators = [
    { name: 'Mrs J Gold Beulah Patturose', phone: '9788123607' },
    { name: 'Mr. S. Abilash', phone: '8838411849' },
    { name: 'Mrs Shanthakumari', phone: '9486948611' },
];

const studentCoordinators = [
    { name: 'P Balaji', phone: '9345579217' },
    { name: 'M P Yuvashree', phone: '9025564678' },
];

const CoordinatorCard = ({ title, coordinators }) => (
    <div className="w-full rounded-lg border border-white/10 bg-surface p-6">
        <h3 className="mb-4 font-serif text-2xl font-semibold text-primary">{title}</h3>
        <ul className="space-y-3">
            {coordinators.map((coord) => (
                <li key={coord.name} className="flex flex-wrap items-center justify-between gap-2 text-copy">
                    <span>{coord.name}</span>
                    <a
                        href={`tel:${coord.phone}`}
                        className="flex items-center gap-2 text-copy-light transition-colors hover:text-primary"
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
        <section id="contact" className="w-full bg-background px-4 py-24">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-12 text-center font-serif text-5xl font-bold">Contact Us</h2>

                {/* Coordinator Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <CoordinatorCard title="Staff Coordinators" coordinators={staffCoordinators} />
                    <CoordinatorCard title="Student Coordinators" coordinators={studentCoordinators} />
                </div>

                {/* --- NEW "FIND US" SECTION --- */}
                <div className="mt-20 text-center">
                    <div className="flex items-center justify-center gap-12 md:gap-16">

                        {/* Bus Route Link */}
                        <a
                            href="https://conoscenza2024.stjosephstechnology.ac.in/incognito/img/transport.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 text-copy-light transition-all duration-300 hover:scale-110 hover:text-primary"
                            aria-label="View Bus Routes"
                        >
                            <IconBus className="h-12 w-12" stroke={1.5} />
                            <span className="font-semibold">Bus Routes</span>
                        </a>

                        {/* Location Link */}
                        <a
                            href="https://www.google.com/maps/place/St.Joseph's+Institute+of+Technology/@12.8698794,80.2158547,17z/data=!4m6!3m5!1s0x3a525bbb618d3ea9:0x90b3767be093efaa!8m2!3d12.8698794!4d80.2184296!16s%2Fm%2F0cr5_zr?authuser=0&coh=219816&entry=tts&g_ep=EgoyMDI0MDgxMS4wKgBIAVAD"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 text-copy-light transition-all duration-300 hover:scale-110 hover:text-primary"
                            aria-label="View Location on Google Maps"
                        >
                            <IconMapPin className="h-12 w-12" stroke={1.5} />
                            <span className="font-semibold">Location</span>
                        </a>

                        {/* Instagram Link */}
                        <a
                            // IMPORTANT: Replace with your actual Instagram profile URL
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 text-copy-light transition-all duration-300 hover:scale-110 hover:text-primary"
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