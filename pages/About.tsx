
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              A Legacy of <span className="text-blue-600">Home Comfort</span> Excellence in the GTA
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded over two decades ago in the heart of Mississauga, Canada’s Home Renovation Depot started with a simple mission: 
              to provide high-authority, reliable, and transparent HVAC services to our neighbors.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Today, we are one of the most respected contractors in the region, known for our technical precision, TSSA compliance, 
              and unwavering commitment to customer satisfaction. We don't just fix units; we engineer long-term home comfort solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-black text-blue-600 mb-1">20+</div>
                <div className="text-sm font-bold text-gray-500 uppercase">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-black text-blue-600 mb-1">15k+</div>
                <div className="text-sm font-bold text-gray-500 uppercase">Happy Homeowners</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/hvacabout/1000/1000" 
              alt="Our Team" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs border border-gray-100">
               <div className="flex items-center space-x-2 text-yellow-400 mb-2">
                 {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
               </div>
               <p className="text-sm font-medium text-gray-800">"The most professional HVAC crew in Mississauga. They handled the rebate paperwork and installed our furnace in record time."</p>
               <p className="text-xs text-gray-400 mt-2">— Sarah J., Port Credit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
