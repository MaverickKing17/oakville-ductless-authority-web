
import React, { useState, useEffect } from 'react';

// Placeholder for Google Maps API Key
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY_HERE';

const Contact: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    phone: '',
    service: '',
    dateTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Generate next 7 days for the booking system
  const getNextDays = () => {
    const days = [];
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    for (let i = 1; i <= 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      // Skip Sundays for non-emergency bookings in the mock
      if (d.getDay() !== 0) {
        days.push({
          full: d.toISOString().split('T')[0],
          label: d.toLocaleDateString('en-CA', options)
        });
      }
    }
    return days;
  };

  const availableDays = getNextDays();
  const timeSlots = ['08:00 AM', '10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM'];

  const canadianPhoneRegex = /^(\+?1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

  const validateStep = () => {
    const newErrors = { phone: '', service: '', dateTime: '' };
    let isValid = true;

    if (step === 1) {
      if (!formData.service) {
        newErrors.service = 'Please select a service type';
        isValid = false;
      }
    } else if (step === 2) {
      if (!formData.date || !formData.time) {
        newErrors.dateTime = 'Please select both a date and a time slot';
        isValid = false;
      }
    } else if (step === 3) {
      if (!formData.name) isValid = false;
      if (!canadianPhoneRegex.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid Canadian phone number';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const nextStep = () => {
    if (validateStep()) setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'phone') setErrors(prev => ({ ...prev, phone: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsSubmitting(true);
    // Simulate API call to booking engine
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  // Google Maps Embed URL for Mississauga/GTA area
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=Mississauga,ON+Canada&zoom=10`;

  const services = [
    { id: 'furnace', label: 'Furnace Repair/Install', icon: '🔥' },
    { id: 'ac', label: 'AC Service/Install', icon: '❄️' },
    { id: 'heatpump', label: 'Heat Pump (Rebate)', icon: '🔋' },
    { id: 'emergency', label: 'Emergency (No Heat)', icon: '🚨' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Book Your Appointment</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Select a time that works for you. Our TSSA-certified technicians are ready to serve the Mississauga area.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Booking System Container */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-gray-100 h-2 flex">
              <div 
                className="bg-blue-600 h-full transition-all duration-500" 
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>

            <div className="p-8 md:p-12">
              {isSuccess ? (
                <div className="text-center py-12 animate-in fade-in zoom-in">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl">✓</div>
                  <h2 className="text-3xl font-black text-gray-900 mb-4">Appointment Confirmed!</h2>
                  <p className="text-gray-600 mb-8">
                    Thank you, <span className="font-bold">{formData.name}</span>. Your {formData.service} visit is scheduled for <span className="font-bold text-blue-600">{formData.date} at {formData.time}</span>.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 max-w-md mx-auto mb-8">
                    <p className="text-sm text-blue-800 font-medium">We've sent a confirmation SMS to {formData.phone}.</p>
                  </div>
                  <button 
                    onClick={() => { setIsSuccess(false); setStep(1); setFormData({ name: '', phone: '', service: '', date: '', time: '', message: '' }); }}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Book another appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Service Selection */}
                  {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-right-4">
                      <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                        <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                        What do you need help with?
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {services.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: s.label })}
                            className={`flex items-center p-6 rounded-2xl border-2 transition-all text-left group ${
                              formData.service === s.label 
                                ? 'border-blue-600 bg-blue-50' 
                                : 'border-gray-100 hover:border-blue-200 bg-gray-50'
                            }`}
                          >
                            <span className="text-3xl mr-4 group-hover:scale-110 transition-transform">{s.icon}</span>
                            <span className={`font-bold ${formData.service === s.label ? 'text-blue-900' : 'text-gray-700'}`}>
                              {s.label}
                            </span>
                          </button>
                        ))}
                      </div>
                      {errors.service && <p className="mt-4 text-red-500 font-bold text-sm">{errors.service}</p>}
                      <div className="mt-12 flex justify-end">
                        <button 
                          type="button" 
                          onClick={nextStep}
                          className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all flex items-center"
                        >
                          Next Step
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" /></svg>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Date & Time */}
                  {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-right-4">
                      <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                        <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                        Select Date & Time
                      </h2>
                      
                      <div className="mb-8">
                        <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Available Days</label>
                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                          {availableDays.map((d) => (
                            <button
                              key={d.full}
                              type="button"
                              onClick={() => setFormData({ ...formData, date: d.label })}
                              className={`p-3 rounded-xl border-2 text-center transition-all ${
                                formData.date === d.label 
                                  ? 'border-blue-600 bg-blue-600 text-white shadow-md' 
                                  : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-blue-200'
                              }`}
                            >
                              <span className="block text-[10px] font-bold uppercase">{d.label.split(',')[0]}</span>
                              <span className="block text-lg font-black">{d.label.split(' ')[2]}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {formData.date && (
                        <div className="animate-in fade-in duration-500">
                          <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Select Arrival Window</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {timeSlots.map((t) => (
                              <button
                                key={t}
                                type="button"
                                onClick={() => setFormData({ ...formData, time: t })}
                                className={`p-4 rounded-xl border-2 font-bold transition-all ${
                                  formData.time === t 
                                    ? 'border-blue-600 bg-blue-50 text-blue-900' 
                                    : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-blue-200'
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {errors.dateTime && <p className="mt-4 text-red-500 font-bold text-sm">{errors.dateTime}</p>}

                      <div className="mt-12 flex justify-between">
                        <button type="button" onClick={prevStep} className="text-gray-500 font-bold hover:text-gray-700">Back</button>
                        <button 
                          type="button" 
                          onClick={nextStep}
                          className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all"
                        >
                          Next Step
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Contact Details */}
                  {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-right-4">
                      <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                        <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                        Confirm Your Information
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                          <input 
                            id="name"
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" 
                            placeholder="Your Name" 
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                          <input 
                            id="phone"
                            type="tel" 
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full p-4 bg-gray-50 border rounded-xl focus:ring-2 outline-none ${
                              errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-600'
                            }`} 
                            placeholder="(416) 410-1744" 
                          />
                          {errors.phone && <p className="mt-2 text-xs font-bold text-red-500">{errors.phone}</p>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Notes for Technician (Optional)</label>
                        <textarea 
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl h-24 focus:ring-2 focus:ring-blue-600 outline-none resize-none" 
                          placeholder="Tell us more about the issue..."
                        ></textarea>
                      </div>

                      <div className="mt-8 bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-start space-x-4">
                        <div className="text-2xl">📅</div>
                        <div>
                          <p className="text-sm font-bold text-blue-900">Summary of Booking</p>
                          <p className="text-xs text-blue-700">{formData.service} on {formData.date} during the {formData.time} window.</p>
                        </div>
                      </div>

                      <div className="mt-12 flex justify-between items-center">
                        <button type="button" onClick={prevStep} className="text-gray-500 font-bold hover:text-gray-700">Back</button>
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className={`bg-blue-600 text-white px-12 py-4 rounded-xl font-black shadow-2xl hover:bg-blue-700 transition-all ${
                            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                          }`}
                        >
                          {isSubmitting ? 'Securing Slot...' : 'Confirm Appointment'}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Contact Sidebar / Map */}
          <div className="space-y-8">
            <div className="bg-blue-600 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden group">
              <h3 className="text-2xl font-bold mb-6">Need Help Fast?</h3>
              <p className="mb-8 text-blue-100 text-sm">If you have a gas leak or a furnace emergency, don't wait for a slot. Call our priority line now.</p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-xl shrink-0" aria-hidden="true">📞</span>
                  <div>
                    <p className="font-bold">24/7 Dispatch</p>
                    <a href="tel:4164101744" className="text-white text-xl font-black hover:underline">
                      (416) 410-1744
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Component */}
            <div className="bg-white p-2 rounded-3xl shadow-xl border border-gray-100 h-[300px] overflow-hidden relative group">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-md">
                 <p className="text-blue-900 font-black uppercase tracking-widest text-[10px]">Active Area: GTA</p>
              </div>
              
              {GOOGLE_MAPS_API_KEY === 'YOUR_GOOGLE_MAPS_API_KEY_HERE' ? (
                <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center text-center p-8">
                  <div className="text-4xl mb-4">📍</div>
                  <h4 className="font-bold text-gray-800 mb-2">Live Map Area</h4>
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
