
import React from 'react';

const faqItems = [
  {
    q: "How long does it take for a technician to arrive in an emergency?",
    a: "Our goal for Mississauga and Brampton residents is a 2-hour response time. During extreme cold weather warnings, we prioritize 'No Heat' situations for vulnerable households."
  },
  {
    q: "What is the Enbridge $7,100 Rebate program?",
    a: "This is the Clean Energy program that encourages homeowners to switch to hybrid heat pump systems. It covers a significant portion of the installation costs. We provide a free audit to check your eligibility."
  },
  {
    q: "Are your technicians TSSA certified?",
    a: "Yes. Every technician at Canada's Home Renovation Depot holds valid TSSA gas licenses. We are a fully insured and bonded HVAC contractor."
  },
  {
    q: "Do I really need a heat pump in Toronto?",
    a: "Yes. Modern cold-climate heat pumps are designed for Ontario winters. They operate efficiently down to -25°C and can save you up to 50% on heating costs compared to traditional systems."
  },
  {
    q: "How often should I change my furnace filter?",
    a: "For standard 1-inch filters, every 3 months. For high-efficiency 5-inch media filters, every 6 to 12 months depending on household pets and allergies."
  }
];

const FAQ: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-12 text-center underline decoration-blue-600 underline-offset-8">Frequently Asked Questions</h1>
        
        <div className="space-y-8">
          {faqItems.map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors">
              <h3 className="text-lg font-black text-slate-900 mb-4 flex items-start">
                <span className="text-blue-600 mr-3">Q:</span>
                {item.q}
              </h3>
              <p className="text-slate-600 leading-relaxed pl-7">
                <span className="font-bold text-blue-600 mr-2">A:</span>
                {item.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-blue-600 rounded-3xl text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-8 opacity-90">Our AI assistant Marc is available 24/7, or you can talk to a human expert.</p>
          <a href="tel:4164101744" className="bg-white text-blue-600 px-8 py-3 rounded-xl font-black inline-block">Call (416) 410-1744</a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
