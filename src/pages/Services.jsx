import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, BarChart3, Presentation, ArrowRight, Zap, Target, Layers } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'AI Automation',
      desc: 'Architecting intelligent workflows that redefine efficiency. From custom LLM integrations to autonomous data-driven agents.',
      icon: Cpu,
      tag: 'Innovation',
      features: ['Custom AI Agents', 'Workflow Optimization', 'LLM Fine-tuning']
    },
    {
      title: 'Full-Stack Engineering',
      desc: 'Building robust, scalable applications with a focus on speed and security. High-performance UIs coupled with bulletproof backends.',
      icon: Code,
      tag: 'Development',
      features: ['React & Flutter Expert', 'Supabase Architecture', 'Real-time Systems']
    },
    {
      title: 'Tech Strategy',
      desc: 'Strategic technical guidance for founders and enterprises. Navigating the AI landscape with precision and logical foresight.',
      icon: Presentation,
      tag: 'Consulting',
      features: ['AI Readiness Audits', 'Architecture Review', 'Scalability Planning']
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] pt-40 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-apple-blue/5 rounded-full blur-[140px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-apple-blue/10 text-apple-blue text-sm font-black uppercase tracking-widest mb-8">
            <Zap className="w-4 h-4" /> Professional Services
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-[0.85] mb-10">
            ENGINEERING THE <br />
            <span className="text-apple-blue">UNSOLVABLE.</span>
          </h1>
          <p className="text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
            Premium technical solutions delivered with the precision and discipline of a visionary founder.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="ios-glass p-12 rounded-[3.5rem] border-white/60 group hover:shadow-2xl hover:shadow-apple-blue/10 transition-all duration-700 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <div className="w-20 h-20 rounded-[1.75rem] bg-apple-blue/10 flex items-center justify-center text-apple-blue group-hover:bg-apple-blue group-hover:text-white transition-all duration-500 shadow-inner">
                    <s.icon className="w-10 h-10" />
                  </div>
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{s.tag}</span>
                </div>
                
                <h3 className="text-3xl font-black mb-6 text-black">{s.title}</h3>
                <p className="text-gray-500 text-lg font-medium leading-relaxed mb-10">
                  {s.desc}
                </p>
                
                <ul className="space-y-4 mb-12">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-4 text-gray-700 font-bold">
                      <div className="w-2 h-2 bg-apple-blue rounded-full shadow-lg shadow-apple-blue/20" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-between w-full p-6 bg-gray-50 rounded-2xl group-hover:bg-apple-blue group-hover:text-white transition-all duration-500"
              >
                <span className="font-black">Request Access</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-16 md:p-24 bg-gray-900 rounded-[4rem] text-white flex flex-col lg:flex-row items-center justify-between gap-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-apple-blue/20 blur-[120px] rounded-full" />
          <div className="max-w-xl text-center lg:text-left relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Need a custom AI architecture?</h2>
            <p className="text-gray-400 text-xl font-medium leading-relaxed">I specialize in building bespoke systems for high-stakes environments. Let's discuss your vision.</p>
          </div>
          <button 
            onClick={() => window.location.href = 'mailto:hello@pritam.dev'}
            className="px-12 py-6 rounded-2xl bg-white text-black font-black text-lg hover:bg-apple-blue hover:text-white transition-all active:scale-95 shadow-xl relative z-10"
          >
            Direct Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
