import React from 'react';
import iemLogo from '@/assets/logos/iem.webp';
import uemLogo from '@/assets/logos/uem.webp';
import casLogo from '@/assets/logos/CAS.png';
import ieeeLogo from '@/assets/logos/IEEE-Logo.jpg';
import omnitrixHero from '@/assets/images/hero_section_2.webp';
import phoneHero from '@/assets/images/phone_hero.webp';
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

      {/* INSTITUTIONAL BRANDING (LOGOS & TEXT) */}
      <div className="hero-branding">
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

          <div className="hero-logo-divider"></div>

          <img
            src={casLogo}
            alt="IEEE CAS"
            className="hero-institution-logo"
          />

          <div className="hero-logo-divider"></div>

          <img
            src={ieeeLogo}
            alt="IEEE"
            className="hero-institution-logo"
          />
        </div>

        <div className="hero-institution-text">
          <span className="hero-text-line">INSTITUTE OF ENGINEERING AND MANAGEMENT</span>
          <span className="hero-text-line">SCHOOL OF UNIVERSITY OF ENGINEERING AND MANAGEMENT</span>
        </div>
      </div>

      {/* HERO TEXT */}
      <div className="hero-copy">
        <h2 className="hero-subtitle">
          ELITE <span>GAMING</span> BATTLEFIELD
        </h2>

        <p className="hero-description">
          Enter the ultimate battlefield and JOIN US AT
          <span className="hero-text-line">
            Gurukul Building, INSTITUTE OF ENGINEERING AND MANAGEMENT, Salt Lake, Sector 5, Kolkata 700091
          </span>
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