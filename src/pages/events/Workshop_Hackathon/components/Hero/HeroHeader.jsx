import React from 'react';
import './HeroHeader.css';

const HeroHeader = () => {
  return (
    <section className="omni-hero-header">
      {/* Top Category Badge */}
      <div className="hero-top-badge">
        <span className="badge-dash" />
        <span className="badge-text">O M N I T R I X</span>
        <span className="badge-dash" />
      </div>

      {/* Main Headline */}
      <h1 className="hero-main-title">
        <span className="title-line title-top">WORKSHOPS AND</span>
        <span className="title-line title-bottom">HACKATHONS</span>
      </h1>

      {/* Bottom Tagline */}
      <div className="hero-tagline">
        <span className="tagline-dash" />
        <span className="tagline-item">LEARN</span>
        <span className="tagline-separator">|</span>
        <span className="tagline-item">BUILD</span>
        <span className="tagline-separator">|</span>
        <span className="tagline-item">INNOVATE</span>
        <span className="tagline-dash" />
      </div>
    </section>
  );
};

export default HeroHeader;
