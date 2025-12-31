
import React, { useState, useEffect } from 'react';

const WeatherBanner: React.FC = () => {
  const [isCold, setIsCold] = useState<boolean>(false);
  const [temperature, setTemperature] = useState<number | null>(null);

  useEffect(() => {
    // In a real app, you'd use navigator.geolocation + a weather API.
    // Simulating a "Cold Front" for Toronto winter relevance.
    const mockCheckWeather = () => {
      // For demonstration, we'll set it to -5°C if it's currently "night" in local time
      // or just randomly simulate for the UI demo purposes.
      const currentTemp = -2; // Simulating cold weather in GTA
      setTemperature(currentTemp);
      if (currentTemp < 0) {
        setIsCold(true);
      }
    };

    mockCheckWeather();
  }, []);

  if (!isCold) return null;

  return (
    <div className="bg-red-700 text-white text-center py-2 px-4 font-bold text-sm flex items-center justify-center space-x-2 animate-pulse">
      <span>⚠️ HIGH DEMAND: Emergency Crews Standby (Current: {temperature}°C)</span>
      <button className="underline ml-4 text-xs font-normal">Book Priority Service</button>
    </div>
  );
};

export default WeatherBanner;
