
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
        <div className="prose prose-slate lg:prose-lg max-w-none text-slate-600 space-y-6">
          <p>Last Updated: May 2024</p>
          <p>Canada’s Home Renovation Depot ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our HVAC services in Oakville and the Greater Toronto Area.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10">1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including your name, email address, phone number, and physical address when you request a quote or book a service. We also collect technical data such as your IP address and browsing behavior through cookies to improve our AI diagnostic tools.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and manage your HVAC services and repairs.</li>
            <li>To process rebate applications with Enbridge and other government programs.</li>
            <li>To send service reminders and emergency weather alerts.</li>
            <li>To comply with TSSA (Technical Standards and Safety Authority) reporting requirements.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">3. TSSA & Safety Compliance</h2>
          <p>As a licensed HVAC contractor, we are legally required to maintain records of gas-related work. This information may be shared with the TSSA for safety audits and compliance verification.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">4. Your Rights</h2>
          <p>You have the right to access, correct, or request the deletion of your personal data. Please contact our Oakville office at (416) 410-1744 for any privacy-related inquiries.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
