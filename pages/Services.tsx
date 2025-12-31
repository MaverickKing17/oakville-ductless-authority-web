
import React from 'react';

const services = [
  {
    title: 'Furnace Services',
    description: 'High-efficiency gas and electric furnace installation, maintenance, and emergency repair.',
    icon: '🔥',
    tssa: true
  },
  {
    title: 'Air Conditioning',
    description: 'Keep your home cool with our premium AC units and central air systems.',
    icon: '❄️',
    tssa: true
  },
  {
    title: 'Water Heaters',
    description: 'Tankless and conventional water heater solutions for consistent hot water.',
    icon: '🚰',
    tssa: true
  },
  {
    title: 'Air Filtration',
    description: 'HEPA filters and UV purifiers to ensure your family breathes the cleanest air.',
    icon: '🍃',
    tssa: false
  },
  {
    title: 'Heat Pumps',
    description: 'The future of home comfort. Dual-fuel systems that save you thousands.',
    icon: '🔋',
    tssa: true
  },
  {
    title: 'Smart Thermostats',
    description: 'Control your home comfort from anywhere with Ecobee and Nest integration.',
    icon: '📱',
    tssa: false
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Professional HVAC Services</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Providing certified installations and 24/7 repairs for homeowners in Mississauga and across the GTA.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between">
                {service.tssa && (
                  <div className="bg-red-50 text-red-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-red-100">
                    TSSA Compliant
                  </div>
                )}
                <button className="text-blue-600 font-bold text-sm group-hover:underline">Learn More →</button>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-24 bg-blue-600 rounded-3xl p-12 text-white overflow-hidden relative">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black mb-6">Need Emergency Service?</h2>
            <p className="text-blue-100 text-lg mb-8">
              Our technicians are on-call 24 hours a day, 7 days a week to ensure your home remains safe and comfortable. 
              Average response time in Mississauga is under 2 hours.
            </p>
            <a href="tel:4164101744" className="bg-white text-blue-600 px-10 py-4 rounded-xl font-black inline-block hover:bg-gray-100 transition-colors shadow-xl">
              Call (416) 410-1744 Now
            </a>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/20 -skew-x-12 translate-x-12"></div>
        </section>
      </div>
    </div>
  );
};

export default Services;
