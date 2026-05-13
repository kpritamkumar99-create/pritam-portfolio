import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

const certificates = [
  {
    title: 'BS in Data Science & Applications',
    org: 'IIT Madras',
    date: '2024 - Present',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070',
    desc: 'Advanced training in predictive modeling, statistical analysis, and big data engineering.'
  },
  {
    title: 'Diploma in Robotics & Automation',
    org: 'State Board of Tech Education',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070',
    desc: 'Specialized in mechanical logic, circuit design, and autonomous systems.'
  },
  {
    title: 'ADCA (Advanced Diploma)',
    org: 'Computer Applications Board',
    date: '2022',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070',
    desc: 'Comprehensive mastery of office automation, web fundamentals, and system logic.'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-40 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #007AFF 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-apple-blue/10 text-apple-blue text-xs font-black uppercase tracking-[0.2em] mb-8">
              <ShieldCheck className="w-4 h-4" /> Academic Excellence
            </span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-[0.85] mb-8">
              VERIFIED <br />
              <span className="text-apple-blue">CREDENTIALS.</span>
            </h2>
            <p className="text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
              A record of rigorous academic pursuit and technical mastery in the fields of logic and data.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {certificates.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="ios-glass p-8 rounded-[3.5rem] border-white/60 group shadow-xl hover:shadow-2xl transition-all duration-700 flex flex-col"
            >
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 bg-ios-gray border-2 border-white shadow-inner">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-6 h-6 text-apple-green" />
                </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-2 text-apple-blue font-black text-xs uppercase tracking-[0.1em]">
                  <Calendar className="w-4 h-4" /> {cert.date}
                </div>
                <h3 className="text-3xl font-black leading-none text-black group-hover:text-apple-blue transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-black text-gray-300 uppercase tracking-widest">{cert.org}</p>
                <p className="text-lg text-gray-500 font-medium leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-10 mt-auto">
                <button className="flex items-center gap-3 text-sm font-black text-black uppercase tracking-widest group-hover:gap-5 transition-all">
                  Validation Logic <ExternalLink className="w-5 h-5 text-apple-blue" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
