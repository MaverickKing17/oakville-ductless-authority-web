
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Rebate Center', path: '/rebates' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Larger & Bolder */}
          <Link to="/" className="flex items-center space-x-4 group" aria-label="Home Renovation Depot - Home">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl transition-transform group-hover:rotate-6 group-hover:scale-110" aria-hidden="true">
              H
            </div>
            <div>
              <h1 className="text-2xl font-black text-gray-900 leading-none tracking-tighter">Home Renovation</h1>
              <p className="text-[11px] uppercase tracking-[0.3em] text-blue-600 font-black mt-1">Depot • GTA Experts</p>
            </div>
          </Link>

          {/* Desktop Navigation - Larger Text */}
          <nav className="hidden xl:flex space-x-10" aria-label="Primary Navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                className={`text-sm font-black uppercase tracking-widest transition-all hover:text-blue-600 px-2 py-1 relative group ${
                  location.pathname === item.path ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </nav>

          {/* Emergency Call Button - High Impact */}
          <div className="flex items-center">
            <a
              href="tel:4164101744"
              aria-label="Call Emergency Service at 4 1 6. 4 1 0. 1 7 4 4"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-black text-sm shadow-[0_20px_40px_-10px_rgba(220,38,38,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center space-x-3 focus:ring-4 focus:ring-red-200 outline-none"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="uppercase tracking-widest">Emergency: (416) 410-1744</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
