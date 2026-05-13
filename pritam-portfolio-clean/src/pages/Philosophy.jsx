import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Repeat, Focus, Target, Compass } from 'lucide-react';

const Philosophy = () => {
  const pillars = [
    {
      title: "Radical Discipline",
      desc: "Success is the byproduct of repetition. My 10:30 PM protocol and rigorous physical training aren't just habits—they are the Operating System for my cognitive output.",
      icon: Target,
      quote: "Excellence is a choice made every single day.",
      color: "bg-apple-blue"
    },
    {
      title: "The Logic Supremacy",
      desc: "In a world driven by emotion and hype, I choose the deterministic path of logic. Like Chess, every move in my engineering journey is calculated for maximum impact.",
      icon: Zap,
      quote: "Reason is the only reliable compass.",
      color: "bg-amber-500"
    },
    {
      title: "Iterative Refactoring",
      desc: "I apply software principles to my own life. I am constantly auditing my failures, refactoring my mental models, and optimizing my decision-making architecture.",
      icon: Repeat,
      quote: "The version of you today must be better than yesterday's build.",
      color: "bg-rose-500"
    },
    {
      title: "Ethical Intelligence",
      desc: "As we build the future of AI, integrity is non-negotiable. Technology must be architected with a human-centric core that empowers and protects.",
      icon: ShieldCheck,
      quote: "Integrity is the foundation of all true innovation.",
      color: "bg-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] pt-40 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(0,122,255,0.03),transparent)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-apple-blue/10 text-apple-blue text-sm font-black uppercase tracking-widest mb-8">
            <Compass className="w-4 h-4" /> The Philosophy
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-[0.85] mb-10">
            THE PRINCIPLES <br />
            <span className="text-apple-blue">OF THE CEO.</span>
          </h1>
          <p className="text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
            Deep insights into the mindset, strategic thinking, and uncompromising discipline that drives everything I build.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {pillars.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="ios-glass p-10 md:p-16 rounded-[4rem] border-white/60 group hover:shadow-2xl transition-all duration-700"
            >
              <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                <div className={`w-24 h-24 rounded-[2rem] ${p.color} flex items-center justify-center text-white shadow-2xl shadow-${p.color.split('-')[1]}-200 group-hover:rotate-12 transition-transform shrink-0`}>
                  <p.icon className="w-12 h-12" />
                </div>
                <div className="space-y-6 text-center lg:text-left">
                  <h3 className="text-4xl font-black text-black">{p.title}</h3>
                  <p className="text-2xl text-apple-blue font-black italic leading-tight">
                    "{p.quote}"
                  </p>
                  <p className="text-gray-500 text-xl font-medium leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <div className="w-1 h-32 bg-gradient-to-b from-apple-blue to-transparent mx-auto mb-12" />
          <h2 className="text-4xl md:text-5xl font-black italic text-gray-300 leading-tight tracking-tighter">
            "Software is temporary. <br /> Logic is eternal."
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 font-black text-apple-blue text-2xl"
          >
            — Pritam Kumar
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Philosophy;
