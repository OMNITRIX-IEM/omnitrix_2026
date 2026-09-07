import React from 'react';
import './Background.css';

const Background = ({ bgImage = "/images/bg.jpg" }) => {
  return (
    <div className="omni-bg-wrapper" aria-hidden="true">
      {/* User / Base Background Image Layer */}
      <div 
        className="omni-bg-image" 
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Cyberpunk Grid Overlay */}
      <div className="omni-cyber-grid" />

      {/* Ambient Neon Glow Orbs */}
      <div className="omni-glow-orb glow-top-left" />
      <div className="omni-glow-orb glow-top-right" />
      <div className="omni-glow-orb glow-center" />
      <div className="omni-glow-orb glow-bottom" />

      {/* Radial Vignette Mask */}
      <div className="omni-vignette" />

      {/* Scanline Texture */}
      <div className="omni-scanline" />
    </div>
  );
};

export default Background;
