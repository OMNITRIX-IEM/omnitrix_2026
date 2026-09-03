import React from 'react';
import newBg from '@/assets/events/robotics/newbg.webp';

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background Layer */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${newBg})` }}
      ></div>

      {/* Light Bloom Overlays (Direct Sibling) */}
      <div className="hero-bg-container">
        {/* Tube Light Group (Left) */}
        <div className="glow-tube-group">
          <div className="glow-layer glow-layer-4"></div>
          <div className="glow-layer glow-layer-3"></div>
          <div className="glow-layer glow-layer-2"></div>
          <div className="glow-layer glow-layer-1"></div>
          <div className="glow-layer glow-layer-core"></div>
          <div className="glow-tube-spill"></div>
        </div>
        {/* Second Light Source (Left) */}
        <div className="glow-second-source"></div>

        {/* Tube Light Group (Right) */}
        <div className="glow-right-tube-group">
          <div className="glow-layer glow-layer-4"></div>
          <div className="glow-layer glow-layer-3"></div>
          <div className="glow-layer glow-layer-2"></div>
          <div className="glow-layer glow-layer-1"></div>
          <div className="glow-layer glow-layer-core"></div>
          <div className="glow-tube-spill"></div>
        </div>
        {/* Second Light Source (Right) */}
        <div className="glow-right-second-source"></div>
      </div>

      <div className="hero-overlay"></div>
      <div className="vignette-overlay"></div>
      <div className="scanline-overlay"></div>

      {/* HUD Corners */}
      <div className="hud-corner top-left"></div>
      <div className="hud-corner top-right"></div>
      <div className="hud-corner bottom-left"></div>
      <div className="hud-corner bottom-right"></div>

      {/* Hero Content */}
      <div className="hero-content fade-up">
        <div className="hero-label-wrap">
          <span className="label-line"></span>
          <span className="hero-label">Tactical Research Division</span>
          <span className="label-line"></span>
        </div>

        <h1 className="hero-title glitch-hint">
          ROBOTICS <br className="mobile-break" /> & WORKSHOPS
        </h1>

        <p className="hero-tagline">
          ENGINEER THE FUTURE. MASTER AUTONOMOUS MACHINES. BUILD THE NEXT GENERATION OF ROBOTICS.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            <span className="btn-text">EXPLORE WORKSHOPS</span>
            <div className="btn-hover-fx"></div>
          </button>
          <button className="btn-secondary">REGISTER NOW</button>
        </div>
      </div>

      {/* System Status Decorative */}
      <div className="hero-status">
        <span className="status-text">System Status: Online</span>
        <div className="status-line"></div>
      </div>
    </section>
  );
}
