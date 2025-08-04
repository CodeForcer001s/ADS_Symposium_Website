import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer, CardBody, CardItem } from './EventCard3D'; 

const EventCard3D = ({ id, icon: Icon, title, description }) => {
    return (
        <Link to={`/event/${id}`}>
            <CardContainer className="inter-var">
                <CardBody className="relative group/card h-auto w-auto sm:w-[30rem] rounded-xl p-9 border border-white/[0.2] bg-slate-200">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-copy"
                    >
                        {title}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-sm max-w-sm mt-2 text-copy-light"
                    >
                        {description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Icon className="h-16 w-16 text-primary" stroke={1.5} />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl text-xs font-normal text-copy"
                        >
                            Learn more →
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
        </Link>
    );
};

export default EventCard3D;