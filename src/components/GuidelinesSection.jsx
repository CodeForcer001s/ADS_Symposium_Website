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
  IconStar,
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

// Enhanced GuidelineCard component with black theme
const GuidelineCard = ({ item, index, isChecked, onToggle }) => {
  const priorityColors = {
    high: "from-red-500/15 to-orange-500/15 border-red-400/30 shadow-red-500/10",
    medium:
      "from-amber-500/15 to-yellow-500/15 border-amber-400/30 shadow-amber-500/10",
    low: "from-emerald-500/15 to-green-500/15 border-emerald-400/30 shadow-emerald-500/10",
  };

  const iconColors = {
    high: "from-red-400 to-orange-500 shadow-red-500/25",
    medium: "from-amber-400 to-yellow-500 shadow-amber-500/25",
    low: "from-emerald-400 to-green-500 shadow-emerald-500/25",
  };

  const priorityLabels = {
    high: "Critical",
    medium: "Important",
    low: "Good to Know",
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border ${
        priorityColors[item.priority]
      } p-8 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl cursor-pointer ${
        isChecked
          ? "ring-2 ring-emerald-400/50 bg-gradient-to-br from-emerald-900/20 to-green-900/20"
          : ""
      }`}
      onClick={() => onToggle(index)}
      style={{
        animationDelay: `${index * 150}ms`,
        boxShadow: isChecked
          ? "0 25px 50px -12px rgba(16, 185, 129, 0.25), 0 0 0 1px rgba(16, 185, 129, 0.1)"
          : `0 25px 50px -12px ${
              item.priority === "high"
                ? "rgba(239, 68, 68, 0.15)"
                : item.priority === "medium"
                ? "rgba(245, 158, 11, 0.15)"
                : "rgba(16, 185, 129, 0.15)"
            }`,
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Floating particles effect */}
      <div className="absolute -top-2 -right-2 h-16 w-16 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-75" />
      <div className="absolute -bottom-2 -left-2 h-12 w-12 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-75" />

      {/* Priority indicator with enhanced styling */}
      <div className="absolute top-6 right-6 flex items-center gap-2">
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full border ${
            item.priority === "high"
              ? "bg-red-500/10 border-red-400/30 text-red-300"
              : item.priority === "medium"
              ? "bg-amber-500/10 border-amber-400/30 text-amber-300"
              : "bg-emerald-500/10 border-emerald-400/30 text-emerald-300"
          }`}
        >
          {priorityLabels[item.priority]}
        </span>
        {item.priority === "high" && (
          <IconStar size={16} className="text-red-400 fill-red-400/30" />
        )}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-start gap-6">
        {/* Enhanced icon container */}
        <div className={`flex-shrink-0 relative group/icon`}>
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${
              iconColors[item.priority]
            } shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-3xl`}
          >
            <item.icon
              className="h-8 w-8 text-white drop-shadow-lg"
              stroke={1.5}
            />
          </div>
          {/* Icon glow effect */}
          <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
              iconColors[item.priority]
            } opacity-0 blur-xl transition-all duration-500 group-hover/icon:opacity-30 group-hover/icon:scale-150`}
          />
        </div>

        {/* Text content */}
        <div className="flex-1 min-w-0 pt-1">
          {/* Category badge with enhanced styling */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/60 border border-gray-700/50 mb-4 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 shadow-sm" />
            <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              {item.category}
            </span>
          </div>

          {/* Main text with enhanced typography */}
          <p className="text-gray-100 leading-relaxed text-lg font-medium tracking-wide">
            {item.text}
          </p>
        </div>

        {/* Enhanced checkbox indicator */}
        <div
          className={`flex-shrink-0 ml-4 transition-all duration-500 ${
            isChecked
              ? "opacity-100 scale-110"
              : "opacity-60 scale-90 group-hover:opacity-100 group-hover:scale-100"
          }`}
        >
          <div
            className={`h-8 w-8 rounded-xl border-2 flex items-center justify-center transition-all duration-500 ${
              isChecked
                ? "bg-gradient-to-br from-emerald-500 to-green-600 border-emerald-400 shadow-lg shadow-emerald-500/25"
                : "border-gray-600 hover:border-gray-500 bg-gray-800/50"
            }`}
          >
            {isChecked && (
              <IconCheck size={18} className="text-white drop-shadow-sm" />
            )}
          </div>
        </div>
      </div>

      {/* Enhanced hover glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 transition-all duration-700 group-hover:opacity-100" />

      {/* Completion celebration effect */}
      {isChecked && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 via-transparent to-green-500/5 animate-pulse" />
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
      className="relative w-full min-h-screen bg-black px-4 py-32 overflow-hidden"
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        {/* Primary floating orbs */}
        <div className="absolute top-1/4 left-1/6 h-96 w-96 rounded-full bg-gradient-to-r from-gray-800/20 to-gray-700/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 h-80 w-80 rounded-full bg-gradient-to-r from-gray-700/20 to-gray-600/20 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-gray-600/15 to-gray-800/15 blur-3xl animate-pulse delay-500" />

        {/* Accent colored orbs */}
        <div className="absolute top-3/4 left-1/4 h-48 w-48 rounded-full bg-gradient-to-r from-red-900/10 to-orange-900/10 blur-2xl animate-pulse delay-300" />
        <div className="absolute top-1/6 right-1/3 h-40 w-40 rounded-full bg-gradient-to-r from-amber-900/10 to-yellow-900/10 blur-2xl animate-pulse delay-700" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Enhanced header with dramatic styling */}
        <div className="text-center mb-20">
          {/* Status badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700/50 mb-12 backdrop-blur-xl shadow-2xl">
            <IconInfoCircle size={24} className="text-gray-300" />
            <span className="text-gray-200 font-bold text-lg tracking-wide">
              Important Information
            </span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-red-400 to-orange-500 animate-pulse" />
          </div>

          {/* Main title with enhanced gradient */}
          <h2 className="font-black text-7xl lg:text-8xl mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl">
              Guidelines to Know
            </span>
          </h2>

          <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
            Please review these important guidelines carefully to ensure a
            smooth and enjoyable event experience for everyone.
          </p>

          {/* Enhanced progress section */}
          <div className="max-w-lg mx-auto mb-12">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 font-semibold">
                Reading Progress
              </span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">
                  {completionPercentage}%
                </span>
                {completionPercentage === 100 && (
                  <div className="animate-bounce">🎉</div>
                )}
              </div>
            </div>
            <div className="h-3 bg-gray-800/80 rounded-full overflow-hidden border border-gray-700/50 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-500 transition-all duration-1000 shadow-lg rounded-full"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>{checkedItems.size} completed</span>
              <span>{guidelines.length - checkedItems.size} remaining</span>
            </div>
          </div>

          {/* Enhanced filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-2xl border transition-all duration-300 capitalize font-bold text-lg ${
                  filter === category
                    ? "bg-gradient-to-r from-gray-700 to-gray-800 border-gray-600 text-white shadow-xl shadow-gray-800/50 scale-105"
                    : "bg-gray-900/50 border-gray-700/50 text-gray-400 hover:bg-gray-800/60 hover:border-gray-600/60 hover:text-gray-300 hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Guidelines grid with enhanced spacing */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-20">
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

        {/* Enhanced summary section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-6 px-12 py-6 rounded-3xl bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-xl border border-gray-700/50 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                <IconCheck className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-xl">
                  {checkedItems.size} of {guidelines.length} guidelines reviewed
                </div>
                <div className="text-gray-400 text-sm">
                  {completionPercentage === 100
                    ? "All set for the event!"
                    : "Keep going, you're doing great!"}
                </div>
              </div>
            </div>

            {completionPercentage === 100 && (
              <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30 animate-pulse">
                <span className="text-emerald-300 font-bold text-lg">
                  Complete! 🎉
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidelinesSection;
