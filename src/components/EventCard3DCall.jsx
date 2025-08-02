// EventCard3D.jsx

import React from 'react';
import { CardContainer, CardBody, CardItem } from './EventCard3D'; // Adjust path if needed

const EventCard3D = ({ icon: Icon, title, description }) => {
    return (
        <CardContainer className="cursor-pointer">
            <CardBody className="rounded-xl bg-white shadow-xl p-6 w-full max-w-sm">
                <CardItem translateZ={30} className="flex justify-center mb-4">
                    <Icon className="h-12 w-12 text-indigo-600" />
                </CardItem>
                <CardItem translateZ={20}>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                </CardItem>
                <CardItem translateZ={10}>
                    <p className="text-gray-600 text-sm">{description}</p>
                </CardItem>
            </CardBody>
        </CardContainer>
    );
};

export default EventCard3D;
