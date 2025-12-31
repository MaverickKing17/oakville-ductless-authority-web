
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-white text-xl font-bold mb-6">Home Renovation Depot</h2>
            <p className="text-sm leading-relaxed mb-6">
              Serving the Greater Toronto Area with award-winning HVAC solutions for over 20 years. 
              Trust, Expertise, and Local Care.
            </p>
            <div className="flex space-x-4" aria-label="Social Media Links">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full focus:ring-2 focus:ring-blue-500 outline-none" aria-label="Follow us on Facebook"></a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full focus:ring-2 focus:ring-blue-500 outline-none" aria-label="Follow us on Instagram"></a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full focus:ring-2 focus:ring-blue-500 outline-none" aria-label="Follow us on Twitter"></a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Services Navigation">
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#/services" className="hover:text-blue-400 focus:underline outline-none">Furnace Installation</a></li>
              <li><a href="#/services" className="hover:text-blue-400 focus:underline outline-none">AC Repair & Maintenance</a></li>
              <li><a href="#/services" className="hover:text-blue-400 focus:underline outline-none">Water Heater Services</a></li>
              <li><a href="#/services" className="hover:text-blue-400 focus:underline outline-none">Air Filtration</a></li>
            </ul>
          </nav>

          {/* Rebates */}
          <nav aria-label="Footer Rebates Navigation">
            <h3 className="text-white font-semibold mb-6">Rebates</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#/rebates" className="hover:text-blue-400 focus:underline outline-none">Enbridge $7,100 Rebate</a></li>
              <li><a href="#/rebates" className="hover:text-blue-400 focus:underline outline-none">Heat Pump Savings</a></li>
              <li><a href="#/rebates" className="hover:text-blue-400 focus:underline outline-none">Green Home Incentives</a></li>
            </ul>
          </nav>

          {/* Contact & Badges */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <div className="text-sm space-y-3 mb-6">
              <p>Mississauga & GTA Office</p>
              <p className="font-bold text-white"><a href="tel:4164101744" className="focus:underline outline-none">(416) 410-1744</a></p>
              <p>24/7 Emergency Dispatch</p>
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
