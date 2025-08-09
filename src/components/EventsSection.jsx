import React, { useState } from "react";
import { motion } from "framer-motion";
import EventCard from "./events/EventCard";
import { eventsData } from "../data/eventsData";
import { staggerContainer, fadeInUp } from "../utils/animations";
import {
  IconCalendar,
  IconUsers,
  IconTrophy,
  IconStar,
  IconFilter,
  IconGrid3x3,
  IconLayoutGrid,
} from "@tabler/icons-react";

// Filter button component
const FilterButton = ({ label, isActive, onClick, count }) => (
  <button
    onClick={onClick}
    className={`relative px-6 py-3 rounded-2xl border transition-all duration-300 font-semibold ${
      isActive
        ? "bg-gradient-to-r from-gray-700 to-gray-800 border-gray-600 text-white shadow-xl scale-105"
        : "bg-gray-900/50 border-gray-700/50 text-gray-400 hover:bg-gray-800/60 hover:border-gray-600/60 hover:text-gray-300 hover:scale-105"
    }`}
  >
    {label}
    {count !== undefined && (
      <span
        className={`ml-2 px-2 py-1 rounded-full text-xs ${
          isActive ? "bg-white/20" : "bg-gray-700/50"
        }`}
      >
        {count}
      </span>
    )}
  </button>
);

const EventsSection = () => {
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  // Get unique categories from eventsData if available

  // Filter events based on selected category
  const filteredEvents =
    filter === "all"
      ? eventsData || []
      : (eventsData || []).filter(
          (event) => (event.category?.toLowerCase() || "general") === filter
        );

  // Get featured events count

  return (
    <section className="relative w-full min-h-screen bg-black px-4 py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 h-96 w-96 rounded-full bg-gradient-to-r from-gray-800/15 to-gray-700/15 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 h-80 w-80 rounded-full bg-gradient-to-r from-gray-700/15 to-gray-600/15 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-gray-600/10 to-gray-800/10 blur-3xl animate-pulse delay-500" />
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          {/* Status indicator */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700/50 mb-12 backdrop-blur-xl">
            <IconTrophy size={24} className="text-yellow-400" />
            <span className="text-gray-200 font-bold text-lg">
              Symposium Events
            </span>
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
          </div>

          {/* Main title */}
          <h2 className="font-black text-7xl lg:text-8xl mb-8">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl">
              Our Events
            </span>
          </h2>

          <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
            Explore the five pillars of our symposium and discover amazing
            opportunities for learning, networking, and innovation.
          </p>
        </div>

        {/* Filter and view controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          {/* View mode toggle */}
          <div className="flex items-center gap-3 p-1 rounded-xl bg-gray-900/50 border border-gray-700/50">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              <IconGrid3x3 size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === "list"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              <IconLayoutGrid size={20} />
            </button>
          </div>
        </div>

        {/* Events grid with framer-motion animations */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className={`grid gap-8 place-items-center ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
              : "grid-cols-1 lg:grid-cols-2"
          }`}
        >
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No events found
            </h3>
            <p className="text-gray-400">
              Try adjusting your filter to see more events.
            </p>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-20 px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-6 sm:px-12 py-6 rounded-3xl bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-xl border border-gray-700/50 shadow-2xl">
            {/* Text Section */}
            <div className="text-center sm:text-left w-full sm:w-auto">
              <div className="text-white font-bold text-lg sm:text-2xl mb-2 sm:mb-1">
                Ready to Join?
              </div>
              <div className="text-gray-400 text-sm sm:text-base">
                Register now and secure your spot at these amazing events.
              </div>
            </div>

            {/* Button */}
            <a
              href="https://conoscenza2025.stjosephstechnology.ac.in/registration/"
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-gradient-to-r from-white to-gray-200 text-black font-bold text-base sm:text-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
              target="_blank"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
