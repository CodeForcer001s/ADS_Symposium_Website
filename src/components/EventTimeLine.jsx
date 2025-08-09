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
  {
    id: "inaug",
    title: "Inauguration",
    subtitle: "Opening Ceremony",
    description:
      "Grand opening of the event with welcome speeches and introduction to all competitions.",
    icon: DoorOpen,
    grid: "col-start-1 col-span-2",
    row: 2,
    color: "bg-yellow-800",
    hoverColor: "hover:bg-yellow-700",
    venue: "AV Hall I",
    participants: "All Attendees",
  },
  {
    id: "tea",
    title: "Tea Break",
    subtitle: "Refreshment Time",
    description:
      "Light refreshments and networking opportunity for all participants.",
    icon: Coffee,
    grid: "col-start-3 col-span-1",
    row: 2,
    color: "bg-stone-600",
    hoverColor: "hover:bg-stone-500",
    venue: "Various Locations",
    participants: "Open to All",
  },
  {
    id: "break1",
    title: "Break",
    subtitle: "Rest Period",
    description: "Short break for participants to prepare for next rounds.",
    icon: null,
    grid: "col-start-6 col-span-1",
    row: 2,
    color: "bg-gray-800",
    hoverColor: "hover:bg-gray-700",
    venue: "Various Locations",
    participants: "All Participants",
  },
  {
    id: "lunch",
    title: "Lunch",
    subtitle: "Meal Break",
    description: "Complimentary lunch for all participants and organizers.",
    icon: UtensilsCrossed,
    grid: "col-start-9 col-span-2",
    row: 2,
    color: "bg-amber-600",
    hoverColor: "hover:bg-amber-700",
    venue: "Dining Hall",
    participants: "All Attendees",
  },

  {
    id: "pef1",
    title: "Prompt E Flux R1",
    subtitle: "AI Prompting Challenge",
    description:
      "First round of the AI prompt engineering competition. Test your creativity!",
    icon: MessageSquare,
    grid: "col-start-4 col-span-2",
    row: 3,
    color: "bg-pink-900",
    hoverColor: "hover:bg-pink-800",
    venue: "ADS Lab II",
    participants: "Registered Teams",
  },
  {
    id: "cs1",
    title: "Draw the Sword R1",
    subtitle: "Coding Competition",
    description: "Algorithmic programming challenge. Show your coding prowess!",
    icon: Code,
    grid: "col-start-4 col-span-2",
    row: 4,
    color: "bg-blue-900",
    hoverColor: "hover:bg-blue-800",
    venue: "ADS Lab I",
    participants: "Individual Coders",
  },
  {
    id: "hoh1",
    title: "Make A Wish R1",
    subtitle: "Creative Challenge",
    description: "First round of the creative problem-solving competition.",
    icon: Ghost,
    grid: "col-start-4 col-span-2",
    row: 5,
    color: "bg-purple-900",
    hoverColor: "hover:bg-purple-800",
    venue: "Drawing Hall I",
    participants: "Creative Teams",
  },
  {
    id: "df1",
    title: "Panel D. Saga R1",
    subtitle: "Data Analytics",
    description:
      "Data science and analytics competition. Analyze, visualize, and present!",
    icon: BarChart3,
    grid: "col-start-4 col-span-2",
    row: 6,
    color: "bg-green-900",
    hoverColor: "hover:bg-green-800",
    venue: "ADS Lab II",
    participants: "Data Teams",
  },
  {
    id: "tv1",
    title: "Techverse R1",
    subtitle: "Tech Innovation",
    description: "Technology innovation showcase and competition first round.",
    icon: Globe,
    grid: "col-start-4 col-span-2",
    row: 7,
    color: "bg-cyan-900",
    hoverColor: "hover:bg-cyan-800",
    venue: "AV Hall III",
    participants: "Tech Teams",
  },
  {
    id: "pef2",
    title: "R2",
    subtitle: "Prompt E Flux Round 2",
    description:
      "Second round with increased difficulty and creativity requirements.",
    icon: MessageSquare,
    grid: "col-start-7 col-span-2",
    row: 3,
    color: "bg-pink-800",
    hoverColor: "hover:bg-pink-700",
    venue: "ADS Lab II",
    participants: "Qualified Teams",
  },
  {
    id: "cs2",
    title: "R2",
    subtitle: "Draw the Sword Round 2",
    description: "Advanced algorithmic challenges for qualified participants.",
    icon: Code,
    grid: "col-start-7 col-span-2",
    row: 4,
    color: "bg-blue-800",
    hoverColor: "hover:bg-blue-700",
    venue: "ADS Lab I",
    participants: "Qualified Coders",
  },
  {
    id: "hoh2",
    title: "R2",
    subtitle: "Make A Wish Round 2",
    description: "Enhanced creative challenges with time constraints.",
    icon: Ghost,
    grid: "col-start-7 col-span-2",
    row: 5,
    color: "bg-purple-800",
    hoverColor: "hover:bg-purple-700",
    venue: "Drawing Hall I",
    participants: "Qualified Teams",
  },
  {
    id: "df2",
    title: "R2",
    subtitle: "Panel D. Saga Round 2",
    description: "Complex data analysis with real-world datasets.",
    icon: BarChart3,
    grid: "col-start-7 col-span-2",
    row: 6,
    color: "bg-green-800",
    hoverColor: "hover:bg-green-700",
    venue: "ADS Lab II",
    participants: "Qualified Teams",
  },
  {
    id: "tv2",
    title: "R2",
    subtitle: "Techverse Round 2",
    description: "Advanced tech innovation presentations and demos.",
    icon: Globe,
    grid: "col-start-7 col-span-2",
    row: 7,
    color: "bg-cyan-800",
    hoverColor: "hover:bg-cyan-700",
    venue: "AV Hall III",
    participants: "Qualified Teams",
  },
  {
    id: "pef3",
    title: "Final",
    subtitle: "Prompt E Flux Final",
    description:
      "Ultimate AI prompting challenge. The best of the best compete!",
    icon: MessageSquare,
    grid: "col-start-11 col-span-2",
    row: 3,
    color: "bg-pink-700",
    hoverColor: "hover:bg-pink-600",
    venue: "ADS Lab II",
    participants: "Finalists",
  },
  {
    id: "cs3",
    title: "Final",
    subtitle: "Draw the Sword Final",
    description: "The ultimate coding showdown. May the best coder win!",
    icon: Code,
    grid: "col-start-11 col-span-2",
    row: 4,
    color: "bg-blue-700",
    hoverColor: "hover:bg-blue-600",
    venue: "ADS Lab I",
    participants: "Finalists",
  },
  {
    id: "hoh3",
    title: "Final",
    subtitle: "Make A Wish Final",
    description:
      "Creative excellence on display. Innovation meets imagination!",
    icon: Ghost,
    grid: "col-start-11 col-span-2",
    row: 5,
    color: "bg-purple-700",
    hoverColor: "hover:bg-purple-600",
    venue: "Drawing Hall I",
    participants: "Finalists",
  },
  {
    id: "df3",
    title: "Final",
    subtitle: "Panel D. Saga Final",
    description: "Data science mastery showcase. Transform data into insights!",
    icon: BarChart3,
    grid: "col-start-11 col-span-2",
    row: 6,
    color: "bg-green-700",
    hoverColor: "hover:bg-green-600",
    venue: "ADS Lab II",
    participants: "Finalists",
  },
  {
    id: "tv3",
    title: "Final",
    subtitle: "Techverse Final",
    description:
      "Revolutionary tech innovations presented by the brightest minds!",
    icon: Globe,
    grid: "col-start-11 col-span-2",
    row: 7,
    color: "bg-cyan-700",
    hoverColor: "hover:bg-cyan-600",
    venue: "AV Hall III",
    participants: "Finalists",
  },
  // {
  //   id: "leave",
  //   title: "Leave Campus",
  //   subtitle: "Event Conclusion",
  //   description: "Official end of the event. Thank you for participating!",
  //   icon: LogOut,
  //   grid: "col-start-15 col-span-1",
  //   row: 2,
  //   color: "bg-gray-700",
  //   hoverColor: "hover:bg-gray-600",
  //   venue: "Main Gate",
  //   participants: "All Attendees",
  // },
];

