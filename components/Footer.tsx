
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden" role="contentinfo">
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      {/* HIGH-IMPACT PRE-FOOTER REBATE CTA */}
      <div className="relative z-10 border-y border-white/5 bg-slate-900/50">
        {/* Aurora Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-3 bg-blue-600/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_#3b82f6]"></span>
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Enbridge Approved Energy Portal</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 leading-none">
                Ready for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">$7,100 Energy Rebate?</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 font-bold max-w-2xl">
                Mississauga homeowners are saving <span className="text-white">40% on annual heating costs</span>. Our elite dispatch team handles 100% of the government paperwork.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <Link 
                to="/rebates" 
                className="group relative bg-blue-600 hover:bg-blue-500 text-white px-12 py-7 rounded-[24px] font-black text-xl uppercase tracking-widest transition-all text-center shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:-translate-y-2 active:scale-95 border border-blue-400/30 overflow-hidden"
              >
                <span className="relative z-10">Check Eligibility</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
              <a 
                href="tel:4164101744" 
                className="bg-slate-800 hover:bg-slate-700 text-white px-12 py-7 rounded-[24px] font-black text-xl uppercase tracking-widest transition-all text-center border border-slate-700 hover:-translate-y-2 active:scale-95 shadow-2xl"
              >
                Call Dispatch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16">
          
          {/* Brand Identity Section */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-transform group-hover:scale-110">
                H
              </div>
              <div>
                <h2 className="text-xl font-black text-white leading-tight tracking-tight">Home Renovation</h2>
                <p className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold">Depot • GTA Experts</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed font-semibold text-slate-400 max-w-sm">
              The Greater Toronto Area's premier HVAC engineering firm. Specializing in high-efficiency hybrid systems, precision diagnostics, and government rebate maximization for over 20 years.
            </p>
            <div className="flex space-x-3" aria-label="Social Media Links">
              {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition-all duration-300"
                  aria-label={`Follow us on ${social}`}
                >
                  <span className="text-[10px] font-black">{social.substring(0, 2).toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Nav */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-[11px] font-black uppercase tracking-[0.25em] mb-8 border-l-2 border-blue-600 pl-4">Services</h3>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Hybrid Heat Pumps</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">AC Installation</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Furnace Repair</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Duct Cleaning</Link></li>
              <li><Link to="/rebates" className="text-slate-400 hover:text-white transition-colors">Rebate Center</Link></li>
            </ul>
          </div>

          {/* Support & Company */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-[11px] font-black uppercase tracking-[0.25em] mb-8 border-l-2 border-blue-600 pl-4">Resources</h3>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/faq" className="text-slate-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/warranty" className="text-slate-400 hover:text-white transition-colors">Warranty</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Legacy</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Service Request</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact & Status Card */}
          <div className="lg:col-span-4 bg-slate-900/50 p-8 rounded-[32px] border border-slate-800 shadow-2xl backdrop-blur-md">
            <h3 className="text-white text-[11px] font-black uppercase tracking-[0.25em] mb-6">Mississauga Hub</h3>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Direct Emergency Dispatch</p>
                <a href="tel:4164101744" className="text-3xl font-black text-white hover:text-blue-500 transition-colors block tracking-tighter">
                  (416) 410-1744
                </a>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <div>
                   <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-0.5">System Health</p>
                   <p className="text-blue-400 text-xs font-black">AI MONITORING ACTIVE</p>
                </div>
                <div className="flex space-x-1">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-1 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Trust Row */}
        <div className="mt-20 pt-10 border-t border-slate-900 flex flex-wrap items-center justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
           <div className="flex items-center space-x-2">
             <span className="text-2xl">🛡️</span>
             <span className="text-[10px] font-black uppercase tracking-widest text-white">TSSA Certified</span>
           </div>
           <div className="flex items-center space-x-2">
             <span className="text-2xl">⭐</span>
             <span className="text-[10px] font-black uppercase tracking-widest text-white">BBB A+ Rated</span>
           </div>
           <div className="flex items-center space-x-2">
             <span className="text-2xl">⚡</span>
             <span className="text-[10px] font-black uppercase tracking-widest text-white">EnergyStar Partner</span>
           </div>
           <div className="flex items-center space-x-2">
             <span className="text-2xl">🏫</span>
             <span className="text-[10px] font-black uppercase tracking-widest text-white">HRAI Member</span>
           </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center text-[10px] font-black text-slate-600 tracking-[0.1em]">
          <p className="uppercase mb-4 md:mb-0">© {new Date().getFullYear()} CANADA’S HOME RENOVATION DEPOT. MASTER HVAC LICENSE #763321.</p>
          <div className="flex items-center space-x-8 uppercase">
            <Link to="/privacy" className="hover:text-blue-500 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-blue-500 transition-colors">Terms</Link>
            <Link to="/warranty" className="hover:text-blue-500 transition-colors">Warranty Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
