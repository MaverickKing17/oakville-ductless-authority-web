
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Page Header */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <span className="h-[2px] w-12 bg-blue-600"></span>
            <span className="text-blue-600 text-sm font-black uppercase tracking-[0.3em]">Engineering Grade Comfort</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
            ELITE HVAC <br />
            SOLUTIONS
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            From cold-climate heat pumps to precision gas diagnostics, we provide the highest technical standard in the Greater Toronto Area.
          </p>
        </div>
      </section>

      {/* EMERGENCY RESPONSE HUB: AS SEEN IN SCREENSHOT */}
      <section className="max-w-7xl mx-auto px-4 pb-32">
        <div className="relative bg-[#050B1C] rounded-[48px] p-8 md:p-16 overflow-hidden shadow-2xl border border-white/5">
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 bg-red-950/40 border border-red-900/40 px-5 py-2.5 rounded-full">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_red]"></span>
                <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em]">Priority Emergency Protocol Active</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                Critical HVAC <br />
                <span className="text-blue-400">Response Hub</span>
              </h2>
              
              <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-lg">
                Facing a complete heating or cooling failure? Our Mississauga-based rapid dispatch team targets a sub-2 hour arrival for high-priority outages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="tel:4164101744" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-6 rounded-2xl font-black text-xl shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center space-x-3 group">
                   <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                   <span>(416) 410-1744</span>
                </a>
                <Link to="/contact" className="bg-slate-900/80 hover:bg-slate-800 text-white px-10 py-6 rounded-2xl font-black text-xl border border-slate-800 transition-all text-center">
                  Open Triage Ticket
                </Link>
              </div>
            </div>

            {/* Right: Incident Stream Dashboard */}
            <div className="bg-[#0A1128] rounded-[40px] p-10 border border-slate-800 shadow-inner overflow-hidden relative group">
               <div className="flex items-center space-x-3 mb-10">
                  <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse"></div>
                  <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">Active Incident Stream</span>
               </div>
               
               <div className="space-y-5 relative">
                  {[
                    { loc: 'Sherway Gardens', type: 'AC Diagnostic', status: 'En-Route' },
                    { loc: 'Streetsville', type: 'Furnace Re-Ignite', status: 'In-Progress' },
                    { loc: 'Oakville', type: 'Heat Pump Config', status: 'Priority' }
                  ].map((inc, i) => (
                    <div key={i} className="bg-slate-950/50 border border-white/5 p-5 rounded-2xl flex items-center justify-between group/card hover:bg-slate-900 transition-colors">
                      <div>
                        <p className="text-[9px] font-black text-blue-500 uppercase tracking-widest mb-1">{inc.loc}</p>
                        <p className="text-white font-black text-lg tracking-tight">{inc.type}</p>
                      </div>
                      <span className="text-[8px] font-black text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 uppercase tracking-widest group-hover/card:text-white transition-colors">
                        {inc.status}
                      </span>
                    </div>
                  ))}
               </div>
               
               <div className="mt-12 text-center">
                 <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">Avg Response Time: 74 Minutes</p>
               </div>

               {/* Grid Pattern Overlay */}
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Services List */}
      <section className="max-w-7xl mx-auto px-4 py-24 border-t border-slate-100">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {[
             { title: 'Cold-Climate Heat Pumps', desc: 'Hybrid systems engineered for Ontario winters down to -30°C. Authorized Enbridge provider.' },
             { title: 'Ductless Mini-Splits', desc: 'Precision zoning for modern condos and heritage homes in the GTA.' },
             { title: 'Indoor Air Quality', desc: 'Hospital-grade HEPA & UV-C sterilization for comprehensive protection.' },
             { title: 'Commercial Service', desc: 'Rapid response for multi-unit dwellings and light commercial buildings.' }
           ].map((s, i) => (
             <div key={i} className="flex gap-8 group">
               <div className="w-2 bg-blue-600 group-hover:w-4 transition-all duration-300 rounded-full"></div>
               <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tighter">{s.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{s.desc}</p>
               </div>
             </div>
           ))}
         </div>
      </section>
    </div>
  );
};

export default Services;
