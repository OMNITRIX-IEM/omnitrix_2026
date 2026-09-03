import React from 'react';
import SmoothScrollProvider from '@/components/SmoothScrollProvider/SmoothScrollProvider';
import { Navbar } from '@/navbar';
import HeroSection from './HeroSection/HeroSection';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import GalaxySection from './GalaxySection/GalaxySection';
import Section6 from './Section6/Section6';
import Section7 from './Section7/Section7';
import Section8 from './Section8/Section8';
import DroneSequence from '@/components/DroneSequence/DroneSequence';
import BlackOverlay from '@/components/BlackOverlay/BlackOverlay';
import Loader from '@/components/Loader/Loader';
import { useDroneSequence } from '@/hooks/useDroneSequence';
import useScrollAnimations from '@/hooks/useScrollAnimations';
import './Landing.css';

export default function Landing() {
  const {
    firstStageReady,
    loadedPercent,
    setTargetFrame,
    setPaused,
    initialFrameUrl,
  } = useDroneSequence();

  useScrollAnimations(setTargetFrame, setPaused);

  return (
    <SmoothScrollProvider>
      <Loader ready={firstStageReady} percent={loadedPercent} />
      <Navbar />
      <DroneSequence currentFrameUrl={initialFrameUrl} />
      <BlackOverlay />

      <main className="bg-transparent text-on-surface relative w-full">
        <HeroSection />
        <Section2 />
        <Section3 />
        <Section4 />
        <GalaxySection />
        <Section6 />
        <Section7 />
        <Section8 />
      </main>

      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] z-40"></div>
    </SmoothScrollProvider>
  );
}