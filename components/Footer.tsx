
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-white text-xl font-bold mb-6">Home Renovation Depot</h2>
            <p className="text-sm leading-relaxed mb-6">
              Serving the Greater Toronto Area with award-winning HVAC solutions for over 20 years. 
              Trust, Expertise, and Local Care.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#/services" className="hover:text-blue-400">Furnace Installation</a></li>
              <li><a href="#/services" className="hover:text-blue-400">AC Repair & Maintenance</a></li>
              <li><a href="#/services" className="hover:text-blue-400">Water Heater Services</a></li>
              <li><a href="#/services" className="hover:text-blue-400">Air Filtration</a></li>
            </ul>
          </div>

          {/* Rebates */}
          <div>
            <h3 className="text-white font-semibold mb-6">Rebates</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#/rebates" className="hover:text-blue-400">Enbridge $7,100 Rebate</a></li>
              <li><a href="#/rebates" className="hover:text-blue-400">Heat Pump Savings</a></li>
              <li><a href="#/rebates" className="hover:text-blue-400">Green Home Incentives</a></li>
            </ul>
          </div>

          {/* Contact & Badges */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <div className="text-sm space-y-3 mb-6">
              <p>Mississauga & GTA Office</p>
              <p className="font-bold text-white">(416) 410-1744</p>
              <p>24/7 Emergency Dispatch</p>
            </div>
            <div className="flex items-center space-x-4">
               {/* Mock TSSA Badge */}
               <div className="bg-white p-1 rounded">
                 <div className="text-[8px] font-bold text-red-600 border border-red-600 px-1">TSSA COMPLIANT</div>
               </div>
               <div className="bg-white p-1 rounded">
                 <div className="text-[8px] font-bold text-blue-800 border border-blue-800 px-1">HRAI MEMBER</div>
               </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Canada’s Home Renovation Depot. All Rights Reserved. Licensed & Insured HVAC Contractor.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
