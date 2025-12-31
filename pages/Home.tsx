
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section: The Gold Standard */}
      <section 
        className="relative min-h-[100vh] flex items-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: 'url("https://i.ibb.co/qFPVRjh7/gemini-2-5-flash-image-preview-nano-banana-a-Replace-the-current.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-20">
          <div className="max-w-4xl">
            {/* Live Ops Badge */}
            <div className="inline-flex items-center space-x-3 bg-blue-600 border border-blue-400/30 px-6 py-3 rounded-2xl mb-10 shadow-[0_20px_40px_rgba(37,99,235,0.4)] animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse [animation-delay:-0.2s]"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse [animation-delay:-0.4s]"></div>
              </div>
              <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Mississauga Ops Center Active</span>
            </div>

            <h1 className="text-huge font-black text-white mb-10 tracking-tighter drop-shadow-2xl">
              GTA'S <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-100">ELITE CLIMATE</span> <br />
              ENGINEERS
            </h1>
            
            <p className="text-xl md:text-3xl text-slate-200 mb-14 font-bold max-w-2xl leading-[1.2] drop-shadow-md opacity-90">
              Engineering award-winning home comfort systems that cut bills by 40% while unlocking <span className="text-blue-400 font-black">$7,100</span> in government incentives.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/rebates" 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-12 py-7 rounded-[24px] font-black shadow-[0_30px_60px_-15px_rgba(37,99,235,0.6)] transition-all transform hover:-translate-y-2 active:scale-95 text-center text-xl uppercase tracking-widest border border-blue-400/30"
              >
                Get $7,100 Rebate
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-950 px-12 py-7 rounded-[24px] font-black shadow-[0_20px_50px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-2 active:scale-95 text-center text-xl uppercase tracking-widest border-2 border-transparent"
              >
                Free Quote
              </Link>
            </div>

            {/* Authority Metrics Row */}
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-10">
              {[
                { label: 'Licensed', val: 'TSSA CERTIFIED', icon: '🛡️' },
                { label: 'Rating', val: 'A+ BBB RATED', icon: '⭐' },
                { label: 'Trusted', val: '20+ YRS GTA', icon: '🏫' },
                { label: 'Emergency', val: '2HR ARRIVAL', icon: '⚡' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col space-y-1">
                  <span className="text-2xl mb-2">{item.icon}</span>
                  <p className="text-white font-black text-sm tracking-tight">{item.val}</p>
                  <p className="text-blue-400 text-[9px] font-black uppercase tracking-widest">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Bento Section */}
      <section className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Precision Services</p>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">High-Authority HVAC Engineering</h2>
            </div>
            <Link to="/services" className="group flex items-center space-x-3 text-slate-950 font-black uppercase tracking-widest text-sm border-b-2 border-slate-900 pb-2">
              <span>View All Capabilities</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: 'Hybrid Heat Pumps', desc: 'The #1 cold-climate solution for maximum GTA rebates.', icon: '🔋', color: 'bg-blue-600' },
               { title: 'Ultra-Efficiency AC', desc: 'Medical-grade cooling systems for high-performance homes.', icon: '❄️', color: 'bg-slate-900' },
               { title: 'Precision Furnaces', desc: '99% AFUE modulating gas tech for harsh Ontario winters.', icon: '🔥', color: 'bg-red-600' }
             ].map((s, i) => (
               <div key={i} className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
                 <div className={`w-20 h-20 ${s.color} rounded-3xl flex items-center justify-center text-4xl mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                   {s.icon}
                 </div>
                 <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{s.title}</h3>
                 <p className="text-slate-500 font-medium leading-relaxed mb-8">{s.desc}</p>
                 <Link to="/contact" className="inline-block text-blue-600 font-black uppercase tracking-widest text-xs hover:text-blue-800">Start Project &rarr;</Link>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
