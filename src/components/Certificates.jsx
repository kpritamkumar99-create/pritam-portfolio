import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const Certificates = () => {
  const certifications = [
    {
      title: "Advanced Excel Workshop",
      issuer: "Ira Skills (MSME Registered)",
      date: "March 29, 2026",
      image: "/cert_excel.jpg",
      verifyUrl: "#"
    },
    {
      title: "YUVA AI for ALL",
      issuer: "Ministry of Electronics & IT / Coursera",
      date: "March 14, 2026",
      image: "/cert_yuva_ai.jpg",
      verifyUrl: "https://coursera.org/verify/G5U4M3EZWUD3"
    },
    {
      title: "Introduction to Copilot for Startups",
      issuer: "Microsoft / Simplilearn",
      date: "Nov 22, 2025",
      image: "/cert_copilot.jpg",
      verifyUrl: "#"
    },
    {
      title: "AI Agents for Beginners",
      issuer: "Simplilearn / SkillUp",
      date: "Nov 23, 2025",
      image: "/cert_ai_agents.jpg",
      verifyUrl: "#"
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span className="inline-block px-4 py-1.5 rounded-full bg-apple-blue/10 text-apple-blue text-xs font-black uppercase tracking-widest mb-4">
            <Award className="w-4 h-4 inline mr-2" /> Verified Credentials
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black">
            CERTIFIED <span className="text-apple-blue">EXPERTISE.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="ios-glass p-4 rounded-[2rem] border-white/60 group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 border border-gray-100">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <a href={cert.image} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full text-black">
                     <ExternalLink className="w-5 h-5" />
                   </a>
                </div>
              </div>
              <div className="px-2">
                <h3 className="font-bold text-black text-sm leading-tight mb-1">{cert.title}</h3>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-[10px] text-apple-green font-black">
                  <ShieldCheck className="w-3 h-3" /> VERIFIED
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
