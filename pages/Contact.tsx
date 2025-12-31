
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Contact Our Experts</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Ready to upgrade your home comfort? Send us a message or call for 24/7 emergency support.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" placeholder="(416) 000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Service Type</label>
                <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none">
                  <option>Furnace Installation</option>
                  <option>AC Repair</option>
                  <option>Heat Pump Quote</option>
                  <option>Emergency Service</option>
                  <option>Rebate Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl h-32 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details & Map Placeholder */}
          <div className="space-y-8">
            <div className="bg-blue-600 text-white p-10 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Connect Locally</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <p className="font-bold">Phone</p>
                    <p className="text-blue-100 text-lg">(416) 410-1744</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <p className="font-bold">Serving Mississauga & GTA</p>
                    <p className="text-blue-100">Central Dispatch: Port Credit, ON</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <p className="font-bold">24/7 Priority Support</p>
                    <p className="text-blue-100">Crews always on standby for emergencies.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Map */}
            <div className="bg-gray-200 h-64 rounded-3xl relative overflow-hidden flex items-center justify-center border border-gray-200">
               <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">GTA Service Area Map</p>
               <img src="https://picsum.photos/seed/mississauga/800/400" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
