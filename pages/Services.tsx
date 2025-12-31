
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceProp {
  title: string;
  description: string;
  icon: string;
  tssa: boolean;
  specs: string[];
  performance: string;
  size: 'large' | 'small';
  availability: string;
}

const services: ServiceProp[] = [
  {
    title: 'Hybrid Heat Pumps',
    description: 'The definitive future of GTA home comfort. Cold-climate inverter technology that qualifies for maximum $7,100 Enbridge rebates.',
    icon: '🔋',
    tssa: true,
    performance: 'HSPF2: 11.5',
    specs: ['Operation to -30°C', 'Variable Speed Inverter', 'Silent-Run Technology'],
    size: 'large',
    availability: '3 Units in Stock'
  },
  {
    title: 'High-Efficiency Furnaces',
    description: 'Precision-engineered gas heating systems with up to 99% AFUE ratings for the harshest Ontario winters.',
    icon: '🔥',
    tssa: true,
    performance: 'AFUE: 99%',
    specs: ['Modulating Gas Valve', 'Self-Diagnostic Board', 'Ultra-Low NOx'],
    size: 'large',
    availability: '2 Crews Nearby'
  },
  {
    title: 'Elite AC Systems',
    description: 'Advanced central cooling with ultra-quiet operation and precision humidity control for summer peaks.',
    icon: '❄️',
    tssa: true,
    performance: 'SEER2: 22.0',
    specs: ['Corrosion-Resistant Coil', 'Smart-Home Sync', '2-Stage Cooling'],
    size: 'small',
    availability: 'Next Day Install'
  },
  {
    title: 'Smart Air Filtration',
    description: 'Hospital-grade HEPA and UV-C sterilization systems designed for Toronto allergy seasons.',
    icon: '🍃',
    tssa: false,
    performance: 'MERV: 16',
    specs: ['99.9% Pathogen Kill', 'Carbon Odor Filter', 'IAQ Monitoring'],
    size: 'small',
    availability: 'Active Monitoring'
  },
  {
    title: 'Tankless Water Tech',
    description: 'Infinite hot water on demand with compact, wall-mounted high-output gas technology.',
    icon: '🚰',
    tssa: true,
    performance: 'UEF: 0.96',
    specs: ['Commercial-Grade Copper', 'Scale-Reduction Tech', 'Space-Saving'],
    size: 'small',
    availability: 'Stocked in Mississauga'
  },
  {
    title: 'Smart IAQ Control',
    description: 'Advanced climate orchestration via Ecobee and Nest with AI-driven energy optimization.',
    icon: '📱',
    tssa: false,
    performance: 'Save 26% Avg',
    specs: ['Remote Triage Ready', 'Usage Analytics', 'Zonal Control'],
    size: 'small',
    availability: 'Cloud Sync Active'
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Dynamic Header Section */}
      <section className="bg-white border-b border-slate-200 pt-32 pb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 2px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-3 mb-6">
                <span className="h-[2px] w-12 bg-blue-600"></span>
                <span className="text-blue-600 text-sm font-black uppercase tracking-[0.3em]">Engineering Grade Comfort</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-[0.9]">
                Professional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">HVAC Solutions</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                Technical precision for Mississauga and the GTA. We don't just install equipment; we engineer long-term efficiency benchmarks for your home.
              </p>
            </div>
            <div className="bg-slate-900 p-8 rounded-[32px] border border-slate-800 shadow-2xl min-w-[300px]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Live Dispatch Status</span>
                <div className="flex items-center space-x-1.5">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                   <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Active</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold text-white">
                  <span>Mississauga Hub</span>
                  <span className="text-blue-400">4 Crews</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold text-white">
                  <span>Oakville/Burlington</span>
                  <span className="text-blue-400">2 Crews</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full mt-4 overflow-hidden">
                  <div className="h-full bg-blue-600 w-3/4 animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Bento Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`group relative rounded-[40px] overflow-hidden border border-slate-200 transition-all duration-500 hover:border-blue-300 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] ${
                service.size === 'large' ? 'lg:col-span-2' : ''
              } bg-white`}
            >
              {/* Card Header & Content */}
              <div className="p-10 h-full flex flex-col justify-between relative z-20">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl shadow-sm border border-slate-100 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-500">
                      {service.icon}
                    </div>
                    {service.tssa && (
                      <div className="bg-slate-900 text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-slate-700 flex items-center space-x-2">
                        <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                        <span>TSSA 2026-V</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600/5 px-4 py-2 rounded-xl border border-blue-100">
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-1">Perf Metrics</span>
                      <span className="text-sm font-black text-slate-900 font-mono">{service.performance}</span>
                    </div>
                    <div className="hidden sm:block">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Availability</span>
                      <span className="text-sm font-bold text-slate-600">{service.availability}</span>
                    </div>
                  </div>
                  <Link to="/contact" className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-all shadow-xl hover:scale-110 active:scale-95">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>

              {/* Technical Peek-A-Boo (Hover State) */}
              <div className="absolute inset-0 bg-slate-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30 flex flex-col justify-center p-12 translate-y-full group-hover:translate-y-0 transition-transform">
                <div className="flex items-center space-x-3 mb-8">
                  <span className="w-8 h-[1px] bg-blue-500"></span>
                  <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">Engineering Specs</span>
                </div>
                <ul className="space-y-6">
                  {service.specs.map((spec, sidx) => (
                    <li key={sidx} className="flex items-center text-white font-black text-xl tracking-tight animate-in fade-in slide-in-from-left-4" style={{ animationDelay: `${sidx * 100}ms` }}>
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-4 shadow-[0_0_10px_#3b82f6]"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="mt-12">
                   <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Priority Installation Window</span>
                   <p className="text-blue-400 font-black text-lg">Next 48-72 Hours Available</p>
                </div>
              </div>

              {/* Subtle Decorative Background Element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Global Triage Section */}
      <section className="max-w-7xl mx-auto px-4 pb-32">
        <div className="relative bg-slate-950 rounded-[48px] p-12 md:p-20 overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-600/30 px-4 py-2 rounded-full mb-8">
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em]">Priority Emergency Protocol Active</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                Critical HVAC <br />
                <span className="text-blue-400">Response Hub</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-lg">
                Facing a complete heating or cooling failure? Our Mississauga-based rapid dispatch team targets a sub-2 hour arrival for high-priority outages.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="tel:4164101744" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  (416) 410-1744
                </a>
                <Link to="/contact" className="bg-slate-800 hover:bg-slate-700 text-white px-10 py-5 rounded-2xl font-black text-xl border border-slate-700 transition-all flex items-center justify-center">
                  Open Triage Ticket
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-slate-900 border border-slate-800 rounded-[32px] p-8 shadow-inner">
                 <div className="flex items-center space-x-3 mb-8">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Active Incident Stream</span>
                 </div>
                 <div className="space-y-6">
                    {[
                      { area: 'Sherway Gardens', type: 'AC Diagnostic', status: 'En-Route' },
                      { area: 'Streetsville', type: 'Furnace Re-Ignite', status: 'In-Progress' },
                      { area: 'Oakville', type: 'Heat Pump Config', status: 'Priority' }
                    ].map((incident, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50">
                        <div>
                          <p className="text-[10px] text-blue-500 font-black uppercase">{incident.area}</p>
                          <p className="text-white font-bold">{incident.type}</p>
                        </div>
                        <span className="text-[9px] font-black text-slate-600 uppercase bg-slate-800 px-2 py-1 rounded">{incident.status}</span>
                      </div>
                    ))}
                 </div>
                 <div className="mt-8 text-center">
                    <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest">Avg Response Time: 74 Minutes</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Services;
