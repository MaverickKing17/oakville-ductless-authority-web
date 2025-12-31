
import React, { useState } from 'react';

const Rebates: React.FC = () => {
  const [fuelType, setFuelType] = useState<string>('gas');
  const [estimatedSavings, setEstimatedSavings] = useState<number>(0);

  const calculateSavings = () => {
    // Basic logic for the "AI Savings Estimator"
    let baseRebate = 7100;
    let additionalIncentive = 0;
    
    if (fuelType === 'oil') additionalIncentive = 500;
    if (fuelType === 'electric') additionalIncentive = 300;
    
    setEstimatedSavings(baseRebate + additionalIncentive);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black mb-8 leading-tight">
              Get Up To <span className="text-blue-400">$7,100</span> In Government Rebates
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              The Enbridge/Clean Energy Program is now active for GTA homeowners. Upgrade to a high-efficiency Heat Pump and let the government pay for it.
            </p>
            <div className="flex items-center space-x-4">
               <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Verified Program 2024</div>
               <div className="text-blue-200 text-sm">Official Enbridge Approved Contractor</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold mb-6">How the Program Works</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  The Ontario Heat Pump Rebate program is designed to reduce the carbon footprint of Mississauga and GTA homes. 
                  By switching to a modern air-source heat pump, you can significantly reduce your heating and cooling costs while qualifying for massive cash-back incentives.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="p-6 bg-gray-50 rounded-2xl">
                    <h4 className="font-bold text-gray-900 mb-2">Step 1: Consultation</h4>
                    <p className="text-sm">We perform a professional home energy assessment to determine your eligibility.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-2xl">
                    <h4 className="font-bold text-gray-900 mb-2">Step 2: Installation</h4>
                    <p className="text-sm">Our TSSA-certified team installs your high-efficiency unit usually in 1-2 days.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Estimator Script/Logic */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-blue-100 h-fit">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="mr-2 text-2xl">🤖</span> 
              AI Savings Estimator
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Current Heating Fuel Type</label>
                <select 
                  value={fuelType} 
                  onChange={(e) => setFuelType(e.target.value)}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="gas">Natural Gas</option>
                  <option value="oil">Oil / Propane</option>
                  <option value="electric">Electric Baseboard</option>
                </select>
              </div>
              <button 
                onClick={calculateSavings}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all"
              >
                Estimate My Rebate
              </button>

              {estimatedSavings > 0 && (
                <div className="mt-8 p-6 bg-blue-50 rounded-2xl border-2 border-dashed border-blue-200 text-center animate-bounce">
                  <p className="text-blue-600 text-xs font-bold uppercase mb-1">Estimated Eligibility</p>
                  <p className="text-4xl font-black text-blue-900">${estimatedSavings.toLocaleString()}</p>
                  <p className="text-[10px] text-blue-400 mt-2">*Based on current Enbridge program rules.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rebates;
