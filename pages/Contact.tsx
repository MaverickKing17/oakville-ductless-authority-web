
import React, { useState } from 'react';

// Placeholder for Google Maps API Key
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY_HERE';

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

  const canadianPhoneRegex = /^(\+?1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

  const validatePhone = (value: string) => {
    if (!value) return 'Phone number is required';
    if (!canadianPhoneRegex.test(value)) return 'Please enter a valid Canadian phone number (e.g. 416-410-1744)';
    return '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'phone') setErrors(prev => ({ ...prev, phone: '' }));
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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', service: 'Furnace Installation', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  // Google Maps Embed URL for Mississauga/GTA area
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=Mississauga,ON+Canada&zoom=10`;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Contact Our Experts</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Ready to upgrade your home comfort? Send us a message or call for 24/7 emergency support.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Container */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            {isSuccess ? (
              <div 
                className="h-full flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500"
                role="alert"
                aria-live="assertive"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 text-4xl" aria-hidden="true">✓</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Received!</h2>
                <p className="text-gray-500">Thank you for reaching out. One of our GTA experts will contact you shortly.</p>
                <button onClick={() => setIsSuccess(false)} className="mt-8 text-blue-600 font-bold hover:underline focus:ring-2 focus:ring-blue-500 rounded outline-none px-2">
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input 
                      id="name"
                      type="text" 
                      name="name"
                      required
                      aria-required="true"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input 
                      id="phone"
                      type="tel" 
                      name="phone"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handlePhoneBlur}
                      className={`w-full p-4 bg-gray-50 border rounded-xl focus:ring-2 outline-none transition-all ${
                        errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-600'
                      }`} 
                      placeholder="(416) 410-1744" 
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-2 text-xs font-semibold text-red-500 animate-in fade-in slide-in-from-top-1" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">Service Type</label>
                  <select 
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                  >
                    <option>Furnace Installation</option>
                    <option>AC Repair</option>
                    <option>Heat Pump Quote</option>
                    <option>Emergency Service</option>
                    <option>Rebate Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    aria-required="true"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl h-32 focus:ring-2 focus:ring-blue-600 outline-none resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg focus:ring-4 focus:ring-blue-300 outline-none transition-all flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8" role="complementary" aria-label="Contact Information">
            <div className="bg-blue-600 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden group">
              <h3 className="text-2xl font-bold mb-6">Connect Locally</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-xl shrink-0" aria-hidden="true">📞</span>
                  <div>
                    <p className="font-bold">Phone</p>
                    <a href="tel:4164101744" className="text-blue-100 text-lg hover:text-white transition-colors focus:underline outline-none">
                      (416) 410-1744
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-xl shrink-0" aria-hidden="true">📍</span>
                  <div>
                    <p className="font-bold">Serving Mississauga & GTA</p>
                    <p className="text-blue-100">Central Dispatch: Port Credit, ON</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Component */}
            <div className="bg-white p-2 rounded-3xl shadow-xl border border-gray-100 h-[400px] overflow-hidden relative group">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-md">
                 <p className="text-blue-900 font-black uppercase tracking-widest text-[10px]">Active Service Area: Mississauga & GTA</p>
              </div>
              
              {GOOGLE_MAPS_API_KEY === 'YOUR_GOOGLE_MAPS_API_KEY_HERE' ? (
                <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center text-center p-8">
                  <div className="text-4xl mb-4">📍</div>
                  <h4 className="font-bold text-gray-800 mb-2">Live Map Loading...</h4>
                  <p className="text-xs text-gray-500">
                    Map integration is ready. Please provide a valid Google Maps API key in Contact.tsx to enable the live view.
                  </p>
                  <img 
                    src="https://picsum.photos/seed/mississauga/800/400" 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" 
                    alt="Map preview"
                  />
                </div>
              ) : (
                <iframe
                  title="Home Renovation Depot Service Area Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapEmbedUrl}
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
