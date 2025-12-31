
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WeatherBanner: React.FC = () => {
  const navigate = useNavigate();
  const [isCold, setIsCold] = useState<boolean>(false);
  const [temperature, setTemperature] = useState<number | null>(null);

  useEffect(() => {
    // Mocking a live weather feed for Mississauga
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
      className="bg-red-600 relative overflow-hidden h-12 md:h-10 border-b border-red-500 shadow-2xl flex items-center justify-center z-[100]"
      role="alert"
      aria-live="assertive"
    >
      {/* Moving Background Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_3s_infinite] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-center space-x-4 md:space-x-8 text-white">
        <div className="flex items-center space-x-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] whitespace-nowrap">
            High Demand Protocol: {temperature}°C in GTA
          </span>
        </div>
        
        <p className="hidden md:block text-xs font-bold opacity-90 tracking-tight">
          Emergency response teams are on standby for no-heat incidents.
        </p>

        <button 
          onClick={() => navigate('/contact')}
          className="bg-white text-red-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-red-50 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
          aria-label="Secure Priority Dispatch"
        >
          Book Priority Dispatch
        </button>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default WeatherBanner;
