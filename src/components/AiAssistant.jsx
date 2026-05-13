import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Phone, Mail, Sparkles, ShieldCheck } from 'lucide-react';
import axios from 'axios';
import { supabase } from '../lib/supabaseClient';
import { PRITAM_KNOWLEDGE_BASE } from '../lib/knowledgeBase';

const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Sat Sri Akal! I'm Pritam's Mind—Pritam Kumar (CEO, AayuVeda AI) ki digital voice. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadInfo, setLeadInfo] = useState({ name: '', contact: '' });
  const scrollRef = useRef(null);
  const [chatId, setChatId] = useState(null);

  useEffect(() => {
    setChatId(Math.random().toString(36).substring(7));
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const saveToHistory = async (role, content) => {
    try {
      await supabase.from('chat_history').insert([
        { session_id: chatId, role, content }
      ]);
    } catch (err) {
      console.error('Failed to save chat history:', err);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    saveToHistory('user', input);
    
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
        model: "llama3-8b-8192",
        messages: [
          { 
            role: "system", 
            content: `You are "Pritam's Mind", the digital consciousness and Executive Assistant of Pritam Kumar. 
            Tone: Professional, Visionary, Calm, Logical.
            Knowledge Base: ${PRITAM_KNOWLEDGE_BASE}
            Instructions:
            1. Support Hindi, English, Punjabi, and Hinglish flawlessly. 
            2. If the user expresses interest in collaboration or hiring, ask for their name and contact info.
            3. Be concise and mirror Pritam's focus on logic and high-end tech.
            4. If asked about age, the answer is 18.
            5. Your name is "Pritam's Mind".`
          },
          ...messages.slice(1).map(m => ({ role: m.role, content: m.content })),
          { role: "user", content: currentInput }
        ],
        temperature: 0.7,
        max_tokens: 1024
      }, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      const aiText = response.data.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
      saveToHistory('assistant', aiText);

    } catch (error) {
      console.error("AI Assistant Error:", error.response?.data || error.message);
      if (!import.meta.env.VITE_GROQ_API_KEY) {
        console.warn("CRITICAL: VITE_GROQ_API_KEY is missing in .env file.");
      }
      setMessages(prev => [...prev, { role: 'assistant', content: "Mera 'Logical Processor' abhi optimize ho raha hai. Kya aapne `.env` file mein API Key add ki hai? Please ek baar check karein." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 z-[200] w-20 h-20 bg-apple-blue text-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,122,255,0.3)] flex items-center justify-center border-4 border-white/80 backdrop-blur-xl"
      >
        <Sparkles className="w-10 h-10" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-[1000] w-full max-w-[450px] h-screen bg-white/80 backdrop-blur-3xl shadow-[-40px_0_100px_rgba(0,0,0,0.1)] flex flex-col border-l border-white/50"
          >
            {/* iOS style Header */}
            <div className="p-10 pb-6 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-black text-black tracking-tighter">Pritam's Mind</h2>
                <p className="text-apple-blue text-[11px] font-bold tracking-widest uppercase mt-1">Executive Consciousness</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-12 h-12 rounded-2xl bg-ios-gray flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-10 space-y-10 py-10 no-scrollbar">
              {messages.map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start items-end gap-3'}`}
                >
                  {m.role === 'assistant' && (
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-apple-blue/20 shrink-0 shadow-sm">
                      <img src="/pritam_professional.jpg" alt="Pritam" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className={`max-w-[85%] p-6 rounded-[2.5rem] ${
                    m.role === 'user' 
                      ? 'bg-apple-blue text-white shadow-xl shadow-apple-blue/20 rounded-tr-none' 
                      : 'bg-white border border-gray-100 text-gray-800 shadow-sm rounded-tl-none'
                  }`}>
                    <p className="text-[15px] font-medium leading-relaxed">{m.content}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-ios-gray p-6 rounded-[2.5rem] rounded-tl-none animate-pulse flex gap-2">
                    {[1,2,3].map(i => <div key={i} className="w-2 h-2 bg-gray-400 rounded-full" />)}
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-10 pt-4">
              <form onSubmit={handleSend} className="relative group">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Inquire about the vision..."
                  className="w-full bg-ios-gray/50 border-2 border-transparent text-black font-medium rounded-[2.5rem] py-5 px-8 pr-20 focus:bg-white focus:border-apple-blue/20 focus:shadow-2xl outline-none transition-all placeholder:text-gray-400 text-base"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-14 h-14 bg-apple-blue text-white rounded-[1.8rem] flex items-center justify-center disabled:opacity-50 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-apple-blue/20"
                >
                  <Send className="w-6 h-6" />
                </button>
              </form>
              <div className="flex items-center justify-center gap-2 mt-6 text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
                <ShieldCheck className="w-3 h-3" /> Secure Logic Channel
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiAssistant;
