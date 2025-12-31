
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
  const [isConnecting, setIsConnecting] = useState(false);
  const [isHandoff, setIsHandoff] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = sessionStorage.getItem('hvac_chat_history');
    if (saved) {
      return JSON.parse(saved).map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) }));
    }
    return [
      { 
        role: 'bot', 
        text: 'Hello! I am Marc, your HVAC Triage Assistant. I can help with emergency repairs, $7,100 rebate eligibility, or booking a certified TSSA technician. How can I assist you today?',
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
            You are "Marc", a Senior HVAC Support Expert for "Canada's Home Renovation Depot" in the GTA.
            Your tone is professional, authoritative, and helpful.
            Expertise: Furnace installation, AC repair, heat pump rebates ($7,100 Enbridge program), TSSA compliance.
            Location focus: Mississauga, Brampton, Toronto, Oakville.
            If a user asks for complex technical advice or a "Human", suggest transferring to dispatch.
            Keep responses concise (under 3 sentences unless explaining a process).
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
        text: "I'm experiencing a brief connection issue. Please call our 24/7 priority line at (416) 410-1744 for immediate assistance.",
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
        text: "Understood. I'm notifying our Mississauga dispatch center. A human agent will take over this chat shortly. Please stay on the line.",
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
          className="bg-white w-[380px] h-[580px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 mb-4 animate-in fade-in slide-in-from-bottom-6 duration-300"
          role="dialog"
          aria-labelledby="chat-heading"
        >
          {/* Header: Premium "Live" Appearance */}
          <div className="bg-blue-600 p-5 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="flex justify-between items-center relative z-10">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30 backdrop-blur-md">
                    <span className="text-xl">🛠️</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-blue-600 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h2 id="chat-heading" className="font-black text-lg leading-tight">Expert Support</h2>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    <span className="text-[10px] text-blue-100 uppercase font-black tracking-widest">Typically replies in 1m</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-white/10 p-2 rounded-xl transition-all focus:ring-2 focus:ring-white outline-none"
                aria-label="Minimize"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef} 
            className="flex-grow overflow-y-auto p-5 space-y-6 bg-gray-50/50"
            aria-live="polite"
            role="log"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div 
                  className={`group relative max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm transition-all ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  {msg.text || (msg.role === 'bot' && idx === messages.length - 1 ? (
                    <div className="flex space-x-1 py-1">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    </div>
                  ) : null)}
                  
                  {/* Message Metadata */}
                  <div className={`mt-1 text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1 ${
                    msg.role === 'user' ? 'text-blue-100' : 'text-gray-400'
                  }`}>
                    <span>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    {msg.role === 'user' && <span>• Seen</span>}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && !messages[messages.length-1]?.text && (
               <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
               </div>
            )}
          </div>

          {/* Dynamic Footer with Quick Actions */}
          <div className="bg-white border-t border-gray-100 p-4 space-y-4">
            {!isHandoff && messages.length > 2 && (
              <button 
                onClick={requestHumanHandoff}
                className="w-full py-2.5 text-[11px] font-black uppercase tracking-widest text-blue-600 hover:bg-blue-50 rounded-xl border border-blue-100 transition-all flex items-center justify-center space-x-2"
              >
                <span>Transfer to Human Agent</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            )}

            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder={isHandoff ? "Wait for agent..." : "Type your question..."}
                disabled={isHandoff}
                className="w-full pl-4 pr-12 py-3.5 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-gray-400 disabled:opacity-50"
              />
              <button 
                onClick={() => handleSend(input)}
                disabled={!input.trim() || isTyping || isHandoff}
                className={`absolute right-2 p-2.5 rounded-xl transition-all ${
                  input.trim() && !isTyping && !isHandoff ? 'bg-blue-600 text-white shadow-md hover:scale-105 active:scale-95' : 'text-gray-300'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
            
            <p className="text-[9px] text-center text-gray-400 font-medium">
              By using our live support, you agree to our Terms of Service.
            </p>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 bg-blue-600 rounded-[24px] flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-all hover:scale-110 active:scale-90 text-white focus:ring-4 focus:ring-blue-200 outline-none"
          aria-label="Open Chat Support"
        >
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-4 border-gray-50 flex items-center justify-center text-[10px] font-black animate-bounce">
            1
          </div>
          
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>

          {/* Tooltip on Hover */}
          <div className="absolute right-full mr-4 bg-gray-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none">
            Need help? Ask Marc!
          </div>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
