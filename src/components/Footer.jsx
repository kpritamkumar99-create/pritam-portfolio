import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Github, Twitter, Instagram , Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-apple-blue rounded-[1.25rem] flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-all">
                <Rocket className="w-7 h-7" />
              </div>
              <span className="text-3xl font-black tracking-tighter text-black">
                Pritam<span className="text-apple-blue">.</span>
              </span>
            </Link>
            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-md">
              Engineering the next generation of AI-driven ecosystems. Logical, scalable, and built for impact.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/kpritamkumar99-create' },
                { icon: Twitter, href: 'https://x.com/pritam_kum78258' },
                { icon: Instagram, href: 'https://www.instagram.com/pritamx.dev?igsh=MXhmdTEzcHE1cnBoeQ==' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/pritam-kumar-34413a278?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
                { icon: Mail, href: 'mailto:kpritamkumar99@gmail.com' },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  className="w-12 h-12 rounded-2xl bg-ios-gray flex items-center justify-center text-gray-500 hover:bg-apple-blue hover:text-white transition-all shadow-sm"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Navigation</h4>
            <ul className="space-y-4">
              {['Vision', 'Tech Stack', 'Timeline', 'Services', 'Philosophy'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-lg font-bold text-gray-600 hover:text-apple-blue transition-colors flex items-center gap-2 group"
                  >
                    {item} <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-apple-blue" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Contact</h4>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-black text-gray-300 uppercase tracking-widest mb-2">Location</p>
                <p className="text-lg font-bold text-gray-600">Gurugram, Haryana</p>
              </div>
              <div>
                <p className="text-xs font-black text-gray-300 uppercase tracking-widest mb-2">Inquiries</p>
                <p className="text-lg font-bold text-gray-600">contact@kpritamkumar99@gmail.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-16 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Pritam Kumar. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-sm font-bold text-gray-300 uppercase tracking-widest cursor-default">Built with React & Supabase</span>
            <span className="text-sm font-bold text-gray-300 uppercase tracking-widest cursor-default">Vibe Coding Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
