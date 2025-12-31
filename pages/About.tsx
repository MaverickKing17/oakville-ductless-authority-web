
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-8">
              <span className="h-[2px] w-12 bg-blue-600"></span>
              <span className="text-blue-600 text-sm font-black uppercase tracking-[0.3em]">Engineering A Legacy</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.85] tracking-tighter">
              A Legacy of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Home Comfort</span> <br />
              Excellence in GTA
            </h1>
            
            <div className="space-y-8 text-xl text-slate-600 font-semibold leading-relaxed max-w-xl">
              <p>
                Founded over two decades ago in the heart of <span className="text-slate-900 font-black">Oakville</span>, <span className="text-slate-900 font-black">Canada’s Home Renovation Depot</span> started with a focused mission: to bring elite, high-authority HVAC engineering to our neighbors across the region.
              </p>
              <p>
                Today, we stand as the GTA's benchmark for technical precision. We architect long-term climate solutions that maximize efficiency, leverage maximum government rebates, and ensure <span className="text-slate-900 font-black">TSSA-certified safety</span> for every family.
              </p>
            </div>

            {/* HIGH VISIBILITY TRUST STRIP */}
            <div className="mt-12 py-8 px-8 bg-slate-50 rounded-3xl border border-slate-100 grid grid-cols-2 gap-8">
              <div className="flex items-center space-x-4 border-r border-slate-200">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl">🛡️</div>
                <div>
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Licensed</p>
                  <p className="text-lg font-black text-slate-900 leading-none">TSSA CERTIFIED</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl">⭐</div>
                <div>
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Rating</p>
                  <p className="text-lg font-black text-slate-900 leading-none">A+ BBB RATED</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-12 mt-12 pt-12 border-t border-slate-100">
              <div className="group">
                <div className="text-6xl font-black text-slate-900 mb-2 tracking-tighter group-hover:text-blue-600 transition-colors">20+</div>
                <div className="text-[11px] font-black text-blue-600 uppercase tracking-[0.25em]">Years GTA Experience</div>
              </div>
              <div className="group">
                <div className="text-6xl font-black text-slate-900 mb-2 tracking-tighter group-hover:text-blue-600 transition-colors">15k+</div>
                <div className="text-[11px] font-black text-blue-600 uppercase tracking-[0.25em]">Happy Homeowners</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Artistic Background Layer */}
            <div className="absolute -inset-4 bg-slate-100 rounded-[64px] -rotate-2 scale-105 opacity-50"></div>
            
            {/* Main Image: High-Authority Artistic Visual */}
            <div className="relative rounded-[56px] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.25)] group">
              <img 
                src="https://images.unsplash.com/photo-1518005020453-10351807aa92?q=80&w=1964&auto=format&fit=crop" 
                alt="Professional HVAC Engineering Legacy" 
                className="w-full h-[800px] object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Image Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              {/* Image Label Overlay */}
              <div className="absolute top-10 right-10 flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-[9px] font-black text-white uppercase tracking-widest">Heritage of Precision</span>
              </div>
            </div>

            {/* Testimonial Card Overlay */}
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[48px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] max-w-sm border border-slate-100 transition-all hover:-translate-y-4">
               <div className="flex items-center space-x-1.5 text-blue-600 mb-6">
                 {[1,2,3,4,5].map(i => (
                   <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                 ))}
               </div>
               <p className="text-xl font-black text-slate-900 leading-tight mb-6">
                 "The most professional HVAC crew in Oakville. They handled the rebate paperwork and installed our furnace in record time."
               </p>
               <div className="flex items-center space-x-3">
                 <div className="w-8 h-[1px] bg-slate-300"></div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">— Sarah J., Joshua Creek</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-slate-950 py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <p className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6">Standard of Operation</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-20 tracking-tighter leading-none">The Depot Engineering Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Authority', desc: 'We hold the highest TSSA certifications and insurance standards in Ontario.', icon: '🛡️' },
              { title: 'Accuracy', desc: 'Precision diagnostics powered by thermal imaging and AI performance modeling.', icon: '🎯' },
              { title: 'Accountability', desc: 'Every installation is backed by a lifetime workmanship guarantee.', icon: '🤝' }
            ].map((p, i) => (
              <div key={i} className="p-12 bg-white/5 border border-white/10 rounded-[48px] hover:bg-white/10 transition-all hover:-translate-y-2 text-left group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{p.icon}</div>
                <h3 className="text-2xl font-black text-blue-400 mb-4 uppercase tracking-widest">{p.title}</h3>
                <p className="text-slate-400 text-lg font-bold leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter">Ready to optimize your comfort?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="w-full sm:w-auto bg-blue-600 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest shadow-2xl hover:bg-blue-500 transition-all">Get a Free Quote</Link>
            <Link to="/rebates" className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-200 px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:border-blue-600 transition-all">Check Rebates</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
