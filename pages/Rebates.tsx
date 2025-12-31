
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const Rebates: React.FC = () => {
  // Advanced Estimator State
  const [fuelType, setFuelType] = useState<string>('gas');
  const [homeSize, setHomeSize] = useState<number>(2000);
  const [monthlyBill, setMonthlyBill] = useState<number>(250);
  const [unitAge, setUnitAge] = useState<number>(15);
  const [insulation, setInsulation] = useState<string>('average');

  // Derived "AI" Calculations
  const metrics = useMemo(() => {
    const baseRebate = 7100;
    const fuelBonus = fuelType === 'oil' ? 1500 : (fuelType === 'electric' ? 800 : 0);
    const ageMultiplier = unitAge > 15 ? 1.2 : 1.0;
    const insulationGain = insulation === 'poor' ? 0.15 : (insulation === 'elite' ? -0.05 : 0);
    
    const efficiencyGain = (fuelType === 'gas' ? 0.35 : 0.60) + insulationGain; 
    const annualSavings = (monthlyBill * 12) * efficiencyGain * ageMultiplier;
    const totalIncentive = baseRebate + fuelBonus;
    const carbonSaved = (homeSize / 100) * 0.4;
    
    return {
      totalIncentive,
      annualSavings,
      tenYearSavings: annualSavings * 10,
      carbonSaved: carbonSaved.toFixed(1),
      roiStatus: unitAge > 12 ? 'High Priority' : 'Recommended'
    };
  }, [fuelType, homeSize, monthlyBill, unitAge, insulation]);

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Hero: Authority Section */}
      <section className="bg-slate-950 text-white pt-32 pb-40 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                <span className="h-[2px] w-12 bg-blue-500"></span>
                <span className="text-blue-400 text-sm font-black uppercase tracking-[0.3em]">Enbridge Approved Vendor</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
                Energy Wealth <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 underline decoration-blue-500/30 underline-offset-8">Optimizer</span>
              </h1>
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
                Mississauga's elite portal for the $7,100 HER+ Grant. Our AI audit predicts your savings before you even book the first NRCAN assessment.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Grant Pool: $42M Available</span>
                </div>
              </div>
            </div>

            {/* Live Program Counter Card */}
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[40px] shadow-2xl min-w-[320px] text-center transform hover:scale-105 transition-transform duration-500">
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-4">Your Grant Ceiling</p>
              <div className="text-6xl font-black mb-2">${metrics.totalIncentive.toLocaleString()}</div>
              <p className="text-slate-500 text-sm font-bold mb-6">Projected Total Incentive</p>
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-black text-slate-400 uppercase">
                   <span>Fund Velocity</span>
                   <span>High Demand</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 w-[92%]"></div>
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
          <div className="lg:col-span-5 bg-white rounded-[48px] shadow-2xl border border-slate-100 p-8 md:p-10 h-fit sticky top-28">
            <div className="flex items-center space-x-3 mb-10">
               <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
               </div>
               <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">AI ROI Estimator</h3>
                  <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">Powered by Marc V4.5</p>
               </div>
            </div>

            <div className="space-y-8">
              {/* Home Size Input */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">GTA Home Size</label>
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
                <div className="flex justify-between mb-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Avg. Energy Spend</label>
                  <span className="text-sm font-black text-blue-600">${monthlyBill}/mo</span>
                </div>
                <input 
                  type="range" min="50" max="1000" step="10"
                  value={monthlyBill} onChange={(e) => setMonthlyBill(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              {/* Advanced Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">System Age</label>
                  <select 
                    value={unitAge} onChange={(e) => setUnitAge(parseInt(e.target.value))}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="5">0-8 Yrs</option>
                    <option value="15">8-15 Yrs</option>
                    <option value="25">15+ Yrs</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Insulation</label>
                  <select 
                    value={insulation} onChange={(e) => setInsulation(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="poor">Standard/Old</option>
                    <option value="average">Upgraded</option>
                    <option value="elite">Elite/New</option>
                  </select>
                </div>
              </div>

              {/* Dynamic Results Dashboard */}
              <div className="mt-12 bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl group border border-white/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
                
                <div className="relative z-10 text-center mb-8">
                  <div className="inline-flex items-center space-x-2 bg-blue-600/20 px-3 py-1 rounded-full mb-4 border border-blue-500/30">
                     <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
                     <span className="text-[9px] font-black uppercase text-blue-400 tracking-widest">{metrics.roiStatus}</span>
                  </div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">Total Savings (10 Yrs)</p>
                  <div className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">
                    ${metrics.tenYearSavings.toLocaleString(undefined, {maximumFractionDigits:0})}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 relative z-10">
                   <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                      <p className="text-[9px] font-black text-slate-500 uppercase mb-1">Annual Yield</p>
                      <p className="text-xl font-black text-emerald-400">${metrics.annualSavings.toFixed(0)}</p>
                   </div>
                   <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                      <p className="text-[9px] font-black text-slate-500 uppercase mb-1">Carbon Offset</p>
                      <p className="text-xl font-black text-blue-400">{metrics.carbonSaved} tCO2</p>
                   </div>
                </div>

                <Link to="/contact" className="w-full mt-8 bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-black uppercase tracking-widest transition-all text-center block shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-95">
                  Confirm My Eligibility
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
                  <h3 className="text-2xl font-black text-slate-900">Program Workflow 2026</h3>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { step: '01', title: 'NRCAN Audit', desc: 'A certified engineer baselines your home efficiency.', status: 'Priority' },
                    { step: '02', title: 'TSSA Install', desc: 'Our crews deploy your high-efficiency hybrid system.', status: 'Technical' },
                    { step: '03', title: 'Post-Audit', desc: 'Validation check to unlock the government fund release.', status: 'Verification' },
                    { step: '04', title: 'Fund Release', desc: 'Receive your $7,100 directly from Enbridge Gas.', status: 'Payment' }
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
               <div className="bg-blue-600 rounded-[40px] p-10 text-white shadow-xl relative overflow-hidden group hover:shadow-blue-500/20 transition-all">
                  <div className="absolute -bottom-10 -right-10 text-9xl opacity-10 group-hover:scale-110 transition-transform">❄️</div>
                  <h3 className="text-2xl font-black mb-4">Hybrid Matrix</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-6">Dual-fuel intelligence that shifts between gas and electric based on outdoor temp peaks.</p>
                  <ul className="space-y-3">
                    {['Automated Triage', 'Smart Grid Sync', 'Max Rebate Tier'].map(li => (
                      <li key={li} className="flex items-center text-[11px] font-black uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span> {li}
                      </li>
                    ))}
                  </ul>
               </div>

               <div className="bg-slate-900 rounded-[40px] p-10 text-white shadow-xl relative overflow-hidden group hover:shadow-slate-500/20 transition-all">
                  <div className="absolute -bottom-10 -right-10 text-9xl opacity-10 group-hover:scale-110 transition-transform">🔋</div>
                  <h3 className="text-2xl font-black mb-4">Pure Electric</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">Cold-climate inverter tech that eliminates gas reliance entirely down to -30°C.</p>
                  <ul className="space-y-3">
                    {['Zero Local Emissions', 'Ultra-Quiet Operation', 'Federal Grant Match'].map(li => (
                      <li key={li} className="flex items-center text-[11px] font-black uppercase tracking-wider text-slate-200">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span> {li}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rebates;
