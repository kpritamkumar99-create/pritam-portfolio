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
      // 1. Save to Supabase (Database record)
      const { error: dbError } = await supabase
        .from('leads')
        .insert([{ 
          name: formData.name, 
          email: formData.email, 
          message: formData.message,
          created_at: new Date().toISOString()
        }]);
      
      if (dbError) throw dbError;

      // 2. Redirect to WhatsApp
      const whatsappPhone = '919102923597'; // Aapka number set kar diya hai
      const textMessage = `*New Inquiry from Portfolio*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
      const waUrl = `https://wa.me/${whatsappPhone}?text=${textMessage}`;
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        window.open(waUrl, '_blank');
        setStatus('idle');
      }, 1500);
      
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#FBFBFD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Content Side with your Updated Links */}
          <div className="space-y-8">
            <div>
              <motion.span className="inline-block px-6 py-2 rounded-full bg-apple-blue/10 text-apple-blue text-xs font-black uppercase tracking-[0.2em] mb-4">
                Inquiry & Collaboration
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-[0.85] mb-6">
                LET'S BUILD <br />
                <span className="text-apple-blue">THE FUTURE.</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Mail, label: 'Email', value: 'kpritamkumar99@gmail.com', href: 'mailto:kpritamkumar99@gmail.com', color: 'bg-rose-50 text-rose-500' },
                { icon: MessageCircle, label: 'WhatsApp', value: '+91 9102923597', href: 'https://wa.me/919102923597', color: 'bg-emerald-50 text-emerald-500' },
                { icon: Share2, label: 'LinkedIn', value: 'Pritam Kumar', href: 'https://www.linkedin.com/in/pritam-kumar-34413a278?utm_source=share_via&utm_content=profile&utm_medium=member_android', color: 'bg-blue-50 text-blue-500' },
                { icon: Globe, label: 'GitHub', value: '@kpritamkumar99-create', href: 'https://github.com/kpritamkumar99-create', color: 'bg-gray-100 text-gray-900' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="ios-glass p-6 rounded-[2rem] border-white/60 group block"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="font-bold text-black flex items-center gap-2 text-[10px] break-all">{item.value}</p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <div className="relative ios-glass p-10 rounded-[3rem] border-white/80 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input 
                  type="text" required placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="ios-input !rounded-2xl !py-4 !px-6 border-2 border-transparent focus:border-apple-blue/20 transition-all font-bold"
                />
                <input 
                  type="email" required placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="ios-input !rounded-2xl !py-4 !px-6 border-2 border-transparent focus:border-apple-blue/20 transition-all font-bold"
                />
                <textarea 
                  required rows="4" placeholder="Brief"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="ios-input !rounded-2xl !py-4 !px-6 border-2 border-transparent focus:border-apple-blue/20 transition-all font-bold resize-none"
                />
                <button type="submit" disabled={status === 'loading'} className="ios-button-primary w-full !py-5 !rounded-2xl font-bold">
                  {status === 'loading' ? 'Processing...' : 'Transmit to WhatsApp'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
