import React from 'react';
import HeroSection from '../components/HeroSection';
import GallerySlider from '../components/GallerySlider';
import ContactSection from '../components/ContactSection';
import AiAssistant from '../components/AiAssistant';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <GallerySlider />
      <ContactSection />
      <AiAssistant />
    </main>
  );
};

export default Home;
