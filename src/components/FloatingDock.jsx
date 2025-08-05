import React from 'react';
import { IconHome, IconTimelineEventExclamation, IconMovie, IconUsers, IconTicket } from '@tabler/icons-react';
import './styles/FloatingDock.css';

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
            className="dock-item"
        >
            <div className="dock-item-icon">
                {children}
            </div>
            <span className="dock-tooltip">
                {tooltip}
            </span>
        </a>
    );
};

const FloatingDock = () => {
    return (
        <div className="floating-dock">
            <DockItem href="#home" tooltip="Home">
                <IconHome size={28} />
            </DockItem>
            <DockItem href="#timeline" tooltip="Timeline">
                <IconTimelineEventExclamation size={28} />
            </DockItem>
            <DockItem href="#events" tooltip="Events">
                <IconMovie size={28} />
            </DockItem>
            <DockItem href="#register" tooltip="Register">
                <IconTicket size={28} />
            </DockItem>
        </div>
    );
};

export default FloatingDock;