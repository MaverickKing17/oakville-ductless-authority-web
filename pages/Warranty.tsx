
import React from 'react';

const Warranty: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-8">The Depot Guarantee</h1>
        <p className="text-xl text-blue-600 font-bold mb-12">Industry-leading protection for your GTA home comfort systems.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h3 className="text-2xl font-black mb-4">10-Year Parts</h3>
            <p className="text-slate-600">Standard on all new furnace and AC installations. Protects against manufacturer defects on all major components.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h3 className="text-2xl font-black mb-4">Lifetime Workmanship</h3>
            <p className="text-slate-600">We stand behind our pipe-work and connections for the life of the unit. If our install fails, we fix it for free.</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Warranty Registration</h2>
          <p>To maintain your warranty, your unit must be registered within 60 days of installation. Our team handles this process for you as part of our premium installation service.</p>

          <h2 className="text-2xl font-bold text-slate-900">Annual Maintenance Requirement</h2>
          <p>Most manufacturers require annual professional maintenance (cleaning and safety check) to keep the warranty active. Failure to perform annual maintenance may void the manufacturer’s parts warranty.</p>

          <h2 className="text-2xl font-bold text-slate-900">How to Make a Claim</h2>
          <p>Simply call our emergency line at (416) 410-1744. Our TSSA technicians will diagnose the issue and handle the parts-ordering process with the manufacturer on your behalf.</p>
        </div>
      </div>
    </div>
  );
};

export default Warranty;
