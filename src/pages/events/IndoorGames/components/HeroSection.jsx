import React from 'react';
import heroCollage from '@/assets/events/indoor-games/hero-collage.webp';

export default function HeroSection() {
  return (
    <section className="hero-collage">
      <img src={heroCollage} alt="Indoor Games Collage" />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span>HOME</span>
          <span>›</span>
          <span>EVENTS</span>
          <span>›</span>
          <strong>INDOOR GAMES</strong>
        </div>

        {/* Page Title */}
        <div className="page-title">
          <h1>
            <span>INDOOR</span>
            <strong>GAMES</strong>
          </h1>

          <div className="title-decoration">
            <span></span>
            <div className="x-symbol">X</div>
            <span></span>
          </div>

          <p>
            Step into the arena of strategy, skill, and speed.
            <br />
            Compete in thrilling indoor games and prove you have what it takes to be the champion!
          </p>
        </div>
      </div>
    </section>
  );
}
