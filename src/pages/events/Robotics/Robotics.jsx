import React, { useEffect } from 'react';
import Navbar from '@/navbar/Navbar';
import HeroSection from './components/HeroSection';
import WorkshopsSection from './components/WorkshopsSection';
import { initScrollReveal, initHeroPin } from './effects/scrollEffects';
import './Robotics.css';

export default function Robotics() {
  useEffect(() => {
    const cleanupPin = initHeroPin();
    const cleanupReveal = initScrollReveal();
    return () => {
      if (cleanupPin) cleanupPin();
      if (cleanupReveal) cleanupReveal();
    };
  }, []);

  return (
    <div className="robotics-page">
      <Navbar />
      <div className="scroll-overlay-container">
        <HeroSection />
        <WorkshopsSection />
      </div>
    </div>
  );
}

