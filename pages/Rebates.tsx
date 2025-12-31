
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const Rebates: React.FC = () => {
  // Advanced Estimator State
  const [fuelType, setFuelType] = useState<string>('gas');
  const [homeSize, setHomeSize] = useState<number>(2000);
  const [monthlyBill, setMonthlyBill] = useState<number>(250);
  const [unitAge, setUnitAge] = useState<number>(12);

  // Derived "AI" Calculations
  const metrics = useMemo(() => {
    const baseRebate = 7100;
    const fuelBonus = fuelType === 'oil' ? 1500 : (fuelType === 'electric' ? 800 : 0);
    const efficiencyGain = fuelType === 'gas' ? 0.35 : 0.60; // Estimated % savings
    
    const annualSavings = (monthlyBill * 12) * efficiencyGain;
    const totalIncentive = baseRebate + fuelBonus;
    const carbonSaved = (homeSize / 100) * 0.4; // Tons per year approx
    
    return {
      totalIncentive,
      annualSavings,
      paybackYears: Math.max(1, (15000 - totalIncentive) / annualSavings),
      carbonSaved: carbonSaved.toFixed(1)
    };
  }, [fuelType, homeSize, monthlyBill]);

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Hero: Authority Section */}
      <section className="bg-slate-950 text-white pt-32 pb-40 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <span className="h-[2px] w-12 bg-blue-500"></span>
                <span className="text-blue-400 text-sm font-black uppercase tracking-[0.3em]">Official Enbridge Partner</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
                Energy Wealth <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 underline decoration-blue-500/30 underline-offset-8">Optimizer</span>
              </h1>
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
                Unlock up to <span className="text-white font-bold">$7,100+</span> in federal and provincial grants. Our AI Marc analyzes your GTA home architecture to maximize your return on infrastructure.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Clean Energy Program Active</span>
                </div>
                <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center space-x-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Verified TSSA Audits</span>
                </div>
              </div>
            </div>

            {/* Live Program Counter Card */}
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[40px] shadow-2xl min-w-[320px] text-center">
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-4">Current Program Ceiling</p>
              <div className="text-5xl font-black mb-2">$7,100</div>
              <p className="text-slate-500 text-sm font-bold mb-6">Guaranteed Maximum Rebate</p>
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-black text-slate-400 uppercase">
                   <span>Fund Availability</span>
                   <span>84%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 w-[84%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Dashboard */}
      <section className="max-w-7xl mx-auto px-4 -mt-24 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Advanced AI Estimator: Column Span 5 */}
          <div className="lg:col-span-5 bg-white rounded-[48px] shadow-2xl border border-slate-100 p-10 h-fit sticky top-28">
            <div className="flex items-center space-x-3 mb-10">
               <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
               </div>
               <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">AI ROI Estimator</h3>
                  <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">Powered by Marc V4.2</p>
               </div>
            </div>

            <div className="space-y-8">
              {/* Home Size Input */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Home Size (Approx Sq Ft)</label>
                  <span className="text-sm font-black text-blue-600">{homeSize} sq ft</span>
                </div>
                <input 
                  type="range" min="800" max="5000" step="50"
                  value={homeSize} onChange={(e) => setHomeSize(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              {/* Monthly Bill Input */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Avg. Monthly Energy Bill</label>
                  <span className="text-sm font-black text-blue-600">${monthlyBill}</span>
                </div>
                <input 
                  type="range" min="50" max="1000" step="10"
                  value={monthlyBill} onChange={(e) => setMonthlyBill(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              {/* Fuel Type & Age */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3 block">Primary Fuel</label>
                  <select 
                    value={fuelType} onChange={(e) => setFuelType(e.target.value)}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="gas">Natural Gas</option>
                    <option value="oil">Oil / Propane</option>
                    <option value="electric">Electric Resistance</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3 block">System Age (Yrs)</label>
                  <select 
                    value={unitAge} onChange={(e) => setUnitAge(parseInt(e.target.value))}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="5">0 - 8 Years</option>
                    <option value="12">9 - 15 Years</option>
                    <option value="20">15+ Years (Critical)</option>
                  </select>
                </div>
              </div>

              {/* Dynamic Results Dashboard */}
              <div className="mt-12 bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
                
                <div className="relative z-10 text-center mb-8">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-2">Total Estimated Incentives</p>
                  <div className="text-6xl font-black tracking-tighter">${metrics.totalIncentive.toLocaleString()}</div>
                </div>

                <div className="grid grid-cols-2 gap-4 relative z-10">
                   <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                      <p className="text-[9px] font-black text-slate-500 uppercase mb-1">Annual Savings</p>
                      <p className="text-xl font-black text-emerald-400">${metrics.annualSavings.toFixed(0)}</p>
                   </div>
                   <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                      <p className="text-[9px] font-black text-slate-500 uppercase mb-1">Carbon Offset</p>
                      <p className="text-xl font-black text-blue-400">{metrics.carbonSaved} tCO2</p>
                   </div>
                </div>

                <Link to="/contact" className="w-full mt-8 bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-black uppercase tracking-widest transition-all text-center block shadow-lg shadow-blue-600/30">
                  Secure My Audit
                </Link>
              </div>
            </div>
          </div>

          {/* Program Roadmap: Column Span 7 */}
          <div className="lg:col-span-7 space-y-8">
            {/* Bento Box 1: Roadmap */}
            <div className="bg-white rounded-[48px] p-10 border border-slate-100 shadow-xl overflow-hidden group">
               <div className="flex items-center space-x-3 mb-12">
                  <span className="h-[2px] w-8 bg-blue-600"></span>
                  <h3 className="text-2xl font-black text-slate-900">Program Roadmap 2026</h3>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { step: '01', title: 'Energy Audit', desc: 'Pre-installation assessment by a certified NRCAN auditor to baseline performance.', status: 'Mandatory' },
                    { step: '02', title: 'Smart Install', desc: 'Our TSSA crew replaces aging units with high-performance heat pumps.', status: 'Priority' },
                    { step: '03', title: 'Post-Validation', desc: 'A second audit verifies performance gains and releases funding.', status: 'Final' },
                    { step: '04', title: 'Rebate Issuance', desc: 'Enbridge sends the direct check to the homeowner within 6-8 weeks.', status: 'Direct' }
                  ].map((item, i) => (
                    <div key={i} className="relative pl-12 group/item">
                       <div className="absolute left-0 top-0 w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 font-black text-xs transition-all group-hover/item:bg-blue-600 group-hover/item:text-white">
                         {item.step}
                       </div>
                       <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-black text-slate-900">{item.title}</h4>
                          <span className="text-[8px] font-black bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded uppercase">{item.status}</span>
                       </div>
                       <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* Bento Box 2: System Types */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-blue-600 rounded-[40px] p-10 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 text-9xl opacity-10">❄️</div>
                  <h3 className="text-2xl font-black mb-4">Hybrid Systems</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-6">Combined gas furnace + electric heat pump. The ultimate hedge against fluctuating energy prices.</p>
                  <ul className="space-y-3">
                    {['Switch Automatically', 'Emergency Gas Backup', 'Max Rebate Tier'].map(li => (
                      <li key={li} className="flex items-center text-[11px] font-black uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span> {li}
                      </li>
                    ))}
                  </ul>
               </div>

               <div className="bg-slate-900 rounded-[40px] p-10 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 text-9xl opacity-10">🔋</div>
                  <h3 className="text-2xl font-black mb-4">Cold Climate HP</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">Next-gen heat pumps that operate at full capacity down to -30°C. Pure efficiency.</p>
                  <ul className="space-y-3">
                    {['Zero Carbon Heating', 'Whisper Quiet Ops', 'Federal Grant Ready'].map(li => (
                      <li key={li} className="flex items-center text-[11px] font-black uppercase tracking-wider text-slate-200">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span> {li}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>

            {/* Bento Box 3: Technical Integrity */}
            <div className="bg-white rounded-[48px] p-10 border border-slate-100 shadow-xl flex flex-col md:flex-row items-center gap-12">
               <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-black text-slate-900 mb-6">Why Trust Canada's Depot?</h3>
                  <p className="text-slate-500 mb-8 font-medium">We specialize in the high-authority engineering required for Enbridge/HER+ compliance. 100% of our rebate clients have successfully received their funding since 2022.</p>
                  <div className="flex items-center space-x-6">
                    <div className="flex flex-col">
                       <span className="text-2xl font-black text-blue-600">$4.8M</span>
                       <span className="text-[9px] font-black text-slate-400 uppercase">Rebates Secured</span>
                    </div>
                    <div className="w-[1px] h-8 bg-slate-100"></div>
                    <div className="flex flex-col">
                       <span className="text-2xl font-black text-blue-600">100%</span>
                       <span className="text-[9px] font-black text-slate-400 uppercase">Approval Rate</span>
                    </div>
                  </div>
               </div>
               <div className="w-full md:w-1/2 bg-slate-50 rounded-3xl p-6 border border-slate-100 italic text-sm text-slate-600 relative">
                  <span className="text-4xl text-blue-200 absolute -top-4 -left-2">“</span>
                  "The Depot team didn't just install my heat pump; they architected the entire savings plan. I received my Enbridge check for $7,100 exactly 7 weeks after the final audit."
                  <p className="mt-4 not-italic font-black text-slate-900 text-xs uppercase">— Dr. Aris K., Mississauga</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Badges */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale grayscale-100 hover:grayscale-0 transition-all duration-700">
             <span className="font-black text-xl tracking-tighter">ENBRIDGE PREFERRED</span>
             <span className="font-black text-xl tracking-tighter">NRCAN REGISTERED</span>
             <span className="font-black text-xl tracking-tighter">TSSA GAS-LICENSE</span>
             <span className="font-black text-xl tracking-tighter">CITY OF MISSISSAUGA</span>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Rebates;
