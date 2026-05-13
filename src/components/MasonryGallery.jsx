import React from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin } from 'lucide-react';

const MasonryGallery = () => {
  const images = [
    { url: '/ai_impact.jpg', title: 'AI Impact Analysis', location: 'Innovation Hub' },
    { url: '/ai_impact_2.jpg', title: 'Future of Tech', location: 'Tech Summit' },
    { url: '/bharat_mandapam.jpg', title: 'Bharat Mandapam', location: 'New Delhi' },
    { url: '/gdg.jpg', title: 'GDG Event', location: 'Developer Community' },
    { url: '/gift.jpg', title: 'Special Recognition', location: 'Award Ceremony' },
    { url: '/golden_temple.jpg', title: 'Spiritual Bliss', location: 'Amritsar' },
    { url: '/my_pic.jpg', title: 'The Founder', location: 'Portfolio Hub' },
    { url: '/president_house.jpg', title: 'Rashtrapati Bhavan', location: 'Delhi' }
  ];

  return (
    <section id="visual-archives" className="py-24 bg-[#FBFBFD]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.span className="inline-block px-4 py-1.5 rounded-full bg-apple-blue/10 text-apple-blue text-xs font-black uppercase tracking-widest mb-4">
            <Camera className="w-4 h-4 inline mr-2" /> Visual Archives
          </motion.span>
          <h2 className="text-5xl font-black tracking-tighter text-black">A STORY IN <span className="text-apple-blue">PIXELS.</span></h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group rounded-[2.5rem] overflow-hidden border border-white/60 shadow-xl bg-white break-inside-avoid"
            >
              <img src={img.url} alt={img.title} className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                <p className="text-white font-black text-2xl tracking-tighter">{img.title}</p>
                <p className="text-apple-blue text-xs font-bold flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" /> {img.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonryGallery;
