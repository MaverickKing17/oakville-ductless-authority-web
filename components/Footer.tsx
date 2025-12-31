
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Identity Section */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-transform group-hover:scale-110">
                H
              </div>
              <div>
                <h2 className="text-xl font-black text-white leading-tight tracking-tight">Home Renovation</h2>
                <p className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold">Depot • GTA Experts</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed font-semibold opacity-90 text-slate-400">
              Serving the Greater Toronto Area with award-winning HVAC solutions for over 20 years. 
              Trust, Expertise, and Local Care.
            </p>
            <div className="flex space-x-3" aria-label="Social Media Links">
              {['FB', 'IG', 'TW'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-[10px] font-black text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition-all duration-300"
                  aria-label={`Follow us on ${social}`}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Services & Support */}
          <nav aria-label="Support Navigation">
            <h3 className="text-white text-sm font-black uppercase tracking-[0.15em] mb-8 border-l-2 border-blue-600 pl-4">Support</h3>
            <ul className="space-y-4 text-[14px] font-bold">
              <li><Link to="/faq" className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 decoration-blue-500/0 hover:decoration-blue-500 underline underline-offset-4">FAQs</Link></li>
              <li><Link to="/warranty" className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 decoration-blue-500/0 hover:decoration-blue-500 underline underline-offset-4">Warranty Info</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 decoration-blue-500/0 hover:decoration-blue-500 underline underline-offset-4">Service Request</Link></li>
              <li><Link to="/rebates" className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 decoration-blue-500/0 hover:decoration-blue-500 underline underline-offset-4">Rebate Status</Link></li>
            </ul>
          </nav>

          {/* Company & Legal */}
          <nav aria-label="Legal Navigation">
            <h3 className="text-white text-sm font-black uppercase tracking-[0.15em] mb-8 border-l-2 border-blue-600 pl-4">Company</h3>
            <ul className="space-y-4 text-[14px] font-bold">
              <li><Link to="/about" className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 decoration-blue-500/0 hover:decoration-blue-500 underline underline-offset-4">About Us</Link></li>
              <li><Link to="/privacy" className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 decoration-blue-500/0 hover:decoration-blue-500 underline underline-offset-4">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 decoration-blue-500/0 hover:decoration-blue-500 underline underline-offset-4">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 decoration-blue-500/0 hover:decoration-blue-500 underline underline-offset-4">Carrier Opportunities</Link></li>
            </ul>
          </nav>

          {/* Contact Section Column */}
          <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-sm">
            <h3 className="text-white text-sm font-black uppercase tracking-[0.15em] mb-6">Contact Us</h3>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Office Location</p>
                <p className="text-white font-bold text-sm">Mississauga & GTA Office</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Emergency Dispatch</p>
                <a href="tel:4164101744" className="text-2xl font-black text-white hover:text-blue-500 transition-colors block">
                  (416) 410-1744
                </a>
              </div>
              <div className="pt-2">
                <div className="flex items-center space-x-2 bg-blue-600/10 border border-blue-600/30 px-3 py-1.5 rounded-lg w-fit">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-blue-500 font-black uppercase tracking-widest">AI Triage Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center text-[11px] font-black text-slate-500 tracking-wider">
          <p className="uppercase">© {new Date().getFullYear()} CANADA’S HOME RENOVATION DEPOT. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0 uppercase">
            <span className="hover:text-slate-300 transition-colors cursor-default">Licensed & Insured HVAC Contractor</span>
            <span className="w-1 h-1 bg-slate-800 rounded-full hidden md:block"></span>
            <Link to="/privacy" className="hover:text-white transition-colors">Legal Notices</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
