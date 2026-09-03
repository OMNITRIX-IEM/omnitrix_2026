import React from 'react';
import Navbar from '@/navbar/Navbar';
import HeroSection from './components/HeroSection';
import EsportsSection from './components/EsportsSection';
import './Esports.css';

export default function Esports() {
  return (
    <div className="esports-page">
      <Navbar />
      <HeroSection />
      <EsportsSection />

      {/* SVG mask and filter definitions */}
      <svg width="0" height="0" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          <clipPath clipPathUnits="objectBoundingBox" id="workshop-mask-svg">
            <path
              d="M 0.15,0 L 0.85,0 L 1,0.1 L 1,0.3 L 0.92,0.3 L 0.92,0.4 L 1,0.4 L 1,0.85 L 0.7,1 L 0.08,1 L 0.08,0.92 L 0,0.92 L 0,0.4 L 0.08,0.4 L 0.08,0.3 L 0,0.3 L 0,0.1 Z"
            />
          </clipPath>
          <filter id="distress">
            <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="4" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 6 -1.8" in="noise" result="holes" />
            <feComposite operator="in" in="SourceGraphic" in2="holes" result="distressed" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
