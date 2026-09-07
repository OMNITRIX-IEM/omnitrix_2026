import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="omni-footer">
      {/* Center Omnitrix Emblem with Glowing Divider Lines */}
      <div className="footer-divider-container">
        <div className="footer-neon-line line-left" />
        <div className="footer-omni-core">
          <img 
            src="/images/omnitrix-logo.svg" 
            alt="Omnitrix Core Emblem" 
            className="footer-omni-emblem"
          />
        </div>
        <div className="footer-neon-line line-right" />
      </div>

      {/* Footer Taglines */}
      <div className="footer-message-box">
        <p className="footer-text-line line-1">MORE THAN AN EVENT</p>
        <p className="footer-text-line line-2">IT'S A TRANSFORMATION</p>
      </div>

      {/* Animated Mouse Scroll Indicator */}
      <div className="footer-scroll-indicator" aria-label="Scroll to explore more">
        <div className="mouse-icon">
          <div className="mouse-wheel" />
        </div>
        <span className="scroll-caption">SCROLL TO EXPLORE</span>
      </div>
    </footer>
  );
};

export default Footer;
