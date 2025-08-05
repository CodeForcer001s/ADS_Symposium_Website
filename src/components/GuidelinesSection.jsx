import React, { useState } from "react";
import {
  IconTicket,
  IconUserCheck,
  IconClock,
  IconBus,
  IconAlarm,
  IconToolsKitchen2,
  IconBuildingCommunity,
  IconInfoCircle,
  IconCheck,
} from "@tabler/icons-react";

// Enhanced guidelines data with categories and priorities
const guidelines = [
  {
    icon: IconTicket,
    text: "All participants should bring their registration slip along with their college ID card.",
    category: "Registration",
    priority: "high",
  },
  {
    icon: IconUserCheck,
    text: "Participants will be permitted to enter the campus only in formal dress code.",
    category: "Dress Code",
    priority: "high",
  },
  {
    icon: IconClock,
    text: "The offline registration process will end by 9:30 AM on the day of the event.",
    category: "Timing",
    priority: "high",
  },
  {
    icon: IconBus,
    text: "College buses will be available from all parts of the city.",
    category: "Transport",
    priority: "medium",
  },
  {
    icon: IconAlarm,
    text: "All events will commence at the scheduled time. Participants are requested to be punctual.",
    category: "Timing",
    priority: "high",
  },
  {
    icon: IconToolsKitchen2,
    text: "Breakfast and lunch will be provided by our college.",
    category: "Facilities",
    priority: "low",
  },
  {
    icon: IconBuildingCommunity,
    text: "Proper decorum must be maintained in accordance with the college rules while inside the college campus.",
    category: "Conduct",
    priority: "medium",
  },
];

