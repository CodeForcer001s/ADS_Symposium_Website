import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const EventCard = ({ event }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -10,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="event-card holographic"
    >
      <Card className="border-0 bg-transparent overflow-hidden h-full flex flex-col">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <motion.img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-black to-transparent"></div>
          <Badge 
            variant={event.color === 'nebula-cyan' ? 'nebula' : 'cosmic'} 
            className="absolute top-3 right-3"
          >
            {event.subtitle}
          </Badge>
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold cosmic-text">{event.title}</CardTitle>
          <CardDescription className="text-stellar-silver/80">
            {event.date} | {event.venue}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-stellar-silver/90">{event.shortDescription}</p>
        </CardContent>
        
        <CardFooter className="pt-0">
          <Link to={`/events/${event.id}`} className="w-full">
            <Button variant="cosmic" className="w-full">
              Explore Event
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default EventCard;