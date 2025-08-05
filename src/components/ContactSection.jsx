import React from "react";
import {
  IconPhone,
  IconBus,
  IconMapPin,
  IconBrandInstagram,
  IconMail,
  IconUsers,
  IconUser,
} from "@tabler/icons-react";
import balaImg from "../assets/balaji-2.jpg";
import yuvaImg from "../assets/yuvashree.jpg";
// Updated data with profile images
const staffCoordinators = [
  { name: "Mrs J Gold Beulah Patturose", phone: "9788123607" },
  { name: "Mr. S. Abilash", phone: "8078351663" },
  { name: "Mrs Shanthakumari", phone: "9486948611" },
];

const studentCoordinators = [
  {
    name: "P Balaji",
    phone: "9345579217",
    initials: "PB",
    gradientFrom: "from-blue-500",
    gradientTo: "to-purple-600",
    imageUrl: balaImg, // Replace with actual image
  },
  {
    name: "M P Yuvashree",
    phone: "9025564678",
    initials: "MY",
    gradientFrom: "from-pink-500",
    gradientTo: "to-rose-600",
    imageUrl: yuvaImg, // Replace with actual image
  },
];

// Profile Image Component
const ProfileImage = ({
  initials,
  gradientFrom,
  gradientTo,
  name,
  imageUrl,
}) => (
  <div className="relative">
    {imageUrl ? (
      <>
        <img
          src={imageUrl}
          alt={name}
          className="h-16 w-16 rounded-full object-cover shadow-lg transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-xl"
        />
        {/* Glow effect on hover for image */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 opacity-0 blur-lg transition-all duration-300 group-hover/item:opacity-50 group-hover/item:scale-150" />
      </>
    ) : (
      <>
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} shadow-lg transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-xl`}
        >
          <span className="text-white font-bold text-lg">{initials}</span>
        </div>
        {/* Glow effect on hover for initials */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 blur-lg transition-all duration-300 group-hover/item:opacity-30 group-hover/item:scale-150`}
        />
      </>
    )}
  </div>
);

// Enhanced CoordinatorCard with modern glassmorphism design
const CoordinatorCard = ({
  title,
  coordinators,
  icon: Icon,
  showProfileImages = false,
}) => (
  <div className="group relative overflow-hidden rounded-2xl bg-black p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    {/* Content */}
    <div className="relative z-10">
      {/* Header with icon */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="font-bold text-2xl text-white/90 tracking-wide">
          {title}
        </h3>
      </div>

      {/* Coordinators list */}
      <div className="space-y-4">
        {coordinators.map((coord, index) => (
          <div key={coord.name} className="group/item relative">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-amber-400/30">
              {/* Profile section with image (for students) or without (for staff) */}
              <div className="flex items-center gap-4 flex-1">
                {showProfileImages && coord.initials && (
                  <ProfileImage
                    initials={coord.initials}
                    gradientFrom={coord.gradientFrom}
                    gradientTo={coord.gradientTo}
                    name={coord.name}
                    imageUrl={coord.imageUrl}
                  />
                )}
                <div className="flex-1">
                  <span className="text-white/80 font-medium text-lg block">
                    {coord.name}
                  </span>
                  {showProfileImages && (
                    <span className="text-white/50 text-sm">
                      Student Coordinator
                    </span>
                  )}
                </div>
              </div>

              {/* Phone number */}
              <div className="flex justify-end">
                <a
                  href={`tel:${coord.phone}`}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 text-amber-300 transition-all duration-300 hover:from-amber-500/30 hover:to-orange-500/30 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-500/20 group-hover/item:scale-105"
                >
                  <IconPhone size={18} />
                  <span className="font-semibold">{coord.phone}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-500/10 blur-xl transition-all duration-500 group-hover:scale-150" />
    <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br from-orange-500/10 to-red-500/10 blur-xl transition-all duration-500 group-hover:scale-150" />
  </div>
);

// Enhanced QuickLink component
const QuickLink = ({ href, icon: Icon, label, description }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/20"
    aria-label={label}
  >
    {/* Icon container with animated background */}
    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-amber-500/50">
      <Icon
        className="h-10 w-10 text-white transition-transform duration-500 group-hover:scale-110"
        stroke={1.5}
      />

      {/* Pulse animation on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 opacity-0 transition-all duration-500 group-hover:opacity-30 group-hover:scale-150 group-hover:blur-xl" />
    </div>

    {/* Text content */}
    <div className="text-center">
      <span className="block font-bold text-xl text-white/90 transition-colors duration-300 group-hover:text-amber-300">
        {label}
      </span>
      {description && (
        <span className="block text-sm text-white/60 mt-1 transition-colors duration-300 group-hover:text-white/80">
          {description}
        </span>
      )}
    </div>

    {/* Decorative glow */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </a>
);

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-24 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-amber-400/5 to-yellow-500/5 blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main header with enhanced typography */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 mb-8">
            <IconMail size={20} className="text-amber-400" />
            <span className="text-amber-300 font-semibold">Get In Touch</span>
          </div>

          <h2 className="font-bold text-6xl lg:text-7xl bg-gradient-to-r from-white via-amber-200 to-orange-300 bg-clip-text text-transparent mb-6 tracking-tight">
            Contact Us
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Ready to connect? Reach out to our coordinators or find us through
            our various channels.
          </p>
        </div>

        {/* Coordinator cards with improved grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <CoordinatorCard
            title="Staff Coordinators"
            coordinators={staffCoordinators}
            icon={IconUsers}
            showProfileImages={false}
          />
          <CoordinatorCard
            title="Student Coordinators"
            coordinators={studentCoordinators}
            icon={IconUser}
            showProfileImages={true}
          />
        </div>

        {/* Enhanced quick links section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white/90 mb-4">Quick Links</h3>
          <p className="text-white/60 mb-12 text-lg">
            Access important information and connect with us
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <QuickLink
              href="https://conoscenza2024.stjosephstechnology.ac.in/incognito/img/transport.pdf"
              icon={IconBus}
              label="Bus Routes"
              description="Transportation info"
            />

            <QuickLink
              href="https://www.google.com/maps/place/St.Joseph's+Institute+of+Technology/@12.8698794,80.2158547,17z/data=!4m6!3m5!1s0x3a525bbb618d3ea9:0x90b3767be093efaa!8m2!3d12.8698794!4d80.2184296!16s%2Fm%2F0cr5_zr?authuser=0&coh=219816&entry=tts&g_ep=EgoyMDI0MDgxMS4wKgBIAVAD"
              icon={IconMapPin}
              label="Location"
              description="Find us on maps"
            />

            <QuickLink
              href="https://www.instagram.com/aizen_2k25?utm_source=qr&igsh=MTV4cjZ2ajR4emFnNQ=="
              icon={IconBrandInstagram}
              label="Instagram"
              description="Follow our updates"
            />
          </div>
        </div>

        {/* Additional contact info footer */}
        <div className="mt-20 pt-12 border-t border-white/10 text-center">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-white/90 mb-6">
              St. Joseph's Institute of Technology
            </h4>
            <p className="text-white/70 text-lg leading-relaxed">
              Join us for an amazing experience filled with innovation,
              learning, and networking opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
