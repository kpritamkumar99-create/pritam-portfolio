import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Heart, Shield, Globe, Cpu } from 'lucide-react';

const Vision = () => {
  const points = [
    {
      title: "Universal Health Equity",
      desc: "Democratizing world-class healthcare diagnosis through AayuVeda AI. Ensuring that your economic status never dictates your health outcomes.",
      icon: Heart,
      color: "bg-rose-500"
    },
    {
      title: "PriMA AI Ecosystem",
      desc: "Building a unified intelligence layer for businesses. PriMA Tech AI is designed to automate the mundane and amplify the strategic.",
      icon: Cpu,
      color: "bg-apple-blue"
    },
    {
      title: "Logic-First Engineering",
      desc: "Systems engineered with the precision of a chess grandmaster. We prioritize deterministic logic to build AI that is both powerful and predictable.",
      icon: Target,
      color: "bg-indigo-600"
    },
    {
      title: "Global Innovation, Local Roots",
      desc: "From the soil of Chhapra to the silicon of the world. Proving that world-class technology can be built with visionary thinking and relentless grit.",
      icon: Globe,
      color: "bg-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] pt-40 pb-24 px-6 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-apple-blue/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-indigo-500/5 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-apple-blue/10 text-apple-blue text-sm font-black uppercase tracking-widest mb-8"
          >
            <Target className="w-4 h-4" /> The Grand Vision
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-[0.85] mb-10">
            SOLVING FOR <br />
            <span className="text-apple-blue">HUMANITY.</span>
          </h1>
          <p className="text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
            "We don't just build products; we architect the future. AayuVeda AI and PriMA Tech AI are the dual engines of a world where technology serves the soul."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {points.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="ios-glass p-10 md:p-12 rounded-[3.5rem] border-white/60 group hover:shadow-2xl hover:shadow-apple-blue/10 transition-all duration-700"
            >
              <div className={`w-16 h-16 ${p.color} rounded-[1.75rem] flex items-center justify-center text-white mb-8 shadow-xl shadow-${p.color.split('-')[1]}-100 group-hover:rotate-12 transition-transform`}>
                <p.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-black">{p.title}</h3>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-16 md:p-24 ios-glass rounded-[4rem] border-white/80 text-center relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/5 to-transparent opacity-50" />
          <div className="relative z-10">
            <h2 className="text-sm font-black text-apple-blue uppercase tracking-[0.3em] mb-10">The Mission Statement</h2>
            <p className="text-4xl md:text-6xl font-black text-black leading-tight italic tracking-tight">
              "To simplify 1 billion lives <br className="hidden md:block" /> 
              through <span className="text-apple-blue">pure logic</span> and <br className="hidden md:block" /> 
              intentional AI by 2030."
            </p>
            <div className="mt-16 flex justify-center gap-4">
              <div className="w-16 h-1.5 bg-apple-blue rounded-full" />
              <div className="w-4 h-1.5 bg-apple-blue/20 rounded-full" />
              <div className="w-4 h-1.5 bg-apple-blue/20 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
