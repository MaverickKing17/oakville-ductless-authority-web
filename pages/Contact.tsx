
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Furnace Installation',
    message: ''
  });

  const [errors, setErrors] = useState({
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Regex for Canadian/North American phone numbers
  // Supports: +1 (XXX) XXX-XXXX, 1XXX-XXX-XXXX, XXX XXX XXXX, XXXXXXXXXX, etc.
  const canadianPhoneRegex = /^(\+?1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

  const validatePhone = (value: string) => {
    if (!value) {
      return 'Phone number is required';
    }
    if (!canadianPhoneRegex.test(value)) {
      return 'Please enter a valid Canadian phone number (e.g. 416-410-1744)';
    }
    return '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error as user types
    if (name === 'phone') {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const handlePhoneBlur = () => {
    setErrors(prev => ({ ...prev, phone: validatePhone(formData.phone) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneErr = validatePhone(formData.phone);
    
    if (phoneErr) {
      setErrors({ phone: phoneErr });
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', service: 'Furnace Installation', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

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
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 text-4xl">✓</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Received!</h2>
                <p className="text-gray-500">Thank you for reaching out. One of our GTA experts will contact you shortly.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-blue-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handlePhoneBlur}
                      className={`w-full p-4 bg-gray-50 border rounded-xl focus:ring-2 outline-none transition-all ${
                        errors.phone 
                          ? 'border-red-500 focus:ring-red-200' 
                          : 'border-gray-200 focus:ring-blue-600'
                      }`} 
                      placeholder="(416) 410-1744" 
                    />
                    {errors.phone && (
                      <p className="mt-2 text-xs font-semibold text-red-500 animate-in fade-in slide-in-from-top-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service Type</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  >
                    <option>Furnace Installation</option>
                    <option>AC Repair</option>
                    <option>Heat Pump Quote</option>
                    <option>Emergency Service</option>
                    <option>Rebate Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl h-32 focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Map Placeholder */}
          <div className="space-y-8">
            <div className="bg-blue-600 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-110 transition-transform duration-700"></div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">Connect Locally</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-xl shrink-0">📞</div>
                  <div>
                    <p className="font-bold">Phone</p>
                    <p className="text-blue-100 text-lg hover:text-white transition-colors">
                      <a href="tel:4164101744">(416) 410-1744</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-xl shrink-0">📍</div>
                  <div>
                    <p className="font-bold">Serving Mississauga & GTA</p>
                    <p className="text-blue-100">Central Dispatch: Port Credit, ON</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-xl shrink-0">⚡</div>
                  <div>
                    <p className="font-bold">24/7 Priority Support</p>
                    <p className="text-blue-100">Crews always on standby for emergencies.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Map */}
            <div className="bg-gray-200 h-64 rounded-3xl relative overflow-hidden flex items-center justify-center border border-gray-200 group">
               <div className="absolute inset-0 z-10 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
               <img 
                 src="https://picsum.photos/seed/mississauga/800/400" 
                 className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" 
                 alt="Service Area Map"
               />
               <div className="relative z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-xl">
                 <p className="text-blue-900 font-black uppercase tracking-widest text-[10px]">Active Service Area: GTA</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
