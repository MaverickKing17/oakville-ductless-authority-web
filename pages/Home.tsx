
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section: Enhanced with Screenshot Fidelity */}
      <section 
        className="relative min-h-[750px] flex items-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: 'url("https://i.ibb.co/qFPVRjh7/gemini-2-5-flash-image-preview-nano-banana-a-Replace-the-current.png")' }}
      >
        {/* Subtle radial overlay for improved text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col md:flex-row justify-end">
            <div className="w-full md:w-[55%] p-6 md:p-0">
              {/* Heading: Bold and Direct as per screenshot */}
              <h2 className="text-5xl md:text-[68px] font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                GTA's Trusted <span className="text-blue-600">Home Comfort</span> Experts
              </h2>
              
              {/* Subtext: Specific weight and color to match screenshot */}
              <p className="text-xl md:text-2xl text-gray-700 mb-12 font-medium max-w-xl leading-relaxed opacity-90">
                We provide professional furnace, AC, and heat pump solutions with guaranteed TSSA compliance and 24/7 emergency support.
              </p>
              
              {/* Buttons: Clean, rounded-2xl, and distinct shadows */}
              <div className="flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-6">
                <Link 
                  to="/rebates" 
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 text-center text-lg whitespace-nowrap"
                >
                  Claim Your $7,100 Rebate
                </Link>
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto bg-white border border-slate-100 hover:bg-slate-50 text-slate-900 px-10 py-5 rounded-2xl font-bold shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] transition-all transform hover:-translate-y-1 active:scale-95 text-center text-lg whitespace-nowrap"
                >
                  Request a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Rapid Response Badge with pulsate accent */}
        <div className="absolute bottom-12 left-4 md:left-12 flex items-center space-x-3">
          <div className="bg-blue-600 text-white px-7 py-4 rounded-2xl font-black shadow-2xl inline-flex items-center transition-all group cursor-default border border-blue-400/30">
            <span className="w-2.5 h-2.5 bg-white rounded-full mr-3 animate-pulse shadow-[0_0_8px_white]"></span>
            Rapid Response in Mississauga
          </div>
        </div>
      </section>

      {/* Value Proposition: High-Authority pillars with background pattern */}
      <section className="relative py-32 overflow-hidden">
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
              {/* Bottom Border Accent */}
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
