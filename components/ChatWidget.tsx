
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Hello! I am your HVAC assistant for Canada’s Home Renovation Depot. How can I help you today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Ref to store the chat session so it persists across renders
  const chatRef = useRef<any>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const initChat = () => {
    if (!chatRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are a professional HVAC assistant for Canada's Home Renovation Depot, a top-rated HVAC contractor in the Greater Toronto Area and Mississauga. 
          Your goal is to provide expert advice on furnace repairs, AC installations, heat pumps, and energy rebates. 
          Key Information:
          - Phone: (416) 410-1744 (Emergency 24/7)
          - Area: Mississauga, Toronto, Brampton, Oakville (GTA).
          - Key Rebate: Up to $7,100 through Enbridge/Government programs for Heat Pumps.
          - Style: Professional, authoritative, helpful, and concise. 
          - Important: If the user mentions a gas leak or no heat in extreme cold, prioritize advising them to call the emergency line immediately.`,
        },
      });
    }
  };

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    
    initChat();
    const userMessage = text.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      const result = await chatRef.current.sendMessageStream({ message: userMessage });
      let fullResponse = '';
      
      // Add a placeholder bot message that we will update as the stream comes in
      setMessages(prev => [...prev, { role: 'bot', text: '' }]);
      
      for await (const chunk of result) {
        const chunkText = chunk.text;
        fullResponse += chunkText;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { role: 'bot', text: fullResponse };
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm sorry, I'm having trouble connecting. Please call us at (416) 410-1744 for immediate assistance." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleAutomatedPath = (label: string, prompt: string) => {
    handleSend(prompt);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white w-[360px] h-[520px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-blue-600 rounded-full"></div>
              </div>
              <div>
                <span className="font-bold block text-sm">HVAC Expert AI</span>
                <span className="text-[10px] text-blue-100 uppercase font-semibold">Live Support • Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-sm' 
                    : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text || (msg.role === 'bot' && idx === messages.length - 1 ? <span className="animate-pulse">...</span> : null)}
                </div>
              </div>
            ))}
            {isTyping && messages[messages.length - 1].role === 'user' && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-2xl text-sm flex space-x-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t border-gray-100 bg-white">
            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
              <button 
                onClick={() => handleAutomatedPath('Repair', 'I need to book an emergency repair for my furnace.')}
                className="whitespace-nowrap text-[10px] bg-red-50 text-red-600 px-3 py-1.5 rounded-full hover:bg-red-100 font-bold border border-red-100 transition-colors"
              >
                🚨 Emergency Repair
              </button>
              <button 
                onClick={() => handleAutomatedPath('Rebate', 'How do I qualify for the $7,100 rebate?')}
                className="whitespace-nowrap text-[10px] bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full hover:bg-blue-100 font-bold border border-blue-100 transition-colors"
              >
                💰 $7,100 Rebate
              </button>
              <button 
                onClick={() => handleAutomatedPath('Quote', 'I want a free quote for a new AC system.')}
                className="whitespace-nowrap text-[10px] bg-green-50 text-green-600 px-3 py-1.5 rounded-full hover:bg-green-100 font-bold border border-green-100 transition-colors"
              >
                📋 Free Quote
              </button>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder="Ask our experts anything..."
                className="w-full pl-4 pr-12 py-3 bg-gray-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              />
              <button 
                onClick={() => handleSend(input)}
                disabled={!input.trim() || isTyping}
                className={`absolute right-2 p-2 rounded-lg transition-all ${
                  input.trim() && !isTyping ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-[9px] text-center text-gray-400 mt-2 font-medium">
              Canada’s Home Renovation Depot • Real-time GTA Support
            </p>
          </div>
        </div>
      ) : null}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 text-white relative"
      >
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
          <span className="text-[10px] font-bold">1</span>
        </div>
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
