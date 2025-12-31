
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
          <div className="bg-blue-600 text-white px-7 py-4 rounded-2xl font-black shadow-2xl inline-flex items-center transition-all group cursor-default">
            <span className="w-2.5 h-2.5 bg-white rounded-full mr-3 animate-pulse"></span>
            Rapid Response in Mississauga
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Why Homeowners Choose Us</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">Providing high-authority HVAC services across the Greater Toronto Area with unmatched expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Trust */}
          <div className="bg-white p-10 rounded-3xl border border-slate-50 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Ultimate Trust</h3>
            <p className="text-slate-600 leading-relaxed font-medium opacity-80">Fully licensed, TSSA compliant, and highly rated by GTA homeowners. Your safety is our #1 priority.</p>
          </div>

          {/* Expertise */}
          <div className="bg-white p-10 rounded-3xl border border-slate-50 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Unmatched Expertise</h3>
            <p className="text-slate-600 leading-relaxed font-medium opacity-80">Our technicians undergo rigorous training on the latest high-efficiency heat pumps and furnace technologies.</p>
          </div>

          {/* Local Service */}
          <div className="bg-white p-10 rounded-3xl border border-slate-50 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Local Service</h3>
            <p className="text-slate-600 leading-relaxed font-medium opacity-80">Centrally located in Mississauga, allowing us to serve Oakville, Toronto, and Brampton with lightning-fast response times.</p>
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
