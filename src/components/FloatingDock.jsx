import React from 'react';
import { IconHome, IconTimelineEventExclamation, IconMovie, IconUsers, IconTicket } from '@tabler/icons-react';

const DockItem = ({ href, children, tooltip }) => {
    const handleScroll = (e) => {
        e.preventDefault();
        const targetElement = document.getElementById(href.substring(1));
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <a
            href={href}
            onClick={handleScroll}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full text-copy transition-all duration-200 ease-bounce hover:-translate-y-2 hover:bg-primary hover:text-background"
        >
            {children}
            <span className="absolute bottom-full mb-2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {tooltip}
            </span>
        </a>
    );
};


const FloatingDock = () => {
    return (
        <div className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/50 p-3 backdrop-blur-md">
            <DockItem href="#home" tooltip="Home">
                <IconHome size={24} />
            </DockItem>
            <DockItem href="#timeline" tooltip="Timeline">
                <IconTimelineEventExclamation size={24} />
            </DockItem>
            <DockItem href="#events" tooltip="Events">
                <IconMovie size={24} />
            </DockItem>
            <DockItem href="#register" tooltip="Register">
                <IconTicket size={24} />
            </DockItem>
        </div>
    );
};

export default FloatingDock;