
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section: Massive 2026 Impact */}
      <section 
        className="relative min-h-[950px] flex items-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?q=80&w=2070&auto=format&fit=crop")' }}
      >
        {/* Advanced Scrim for text pop */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col">
            <div className="max-w-4xl py-20">
              {/* Triage Badge */}
              <div className="inline-flex items-center space-x-3 bg-blue-600 border border-blue-400/30 px-6 py-3 rounded-2xl mb-12 shadow-2xl animate-in fade-in slide-in-from-left-8 duration-1000">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
                <span className="text-xs font-black text-white uppercase tracking-[0.4em]">Mississauga Ops Center Active</span>
              </div>

              {/* Massive Heading */}
              <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black text-white leading-[0.85] mb-12 tracking-tighter drop-shadow-2xl">
                GTA'S <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">ELITE CLIMATE</span> <br />
                ENGINEERS
              </h1>
              
              <p className="text-xl md:text-3xl text-slate-200 mb-16 font-bold max-w-2xl leading-tight drop-shadow-md">
                We engineer award-winning home comfort systems that cut bills by 40% while unlocking $7,100 in government incentives.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
                <Link 
                  to="/rebates" 
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-12 py-7 rounded-[24px] font-black shadow-[0_30px_60px_-15px_rgba(37,99,235,0.5)] transition-all transform hover:-translate-y-2 active:scale-95 text-center text-xl uppercase tracking-widest"
                >
                  Get $7,100 Rebate
                </Link>
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-12 py-7 rounded-[24px] font-black shadow-2xl transition-all transform hover:-translate-y-2 active:scale-95 text-center text-xl uppercase tracking-widest border border-white/20"
                >
                  Free Quote
                </Link>
              </div>

              {/* Authority Bar */}
              <div className="mt-24 flex flex-wrap items-center gap-10">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">🛡️</span>
                  <div>
                    <p className="text-white font-black text-lg leading-none">TSSA Certified</p>
                    <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Engineering Standard</p>
                  </div>
                </div>
                <div className="w-[1px] h-10 bg-white/10"></div>
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">🌟</span>
                  <div>
                    <p className="text-white font-black text-lg leading-none">A+ BBB Rated</p>
                    <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">20 Years GTA Trust</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Stats */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { label: 'Energy Savings', value: '40%+', color: 'text-emerald-500' },
            { label: 'Projected Rebate', value: '$7,100', color: 'text-blue-600' },
            { label: 'Dispatch Speed', value: '2 HRS', color: 'text-red-600' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-12 rounded-[48px] border border-slate-200 shadow-xl text-center group hover:scale-105 transition-transform duration-500">
              <p className="text-slate-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{stat.label}</p>
              <p className={`text-7xl font-black tracking-tighter ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
