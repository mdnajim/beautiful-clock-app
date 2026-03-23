import React, { useEffect, useState } from 'react';

const AnalogClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourRotation = (hours % 12) * 30 + minutes * 0.5; // 360/12 = 30
    const minuteRotation = minutes * 6 + seconds * 0.1; // 360/60 = 6
    const secondRotation = seconds * 6; // 360/60 = 6

    return (
        <div className="clock">
            <div className="hand hour-hand" style={{transform: `rotate(${hourRotation}deg)`}}></div>
            <div className="hand minute-hand" style={{transform: `rotate(${minuteRotation}deg)`}}></div>
            <div className="hand second-hand" style={{transform: `rotate(${secondRotation}deg)`}}></div>
        </div>
    );
};

export default AnalogClock;
