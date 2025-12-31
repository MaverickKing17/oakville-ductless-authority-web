
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
      className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 relative overflow-hidden h-16 md:h-14 border-b border-red-500 shadow-[0_10px_30px_rgba(220,38,38,0.3)] flex items-center justify-center z-[100]"
      role="alert"
      aria-live="assertive"
    >
      {/* High-Velocity Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between md:justify-center space-x-4 md:space-x-12 text-white relative z-10">
        <div className="flex items-center space-x-4">
          <div className="flex h-4 w-4 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-3">
            <span className="text-[12px] md:text-sm font-black uppercase tracking-[0.25em] whitespace-nowrap">
              HIGH DEMAND PROTOCOL: {temperature}°C GTA
            </span>
            <span className="hidden lg:inline-block w-[1px] h-4 bg-white/30"></span>
            <p className="hidden md:block text-sm font-black opacity-90 tracking-tight uppercase">
              Emergency Crews on Standby
            </p>
          </div>
        </div>

        <button 
          onClick={() => navigate('/contact')}
          className="bg-white text-red-700 px-6 py-2.5 rounded-full text-[12px] md:text-sm font-black uppercase tracking-widest hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(0,0,0,0.2)] border-2 border-transparent hover:border-white ring-4 ring-white/10"
          aria-label="Secure Priority Dispatch"
        >
          Book Priority Dispatch
        </button>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }
      `}</style>
    </div>
  );
};

export default WeatherBanner;
