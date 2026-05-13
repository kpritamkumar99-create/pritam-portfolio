import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Globe, Share2, MessageCircle, Mail, ArrowUpRight, CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // 1. Save to Supabase
      const { error: dbError } = await supabase
        .from('leads')
        .insert([{ 
          name: formData.name, 
          email: formData.email, 
          message: formData.message,
          created_at: new Date().toISOString()
        }]);
      
      if (dbError) throw dbError;

      // 2. WhatsApp Notification via CallMeBot (Optional)
      const whatsappPhone = import.meta.env.VITE_WHATSAPP_PHONE;
      const callMeBotKey = import.meta.env.VITE_CALLMEBOT_API_KEY;
      
      if (whatsappPhone && callMeBotKey) {
        const whatsappMsg = `*New Lead from Portfolio*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Brief:* ${formData.message}`;
        const callMeBotUrl = `https://api.callmebot.com/whatsapp.php?phone=${whatsappPhone}&text=${whatsappMsg}&apikey=${callMeBotKey}`;
        fetch(callMeBotUrl).catch(e => console.log('Notification failed, but lead saved.'));
      }
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-40 bg-[#FBFBFD] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-apple-blue rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-apple-green rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Content Side */}
          <div className="space-y-12">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-block px-6 py-2 rounded-full bg-apple-blue/10 text-apple-blue text-xs font-black uppercase tracking-[0.2em] mb-8"
              >
                Inquiry & Collaboration
              </motion.span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-[0.85] mb-8">
                LET'S BUILD <br />
                <span className="text-apple-blue">THE FUTURE.</span>
              </h2>
              <p className="text-2xl text-gray-500 font-medium leading-relaxed max-w-lg">
                Whether it's AI automation, full-stack engineering, or strategic tech consulting, I engineer solutions that scale.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Mail, label: 'Email', value: 'contact@pritamkumar.dev', href: 'mailto:contact@pritamkumar.dev', color: 'bg-rose-50 text-rose-500' },
                { icon: MessageCircle, label: 'WhatsApp', value: '+91 91234 56789', href: 'https://wa.me/919123456789', color: 'bg-emerald-50 text-emerald-500' },
                { icon: Share2, label: 'LinkedIn', value: '/in/pritamkumar', href: 'https://linkedin.com', color: 'bg-blue-50 text-blue-500' },
                { icon: Globe, label: 'GitHub', value: '@pritamkumar', href: 'https://github.com', color: 'bg-gray-100 text-gray-900' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5 }}
                  className="ios-glass p-8 rounded-[2.5rem] border-white/60 group block"
                >
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="font-bold text-black flex items-center gap-2">
                    {item.value} <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4 p-6 ios-glass rounded-[2rem] border-apple-green/20 bg-apple-green/5">
              <div className="w-3 h-3 bg-apple-green rounded-full animate-pulse shadow-[0_0_10px_rgba(52,199,89,0.5)]" />
              <p className="text-sm font-bold text-apple-green uppercase tracking-widest">Available for elite projects & consulting</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-apple-blue to-apple-green rounded-[4rem] blur-2xl opacity-10" />
            <div className="relative ios-glass p-12 md:p-16 rounded-[4rem] border-white/80 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3 ml-2">Identify Yourself</label>
                    <input 
                      type="text" required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="ios-input !bg-white/50 !rounded-3xl !py-6 !px-8 border-2 border-transparent focus:border-apple-blue/20 focus:!bg-white transition-all text-lg font-bold"
                      placeholder="Name or Organization"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3 ml-2">Secure Link (Email)</label>
                    <input 
                      type="email" required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="ios-input !bg-white/50 !rounded-3xl !py-6 !px-8 border-2 border-transparent focus:border-apple-blue/20 focus:!bg-white transition-all text-lg font-bold"
                      placeholder="you@domain.com"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3 ml-2">Project Vision</label>
                    <textarea 
                      required rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="ios-input !bg-white/50 !rounded-[2.5rem] !py-6 !px-8 border-2 border-transparent focus:border-apple-blue/20 focus:!bg-white transition-all text-lg font-bold resize-none"
                      placeholder="Describe the scope, logic, and impact..."
                    />
                  </div>
                </div>
                
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className={`ios-button-primary w-full !py-6 !rounded-3xl flex items-center justify-center gap-3 text-lg group ${
                    status === 'success' ? 'bg-apple-green shadow-apple-green/20' : ''
                  }`}
                >
                  {status === 'loading' ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : status === 'success' ? (
                    <>Success <CheckCircle2 className="w-6 h-6" /></>
                  ) : status === 'error' ? (
                    <>Failed <AlertCircle className="w-6 h-6" /></>
                  ) : (
                    <>Transmit Brief <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </button>
              </form>
              
              <p className="mt-8 text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                Data secured by Supabase & Encrypted transmission
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
