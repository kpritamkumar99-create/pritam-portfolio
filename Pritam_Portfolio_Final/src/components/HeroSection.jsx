import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden bg-[#FBFBFD]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-apple-blue/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-apple-blue/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="ios-glass p-8 md:p-16 lg:p-24 rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-white/60 grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-center"
        >
          {/* Left Side: Portrait */}
          <div className="relative group justify-self-center lg:justify-self-start">
            <div className="absolute inset-0 bg-apple-blue/30 rounded-[4rem] blur-3xl group-hover:bg-apple-blue/50 transition-all duration-700 opacity-50" />
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[4rem] overflow-hidden border-[8px] border-white shadow-2xl bg-ios-gray"
            >
              <img 
                src="/pritam_professional.jpg" 
                alt="Pritam Kumar" 
                className="w-full h-full object-cover"
                onError={(e) => { 
                  e.target.src = "https://ui-avatars.com/api/?name=Pritam+Kumar&background=007AFF&color=fff&size=512";
                }}
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-white rounded-3xl shadow-xl flex items-center justify-center text-apple-blue">
              <Sparkles className="w-8 h-8 animate-spin-slow" />
            </div>
          </div>

          {/* Right Side: Hero Content */}
          <div className="space-y-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-apple-blue/10 text-apple-blue text-xs font-black uppercase tracking-[0.2em] mb-8">
                <span className="w-2 h-2 bg-apple-blue rounded-full animate-ping" />
                Founder & CEO of AayuVeda AI
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 leading-[0.85] mb-8">
                Pritam <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-apple-blue via-blue-500 to-indigo-600">
                  Kumar
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-500 text-base md:text-xl font-medium leading-relaxed max-w-xl"
            >
              Building logical, scalable, and impactful AI solutions. <br className="hidden md:block" />
              From the roots of <span className="text-black font-bold">Chhapra</span> to the tech frontier of <span className="text-black font-bold">Gurugram</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-6 pt-6 justify-center lg:justify-start"
            >
              <button 
                onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
                className="ios-button-primary !py-5 !px-12 flex items-center gap-3 group shadow-apple-blue/40 text-lg cursor-pointer"
              >
                The Vision
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 rounded-3xl border-2 border-ios-gray bg-white font-bold text-gray-700 hover:bg-ios-gray hover:border-gray-200 transition-all active:scale-95 shadow-sm text-lg cursor-pointer"
              >
                My Journey
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20"
      >
        <div className="w-7 h-12 border-2 border-gray-400 rounded-full flex justify-center p-1.5">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
