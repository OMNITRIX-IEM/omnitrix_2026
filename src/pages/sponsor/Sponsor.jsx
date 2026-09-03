import React, { useRef, useEffect } from 'react';
import Navbar from '@/navbar/Navbar';
import HeroSection from './components/HeroSection';
import SponsorSection from './components/SponsorSection';
import Footer from './components/Footer';
import { sponsorsData } from './data/sponsors';
import './Sponsor.css';

export default function Sponsor() {
  const mainRef = useRef(null);

  useEffect(() => {
    if (!mainRef.current) return;
    const elements = mainRef.current.querySelectorAll('.hero > *, .section-divider, .sponsor-card');

    elements.forEach(el => {
      el.classList.add('animate-on-scroll');
    });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          scrollObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    elements.forEach((el) => {
      if (el.classList.contains('sponsor-card')) {
        const siblings = Array.from(el.parentElement.children);
        const childIndex = siblings.indexOf(el);
        el.style.transitionDelay = `${childIndex * 0.1}s`;
      }
      scrollObserver.observe(el);
    });

    return () => {
      scrollObserver.disconnect();
    };
  }, []);

  return (
    <div className="sponsor-page">
      {/* Background Effects */}
      <div className="bg-effects">
        <div className="glow-left"></div>
        <div className="glow-right"></div>
      </div>

      <Navbar />

      <main ref={mainRef}>
        <HeroSection />

        <SponsorSection
          sectionClass="title-sponsor-section"
          title={sponsorsData.titleSponsor.sectionTitle}
          containerClass="title-card-container"
          cardClass="title-card"
          sponsors={sponsorsData.titleSponsor.sponsors}
        />

        <SponsorSection
          sectionClass="technical-partners-section"
          title={sponsorsData.technicalPartners.sectionTitle}
          containerClass="technical-grid"
          cardClass="tech-card"
          sponsors={sponsorsData.technicalPartners.sponsors}
        />

        <SponsorSection
          sectionClass="allied-partners-section"
          title={sponsorsData.alliedPartners.sectionTitle}
          containerClass="allied-grid"
          cardClass="allied-card"
          sponsors={sponsorsData.alliedPartners.sponsors}
        />

        <SponsorSection
          sectionClass="media-partners-section"
          title={sponsorsData.mediaPartners.sectionTitle}
          containerClass="media-row"
          cardClass="media-card"
          sponsors={sponsorsData.mediaPartners.sponsors}
        />
      </main>

      <Footer />
    </div>
  );
}
