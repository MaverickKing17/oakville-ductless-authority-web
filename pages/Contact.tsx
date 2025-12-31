
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

  // Helper to identify emergency status
  const isEmergency = formData.service === 'Emergency (No Heat)';

  // Emergency Monitoring State
  const [activeCrews, setActiveCrews] = useState(4);
  const [dispatchedCrews, setDispatchedCrews] = useState(6);
  const [recentEvents, setRecentEvents] = useState([
    { id: 1, location: 'Port Credit', type: 'Furnace Repair', time: '2 mins ago', status: 'On-Site' },
    { id: 2, location: 'Erin Mills', type: 'Emergency No Heat', time: '8 mins ago', status: 'Dispatched' },
    { id: 3, location: 'Cooksville', type: 'Gas Leak Detection', time: '14 mins ago', status: 'Completed' },
  ]);

  // Simulate real-time data fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCrews(prev => Math.max(2, Math.min(6, prev + (Math.random() > 0.5 ? 1 : -1))));
      setDispatchedCrews(prev => Math.max(4, Math.min(10, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

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
      // Step 2 is bypassed for emergencies
      if (!isEmergency && (!formData.date || !formData.time)) {
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
    if (validateStep()) {
      if (step === 1 && isEmergency) {
        setStep(3); // Skip date selection for emergencies
      } else {
        setStep(prev => prev + 1);
      }
    }
  };

  const prevStep = () => {
    if (step === 3 && isEmergency) {
      setStep(1); // Return to service selection for emergencies
    } else {
      setStep(prev => prev - 1);
    }
  };

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
          <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
            {isEmergency && step === 3 ? 'Emergency Priority Submission' : 'Book Your Appointment'}
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {isEmergency && step === 3 
              ? 'Emergency detected. Your request will be prioritized for the next available dispatch window.' 
              : 'Select a time that works for you. Our TSSA-certified technicians are ready to serve the Mississauga area.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Booking System Container */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-gray-100 h-2 flex">
              <div 
                className={`h-full transition-all duration-500 ${isEmergency ? 'bg-red-600' : 'bg-blue-600'}`} 
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>

            <div className="p-8 md:p-12">
              {isSuccess ? (
                <div className="text-center py-12 animate-in fade-in zoom-in">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl ${isEmergency ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                    {isEmergency ? '🚨' : '✓'}
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 mb-4">
                    {isEmergency ? 'Request Prioritized!' : 'Appointment Confirmed!'}
                  </h2>
                  <p className="text-gray-600 mb-8">
                    {isEmergency ? (
                      <>Thank you, <span className="font-bold">{formData.name}</span>. Our GTA Emergency Dispatch has received your request and is locating the closest crew to <span className="text-red-600 font-bold">Priority Status</span>.</>
                    ) : (
                      <>Thank you, <span className="font-bold">{formData.name}</span>. Your {formData.service} visit is scheduled for <span className="font-bold text-blue-600">{formData.date} at {formData.time}</span>.</>
                    )}
                  </p>
                  <div className={`p-6 rounded-2xl border max-w-md mx-auto mb-8 ${isEmergency ? 'bg-red-50 border-red-100' : 'bg-blue-50 border-blue-100'}`}>
                    <p className={`text-sm font-medium ${isEmergency ? 'text-red-800' : 'text-blue-800'}`}>
                      We've sent a confirmation SMS to {formData.phone}. 
                      {isEmergency && " Stand by your phone for a call from our technician."}
                    </p>
                  </div>
                  <button 
                    onClick={() => { setIsSuccess(false); setStep(1); setFormData({ name: '', phone: '', service: '', date: '', time: '', message: '' }); }}
                    className={`${isEmergency ? 'text-red-600' : 'text-blue-600'} font-bold hover:underline`}
                  >
                    Return to Start
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
                                ? (s.id === 'emergency' ? 'border-red-600 bg-red-50' : 'border-blue-600 bg-blue-50') 
                                : 'border-gray-100 hover:border-blue-200 bg-gray-50'
                            }`}
                          >
                            <span className="text-3xl mr-4 group-hover:scale-110 transition-transform">{s.icon}</span>
                            <span className={`font-bold ${formData.service === s.label ? (s.id === 'emergency' ? 'text-red-900' : 'text-blue-900') : 'text-gray-700'}`}>
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
                          className={`${isEmergency ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-10 py-4 rounded-xl font-bold shadow-lg transition-all flex items-center`}
                        >
                          {isEmergency ? 'Confirm Emergency' : 'Next Step'}
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" /></svg>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Date & Time (Bypassed if isEmergency) */}
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
                        <span className={`w-8 h-8 text-white rounded-full flex items-center justify-center text-sm mr-3 ${isEmergency ? 'bg-red-600' : 'bg-blue-600'}`}>
                          {isEmergency ? '!' : '3'}
                        </span>
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
                          placeholder={isEmergency ? "Please describe the symptoms (e.g., smell of gas, cold air blowing)..." : "Tell us more about the issue..."}
                        ></textarea>
                      </div>

                      <div className={`mt-8 p-6 rounded-2xl border flex items-start space-x-4 ${isEmergency ? 'bg-red-50 border-red-100' : 'bg-blue-50 border-blue-100'}`}>
                        <div className="text-2xl">{isEmergency ? '🚨' : '📅'}</div>
                        <div>
                          <p className={`text-sm font-bold ${isEmergency ? 'text-red-900' : 'text-blue-900'}`}>Summary of Booking</p>
                          <p className={`text-xs ${isEmergency ? 'text-red-700' : 'text-blue-700'}`}>
                            {isEmergency ? (
                              <span className="font-bold">IMMEDIATE EMERGENCY DISPATCH: {formData.service}</span>
                            ) : (
                              <>{formData.service} on {formData.date} during the {formData.time} window.</>
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="mt-12 flex justify-between items-center">
                        <button type="button" onClick={prevStep} className="text-gray-500 font-bold hover:text-gray-700">Back</button>
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className={`px-12 py-4 rounded-xl font-black shadow-2xl transition-all ${
                            isEmergency 
                              ? 'bg-red-600 text-white hover:bg-red-700 animate-pulse' 
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                          {isSubmitting ? (isEmergency ? 'Dispatching...' : 'Securing Slot...') : (isEmergency ? 'DISPATCH EMERGENCY CREW' : 'Confirm Appointment')}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Contact Sidebar / Monitoring Dashboard */}
          <div className="space-y-8">
            {/* Real-Time Emergency Operations Dashboard */}
            <div className="bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-800 overflow-hidden">
              <div className="bg-red-600 px-6 py-2 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Live Ops Dashboard</span>
                </div>
                <span className="text-[10px] opacity-70">GTA Dispatch v4.2</span>
              </div>
              
              <div className="p-6">
                {/* Stats Counters */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Crews Active</p>
                    <div className="flex items-baseline space-x-2">
                       <span className="text-2xl font-black text-white" role="status" aria-live="polite">{activeCrews}</span>
                       <span className="text-[10px] text-green-400 font-bold">READY</span>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">On Dispatch</p>
                    <div className="flex items-baseline space-x-2">
                       <span className="text-2xl font-black text-red-500" role="status" aria-live="polite">{dispatchedCrews}</span>
                       <span className="text-[10px] text-red-400 font-bold">ACTIVE</span>
                    </div>
                  </div>
                </div>

                {/* Performance Ticker */}
                <div className="bg-slate-800/30 rounded-2xl p-4 border border-slate-700/30 mb-6">
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Avg. Response Time</span>
                      <span className="text-[10px] font-bold text-blue-400">FASTER THAN AVG</span>
                   </div>
                   <div className="flex items-center space-x-3">
                      <span className="text-3xl font-black tracking-tighter">32m</span>
                      <div className="flex-grow h-1.5 bg-slate-700 rounded-full overflow-hidden">
                         <div className="h-full bg-blue-500 w-[85%] rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                      </div>
                   </div>
                </div>

                {/* Recent Event Feed */}
                <div>
                   <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Live Dispatch Feed</h4>
                   <div className="space-y-3" role="log" aria-live="polite">
                      {recentEvents.map(event => (
                        <div key={event.id} className="flex items-start justify-between text-[11px] py-2 border-b border-slate-800/50 last:border-0 group">
                           <div className="flex space-x-3">
                              <span className="w-1 h-1 bg-red-500 rounded-full mt-1.5 group-hover:scale-150 transition-transform"></span>
                              <div>
                                 <p className="font-bold text-slate-200">{event.type}</p>
                                 <p className="text-slate-500">{event.location}</p>
                              </div>
                           </div>
                           <div className="text-right">
                              <p className="text-blue-400 font-bold">{event.status}</p>
                              <p className="text-slate-600 text-[9px]">{event.time}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
              
              <div className="bg-slate-800/80 px-6 py-4 text-center">
                 <p className="text-[10px] text-slate-400">Emergency Dispatch priority is given to <span className="text-white font-bold">Port Credit & Mississauga South</span> currently.</p>
              </div>
            </div>

            <div className="bg-blue-600 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden group">
              <h3 className="text-2xl font-bold mb-4">Direct Priority Line</h3>
              <p className="mb-8 text-blue-100 text-sm">Bypass the digital queue for active leaks or complete furnace failures.</p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-xl shrink-0" aria-hidden="true">📞</span>
                  <div>
                    <p className="font-bold">24/7 Command Center</p>
                    <a href="tel:4164101744" className="text-white text-3xl font-black hover:scale-105 transition-transform inline-block">
                      (416) 410-1744
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Component */}
            <div className="bg-white p-2 rounded-3xl shadow-xl border border-gray-100 h-[250px] overflow-hidden relative group">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-md">
                 <p className="text-blue-900 font-black uppercase tracking-widest text-[10px]">Service Boundary: GTA</p>
              </div>
              
              {GOOGLE_MAPS_API_KEY === 'YOUR_GOOGLE_MAPS_API_KEY_HERE' ? (
                <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center text-center p-8">
                  <div className="text-4xl mb-4 opacity-50">📍</div>
                  <h4 className="font-bold text-gray-400 mb-2">Coverage Map</h4>
                  <img 
                    src="https://picsum.photos/seed/mississauga/800/400" 
                    className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" 
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
