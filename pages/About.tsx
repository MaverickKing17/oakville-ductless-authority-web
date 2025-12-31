
import React from 'react';

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
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter">
              A Legacy of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Home Comfort</span> <br />
              Excellence in GTA
            </h1>
            
            <div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
              <p>
                Founded over two decades ago in the heart of Mississauga, <span className="text-slate-900 font-bold">Canada’s Home Renovation Depot</span> started with a focused mission: to bring elite, high-authority HVAC engineering to our neighbors across the region.
              </p>
              <p>
                Today, we stand as the GTA's benchmark for technical precision. We don't just "fix" units; we architect long-term climate solutions that maximize efficiency, leverage maximum government rebates, and ensure TSSA-certified safety for every family.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 mt-16 pt-12 border-t border-slate-100">
              <div className="group">
                <div className="text-5xl font-black text-slate-900 mb-2 tracking-tighter group-hover:text-blue-600 transition-colors">20+</div>
                <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Years GTA Experience</div>
              </div>
              <div className="group">
                <div className="text-5xl font-black text-slate-900 mb-2 tracking-tighter group-hover:text-blue-600 transition-colors">15k+</div>
                <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Happy Homeowners</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Artistic Background Layer */}
            <div className="absolute -inset-4 bg-slate-50 rounded-[48px] -rotate-1 scale-105 opacity-50"></div>
            
            {/* Main Image: Restored B&W Artistic Legacy Visual */}
            <div className="relative rounded-[40px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] group">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2070&auto=format&fit=crop" 
                alt="Architectural landscape representing the enduring legacy of comfort" 
                className="w-full h-[650px] object-cover grayscale transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Image Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            </div>

            {/* Glassmorphism Testimonial Card */}
            <div className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-2xl p-8 rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] max-w-sm border border-white transition-all hover:-translate-y-2">
               <div className="flex items-center space-x-1 text-yellow-500 mb-4">
                 {[1,2,3,4,5].map(i => (
                   <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                 ))}
               </div>
               <p className="text-lg font-bold text-slate-800 leading-snug mb-4">
                 "The most professional HVAC crew in Mississauga. They handled the rebate paperwork and installed our furnace in record time."
               </p>
               <div className="flex items-center justify-between">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">— Sarah J., Port Credit</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-slate-950 py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-16 tracking-tight">The Depot Engineering Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Authority', desc: 'We hold the highest TSSA certifications and insurance standards in Ontario.' },
              { title: 'Accuracy', desc: 'Precision diagnostics powered by thermal imaging and AI performance modeling.' },
              { title: 'Accountability', desc: 'Every installation is backed by a lifetime workmanship guarantee.' }
            ].map((p, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-black text-blue-400 mb-4 uppercase tracking-widest">{p.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
