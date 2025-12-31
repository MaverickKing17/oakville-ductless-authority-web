
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section: Split Screen */}
      <section className="relative overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        {/* Left: Branded Van in luxury driveway */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img 
            src="https://picsum.photos/seed/hvacvan/1200/800" 
            alt="Branded HVAC Van" 
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent"></div>
          <div className="absolute bottom-12 left-12">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold inline-block mb-4 shadow-xl">
              Rapid Response in Mississauga
            </div>
          </div>
        </div>

        {/* Right: Technician with furnace */}
        <div className="w-full md:w-1/2 relative min-h-[400px] flex items-center bg-gray-100">
           <img 
            src="https://picsum.photos/seed/technician/1200/800" 
            alt="Expert Technician" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-white/40"></div>
          <div className="relative z-10 p-12 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              GTA's Trusted <span className="text-blue-600">Home Comfort</span> Experts
            </h2>
            <p className="text-lg text-gray-700 mb-8 font-medium">
              We provide professional furnace, AC, and heat pump solutions with guaranteed TSSA compliance and 24/7 emergency support.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/rebates" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-all text-center">
                Claim Your $7,100 Rebate
              </Link>
              <Link to="/contact" className="bg-white border-2 border-gray-200 hover:border-blue-600 text-gray-900 px-8 py-4 rounded-xl font-bold transition-all text-center">
                Request a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Why Homeowners Choose Us</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Providing high-authority HVAC services across the Greater Toronto Area with unmatched expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Trust */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Ultimate Trust</h3>
            <p className="text-gray-600 leading-relaxed">Fully licensed, TSSA compliant, and highly rated by GTA homeowners. Your safety is our #1 priority.</p>
          </div>

          {/* Expertise */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Unmatched Expertise</h3>
            <p className="text-gray-600 leading-relaxed">Our technicians undergo rigorous training on the latest high-efficiency heat pumps and furnace technologies.</p>
          </div>

          {/* Local Service */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Local Mississauga Service</h3>
            <p className="text-gray-600 leading-relaxed">Centrally located in Mississauga, allowing us to serve Oakville, Toronto, and Brampton with lightning-fast response times.</p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="font-black text-2xl text-gray-400">TSSA CERTIFIED</div>
          <div className="font-black text-2xl text-gray-400">ENBRIDGE PARTNER</div>
          <div className="font-black text-2xl text-gray-400">HRAI MEMBER</div>
          <div className="font-black text-2xl text-gray-400">BBB ACCREDITED</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
