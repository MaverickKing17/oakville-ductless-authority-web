
import React, { useState, useEffect } from 'react';

const WeatherBanner: React.FC = () => {
  const [isCold, setIsCold] = useState<boolean>(false);
  const [temperature, setTemperature] = useState<number | null>(null);

  useEffect(() => {
    const mockCheckWeather = () => {
      const currentTemp = -2;
      setTemperature(currentTemp);
      if (currentTemp < 0) {
        setIsCold(true);
      }
    };
    mockCheckWeather();
  }, []);

  if (!isCold) return null;

  return (
    <div 
      className="bg-red-700 text-white text-center py-2 px-4 font-bold text-sm flex items-center justify-center space-x-2 animate-pulse"
      role="status"
      aria-live="polite"
    >
      <span aria-hidden="true">⚠️</span>
      <span>HIGH DEMAND: Emergency Crews Standby (Current: {temperature}°C)</span>
      <button 
        className="underline ml-4 text-xs font-normal focus:ring-2 focus:ring-white rounded px-1 outline-none"
        aria-label="Book Priority Service due to cold weather"
      >
        Book Priority Service
      </button>
    </div>
  );
};

export default WeatherBanner;
