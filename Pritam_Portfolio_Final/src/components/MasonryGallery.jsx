import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { url: '/image_0.png', title: 'Logic Framework' },
  { url: '/image_1.png', title: 'AI Neural Bridge' },
  { url: '/image_2.png', title: 'System Architecture' },
  { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000', title: 'Executive Strategy' },
  { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000', title: 'Global Vision' },
  { url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000', title: 'Secure Infrastructure' },
];

const MasonryGallery = () => {
  return (
    <section className="py-32 px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-black text-black tracking-tighter mb-4">Visual Archives</h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Deep dives into the logic ecosystem</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              key={i}
              className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white break-inside-avoid"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-8">
                <p className="text-white font-black text-xl tracking-tight">{img.title}</p>
                <div className="w-12 h-1 bg-apple-blue mt-2 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonryGallery;
