
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section: Engineered for High-Authority & Maximum Impact */}
      <section 
        className="relative min-h-[850px] flex items-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: 'url("https://i.ibb.co/qFPVRjh7/gemini-2-5-flash-image-preview-nano-banana-a-Replace-the-current.png")' }}
      >
        {/* Lighter Scrim: Making the background image brighter and more welcoming */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-slate-900/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[65%] lg:w-[60%] py-12">
              {/* Dispatch Badge: High-Visibility Orange */}
              <div className="inline-flex items-center space-x-2 bg-orange-600 border border-orange-400 px-4 py-2 rounded-full mb-8 shadow-[0_0_20px_rgba(234,88,12,0.6)] animate-in fade-in slide-in-from-left-4 duration-700">
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Mississauga Dispatch Active</span>
              </div>

              {/* Heading: High-Contrast White with Brilliant Blue Accent */}
              <h1 className="text-5xl md:text-7xl lg:text-[84px] font-black text-white leading-[0.95] mb-8 tracking-tighter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
                GTA's Trusted <br />
                <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.7)]">Home Comfort</span> <br />
                Experts
              </h1>
              
              {/* Subtext: High Readability White/Grey */}
              <p className="text-lg md:text-2xl text-white mb-12 font-semibold max-w-xl leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                Certified TSSA technicians providing elite furnace, AC, and heat pump solutions with 24/7 priority emergency support for your peace of mind.
              </p>
              
              {/* CTA Group: Modern Elevation */}
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link 
                  to="/rebates" 
                  className="group w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black shadow-[0_20px_50px_-15px_rgba(37,99,235,0.6)] transition-all transform hover:-translate-y-1 active:scale-95 text-center text-lg whitespace-nowrap"
                >
                  Claim Your $7,100 Rebate
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 px-10 py-5 rounded-2xl font-black shadow-[0_20px_40px_-15px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 text-center text-lg whitespace-nowrap border-2 border-white"
                >
                  Request a Free Quote
                </Link>
              </div>

              {/* Enhanced Verified Authority Badges */}
              <div className="mt-16 flex flex-wrap items-center gap-6">
                {/* TSSA Badge */}
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-2xl shadow-2xl hover:bg-white/20 transition-all cursor-default group transform hover:scale-105">
                  <div className="bg-blue-600 rounded-lg p-1.5 shadow-lg shadow-blue-600/30 group-hover:bg-blue-500 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white text-[13px] font-black uppercase tracking-[0.15em] whitespace-nowrap drop-shadow-sm">TSSA Certified</span>
                </div>

                {/* BBB Badge */}
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-2xl shadow-2xl hover:bg-white/20 transition-all cursor-default group transform hover:scale-105">
                  <div className="bg-blue-400 rounded-lg p-1.5 shadow-lg shadow-blue-400/30 group-hover:bg-blue-300 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <span className="text-white text-[13px] font-black uppercase tracking-[0.15em] whitespace-nowrap drop-shadow-sm">A+ BBB Rated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element: Glowing Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Value Proposition: High-Authority pillars with background pattern */}
      <section className="relative py-32 overflow-hidden bg-white">
        {/* Technical Background Decor */}
        <div className="absolute inset-0 bg-slate-50/50 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-blue-600 text-sm font-black uppercase tracking-[0.3em] mb-4 block">Proven Excellence</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">The DEPOT Standard</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
              Providing high-authority HVAC services across the Greater Toronto Area with technical precision and unmatched expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Pillar 1: Trust */}
            <div className="group relative bg-white p-10 rounded-[40px] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 transform hover:-translate-y-3">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-blue-600 transition-all duration-500 group-hover:w-1/2 rounded-full mb-[-3px]"></div>
              
              <div className="relative w-20 h-20 mb-8">
                <div className="absolute inset-0 bg-blue-600/10 rounded-3xl animate-pulse group-hover:scale-110 transition-transform"></div>
                <div className="absolute inset-2 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 transition-all group-hover:rotate-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
              </div>

              <h3 className="text-2xl font-black mb-4 text-slate-900">Ultimate Trust</h3>
              <p className="text-slate-500 leading-relaxed font-medium mb-8">
                Fully licensed, TSSA compliant, and highly rated by GTA homeowners. Your family's safety is our absolute priority.
              </p>
              
              <ul className="space-y-3 mb-4">
                {['TSSA Certified Technicians', 'Full Liability Insurance', 'Licensed Gas Fitters'].map((item) => (
                  <li key={item} className="flex items-center text-sm font-bold text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center mr-3 text-[10px]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 2: Expertise */}
            <div className="group relative bg-white p-10 rounded-[40px] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 transform hover:-translate-y-3">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-blue-600 transition-all duration-500 group-hover:w-1/2 rounded-full mb-[-3px]"></div>
              
              <div className="relative w-20 h-20 mb-8">
                <div className="absolute inset-0 bg-blue-600/10 rounded-3xl animate-pulse group-hover:scale-110 transition-transform"></div>
                <div className="absolute inset-2 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 transition-all group-hover:rotate-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
              </div>

              <h3 className="text-2xl font-black mb-4 text-slate-900">Elite Engineering</h3>
              <p className="text-slate-500 leading-relaxed font-medium mb-8">
                Our technicians undergo continuous factory training on the latest high-efficiency heat pump and inverter technologies.
              </p>

              <ul className="space-y-3 mb-4">
                {['Heat Pump Specialists', 'Custom Ductwork Design', 'Precision Load Balancing'].map((item) => (
                  <li key={item} className="flex items-center text-sm font-bold text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center mr-3 text-[10px]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 3: Local Focus */}
            <div className="group relative bg-white p-10 rounded-[40px] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 transform hover:-translate-y-3">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-blue-600 transition-all duration-500 group-hover:w-1/2 rounded-full mb-[-3px]"></div>
              
              <div className="relative w-20 h-20 mb-8">
                <div className="absolute inset-0 bg-blue-600/10 rounded-3xl animate-pulse group-hover:scale-110 transition-transform"></div>
                <div className="absolute inset-2 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 transition-all group-hover:rotate-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
              </div>

              <h3 className="text-2xl font-black mb-4 text-slate-900">Local Response</h3>
              <p className="text-slate-500 leading-relaxed font-medium mb-8">
                Centrally located in Mississauga, our dispatch hub serves Oakville, Toronto, and Brampton with lightning response.
              </p>

              <ul className="space-y-3 mb-4">
                {['2-Hour Dispatch Goal', 'Local Parts Inventory', 'Community Trust Network'].map((item) => (
                  <li key={item} className="flex items-center text-sm font-bold text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center mr-3 text-[10px]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link to="/contact" className="inline-flex items-center text-blue-600 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform group">
              See Our Installation Process
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="font-black text-2xl text-slate-500 tracking-tighter">TSSA CERTIFIED</div>
          <div className="font-black text-2xl text-slate-500 tracking-tighter">ENBRIDGE PARTNER</div>
          <div className="font-black text-2xl text-slate-500 tracking-tighter">HRAI MEMBER</div>
          <div className="font-black text-2xl text-slate-500 tracking-tighter">BBB ACCREDITED</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
