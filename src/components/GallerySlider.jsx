import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Layers } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const GallerySlider = () => {
  const [projects, setProjects] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        setProjects(data);
      } else {
        setProjects([
          {
            title: 'AayuVeda AI',
            description: 'The flagship logic-driven healthcare engine. Diagnosing complex conditions through pattern recognition and medical data insights.',
            image_url: '/1000075373.jpg',
            tags: ['AI', 'Python', 'Healthcare'],
            color: 'from-rose-500 to-orange-500'
          },
          {
            title: 'PriMA Tech OS',
            description: 'A custom operating environment built for extreme productivity, integrating AI automation at the kernel level.',
            image_url: '/1000075417.jpg',
            tags: ['OS Dev', 'Automation', 'C++'],
            color: 'from-apple-blue to-indigo-600'
          },
          {
            title: 'Logic Forge',
            description: 'High-performance computing systems engineered for complex logic resolution and data processing.',
            image_url: '/1000075419.jpg',
            tags: ['HPC', 'Logic', 'Systems'],
            color: 'from-emerald-500 to-teal-600'
          },
          {
            title: 'Sentience Core',
            description: 'An advanced neural pattern recognition system for predictive analytics and intuitive automation.',
            image_url: '/1000075594.jpg',
            tags: ['Neural', 'AI', 'Analytics'],
            color: 'from-purple-500 to-pink-600'
          },
          {
            title: 'Impact Automation',
            description: 'Streamlining industrial and digital workflows through intelligent logic-based automation sequences.',
            image_url: '/1000075836.jpg',
            tags: ['IoT', 'Robotics', 'Automation'],
            color: 'from-amber-500 to-orange-600'
          }
        ]);
      }
      setLoading(false);
    };
    fetchProjects();
  }, []);
  const containerRef = useRef(null);

  const next = () => setIndex((index + 1) % projects.length);
  const prev = () => setIndex((index - 1 + projects.length) % projects.length);

  if (loading || projects.length === 0) return (
    <section id="gallery" className="py-40 bg-white flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-apple-blue border-t-transparent rounded-full animate-spin" />
    </section>
  );

  return (
    <section id="gallery" ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-apple-blue/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-apple-blue/10 text-apple-blue text-sm font-black uppercase tracking-widest mb-6">
              <Layers className="w-4 h-4" /> The Portfolio
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-[0.85]">
              CRAFTING <br />
              <span className="text-apple-blue">EXCELLENCE.</span>
            </h2>
          </motion.div>
          
          <div className="flex gap-4">
            <button 
              onClick={prev} 
              className="w-16 h-16 rounded-full bg-ios-gray flex items-center justify-center hover:bg-apple-blue hover:text-white transition-all active:scale-90"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={next} 
              className="w-16 h-16 rounded-full bg-ios-gray flex items-center justify-center hover:bg-apple-blue hover:text-white transition-all active:scale-90"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center"
            >
              {/* Image Showcase */}
              <div className="relative group">
                <div className={`absolute -inset-4 bg-gradient-to-r ${projects[index].color || 'from-apple-blue to-indigo-600'} opacity-20 blur-3xl rounded-[4rem] transition-all group-hover:opacity-30`} />
                <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white">
                  <motion.img 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={
                      projects[index].title === 'AayuVeda AI' 
                        ? 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070' 
                        : projects[index].image_url
                    } 
                    alt={projects[index].title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700" />
                </div>
              </div>

              {/* Content Side */}
              <div className="flex flex-col items-start">
                <div className="flex gap-2 mb-10">
                  {(Array.isArray(projects[index].tags) ? projects[index].tags : (projects[index].tags?.split(',') || [])).map((tag, i) => (
                    <span key={i} className="px-5 py-2 rounded-full bg-ios-gray text-gray-500 text-xs font-black uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 text-black">
                  {projects[index].title}
                </h3>
                
                <p className="text-lg text-gray-400 font-medium leading-relaxed mb-12">
                  {projects[index].description || projects[index].desc}
                </p>

                <div className="flex flex-wrap gap-6 mt-auto w-full">
                  <button className="ios-button-primary !py-5 !px-10 flex items-center gap-3 group">
                    Exploration <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <button className="w-16 h-16 rounded-[1.5rem] bg-ios-gray flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-all">
                    <Github className="w-8 h-8" />
                  </button>
                </div>

                {/* Counter */}
                <div className="mt-16 flex items-center gap-4">
                  <span className="text-apple-blue font-black text-2xl">0{index + 1}</span>
                  <div className="w-20 h-1 bg-ios-gray rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${((index + 1) / projects.length) * 100}%` }}
                      className="h-full bg-apple-blue"
                    />
                  </div>
                  <span className="text-gray-300 font-black text-2xl">0{projects.length}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
