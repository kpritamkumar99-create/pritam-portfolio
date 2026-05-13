import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, BrainCircuit, Smartphone, Terminal, Globe, Cpu, Layers } from 'lucide-react';

const TechStack = () => {
  const stack = [
    { name: 'AI & Vibe Coding', level: 98, icon: BrainCircuit, color: 'text-purple-500', bg: 'bg-purple-50', desc: 'Mastering LLMs, prompt engineering, and the future of natural language programming.' },
    { name: 'Python Engineering', level: 95, icon: Terminal, color: 'text-blue-500', bg: 'bg-blue-50', desc: 'Core backend logic, automation scripts, and data processing architectures.' },
    { name: 'Flutter Development', level: 90, icon: Smartphone, color: 'text-cyan-500', bg: 'bg-cyan-50', desc: 'Architecting high-performance, cross-platform mobile experiences with sleek UIs.' },
    { name: 'Supabase & Backend', level: 88, icon: Database, color: 'text-emerald-500', bg: 'bg-emerald-50', desc: 'Managing scalable real-time databases, authentication, and serverless logic.' },
    { name: 'React & Frontend', level: 92, icon: Globe, color: 'text-blue-600', bg: 'bg-blue-50', desc: 'Building premium web interfaces with React, Tailwind CSS, and Framer Motion.' },
    { name: 'Logic & Strategy', level: 100, icon: Cpu, color: 'text-orange-500', bg: 'bg-orange-50', desc: 'The foundation of everything—applying grandmaster-level strategic thinking to code.' },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] pt-40 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,122,255,0.05),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-apple-blue/10 text-apple-blue text-sm font-black uppercase tracking-widest mb-8">
            <Layers className="w-4 h-4" /> Technical Arsenal
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-[0.85] mb-10">
            THE STACK THAT <br />
            <span className="text-apple-blue">BUILDS THE FUTURE.</span>
          </h1>
          <p className="text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
            A curated selection of tools and technologies chosen for their logic, scalability, and ability to create meaningful impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stack.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="ios-glass p-10 rounded-[3rem] border-white/60 group hover:shadow-2xl hover:shadow-apple-blue/10 transition-all duration-700 flex flex-col items-start"
            >
              <div className={`w-20 h-20 rounded-[1.75rem] ${s.bg} flex items-center justify-center ${s.color} mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                <s.icon className="w-10 h-10" />
              </div>
              
              <div className="flex justify-between items-end w-full mb-4">
                <h3 className="text-2xl font-black text-black">{s.name}</h3>
                <span className="text-apple-blue font-black text-xl">{s.level}%</span>
              </div>

              <p className="text-gray-500 font-medium leading-relaxed mb-10 flex-1">
                {s.desc}
              </p>

              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner p-0.5">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`h-full rounded-full bg-gradient-to-r from-apple-blue to-indigo-600 shadow-lg shadow-apple-blue/20`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32">
          <h4 className="text-center text-sm font-black text-gray-400 uppercase tracking-[0.4em] mb-12">Core Competencies</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'Vite', 'Framer Motion', 'PostgreSQL', 'Tailwind CSS', 'Axios', 'NumPy', 'Pandas', 'Logic Gates', 'System Architecture', 'Cloud Deployment', 'Robotics Automation'].map((tool, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-8 py-4 ios-glass rounded-2xl font-bold text-gray-600 shadow-sm border border-white hover:bg-white hover:text-apple-blue transition-all cursor-default"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
