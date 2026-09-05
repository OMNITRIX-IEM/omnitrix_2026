import React from 'react';
import iemLogo from '@/assets/logos/iem.webp';
import uemLogo from '@/assets/logos/uem.webp';
import omnitrixHero from '@/assets/images/hero_section_2.png';
import phoneHero from '@/assets/images/phone_hero.png';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section id="hero-section" className="hero-section">

      {/* MAIN HERO ARTWORK */}
      <div className="hero-artwork">
        <picture className="hero-artwork-picture">
          <source media="(max-width: 768px)" srcSet={phoneHero} />
          <img
            src={omnitrixHero}
            alt="OMNITRIX"
            className="hero-artwork-image"
          />
        </picture>
      </div>

      {/* INSTITUTIONAL LOGOS */}
      <div className="hero-logos">
        <img
          src={iemLogo}
          alt="IEM Kolkata"
          className="hero-institution-logo"
        />

        <div className="hero-logo-divider"></div>

        <img
          src={uemLogo}
          alt="UEM Kolkata"
          className="hero-institution-logo"
        />
      </div>

      {/* HERO TEXT */}
      <div className="hero-copy">
        <h2 className="hero-subtitle">
          ELITE <span>GAMING</span> BATTLEFIELD
        </h2>

        <p className="hero-description">
          Enter the ultimate battlefield where elite combat machines, gaming zones
          and engineering mastery collide in a spectacle
          of power, precision and destruction.
        </p>
      </div>

      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 16 }, (_, index) => (
          <span
            key={index}
            className={`hero-particle particle-${index + 1}`}
          />
        ))}
      </div>

      {/* HERO → NEXT SECTION BLACK FADE */}
      <div className="hero-bottom-fade" aria-hidden="true"></div>




    </section>
  );
}