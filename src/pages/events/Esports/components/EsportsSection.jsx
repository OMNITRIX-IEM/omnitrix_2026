import React from 'react';
import GameGrid from './GameGrid';

export default function EsportsSection() {
  return (
    <section className="section-two" id="esports-section">
      <div className="esports-background"></div>
      <div className="esports-container">
        <div className="esports-header-section">
          <div className="esports-heading-wrapper">
            <div className="heading-edge-glow left"></div>
            <div className="heading-edge-glow right"></div>

            <h2 className="esports-heading-shadow">E-SPORTS</h2>
            <h2 className="esports-heading-main">E-SPORTS</h2>

            <div className="particle-debris">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="particle particle-4"></div>
              <div className="particle particle-5"></div>
              <div className="particle particle-6"></div>
            </div>
          </div>
          <p className="esports-tagline">
            ENTER THE DIGITAL BATTLEGROUND WHERE SKILL, STRATEGY AND SURVIVAL DEFINE THE CHAMPIONS.
          </p>
        </div>

        <GameGrid />
      </div>
    </section>
  );
}
