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
      className="organizer-card w-full max-w-sm mx-auto"
      whileHover="animate"
      variants={floatAnimation}
    >
      <Card className="holographic overflow-hidden h-full min-h-[420px] shadow-2xl border-2 border-nebula-cyan/30 hover:border-nebula-cyan/60 transition-all duration-300">
        <CardContent className="p-8 flex flex-col items-center text-center h-full">
          {/* Enhanced Avatar with glow effect */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-nebula-cyan/20 rounded-full blur-lg scale-110"></div>
            <Avatar className="relative w-32 h-32 border-3 border-nebula-cyan/60 shadow-lg hover:scale-105 transition-transform duration-300">
              <AvatarImage
                src={organizer.image}
                alt={organizer.name}
                className="object-cover"
              />
              <AvatarFallback className="bg-gradient-to-br from-cosmic-purple to-nebula-cyan text-white text-2xl font-bold">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Enhanced text hierarchy */}
          <div className="flex-1 flex flex-col justify-between w-full">
            <div>
              <h3 className="text-2xl font-bold mb-2 cosmic-text bg-gradient-to-r from-white to-nebula-cyan bg-clip-text text-transparent">
                {organizer.name}
              </h3>
              <p className="text-nebula-cyan font-semibold text-lg mb-3 uppercase tracking-wide">
                {organizer.role}
              </p>
              <p className="text-stellar-silver/80 text-base mb-6 font-medium">
                {organizer.department}
              </p>
            </div>

            {/* Enhanced contact section */}
            <div className="mt-auto pt-6 border-t-2 border-gradient-to-r from-cosmic-purple/30 via-nebula-cyan/30 to-cosmic-purple/30 w-full relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-cosmic-purple to-nebula-cyan"></div>
              {/* <div className="bg-cosmic-purple/10 rounded-lg p-4 border border-cosmic-purple/20">
                <p className="text-stellar-silver/90 text-sm font-medium">
                  <span className="text-nebula-cyan/80 block mb-1 text-xs uppercase tracking-widest">
                    Contact
                  </span>
                  <span className="text-white">{organizer.contact}</span>
                </p>
              </div> */}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default OrganizerCard;
