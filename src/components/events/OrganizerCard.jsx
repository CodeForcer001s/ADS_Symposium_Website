import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { floatAnimation } from "../../utils/animations";

const OrganizerCard = ({ organizer, delay = 0 }) => {
  const initials = organizer.name
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="organizer-card"
      whileHover="animate"
      variants={floatAnimation}
    >
      <Card className="holographic overflow-hidden h-full">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <Avatar className="w-24 h-24 border-2 border-nebula-cyan/50 mb-4">
            <AvatarImage src={organizer.image} alt={organizer.name} />
            <AvatarFallback className="bg-cosmic-purple text-white text-xl">
              {initials}
            </AvatarFallback>
          </Avatar>

          <h3 className="text-xl font-bold mb-1 cosmic-text">
            {organizer.name}
          </h3>
          <p className="text-nebula-cyan mb-2">{organizer.role}</p>
          <p className="text-stellar-silver/70 text-sm mb-4">
            {organizer.department}
          </p>

          <div className="mt-auto pt-4 border-t border-cosmic-purple/20 w-full">
            <p className="text-stellar-silver/80 text-sm">
              <span className="text-stellar-silver/60">Contact: </span>
              {organizer.contact}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default OrganizerCard;
