
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-8">Terms of Service</h1>
        <div className="prose prose-slate lg:prose-lg max-w-none text-slate-600 space-y-6">
          <p>Last Updated: May 2024</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10">1. Agreement to Terms</h2>
          <p>By accessing this website or booking a service, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">2. Emergency Dispatch Disclaimer</h2>
          <p>While we strive for a 2-hour response time in Oakville, dispatch times are subject to crew availability, weather conditions, and traffic. Our "Live Ops" dashboard provides estimates and does not guarantee exact arrival times.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">3. Quotations & Pricing</h2>
          <p>Estimates provided through our AI tools are for informational purposes. Final pricing is subject to a physical on-site assessment by a TSSA-certified technician.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">4. Rebate Eligibility</h2>
          <p>Rebate amounts (such as the $7,100 Enbridge incentive) are determined by third-party government agencies. While we assist with the application, we do not guarantee approval or final payout amounts.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">5. Limitation of Liability</h2>
          <p>Canada’s Home Renovation Depot is not liable for indirect or consequential damages resulting from equipment failure or service delays. Our liability is limited to the value of the service contract performed. We are headquartered at Oakville, ON L6M 4P2.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
