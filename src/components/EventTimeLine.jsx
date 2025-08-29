import React, { useState } from "react";
import {
  Award,
  Code,
  DoorOpen,
  Ghost,
  BarChart3,
  Globe,
  MessageSquare,
  UtensilsCrossed,
  Coffee,
  LogOut,
  Clock,
  Calendar,
  Users,
  MapPin,
  Info,
  X,
} from "lucide-react";

const eventsData = [
  // General Events
  {
    id: "inaug",
    title: "Inauguration",
    subtitle: "Opening Ceremony",
    description:
      "Grand opening of AIZEN 2K25 with welcome speeches and introduction to all competitions.",
    icon: "DoorOpen",
    timeSlot: 1,
    duration: 3,
    venue: "AV Hall I",
    participants: "All Attendees",
    time: "8:00 AM - 9:00 AM",
    color: "bg-yellow-800",
    hoverColor: "hover:bg-yellow-700",
    row: 1,
  },
  {
    id: "tea1",
    title: "Tea Break",
    subtitle: "Morning Refreshment",
    description:
      "Light refreshments and networking opportunity for all participants.",
    icon: "Coffee",
    timeSlot: 4,
    duration: 1,
    venue: "Various Locations",
    participants: "All Attendees",
    time: "9:30 AM",
    color: "bg-stone-600",
    hoverColor: "hover:bg-stone-500",
    row: 1,
  },

  // Make A Wish Series
  {
    id: "maw1",
    title: "Make A Wish R1",
    subtitle: "Unlock the Wishes",
    description:
      "Arabian-inspired technical adventure. Solve five riddles or puzzles to unlock magical doors, with only one attempt per door.",
    icon: "Ghost",
    timeSlot: 4,
    duration: 3,
    venue: "Drawing Hall",
    participants: "Teams of 2-3",
    time: "9:30 AM - 10:30 AM",
    color: "bg-purple-900",
    hoverColor: "hover:bg-purple-800",
    row: 2,
  },
  {
    id: "maw2",
    title: "Make A Wish R2",
    subtitle: "Whisper to the Lamp",
    description:
      "Creative round where teams spin a magical story with a tech twist based on a given prompt.",
    icon: "Ghost",
    timeSlot: 6,
    duration: 4,
    venue: "Drawing Hall",
    participants: "Qualified Teams",
    time: "10:30 AM - 11:30 AM",
    color: "bg-purple-800",
    hoverColor: "hover:bg-purple-700",
    row: 3,
  },
  {
    id: "maw3",
    title: "Make A Wish R3",
    subtitle: "Escape the SandScript",
    description:
      "Decode and solve enchanted coding puzzles in this final Arabian adventure round.",
    icon: "Ghost",
    timeSlot: 9,
    duration: 3,
    venue: "Drawing Hall",
    participants: "Finalists",
    time: "11:30 AM - 12:30 PM",
    color: "bg-purple-700",
    hoverColor: "hover:bg-purple-600",
    row: 4,
  },

  // Prompt E Flux Series
  {
    id: "pef1",
    title: "Prompt E Flux R1",
    subtitle: "Wordtrack Relay",
    description:
      "Car-themed dynamic event starting with a cryptic maze of words and puzzles.",
    icon: "MessageSquare",
    timeSlot: 4,
    duration: 3,
    venue: "ADS Lab II",
    participants: "Teams of 2-3",
    time: "9:30 AM - 10:30 AM",
    color: "bg-pink-900",
    hoverColor: "hover:bg-pink-800",
    row: 5,
  },
  {
    id: "pef2",
    title: "Prompt E Flux R2",
    subtitle: "Guess Pit",
    description:
      "Guessing game where one member describes a word without using restricted words, and the other must guess it.",
    icon: "MessageSquare",
    timeSlot: 9,
    duration: 1,
    venue: "ADS Lab II",
    participants: "Qualified Teams",
    time: "11:30 AM - 12:00 PM",
    color: "bg-pink-800",
    hoverColor: "hover:bg-pink-700",
    row: 5,
  },
  {
    id: "pef3",
    title: "Prompt E Flux R3",
    subtitle: "Concept Garage",
    description:
      "Teams must create a captivating sci-fi poster based on a given prompt.",
    icon: "MessageSquare",
    timeSlot: 10,
    duration: 1,
    venue: "ADS Lab II",
    participants: "Finalists",
    time: "12:00 PM - 12:30 PM",
    color: "bg-pink-700",
    hoverColor: "hover:bg-pink-600",
    row: 5,
  },

  // TechVerse Series
  {
    id: "tv1",
    title: "TechVerse R1",
    subtitle: "DecodeX",
    description:
      "Intelligence challenge featuring encrypted puzzles and programming logic challenges.",
    icon: "Globe",
    timeSlot: 4,
    duration: 3,
    venue: "AV Hall III",
    participants: "Teams of 2-3",
    time: "9:30 AM - 10:30 AM",
    color: "bg-cyan-900",
    hoverColor: "hover:bg-cyan-800",
    row: 6,
  },
  {
    id: "tv2",
    title: "TechVerse R2",
    subtitle: "Muted Mystery",
    description:
      "Non-verbal game where one member acts out tech terms for their teammate to guess.",
    icon: "Globe",
    timeSlot: 6,
    duration: 4,
    venue: "AV Hall III",
    participants: "Qualified Teams",
    time: "10:30 AM - 11:30 AM",
    color: "bg-cyan-800",
    hoverColor: "hover:bg-cyan-700",
    row: 7,
  },
  {
    id: "tv3",
    title: "TechVerse R3",
    subtitle: "Prompt Pitch",
    description:
      "Teams will research and present on a given AI tool within a time limit.",
    icon: "Globe",
    timeSlot: 9,
    duration: 3,
    venue: "AV Hall III",
    participants: "Finalists",
    time: "11:30 AM - 12:30 PM",
    color: "bg-cyan-700",
    hoverColor: "hover:bg-cyan-600",
    row: 8,
  },

  // Panel D Saga Series
  {
    id: "pds1",
    title: "Panel D Saga R1",
    subtitle: "Quotes.exe",
    description:
      "MCU/DC/Manga themed event. Decode technical concepts from twisted quotes by comic and manga characters.",
    icon: "BarChart3",
    timeSlot: 6,
    duration: 4,
    venue: "ADS Lab II",
    participants: "Teams of 2-3",
    time: "10:30 AM - 11:30 AM",
    color: "bg-green-900",
    hoverColor: "hover:bg-green-800",
    row: 9,
  },
  {
    id: "pds2",
    title: "Panel D Saga R2",
    subtitle: "DataVerse Queries",
    description:
      "Run SQL-style queries on comic-themed datasets to find hidden information.",
    icon: "BarChart3",
    timeSlot: 9,
    duration: 1,
    venue: "ADS Lab II",
    participants: "Qualified Teams",
    time: "11:30 AM - 12:00 PM",
    color: "bg-green-800",
    hoverColor: "hover:bg-green-700",
    row: 10,
  },
  {
    id: "pds3",
    title: "Panel D Saga R3",
    subtitle: "Decode or Die",
    description:
      "One team member must solve a dramatic riddle presented as a comic panel.",
    icon: "BarChart3",
    timeSlot: 10,
    duration: 1,
    venue: "ADS Lab II",
    participants: "Finalists",
    time: "12:00 PM - 12:30 PM",
    color: "bg-green-700",
    hoverColor: "hover:bg-green-600",
    row: 10,
  },

  // Draw The Sword Series
  {
    id: "dts1",
    title: "Draw The Sword R1",
    subtitle: "Ani-Quest",
    description:
      "Animation-themed Animatech event. Fast-paced quiz with questions on tech, animation trivia, and visuals.",
    icon: "Code",
    timeSlot: 6,
    duration: 2,
    venue: "ADS Lab I",
    participants: "Teams of 2-3",
    time: "10:30 AM - 11:15 AM",
    color: "bg-blue-900",
    hoverColor: "hover:bg-blue-800",
    row: 11,
  },
  {
    id: "dts2",
    title: "Draw The Sword R2",
    subtitle: "Script Flip",
    description:
      "Logic round where teams must reorder shuffled lines of code to form a correct program.",
    icon: "Code",
    timeSlot: 7,
    duration: 2,
    venue: "ADS Lab I",
    participants: "Qualified Teams",
    time: "11:15 AM - 11:45 AM",
    color: "bg-blue-800",
    hoverColor: "hover:bg-blue-700",
    row: 12,
  },
  {
    id: "dts3",
    title: "Draw The Sword R3",
    subtitle: "LogicLens",
    description:
      "Identify hidden technical terms within a single picture using visual clues.",
    icon: "Code",
    timeSlot: 8,
    duration: 2,
    venue: "ADS Lab I",
    participants: "Finalists",
    time: "11:45 AM - 12:30 PM",
    color: "bg-blue-700",
    hoverColor: "hover:bg-blue-600",
    row: 13,
  },

  // General Events
  // {
  //   id: "lunch",
  //   title: "Lunch Break",
  //   subtitle: "Meal Time",
  //   description: "Complimentary lunch for all participants and organizers.",
  //   icon: "UtensilsCrossed",
  //   timeSlot: 10,
  //   duration: 3,
  //   venue: "Dining Hall",
  //   participants: "All Attendees",
  //   time: "12:30 PM - 1:30 PM",
  //   color: "bg-amber-600",
  //   hoverColor: "hover:bg-amber-700",
  //   row: 7,
  // },
];

