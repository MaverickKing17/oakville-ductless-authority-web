
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isHandoff, setIsHandoff] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = sessionStorage.getItem('hvac_chat_history');
    if (saved) {
      return JSON.parse(saved).map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) }));
    }
    return [
      { 
        role: 'bot', 
        text: 'Hello! I am Marc, your AI HVAC Specialist. I can instantly analyze your heating issues or calculate your $7,100 rebate eligibility. How can I help you today?',
        timestamp: new Date()
      }
    ];
  });
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);

  // Auto-scroll and persistence
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    sessionStorage.setItem('hvac_chat_history', JSON.stringify(messages));
  }, [messages, isTyping, isOpen]);

  const initChat = () => {
    if (!chatSessionRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatSessionRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `
            You are "Marc", an AI-powered Senior HVAC Support Expert for "Canada's Home Renovation Depot" in the GTA.
            Your tone is intelligent, technical yet accessible, and authoritative.
            Expertise: Furnace installation, AC repair, heat pump rebates ($7,100 Enbridge program), TSSA compliance.
            Location focus: Oakville, Burlington, Mississauga, Milton, and the Halton region.
            Crucial: You use data-driven insights to help users. If a user asks for a human, you seamlessly offer a transfer to dispatch.
            Keep responses crisp and data-focused. Mention you are headquartered in Oakville.
          `,
        },
      });
    }
  };

  const handleSend = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    initChat();
    const userMsg: Message = { role: 'user', text: trimmed, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const result = await chatSessionRef.current.sendMessageStream({ message: trimmed });
      let fullResponse = '';
      
      // Add placeholder for bot response
      setMessages(prev => [...prev, { role: 'bot', text: '', timestamp: new Date() }]);
      
      for await (const chunk of result) {
        fullResponse += chunk.text;
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { ...updated[updated.length - 1], text: fullResponse };
          return updated;
        });
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: "I'm experiencing a brief uplink issue. Please contact our human dispatch directly at (416) 410-1744 for priority support.",
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const requestHumanHandoff = () => {
    setIsHandoff(true);
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: "Understood. Bypassing AI protocols. Notifying our Oakville Command Center... a human dispatch officer is joining.",
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-sans">
      {isOpen ? (
        <div 
          id="chat-window"
          className="bg-white w-[400px] h-[620px] rounded-[32px] shadow-[0_32px_128px_-16px_rgba(249,115,22,0.3)] flex flex-col overflow-hidden border border-orange-100 mb-4 animate-in fade-in slide-in-from-bottom-6 duration-300"
          role="dialog"
          aria-labelledby="chat-heading"
        >
          {/* Header: High-Tech Orange Glow */}
          <div className="bg-orange-600 p-6 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-24 translate-x-24 blur-2xl"></div>
            <div className="flex justify-between items-center relative z-10">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center border border-white/40 backdrop-blur-xl shadow-inner">
                    <span className="text-2xl animate-pulse">🤖</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-orange-600 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
                </div>
                <div>
                  <h2 id="chat-heading" className="font-black text-xl leading-tight tracking-tight">AI HVAC Assistant</h2>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[10px] text-orange-100 uppercase font-black tracking-[0.2em] opacity-80">Marc V4.2 Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-white/20 p-2.5 rounded-2xl transition-all focus:ring-2 focus:ring-white outline-none active:scale-90"
                aria-label="Minimize"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef} 
            className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-50/80"
            aria-live="polite"
            role="log"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div 
                  className={`group relative max-w-[85%] p-4 rounded-2xl text-[13px] font-medium leading-relaxed shadow-sm transition-all ${
                    msg.role === 'user' 
                      ? 'bg-orange-600 text-white rounded-tr-none' 
                      : 'bg-white border border-orange-50 text-slate-800 rounded-tl-none ring-1 ring-orange-100/20'
                  }`}
                >
                  {msg.text || (msg.role === 'bot' && idx === messages.length - 1 ? (
                    <div className="flex space-x-1.5 py-1">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    </div>
                  ) : null)}
                  
                  {/* Message Metadata */}
                  <div className={`mt-1.5 text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1 ${
                    msg.role === 'user' ? 'text-orange-100' : 'text-slate-400'
                  }`}>
                    <span>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    {msg.role === 'bot' && <span className="text-orange-400">• Verified Agent</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Footer with Quick Actions */}
          <div className="bg-white border-t border-orange-50 p-6 space-y-4 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
            {!isHandoff && messages.length > 1 && (
              <button 
                onClick={requestHumanHandoff}
                className="w-full py-3 text-[11px] font-black uppercase tracking-[0.2em] text-orange-600 hover:bg-orange-50 rounded-2xl border-2 border-orange-100 transition-all flex items-center justify-center space-x-3 active:scale-95"
              >
                <span>Bypass AI for Human Support</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </button>
            )}

            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder={isHandoff ? "Waiting for dispatcher..." : "Ask Marc about repairs or rebates..."}
                disabled={isHandoff}
                className="w-full pl-5 pr-14 py-4 bg-slate-50 border-2 border-slate-100 rounded-[20px] text-sm font-semibold focus:ring-4 focus:ring-orange-100 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400 disabled:opacity-50"
              />
              <button 
                onClick={() => handleSend(input)}
                disabled={!input.trim() || isTyping || isHandoff}
                className={`absolute right-2 p-3 rounded-2xl transition-all ${
                  input.trim() && !isTyping && !isHandoff ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:scale-105 active:scale-95' : 'text-slate-300'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-20 h-20 bg-orange-500 rounded-[32px] flex items-center justify-center shadow-[0_16px_48px_-8px_rgba(249,115,22,0.6)] hover:bg-orange-600 transition-all hover:scale-110 active:scale-90 text-white focus:ring-4 focus:ring-orange-200 outline-none"
          aria-label="Open AI HVAC Support"
        >
          {/* Neon Glow Pulse */}
          <div className="absolute inset-0 rounded-[32px] bg-orange-500/40 animate-ping pointer-events-none"></div>
          
          {/* Notification Badge */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-orange-600 rounded-full border-4 border-orange-500 flex items-center justify-center text-[12px] font-black shadow-lg animate-bounce">
            1
          </div>
          
          <svg className="w-10 h-10 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>

          {/* High-Impact Tooltip */}
          <div className="absolute right-full mr-6 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.1em] px-4 py-3 rounded-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none shadow-2xl border border-slate-700">
            <span className="text-orange-400 mr-2">LIVE:</span> AI Diagnostics Ready
          </div>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
