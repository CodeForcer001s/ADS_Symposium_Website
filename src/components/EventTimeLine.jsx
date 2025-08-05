import React from 'react';
import { Award, Code, DoorOpen, Ghost, BarChart3, Globe, MessageSquare, UtensilsCrossed, Coffee, LogOut } from 'lucide-react';

const eventsData = [
  { id: 'inaug', title: 'Inauguration', icon: DoorOpen, grid: 'col-start-1 col-span-2', row: 2, color: 'bg-yellow-800' },
  { id: 'tea', title: 'Tea Break', icon: Coffee, grid: 'col-start-3 col-span-1', row: 2, color: 'bg-stone-600' },
  { id: 'break1', title: 'Break', icon: null, grid: 'col-start-6 col-span-1', row: 2, color: 'bg-gray-800' },
  { id: 'lunch', title: 'Lunch', icon: UtensilsCrossed, grid: 'col-start-9 col-span-2', row: 2, color: 'bg-amber-400' },
  { id: 'leave', title: 'Leave Campus', icon: LogOut, grid: 'col-start-15 col-span-1', row: 2, color: 'bg-gray-700' },
  { id: 'pef1', title: 'Prompt R1', icon: MessageSquare, grid: 'col-start-4 col-span-2', row: 3, color: 'bg-pink-900' },
  { id: 'cs1', title: 'CodeSync R1', icon: Code, grid: 'col-start-4 col-span-2', row: 4, color: 'bg-blue-900' },
  { id: 'hoh1', title: 'Hack or Haunt R1', icon: Ghost, grid: 'col-start-4 col-span-2', row: 5, color: 'bg-purple-900' },
  { id: 'df1', title: 'Data Flix R1', icon: BarChart3, grid: 'col-start-4 col-span-2', row: 6, color: 'bg-green-900' },
  { id: 'tv1', title: 'Techverse R1', icon: Globe, grid: 'col-start-4 col-span-2', row: 7, color: 'bg-cyan-900' },
  { id: 'pef2', title: 'R2', icon: MessageSquare, grid: 'col-start-7 col-span-2', row: 3, color: 'bg-pink-800' },
  { id: 'cs2', title: 'R2', icon: Code, grid: 'col-start-7 col-span-2', row: 4, color: 'bg-blue-800' },
  { id: 'hoh2', title: 'R2', icon: Ghost, grid: 'col-start-7 col-span-2', row: 5, color: 'bg-purple-800' },
  { id: 'df2', title: 'R2', icon: BarChart3, grid: 'col-start-7 col-span-2', row: 6, color: 'bg-green-800' },
  { id: 'tv2', title: 'R2', icon: Globe, grid: 'col-start-7 col-span-2', row: 7, color: 'bg-cyan-800' },
  { id: 'pef3', title: 'Final', icon: MessageSquare, grid: 'col-start-11 col-span-2', row: 3, color: 'bg-pink-700' },
  { id: 'cs3', title: 'Final', icon: Code, grid: 'col-start-11 col-span-2', row: 4, color: 'bg-blue-700' },
  { id: 'hoh3', title: 'Final', icon: Ghost, grid: 'col-start-11 col-span-2', row: 5, color: 'bg-purple-700' },
  { id: 'df3', title: 'Final', icon: BarChart3, grid: 'col-start-11 col-span-2', row: 6, color: 'bg-green-700' },
  { id: 'tv3', title: 'Final', icon: Globe, grid: 'col-start-11 col-span-2', row: 7, color: 'bg-cyan-700' },
];

const EventBlock = ({ event }) => {
  const { title, icon: Icon, grid, row, color } = event;
  return (
    <div 
      className={`flex flex-col justify-center items-center text-center p-2 rounded-lg border-2 border-gray-600 text-white text-xs font-semibold bg-gray-800 shadow-md ${grid} ${color}`}
      style={{ gridRowStart: row }}
    >
      {Icon && <Icon className="w-4 h-4 mb-1" />}
      <span className="truncate w-full">{title}</span>
    </div>
  );
};

const EventTimeline = () => {
  const timeSlots = Array.from({ length: 15 }, (_, i) => {
    const totalMinutes = 8 * 60 + i * 30;
    const hour24 = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;
    const hour12 = hour24 >= 13 ? hour24 - 12 : (hour24 === 0 ? 12 : hour24);
    return `${hour12}:${minute === 0 ? '00' : minute}`;
  });
  
  return (
    <section className="w-full p-16 bg-black border-t border-white">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-serif text-white mb-4">Event Timeline</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">A compact overview of the day's proceedings.</p>
      </div>
      <div className="max-w-7xl mx-auto rounded-2xl border-2 border-gray-600 bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 shadow-2xl">
        <div className="grid grid-cols-15 gap-2 p-4 bg-gray-900 rounded-xl border border-gray-700" style={{gridTemplateRows: 'repeat(7, minmax(0, 1fr))'}}>
          {timeSlots.map((time, i) => (
            <div key={time} className={`text-center text-xs text-gray-300 p-2 border-r border-gray-600 col-start-${i+1} row-start-1 bg-gray-800 rounded-sm`}>{time}</div>
          ))}
          {eventsData.map((event) => <EventBlock key={event.id} event={event} />)}
          <div className="flex flex-col justify-center items-center text-center p-4 rounded-lg bg-amber-500 text-black border-2 border-amber-400 shadow-lg col-start-13 col-span-2 row-start-2 row-span-6">
            <Award className="w-10 h-10 mb-2" />
            <h3 className="text-xl font-serif font-bold">Results</h3>
            <p className="text-sm font-semibold">2:30 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;