const EventBlock = ({ event, onClick }) => {
  const {
    title,
    subtitle,
    icon: Icon,
    color,
    hoverColor,
    timeSlot,
    duration,
    row,
  } = event;

  return (
    <div
      className={`flex flex-col justify-center items-center text-center p-2 rounded-lg border-2 border-gray-600 text-white text-xs font-semibold cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-gray-400 ${color} ${hoverColor}`}
      style={{
        gridColumnStart: timeSlot,
        gridColumnEnd: timeSlot + duration,
        gridRowStart: row + 1, // +1 because row 1 is for time headers
      }}
      onClick={() => onClick(event)}
    >
      {Icon && <Icon className="w-4 h-4 mb-1" />}
      <span className="truncate w-full font-bold">{title}</span>
      {subtitle && (
        <span className="truncate w-full text-gray-300 mt-1">{subtitle}</span>
      )}
    </div>
  );
};

const Modal = ({ event, onClose }) => {
  if (!event) return null;

  const {
    title,
    subtitle,
    description,
    icon: Icon,
    venue,
    participants,
    color,
    time,
  } = event;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-2xl border-2 border-gray-600 max-w-md w-full mx-4 shadow-2xl">
        <div
          className={`${color} p-4 rounded-t-2xl flex items-center justify-between`}
        >
          <div className="flex items-center space-x-3">
            {Icon && <Icon className="w-6 h-6 text-white" />}
            <div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              {subtitle && <p className="text-sm text-gray-200">{subtitle}</p>}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 text-white">
          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <Info className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold">Description</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold">Time:</span>
              <span className="text-sm text-gray-300">{time}</span>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-green-400" />
              <span className="text-sm font-semibold">Venue:</span>
              <span className="text-sm text-gray-300">{venue}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold">Participants:</span>
              <span className="text-sm text-gray-300">{participants}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const timeSlots = [
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:15 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const maxRows = Math.max(...eventsData.map((event) => event.row)) + 1; // +2 for header and buffer

  return (
    <section className="w-full min-h-screen p-4 md:p-8 lg:p-16 bg-black">
      <div className="text-center mb-8 md:mb-12">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <h2 className="font-black text-6xl md:text-7xl lg:text-8xl mb-2">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl tracking-wide">
              EVENT TIMELINE
            </span>
          </h2>
        </div>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed">
          Navigate through our comprehensive schedule of competitions, breaks,
          and ceremonies.
        </p>
        <p className="text-sm md:text-base text-yellow-300 mt-4 font-semibold">
          Click on any event for detailed information
        </p>
      </div>

      <div className="max-w-7xl mx-auto rounded-2xl border-2 border-gray-800 bg-black p-3 md:p-6 shadow-2xl backdrop-blur-sm">
        {/* Desktop and Tablet View */}
        <div className="hidden md:block">
          <div
            className="grid gap-2 p-8 bg-black rounded-xl border border-gray-700 shadow-inner relative"
            style={{
              gridTemplateColumns: `repeat(${timeSlots.length}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${maxRows}, minmax(60px, 1fr))`,
            }}
          >
            {/* Time Headers */}
            {timeSlots.map((time, i) => (
              <div
                key={time}
                className="text-center text-xs text-gray-300 p-2 border-r border-gray-600 bg-gradient-to-b from-gray-800 to-gray-900 rounded-sm font-semibold flex items-center justify-center"
                style={{
                  gridColumnStart: i + 1,
                  gridRowStart: 1,
                }}
              >
                {time}
              </div>
            ))}

            {/* Event Blocks */}
            {eventsData.map((event) => (
              <EventBlock
                key={event.id}
                event={event}
                onClick={handleEventClick}
              />
            ))}

            {/* Results & Awards */}
            <div
              className="flex flex-col justify-center items-center text-center p-4 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 text-black border-2 border-amber-400 shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{
                gridColumnStart: 13,
                gridColumnEnd: 17,
                gridRowStart: 2,
                gridRowEnd: 8,
              }}
            >
              <Award className="w-10 h-10 mb-2 animate-pulse" />
              <h3 className="text-xl font-serif font-bold">Results &</h3>
              <h3 className="text-xl font-serif font-bold">Awards</h3>
              <p className="text-sm font-semibold mt-2">1:30 PM - 2:30 PM</p>
              <p className="text-xs mt-1 opacity-80">Prize Distribution</p>
            </div>
          </div>
        </div>

        {/* Mobile View with Horizontal Scroll */}
        <div className="md:hidden">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
            <div
              className="grid gap-2 p-4 bg-black rounded-xl border border-gray-700 min-w-max shadow-inner"
              style={{
                gridTemplateColumns: `repeat(${timeSlots.length}, minmax(100px, 1fr))`,
                gridTemplateRows: `repeat(${maxRows}, minmax(80px, 1fr))`,
              }}
            >
              {/* Time Headers */}
              {timeSlots.map((time, i) => (
                <div
                  key={time}
                  className="text-center text-xs text-gray-300 p-2 border-r border-gray-600 bg-gradient-to-b from-gray-800 to-gray-900 rounded-sm flex items-center justify-center font-semibold"
                  style={{
                    gridColumnStart: i + 1,
                    gridRowStart: 1,
                  }}
                >
                  {time}
                </div>
              ))}

              {/* Event Blocks */}
              {eventsData.map((event) => (
                <EventBlock
                  key={event.id}
                  event={event}
                  onClick={handleEventClick}
                />
              ))}

              {/* Results & Awards */}
              <div
                className="flex flex-col justify-center items-center text-center p-2 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 text-black border-2 border-amber-400 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                style={{
                  gridColumnStart: 13,
                  gridColumnEnd: 14,
                  gridRowStart: 2,
                  gridRowEnd: 8,
                }}
              >
                <Award className="w-6 h-6 mb-1 animate-pulse" />
                <h3 className="text-sm font-serif font-bold">Results</h3>
                <p className="text-xs font-semibold">1:30-2:30 PM</p>
                <p className="text-xs opacity-80">Awards</p>
              </div>
            </div>
          </div>

          {/* Mobile scroll indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-3 text-gray-400 text-sm bg-gray-800 rounded-full px-4 py-2 border border-gray-700">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Swipe to explore timeline</span>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 max-w-5xl mx-auto">
        <h3 className="text-xl font-bold text-white mb-4 text-center">
          Event Categories
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <div className="flex items-center space-x-2 bg-purple-900 p-3 rounded-lg">
            <Ghost className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Make A Wish</span>
          </div>
          <div className="flex items-center space-x-2 bg-pink-900 p-3 rounded-lg">
            <MessageSquare className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Prompt E Flux</span>
          </div>
          <div className="flex items-center space-x-2 bg-cyan-900 p-3 rounded-lg">
            <Globe className="w-4 h-4 text-white" />
            <span className="text-white text-sm">TechVerse</span>
          </div>
          <div className="flex items-center space-x-2 bg-green-900 p-3 rounded-lg">
            <BarChart3 className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Panel D Saga</span>
          </div>
          <div className="flex items-center space-x-2 bg-blue-900 p-3 rounded-lg">
            <Code className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Draw The Sword</span>
          </div>
        </div>
      </div>

      {/* Event Details Summary */}
      <div className="mt-8 max-w-4xl mx-auto bg-gray-900 rounded-xl p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4 text-center">
          Event Summary
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-yellow-400 font-bold mb-2">
              Morning Events (9:30 AM start)
            </h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Make A Wish - Drawing Hall</li>
              <li>• Prompt E Flux - ADS Lab II</li>
              <li>• TechVerse - AV Hall III</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-yellow-400 font-bold mb-2">
              Late Morning Events (10:30 AM start)
            </h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Panel D Saga - ADS Lab II</li>
              <li>• Draw The Sword - ADS Lab I</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">
            All events conclude by 1:00 PM, followed by lunch and results
            ceremony
          </p>
        </div>
      </div>

      {/* Modal */}
      <Modal event={selectedEvent} onClose={closeModal} />

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thumb-gray-500::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #6b7280, #9ca3af);
          border-radius: 4px;
        }
        .scrollbar-track-gray-700::-webkit-scrollbar-track {
          background-color: #374151;
          border-radius: 4px;
        }
        .scrollbar-thumb-gray-500::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, #9ca3af, #d1d5db);
        }
      `}</style>
    </section>
  );
};

export default EventTimeline;
