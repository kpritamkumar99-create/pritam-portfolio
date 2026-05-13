import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Dumbbell, Moon, BookOpen, Brain, Target, ShieldCheck, Zap } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-apple-blue/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-apple-blue/10 rounded-full blur-[120px]" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-24">
          {/* Header & Story Intro */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-apple-blue font-bold tracking-widest uppercase text-xs mb-6 px-4 py-2 bg-apple-blue/5 rounded-full">
                  <Target className="w-4 h-4" /> The Deep Narrative
                </span>
                <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.85] text-black">
                  ROOTS IN <span className="text-apple-blue">BIHAR,</span> <br />
                  <span className="text-gray-300">VISION IN THE CLOUD.</span>
                </h2>
              </div>

              <div className="space-y-8 text-lg text-gray-500 leading-relaxed font-medium">
                <p>
                  Born in the historic soils of <span className="text-black font-bold">Chhapra, Bihar</span> on October 14, 2008, my early years were defined by a relentless curiosity. While the world saw games, I saw patterns. While others saw problems, I saw logical puzzles waiting to be solved.
                </p>
                <p>
                  In 2023, the trajectory of my life shifted. Moving to <span className="text-black font-bold">Gurugram</span> wasn't just a relocation—it was a total immersion into the epicenter of technological advancement. The chaos of the city matched the speed of my thoughts.
                </p>
                <p>
                  At 18, I don't just build software; I architect ecosystems. Balancing a BS in Data Science from <span className="text-black font-bold">IIT Madras</span> with the responsibilities of leading <span className="text-black font-bold">AayuVeda AI</span> and <span className="text-black font-bold">PriMA Tech AI</span> requires more than just skill—it requires an iron-clad discipline.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/20 to-indigo-500/20 rounded-[4rem] blur-3xl animate-pulse" />
              <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-[8px] border-white shadow-2xl bg-ios-gray group">
                <img 
                  src="/gdg_event.jpg" 
                  alt="Pritam Kumar at GDG Gurugram" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  onError={(e) => { 
                    e.target.src = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                  <p className="text-white font-bold text-2xl tracking-tight">"Logic is the only constant."</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Pillars / Protocol */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Dumbbell, title: "Physical Fortitude", desc: "Rigorous daily gym sessions to fuel mental clarity and resilience.", color: "bg-orange-500" },
              { icon: Moon, title: "The 10:30 Protocol", desc: "Uncompromising sleep schedule to ensure peak cognitive performance.", color: "bg-purple-500" },
              { icon: Brain, title: "Strategic Mindset", desc: "Chess and logic are not just hobbies—they are the blueprints of my strategy.", color: "bg-blue-500" }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="ios-card group hover:-translate-y-2 transition-all duration-500 border-none bg-[#FBFBFD] p-12"
              >
                <div className={`w-16 h-16 rounded-[1.5rem] ${pillar.color} text-white flex items-center justify-center mb-8 shadow-lg shadow-${pillar.color.split('-')[1]}-200`}>
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black mb-4">{pillar.title}</h4>
                <p className="text-gray-500 leading-relaxed font-medium">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="ios-glass p-10 md:p-16 rounded-[3.5rem] flex flex-wrap justify-center gap-12 md:gap-24 border-white/60"
          >
            {[
              { label: "Founded", val: "AayuVeda AI" },
              { label: "Education", val: "CSE" },
              { label: "Philosophy", val: "Pure Logic" },
              { label: "Age", val: "18 Years" }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <p className="text-xs font-bold text-apple-blue uppercase tracking-widest">{stat.label}</p>
                <p className="text-3xl font-black text-black">{stat.val}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
