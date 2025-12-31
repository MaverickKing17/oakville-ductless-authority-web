
import React, { useState, useEffect } from 'react';

// Placeholder for Google Maps API Key
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY_HERE';

interface DispatchEvent {
  id: number;
  location: string;
  type: string;
  time: string;
  status: 'On-Site' | 'Dispatched' | 'Completed' | 'En-Route';
  priority: 1 | 2 | 3;
}

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
  const [systemStatus, setSystemStatus] = useState('System Scanning...');
  const [recentEvents, setRecentEvents] = useState<DispatchEvent[]>([
    { id: 1, location: 'Port Credit', type: 'Furnace Repair', time: '14:22', status: 'On-Site', priority: 2 },
    { id: 2, location: 'Erin Mills', type: 'Emergency No Heat', time: '14:18', status: 'Dispatched', priority: 1 },
    { id: 3, location: 'Cooksville', type: 'Gas Leak Detection', time: '14:10', status: 'Completed', priority: 1 },
  ]);

  // Simulate real-time data fluctuations and new events
  useEffect(() => {
    const locations = ['Streetsville', 'Meadowvale', 'Churchill Meadows', 'Lakeview', 'Mineola', 'Sheridan'];
    const types = ['Emergency No Heat', 'AC Failure', 'Furnace Triage', 'Rebate Audit', 'Maintenance'];
    const statusCycle = ['Scanning Mississauga South...', 'Analyzing Load Balance...', 'GPS Sync Active...', 'Optimizing Crew Routes...'];
    
    let statusIdx = 0;

    const interval = setInterval(() => {
      // Update counters
      setActiveCrews(prev => Math.max(2, Math.min(6, prev + (Math.random() > 0.5 ? 1 : -1))));
      setDispatchedCrews(prev => Math.max(4, Math.min(10, prev + (Math.random() > 0.5 ? 1 : -1))));
      
      // Update system status text
      setSystemStatus(statusCycle[statusIdx % statusCycle.length]);
      statusIdx++;

      // Occasionally add a new event
      if (Math.random() > 0.7) {
        const newEvent: DispatchEvent = {
          id: Date.now(),
          location: locations[Math.floor(Math.random() * locations.length)],
          type: types[Math.floor(Math.random() * types.length)],
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
          status: Math.random() > 0.5 ? 'Dispatched' : 'En-Route',
          priority: Math.random() > 0.8 ? 1 : (Math.random() > 0.5 ? 2 : 3)
        };
        setRecentEvents(prev => [newEvent, ...prev.slice(0, 4)]);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const getNextDays = () => {
    const days = [];
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    for (let i = 1; i <= 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
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
        setFormData(prev => ({ ...prev, date: 'ASAP', time: 'Priority Window' }));
        setStep(3); 
      } else {
        setStep(prev => prev + 1);
      }
    }
  };

  const prevStep = () => {
    if (step === 3 && isEmergency) {
      setStep(1); 
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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=Mississauga,ON+Canada&zoom=10`;

  const services = [
    { id: 'furnace', label: 'Furnace Repair/Install', icon: '🔥' },
    { id: 'ac', label: 'AC Service/Install', icon: '❄️' },
    { id: 'heatpump', label: 'Heat Pump (Rebate)', icon: '🔋' },
    { id: 'emergency', label: 'Emergency (No Heat)', icon: '🚨' },
  ];

  const getProgressWidth = () => {
    if (isEmergency) {
      return step === 1 ? '33%' : '100%';
    }
    return `${(step / 3) * 100}%`;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
            {isEmergency && step === 3 ? 'Priority Dispatch Required' : 'Secure Your Service Window'}
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {isEmergency && step === 3 
              ? 'Critical HVAC failure detected. Enter your location details below for immediate response from our closest TSSA technician.' 
              : 'Our Mississauga dispatch center is ready to help. Select your service type to begin.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Booking System Container */}
          <div className={`lg:col-span-2 bg-white rounded-3xl shadow-xl border overflow-hidden transition-all duration-300 ${isEmergency ? 'border-red-200' : 'border-gray-100'}`}>
            <div className="bg-gray-100 h-2 flex">
              <div 
                className={`h-full transition-all duration-500 ${isEmergency ? 'bg-red-600' : 'bg-blue-600'}`} 
                style={{ width: getProgressWidth() }}
              ></div>
            </div>

            <div className="p-8 md:p-12">
              {isSuccess ? (
                <div className="text-center py-12 animate-in fade-in zoom-in">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl ${isEmergency ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                    {isEmergency ? '🚨' : '✓'}
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 mb-4">
                    {isEmergency ? 'Emergency Dispatched!' : 'Appointment Confirmed!'}
                  </h2>
                  <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
                    {isEmergency ? (
                      <>Your <span className="text-red-600 font-bold uppercase">Priority Level 1</span> request has been broadcasted to our active crews. A technician will contact you within minutes.</>
                    ) : (
                      <>Thank you, <span className="font-bold">{formData.name}</span>. Your {formData.service} appointment is confirmed for <span className="font-bold text-blue-600">{formData.date}</span>.</>
                    )}
                  </p>
                  <button 
                    onClick={() => { setIsSuccess(false); setStep(1); setFormData({ name: '', phone: '', service: '', date: '', time: '', message: '' }); }}
                    className={`${isEmergency ? 'text-red-600 hover:text-red-700' : 'text-blue-600 hover:text-blue-700'} font-bold hover:underline`}
                  >
                    Start new request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-right-4">
                      <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                        <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                        What service do you require?
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {services.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: s.label })}
                            className={`flex items-center p-6 rounded-2xl border-2 transition-all text-left group relative overflow-hidden ${
                              formData.service === s.label 
                                ? (s.id === 'emergency' ? 'border-red-600 bg-red-50' : 'border-blue-600 bg-blue-50') 
                                : 'border-gray-100 hover:border-blue-200 bg-gray-50'
                            }`}
                          >
                            {s.id === 'emergency' && (
                              <div className="absolute top-0 right-0 bg-red-600 text-[8px] text-white px-3 py-1 font-black uppercase tracking-widest rounded-bl-lg">Fast Track</div>
                            )}
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
                          className={`${isEmergency ? 'bg-red-600 hover:bg-red-700 animate-pulse' : 'bg-blue-600 hover:bg-blue-700'} text-white px-10 py-4 rounded-xl font-bold shadow-lg transition-all flex items-center`}
                        >
                          {isEmergency ? 'Proceed to Priority Contact' : 'Select Arrival Window'}
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" /></svg>
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-right-4">
                      <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                        <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                        Choose Arrival Date
                      </h2>
                      <div className="mb-8">
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
                          <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Select Time Window</label>
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
                        <button type="button" onClick={nextStep} className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all">Next: Contact Info</button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-right-4">
                      <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                        <span className={`w-8 h-8 text-white rounded-full flex items-center justify-center text-sm mr-3 ${isEmergency ? 'bg-red-600' : 'bg-blue-600'}`}>
                          {isEmergency ? '!' : '3'}
                        </span>
                        {isEmergency ? 'Dispatch Details' : 'Final Step: Contact Information'}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Primary Contact Name</label>
                          <input id="name" type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Full Name" />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Mobile Phone</label>
                          <input id="phone" type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className={`w-full p-4 bg-gray-50 border rounded-xl focus:ring-2 outline-none ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-600'}`} placeholder="(416) 000-0000" />
                          {errors.phone && <p className="mt-2 text-xs font-bold text-red-500">{errors.phone}</p>}
                        </div>
                      </div>
                      <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl h-24 focus:ring-2 focus:ring-blue-600 outline-none resize-none" placeholder={isEmergency ? "e.g., Furnace is making loud noise and blowing cold air..." : "Additional details..."}></textarea>
                      <div className="mt-12 flex justify-between items-center">
                        <button type="button" onClick={prevStep} className="text-gray-500 font-bold hover:text-gray-700">Back</button>
                        <button type="submit" disabled={isSubmitting} className={`px-12 py-4 rounded-xl font-black shadow-2xl transition-all ${isEmergency ? 'bg-red-600 text-white hover:bg-red-700 active:scale-95' : 'bg-blue-600 text-white hover:bg-blue-700'} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                          {isSubmitting ? 'Sending Request...' : (isEmergency ? 'DISPATCH PRIORITY CREW' : 'Book Appointment')}
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
            {/* Enhanced Real-Time Emergency Operations Dashboard */}
            <div className="bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-800 overflow-hidden relative">
              {/* Critical Alert Banner */}
              {recentEvents.some(e => e.priority === 1 && e.status !== 'Completed') && (
                <div className="bg-red-600/20 backdrop-blur-md border-b border-red-500/50 px-6 py-1.5 flex items-center justify-center space-x-2 animate-pulse">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-500">Critical Priority Alert</span>
                </div>
              )}
              
              <div className="bg-slate-950 px-6 py-4 flex justify-between items-center border-b border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-ping"></div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] block text-slate-400">Live Ops Center</span>
                    <span className="text-[9px] font-mono text-slate-600">DISPATCH_V4.2.0</span>
                  </div>
                </div>
                <div className="text-right">
                   <span className="text-[10px] font-mono text-blue-500 font-bold">{new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit', hour12: false})}</span>
                </div>
              </div>
              
              <div className="p-6">
                {/* Stats Counters */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/30 group hover:border-blue-500/50 transition-colors">
                    <p className="text-[9px] text-slate-500 font-black uppercase tracking-wider mb-1">Crews Active</p>
                    <div className="flex items-baseline space-x-2">
                       <span className="text-3xl font-black text-white" role="status" aria-live="polite">{activeCrews}</span>
                       <span className="text-[10px] text-green-500 font-bold bg-green-500/10 px-1.5 py-0.5 rounded">ONLINE</span>
                    </div>
                  </div>
                  <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/30 group hover:border-red-500/50 transition-colors">
                    <p className="text-[9px] text-slate-500 font-black uppercase tracking-wider mb-1">On Dispatch</p>
                    <div className="flex items-baseline space-x-2">
                       <span className="text-3xl font-black text-red-500" role="status" aria-live="polite">{dispatchedCrews}</span>
                       <span className="text-[10px] text-red-400 font-bold bg-red-500/10 px-1.5 py-0.5 rounded animate-pulse">BUSY</span>
                    </div>
                  </div>
                </div>

                {/* Radar Scanning Icon Component */}
                <div className="bg-slate-800/20 rounded-2xl p-6 border border-slate-700/20 mb-6 flex items-center space-x-6">
                  <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping"></div>
                    <div className="absolute inset-2 rounded-full bg-blue-500/20 animate-pulse"></div>
                    {/* Rotating Radar Sweep */}
                    <div className="absolute inset-0 rounded-full border border-slate-700 overflow-hidden">
                      <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent to-blue-500/60 origin-left animate-[radar-sweep_4s_linear_infinite]"></div>
                    </div>
                    {/* Center point */}
                    <div className="w-2 h-2 bg-blue-500 rounded-full z-10 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Network Status</span>
                      <span className="text-[9px] font-bold text-blue-400">LIVE</span>
                    </div>
                    <p className="text-xs font-mono text-blue-100/80 uppercase tracking-tighter truncate max-w-[140px]">{systemStatus}</p>
                    <div className="flex space-x-1 mt-2">
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className={`h-1 w-2 rounded-full bg-blue-600/30 overflow-hidden`}>
                          <div className={`h-full bg-blue-400 animate-[pulse_1s_infinite]`} style={{ animationDelay: `${i * 0.1}s` }}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Event Feed */}
                <div>
                   <div className="flex items-center justify-between mb-4">
                      <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Real-Time Activity Log</h4>
                   </div>
                   
                   <div className="space-y-2 max-h-[200px] overflow-hidden" role="log" aria-live="polite">
                      {recentEvents.map(event => (
                        <div key={event.id} className={`flex items-start justify-between p-3 rounded-xl transition-all duration-500 border border-transparent ${
                          event.priority === 1 ? 'bg-red-950/20 border-red-900/30' : 'bg-slate-800/30'
                        }`}>
                           <div className="flex space-x-3">
                              <div className="flex flex-col items-center pt-1">
                                <span className={`w-1.5 h-1.5 rounded-full ${
                                  event.priority === 1 ? 'bg-red-500 animate-pulse' : 'bg-blue-400'
                                }`}></span>
                              </div>
                              <div>
                                 <div className="flex items-center space-x-2 mb-0.5">
                                    <p className="font-bold text-[11px] text-slate-200">{event.type}</p>
                                    {event.priority === 1 && (
                                      <span className="text-[8px] font-black bg-red-600 text-white px-1.5 rounded-sm animate-pulse">PRIORITY 1</span>
                                    )}
                                 </div>
                                 <p className="text-slate-500 text-[10px] tracking-tight">{event.location}</p>
                              </div>
                           </div>
                           <div className="text-right">
                              <p className={`text-[10px] font-black ${
                                event.status === 'Dispatched' ? 'text-red-400' : 'text-blue-400'
                              }`}>{event.status.toUpperCase()}</p>
                              <p className="text-slate-600 font-mono text-[9px] mt-0.5">{event.time}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden group">
              <h3 className="text-2xl font-bold mb-4">Direct Priority Line</h3>
              <p className="mb-8 text-blue-100 text-sm">Bypass the digital queue for active leaks or complete furnace failures.</p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-xl shrink-0">📞</span>
                  <div>
                    <p className="font-bold">24/7 Command Center</p>
                    <a href="tel:4164101744" className="text-white text-3xl font-black hover:scale-105 transition-transform inline-block focus:outline-none focus:ring-2 focus:ring-white rounded-lg">
                      (416) 410-1744
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Component */}
            <div className="bg-white p-2 rounded-3xl shadow-xl border border-gray-100 h-[250px] overflow-hidden relative group">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-md">
                 <p className="text-blue-900 font-black uppercase tracking-widest text-[10px]">Service Area: Mississauga & South GTA</p>
              </div>
              <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
                <img src="https://picsum.photos/seed/mississauga/800/400" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none grayscale" alt="Map preview" />
                <div className="text-4xl mb-4 opacity-50 relative z-10">📍</div>
                <h4 className="font-bold text-gray-400 mb-2 relative z-10">Coverage Map</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes radar-sweep {
          from { transform: rotate(0deg) translateX(0); }
          to { transform: rotate(360deg) translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Contact;
