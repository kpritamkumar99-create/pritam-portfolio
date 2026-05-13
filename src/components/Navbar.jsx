import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Vision', path: '#vision' },
    { name: 'Tech Stack', path: '#tech-stack' },
    { name: 'Timeline', path: '#timeline' },
    { name: 'Services', path: '#services' },
    { name: 'Philosophy', path: '#philosophy' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`ios-glass px-6 py-4 rounded-[2rem] flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'shadow-lg border-white/40' : 'bg-transparent border-transparent shadow-none'
        }`}>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-apple-blue/20 shadow-lg group-hover:rotate-6 transition-all shrink-0">
              <img src="/pritam_professional.jpg" alt="Pritam" className="w-full h-full object-cover" />
            </div>
            <span className={`text-2xl font-black tracking-tighter transition-colors ${
              scrolled || isOpen ? 'text-black' : 'text-gray-900'
            }`}>
              Pritam<span className="text-apple-blue">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.path.startsWith('#') ? (
                <button 
                  key={link.name} 
                  onClick={() => document.getElementById(link.path.substring(1))?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm font-semibold text-gray-600 hover:text-apple-blue transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-apple-blue transition-all group-hover:w-full" />
                </button>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-sm font-semibold text-gray-600 hover:text-apple-blue transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-apple-blue transition-all group-hover:w-full" />
                </Link>
              )
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-black bg-white/50 rounded-xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 ios-glass rounded-[2.5rem] p-8 md:hidden shadow-2xl border border-white/50"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                link.path.startsWith('#') ? (
                  <button 
                    key={link.name} 
                    onClick={() => {
                      setIsOpen(false);
                      document.getElementById(link.path.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xl font-bold text-gray-800 hover:text-apple-blue transition-colors"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold text-gray-800 hover:text-apple-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
