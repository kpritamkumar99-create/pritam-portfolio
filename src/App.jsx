import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import GallerySlider from './components/GallerySlider';
import Certificates from './components/Certificates';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import GlobalLoader from './components/GlobalLoader';
import Admin from './pages/Admin';
import Vision from './pages/Vision';
import TechStack from './pages/TechStack';
import Timeline from './pages/Timeline';
import Services from './pages/Services';
import Philosophy from './pages/Philosophy';
import AiAssistant from './components/AiAssistant';
import MasonryGallery from './components/MasonryGallery';

const Home = () => (
  <main className="relative">
    <div id="home"><HeroSection /></div>
    <div id="about"><AboutMe /></div>
    <div id="vision"><Vision /></div>
    <div id="tech-stack"><TechStack /></div>
    <div id="timeline"><Timeline /></div>
    <div id="gallery"><GallerySlider /></div>
    <div id="visual-archives"><MasonryGallery /></div>
    <div id="services"><Services /></div>
    <div id="philosophy"><Philosophy /></div>
    <div id="certificates"><Certificates /></div>
    <div id="contact"><ContactSection /></div>
  </main>
);

function App() {
  return (
    <Router>
      <div className="bg-[#FBFBFD] min-h-screen flex flex-col cursor-none">
        <GlobalLoader />
        <CustomCursor />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/services" element={<Services />} />
            <Route path="/philosophy" element={<Philosophy />} />
          </Routes>
        </div>
        <Footer />
        <AiAssistant />
      </div>
    </Router>
  );
}

export default App;
