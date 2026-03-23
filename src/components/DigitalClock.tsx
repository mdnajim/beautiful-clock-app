'use client';

import React, { useState, useEffect } from 'react';

interface TimeState {
  hours: number;
  minutes: number;
  seconds: number;
  day: string;
  date: string;
  fullDate: string;
}

export const DigitalClock: React.FC = () => {
  const [time, setTime] = useState<TimeState>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    day: '',
    date: '',
    fullDate: '',
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      const day = days[now.getDay()];
      const dateStr = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
      const fullDate = `${day}, ${dateStr}`;

      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
        day: day,
        date: dateStr,
        fullDate: fullDate,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="text-center">
        <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-mono tracking-wider">
          {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
        </div>
      </div>
      <div className="text-center">
        <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          {time.day}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {time.date}
        </p>
      </div>
    </div>
  );
};