const EventBlock = ({ event, onClick }) => {
  const { title, subtitle, icon: Icon, grid, row, color, hoverColor } = event;
  return (
    <div
      className={`flex flex-col justify-center items-center text-center p-2 rounded-lg border-2 border-gray-600 text-white text-xs font-semibold cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-gray-400 ${grid} ${color} ${hoverColor}`}
      style={{ gridRowStart: row }}
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

  const timeSlots = Array.from({ length: 15 }, (_, i) => {
    const totalMinutes = 8 * 60 + i * 30;
    const hour24 = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;
    const hour12 = hour24 >= 13 ? hour24 - 12 : hour24 === 0 ? 12 : hour24;
    const ampm = hour24 >= 12 ? "PM" : "AM";
    return `${hour12}:${minute === 0 ? "00" : minute} ${ampm}`;
  });

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <section className="w-full min-h-screen p-4 md:p-8 lg:p-16 bg-black">
      <div className="text-center mb-8 md:mb-12">
        <div className="flex items-center justify-center space-x-3 mb-4">
        
          <h2 className="font-black text-7xl lg:text-8xl mb-2">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl tracking-widel">
              Event Timeline
            </span>
          </h2>
         
        </div>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed">
          Navigate through our comprehensive schedule of competitions, breaks,
          and ceremonies.
        </p>
        <p className="text-sm md:text-xl text-yellow-300 mt-4 font-semibold">
          Click on any event for detailed information
        </p>
      </div>

      <div className="max-w-7xl mx-auto rounded-2xl border-2 border-gray-800 bg-black p-3 md:p-6 shadow-2xl backdrop-blur-sm">
        {/* Desktop and Tablet View */}
        <div className="hidden md:block">
          <div
            className="grid grid-cols-15 gap-2 p-8 bg-black rounded-xl border border-gray-700 shadow-inner"
            style={{ gridTemplateRows: "repeat(7, minmax(0, 1fr))" }}
          >
            {timeSlots.map((time, i) => (
              <div
                key={time}
                className={`text-center text-xs text-gray-300 p-2 border-r border-gray-600 col-start-${
                  i + 1
                } row-start-1 bg-gradient-to-b from-gray-800 to-gray-900 rounded-sm font-semibold`}
              >
                {time}
              </div>
            ))}
            {eventsData.map((event) => (
              <EventBlock
                key={event.id}
                event={event}
                onClick={handleEventClick}
              />
            ))}
            <div className="flex flex-col justify-center items-center text-center p-4 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 text-black border-2 border-amber-400 shadow-lg col-start-13 col-span-2 row-start-2 row-span-6 cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Award className="w-10 h-10 mb-2 animate-pulse" />
              <h3 className="text-xl font-serif font-bold">Results</h3>
              <p className="text-sm font-semibold">2:30 PM</p>
              <p className="text-xs mt-1 opacity-80">Award Ceremony</p>
            </div>
          </div>
        </div>

        {/* Mobile View with Horizontal Scroll */}
        <div className="md:hidden">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
            <div
              className="grid gap-2 p-4 bg-black rounded-xl border border-gray-700 min-w-max shadow-inner"
              style={{
                gridTemplateColumns: "repeat(15, minmax(100px, 1fr))",
                gridTemplateRows: "repeat(7, minmax(80px, 1fr))",
              }}
            >
              {timeSlots.map((time, i) => (
                <div
                  key={time}
                  className={`text-center text-xs text-gray-300 p-2 border-r border-gray-600 col-start-${
                    i + 1
                  } row-start-1 bg-gradient-to-b from-gray-800 to-gray-900 rounded-sm flex items-center justify-center font-semibold`}
                >
                  {time}
                </div>
              ))}
              {eventsData.map((event) => (
                <EventBlock
                  key={event.id}
                  event={event}
                  onClick={handleEventClick}
                />
              ))}
              <div className="flex flex-col justify-center items-center text-center p-2 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 text-black border-2 border-amber-400 shadow-lg col-start-13 col-span-2 row-start-2 row-span-6 cursor-pointer hover:shadow-xl transition-all duration-300">
                <Award className="w-6 h-6 mb-1 animate-pulse" />
                <h3 className="text-sm font-serif font-bold">Results</h3>
                <p className="text-xs font-semibold">2:30 PM</p>
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
      <div className="mt-8 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-white mb-4 text-center">
          Event Categories
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <div className="flex items-center space-x-2 bg-pink-900 p-2 rounded-lg">
            <MessageSquare className="w-4 h-4 text-white" />
            <span className="text-white text-sm">AI Prompting</span>
          </div>
          <div className="flex items-center space-x-2 bg-blue-900 p-2 rounded-lg">
            <Code className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Coding</span>
          </div>
          <div className="flex items-center space-x-2 bg-purple-900 p-2 rounded-lg">
            <Ghost className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Creative</span>
          </div>
          <div className="flex items-center space-x-2 bg-green-900 p-2 rounded-lg">
            <BarChart3 className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Data Analytics</span>
          </div>
          <div className="flex items-center space-x-2 bg-cyan-900 p-2 rounded-lg">
            <Globe className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Tech Innovation</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal event={selectedEvent} onClose={closeModal} />

      <style jsx>{`
        /* Custom scrollbar styles for webkit browsers */
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
