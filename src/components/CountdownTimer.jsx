import React, { useState, useEffect } from 'react';

// A reusable component for each time segment (Days, Hours, etc.)
const TimeSegment = ({ value, label }) => (
    <div className="flex flex-col items-center">
        {/* --- MODIFIED FONT and SIZE for the number --- */}
        <span className="font-sans text-4xl md:text-6xl font-semibold text-copy">
            {String(value).padStart(2, '0')}
        </span>
        <span className="mt-1 text-xs font-sans tracking-widest uppercase text-copy-light">
            {label}
        </span>
    </div>
);

const CountdownTimer = ({ targetDate }) => {
    // A function to calculate the time left until the target date
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    // State to hold the calculated time left
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // useEffect hook to set up a one-second interval
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(timer);
    }, [targetDate]);

    // Check if the timer has finished
    const isTimerFinished = !Object.keys(timeLeft).length;

    if (isTimerFinished) {
        return (
            <div className="text-center">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">The Event is Live!</h2>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center p-8 gap-3 md:gap-6">
            <TimeSegment value={timeLeft.days} label="Days" />
            <span className="font-sans text-4xl md:text-5xl text-copy-light pb-6">:</span>
            <TimeSegment value={timeLeft.hours} label="Hours" />
            <span className="font-sans text-4xl md:text-5xl text-copy-light pb-6">:</span>
            <TimeSegment value={timeLeft.minutes} label="Minutes" />
            <span className="font-sans text-4xl md:text-5xl text-copy-light pb-6">:</span>
            <TimeSegment value={timeLeft.seconds} label="Seconds" />
        </div>
    );
};

export default CountdownTimer;