import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket } from 'lucide-react';

const GlobalLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-24 h-24 bg-apple-blue rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl shadow-apple-blue/30 mb-8"
          >
            <Rocket className="w-12 h-12 animate-bounce-slow" />
          </motion.div>
          
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-black tracking-tighter text-black uppercase tracking-[0.2em]">
              Architecting <span className="text-apple-blue">Logic</span>
            </h2>
            <div className="w-48 h-1 bg-ios-gray rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.5, ease: "linear" }}
                className="h-full bg-apple-blue"
              />
            </div>
          </div>
          
          <p className="absolute bottom-12 text-xs font-black text-gray-300 uppercase tracking-widest">
            © 2026 Pritam Kumar Portfolio
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobalLoader;