// Enhanced GuidelineCard component with professional design
const GuidelineCard = ({ item, index, isChecked, onToggle }) => {
  const priorityColors = {
    high: "from-red-900/20 to-orange-900/30 border-red-800/40 shadow-red-900/20",
    medium:
      "from-amber-900/20 to-yellow-900/30 border-amber-800/40 shadow-amber-900/20",
    low: "from-emerald-900/20 to-green-900/30 border-emerald-800/40 shadow-emerald-900/20",
  };

  const iconColors = {
    high: "from-red-600 to-orange-600 shadow-red-500/30",
    medium: "from-amber-600 to-yellow-600 shadow-amber-500/30",
    low: "from-emerald-600 to-green-600 shadow-emerald-500/30",
  };

  const priorityLabels = {
    high: "Critical",
    medium: "Important",
    low: "Standard",
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border ${
        priorityColors[item.priority]
      } p-4 sm:p-6 md:p-8 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl cursor-pointer ${
        isChecked
          ? "ring-1 ring-gray-500/50 bg-gradient-to-br from-gray-800/30 to-gray-900/50"
          : ""
      }`}
      onClick={() => onToggle(index)}
      style={{
        animationDelay: `${index * 50}ms`,
        boxShadow: isChecked
          ? "0 20px 40px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(107, 114, 128, 0.2)"
          : item.priority === "high"
          ? "0 20px 40px -12px rgba(127, 29, 29, 0.4)"
          : item.priority === "medium"
          ? "0 20px 40px -12px rgba(146, 64, 14, 0.4)"
          : "0 20px 40px -12px rgba(6, 78, 59, 0.4)",
      }}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-transparent to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Minimal floating elements */}
      <div className="absolute -top-1 -right-1 h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-gradient-to-br from-white/[0.02] to-transparent blur-lg transition-all duration-300 group-hover:scale-125" />
      <div className="absolute -bottom-1 -left-1 h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-gradient-to-br from-white/[0.02] to-transparent blur-lg transition-all duration-300 group-hover:scale-125" />

      {/* Priority indicator with colored styling */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <span
          className={`text-xs font-medium px-2 py-1 sm:px-3 sm:py-1 rounded-lg border ${
            item.priority === "high"
              ? "bg-red-900/30 border-red-700/50 text-red-300"
              : item.priority === "medium"
              ? "bg-amber-900/30 border-amber-700/50 text-amber-300"
              : "bg-emerald-900/30 border-emerald-700/50 text-emerald-300"
          }`}
        >
          <span className="hidden xs:inline">
            {priorityLabels[item.priority]}
          </span>
          <span className="xs:hidden">
            {item.priority === "high"
              ? "Critical"
              : item.priority === "medium"
              ? "Important"
              : "Standard"}
          </span>
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-start gap-4 sm:gap-6">
        {/* Professional icon container */}
        <div className={`flex-shrink-0 relative`}>
          <div
            className={`flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-gradient-to-br ${
              iconColors[item.priority]
            } shadow-lg transition-all duration-300 group-hover:scale-105`}
          >
            <item.icon
              className="h-6 w-6 sm:h-8 sm:w-8 text-gray-200"
              stroke={1.5}
            />
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 min-w-0 pt-1">
          {/* Category badge with professional styling */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gray-800/50 border border-gray-700/40 mb-3 sm:mb-4 backdrop-blur-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
            <span className="text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wide">
              {item.category}
            </span>
          </div>

          {/* Main text with professional typography */}
          <p className="text-gray-200 leading-relaxed text-base sm:text-lg font-normal">
            {item.text}
          </p>
        </div>

        {/* Professional checkbox indicator */}
        <div
          className={`flex-shrink-0 ml-2 sm:ml-4 transition-all duration-300 ${
            isChecked
              ? "opacity-100 scale-105"
              : "opacity-70 group-hover:opacity-100"
          }`}
        >
          <div
            className={`h-7 w-7 sm:h-8 sm:w-8 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
              isChecked
                ? "bg-gradient-to-br from-emerald-700 to-green-700 border-emerald-500"
                : "border-gray-600 hover:border-gray-500 bg-gray-800/50"
            }`}
          >
            {isChecked && <IconCheck size={16} className="text-gray-200" />}
          </div>
        </div>
      </div>

      {/* Subtle hover effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/[0.01] to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

      {/* Completion effect with priority coloring */}
      {isChecked && (
        <div
          className={`absolute inset-0 rounded-2xl ${
            item.priority === "high"
              ? "bg-gradient-to-br from-red-800/10 via-transparent to-orange-800/10"
              : item.priority === "medium"
              ? "bg-gradient-to-br from-amber-800/10 via-transparent to-yellow-800/10"
              : "bg-gradient-to-br from-emerald-800/10 via-transparent to-green-800/10"
          }`}
        />
      )}
    </div>
  );
};

const GuidelinesSection = () => {
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [filter, setFilter] = useState("all");

  const toggleItem = (index) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  const categories = [
    "all",
    ...new Set(guidelines.map((item) => item.category.toLowerCase())),
  ];
  const filteredGuidelines =
    filter === "all"
      ? guidelines
      : guidelines.filter((item) => item.category.toLowerCase() === filter);

  const completionPercentage = Math.round(
    (checkedItems.size / guidelines.length) * 100
  );

  return (
    <section
      id="guidelines"
      className="relative w-full min-h-screen bg-black px-2 xs:px-4 py-12 xs:py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Professional background elements with subtle animation */}
      <div className="absolute inset-0">
        {/* Main background orbs */}
        <div className="absolute top-1/4 left-1/6 h-48 w-48 xs:h-64 xs:w-64 sm:h-96 sm:w-96 rounded-full bg-gradient-to-r from-gray-900/15 to-gray-800/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/6 h-40 w-40 xs:h-56 xs:w-56 sm:h-80 sm:w-80 rounded-full bg-gradient-to-r from-gray-800/15 to-gray-700/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32 w-32 xs:h-48 xs:w-48 sm:h-64 sm:w-64 rounded-full bg-gradient-to-r from-gray-700/10 to-gray-800/10 blur-3xl" />
      </div>

      {/* Professional grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px sm:60px sm:60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Professional header */}
        <div className="text-center mb-8 xs:mb-12 sm:mb-16 lg:mb-20">
          {/* Status indicator with professional design */}
          <div className="inline-flex items-center gap-2 xs:gap-3 px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 rounded-xl bg-gradient-to-r from-gray-900/90 to-gray-800/90 border border-gray-700/40 mb-6 xs:mb-8 sm:mb-12 backdrop-blur-xl">
            <IconInfoCircle
              size={16}
              className="xs:size-5 sm:size-6 text-gray-400"
            />
            <span className="text-gray-300 font-medium text-sm xs:text-base sm:text-lg">
              Event Guidelines
            </span>
          </div>

          {/* Professional title */}
          <h2 className="font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 xs:mb-6 sm:mb-8 tracking-normal">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Event Guidelines
            </span>
          </h2>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-xs xs:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed mb-6 xs:mb-8 sm:mb-12 font-light px-2">
            Review these important guidelines to ensure a smooth and
            professional event experience for all participants.
          </p>

          {/* Professional progress section */}
          <div className="max-w-xs xs:max-w-sm sm:max-w-lg mx-auto mb-6 xs:mb-8 sm:mb-12">
            <div className="flex items-center justify-between mb-2 xs:mb-3 sm:mb-4">
              <span className="text-gray-400 font-medium text-sm xs:text-base">
                Progress
              </span>
              <div className="flex items-center gap-1 xs:gap-2">
                <span className="text-lg xs:text-xl sm:text-2xl font-bold text-white">
                  {completionPercentage}%
                </span>
                {completionPercentage === 100 && (
                  <span className="text-gray-400 text-sm xs:text-base">
                    Complete
                  </span>
                )}
              </div>
            </div>
            <div className="h-2 xs:h-2.5 sm:h-3 bg-gray-800/80 rounded-full overflow-hidden border border-gray-700/40">
              <div
                className="h-full bg-gradient-to-r from-emerald-600 to-green-500 transition-all duration-1000 rounded-full"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <div className="flex justify-between text-xs xs:text-sm text-gray-500 mt-1 xs:mt-2">
              <span>{checkedItems.size} reviewed</span>
              <span>{guidelines.length - checkedItems.size} remaining</span>
            </div>
          </div>

          {/* Professional filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 mb-8 xs:mb-12 sm:mb-16 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg border transition-all duration-300 capitalize font-medium text-xs xs:text-sm sm:text-base lg:text-lg ${
                  filter === category
                    ? "bg-gray-700/80 border-gray-600 text-white"
                    : "bg-gray-900/50 border-gray-700/50 text-gray-400 hover:bg-gray-800/60 hover:border-gray-600/60 hover:text-gray-300"
                }`}
              >
                <span className="hidden xs:inline">{category}</span>
                <span className="xs:hidden">
                  {category === "all"
                    ? "All"
                    : category === "registration"
                    ? "Reg"
                    : category === "dress code"
                    ? "Dress"
                    : category === "timing"
                    ? "Time"
                    : category === "transport"
                    ? "Bus"
                    : category === "facilities"
                    ? "Food"
                    : category === "conduct"
                    ? "Rules"
                    : category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Guidelines grid with responsive columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 mb-8 xs:mb-12 sm:mb-20">
          {filteredGuidelines.map((item, index) => (
            <GuidelineCard
              key={index}
              item={item}
              index={index}
              isChecked={checkedItems.has(index)}
              onToggle={toggleItem}
            />
          ))}
        </div>

        {/* Professional summary section */}
        <div className="text-center px-2">
          <div className="inline-flex flex-col xs:flex-row items-center gap-3 xs:gap-4 sm:gap-6 px-4 xs:px-8 sm:px-12 py-4 xs:py-5 sm:py-6 rounded-xl bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-xl border border-gray-700/40">
            <div className="flex items-center gap-2 xs:gap-3">
              <div className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                <IconCheck className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="text-center xs:text-left">
                <div className="text-white font-medium text-sm xs:text-base sm:text-lg lg:text-xl">
                  {checkedItems.size} of {guidelines.length} guidelines reviewed
                </div>
                <div className="text-gray-400 text-xs xs:text-sm">
                  {completionPercentage === 100
                    ? "All guidelines reviewed successfully"
                    : "Continue reviewing the remaining guidelines"}
                </div>
              </div>
            </div>

            {completionPercentage === 100 && (
              <div className="px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg bg-emerald-800/30 border border-emerald-600/40">
                <span className="text-emerald-300 font-medium text-sm xs:text-base sm:text-lg">
                  Complete
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom CSS for extra small screens */}
      <style jsx>{`
        @media (max-width: 280px) {
          .xs\\:text-base {
            font-size: 0.875rem;
          }
          .xs\\:px-4 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          .xs\\:py-3 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default GuidelinesSection;
