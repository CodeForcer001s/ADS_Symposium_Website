// src/components/events/EventPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Brain,
    Rocket,
    Code,
    Camera,
    Gamepad2,
    ChevronLeft,
    Timer,
    Trophy,
    Star
} from 'lucide-react';

const EventPage = () => {
    const { eventId } = useParams();
    const navigate = useNavigate();

    const eventDetails = {
        'brain-quest': {
            title: 'AI Brain Quest',
            subtitle: 'The Ultimate AI Knowledge Championship',
            icon: Brain,
            color: 'from-blue-600 to-blue-800',
            rules: [
                'Teams of 2-4 participants allowed',
                'Questions cover AI theory, machine learning, and current trends',
                'No external resources or devices permitted during the quiz',
                'Each round has a time limit of 15 minutes',
                'Scoring based on accuracy and speed'
            ],
            timeline: [
                { time: '9:00 AM', activity: 'Registration & Team Formation' },
                { time: '9:30 AM', activity: 'Round 1: AI Fundamentals' },
                { time: '10:00 AM', activity: 'Round 2: Machine Learning Deep Dive' },
                { time: '10:30 AM', activity: 'Final Round: Current AI Trends' },
                { time: '11:00 AM', activity: 'Results & Awards' }
            ],
            rounds: 3,
            organizers: [
                { name: 'Dr. Sarah Chen', role: 'Quiz Master', avatar: 'https://picsum.photos/100/100?random=1' },
                { name: 'Prof. Alan Turing', role: 'Technical Judge', avatar: 'https://picsum.photos/100/100?random=2' }
            ]
        },
        // ... (add other events like innovation-pitch, code-symphony, etc. here)
    };

    const event = eventDetails[eventId];
    if (!event) return <div className="text-center py-20 text-2xl">Event not found</div>;

    const Icon = event.icon;

    return (
        <div className="min-h-screen bg-background">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="fixed top-6 left-6 z-50 bg-surface/80 backdrop-blur-lg rounded-full p-3 border border-primary/20 hover:bg-primary/20 transition-all duration-300"
            >
                <ChevronLeft className="w-6 h-6 text-copy" />
            </button>

            {/* Hero Section */}
            <section className="h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-10`}></div>

                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <div className="mb-8">
                        <Icon className="w-32 h-32 text-primary mx-auto mb-6" />
                    </div>
                    <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary mb-6">{event.title}</h1>
                    <p className="text-2xl md:text-3xl text-copy-light mb-8">{event.subtitle}</p>
                    <div className="flex justify-center space-x-8 text-copy-light">
                        <div className="flex items-center space-x-2">
                            <Timer className="w-5 h-5" />
                            <span>4 Hours</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Trophy className="w-5 h-5" />
                            <span>{event.rounds} Round{event.rounds > 1 ? 's' : ''}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Star className="w-5 h-5" />
                            <span>Premium Event</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rules Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6">
                    <h2 className="font-serif text-4xl font-bold text-center text-primary mb-12">Competition Rules</h2>
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-background rounded-2xl p-8 border border-primary/20">
                            <ul className="space-y-4">
                                {event.rules.map((rule, i) => (
                                    <li key={i} className="flex items-start space-x-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-primary font-bold text-sm">{i + 1}</span>
                                        </div>
                                        <span className="text-copy leading-relaxed">{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <h2 className="font-serif text-4xl font-bold text-center text-primary mb-12">Event Timeline</h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {event.timeline.map((item, i) => (
                            <div key={i} className="flex items-center space-x-6 group">
                                <div className="w-20 text-right">
                                    <span className="text-primary font-bold">{item.time}</span>
                                </div>
                                <div className="w-4 h-4 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></div>
                                <div className="flex-1 bg-surface rounded-lg p-4 group-hover:bg-surface/80 transition-colors duration-300">
                                    <span className="text-copy">{item.activity}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Organizers Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6">
                    <h2 className="font-serif text-4xl font-bold text-center text-primary mb-12">Event Organizers</h2>
                    <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {event.organizers.map((organizer, i) => (
                            <div key={i} className="text-center group">
                                <div className="relative mb-6">
                                    <img
                                        src={organizer.avatar}
                                        alt={organizer.name}
                                        className="w-24 h-24 rounded-full mx-auto object-cover shadow-xl group-hover:shadow-2xl transition-all duration-300 border-4 border-primary/30"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-copy mb-2">{organizer.name}</h3>
                                <p className="text-copy-light">{organizer.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventPage;
