import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, School, Rocket, Star, ShieldCheck, Briefcase } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      year: '2008',
      title: 'Roots in Bihar',
      location: 'Chhapra, Bihar',
      desc: 'Born on Oct 14, 2008. Early years focused on mastering logic and strategic planning through Chess.',
      icon: Star,
      color: 'bg-amber-400',
      tag: 'Foundation'
    },
    {
      year: '2022',
      title: 'Academic Shift',
      location: 'NIOS National Board',
      desc: 'Pursued 12th Science through NIOS, choosing a non-traditional path to prioritize self-paced technical learning.',
      icon: School,
      color: 'bg-emerald-500',
      tag: 'Education'
    },
    {
      year: '2023',
      title: 'Robotics Mastery',
      location: 'Diploma in Robotics',
      desc: 'Completed Diploma in Robotics & Automation. Developed a deep understanding of hardware-software synergy.',
      icon: ShieldCheck,
      color: 'bg-apple-blue',
      tag: 'Specialization'
    },
    {
      year: '2024',
      title: 'IIT Madras Entry',
      location: 'Chennai / Online',
      desc: 'Enrolled in BS in Data Science & Applications at IIT Madras. Applying big data logic to real-world AI problems.',
      icon: Briefcase,
      color: 'bg-purple-600',
      tag: 'Milestone'
    },
    {
      year: '2026',
      title: 'CEO & Founder',
      location: 'Gurugram, Haryana',
      desc: 'Leading AayuVeda AI and PriMA Tech AI. Transforming the landscape of AI automation and healthcare tech.',
      icon: Rocket,
      color: 'bg-rose-500',
      tag: 'Vision'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] pt-40 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.03),transparent)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-apple-blue/10 text-apple-blue text-sm font-black uppercase tracking-widest mb-8">
            <Calendar className="w-4 h-4" /> The Career Timeline
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-[0.85] mb-10">
            A JOURNEY OF <br />
            <span className="text-apple-blue">PURE LOGIC.</span>
          </h1>
          <p className="text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
            From the historic soils of Bihar to the academic excellence of IIT Madras and the tech frontier of Gurugram.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Track */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 transform md:-translate-x-1/2">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-apple-blue via-indigo-500 to-rose-500"
            />
          </div>

          <div className="space-y-32">
            {events.map((e, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-center justify-between flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Connector Dot */}
                <div className="absolute left-[30px] md:left-1/2 top-0 w-10 h-10 rounded-full border-[6px] border-white bg-apple-blue shadow-xl transform -translate-x-1/2 z-20 group">
                  <div className="absolute inset-0 bg-apple-blue rounded-full animate-ping opacity-20" />
                </div>

                <div className="w-full md:w-[45%] pl-20 md:pl-0">
                  <div className="ios-glass p-8 md:p-12 rounded-[3.5rem] border-white/60 group hover:shadow-2xl hover:shadow-apple-blue/10 transition-all duration-700">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-5xl font-black text-gray-100 group-hover:text-apple-blue/10 transition-colors">{e.year}</span>
                      <div className={`p-4 ${e.color} text-white rounded-2xl shadow-xl shadow-${e.color.split('-')[1]}-100 group-hover:rotate-12 transition-transform`}>
                        <e.icon className="w-8 h-8" />
                      </div>
                    </div>
                    
                    <span className="inline-block px-4 py-1 rounded-full bg-gray-50 text-gray-400 text-xs font-black uppercase tracking-widest mb-4">
                      {e.tag}
                    </span>
                    
                    <h3 className="text-3xl font-black mb-4 text-black">{e.title}</h3>
                    
                    <div className="flex items-center gap-2 text-gray-400 font-bold text-sm mb-6">
                      <MapPin className="w-4 h-4 text-red-400" /> {e.location}
                    </div>
                    
                    <p className="text-gray-500 text-lg font-medium leading-relaxed">
                      {e.desc}
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <div className="inline-block p-2 rounded-[2rem] bg-ios-gray">
             <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-10 py-5 rounded-[1.8rem] bg-white text-black font-black shadow-sm hover:shadow-xl transition-all"
            >
              Back to Start
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
