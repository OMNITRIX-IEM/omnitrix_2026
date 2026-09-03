import React, { useEffect, useRef } from 'react';
import bgmicropped from '@/assets/events/esports/bgmicropped.webp';
import callofdutycropped from '@/assets/events/esports/callofdutycropped.webp';
import eFootballcropped from '@/assets/events/esports/e-footballcropped.webp';
import fc26 from '@/assets/events/esports/fc26.webp';
import freefirecropped from '@/assets/events/esports/freefirecropped.webp';
import valorant1cropped from '@/assets/events/esports/valorant1cropped.webp';
import valorant2 from '@/assets/events/esports/valorant2.webp';
import esportstitle from '@/assets/events/esports/esportstitle.webp';

const carouselImages = [
  bgmicropped,
  callofdutycropped,
  eFootballcropped,
  fc26,
  freefirecropped,
  valorant1cropped,
  valorant2
];

export default function HeroSection() {
  const imgRefs = useRef([]);
  const timerRef = useRef(null);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const imgElements = imgRefs.current;
    if (!imgElements || imgElements.length === 0) return;

    let currentIndex = 0;
    const duration = 4000; // 4 seconds per slide
    const transitionDuration = 1200; // 1.2 seconds for cinematic diagonal cut

    imgElements.forEach((img, i) => {
      if (img) {
        img.style.zIndex = i === 0 ? 1 : 0;
        img.style.opacity = i === 0 ? 1 : 0;
        img.style.clipPath = 'none';
      }
    });

    function nextSlide() {
      const currentImg = imgElements[currentIndex];
      currentIndex = (currentIndex + 1) % imgElements.length;
      const nextImg = imgElements[currentIndex];

      if (!currentImg || !nextImg) return;

      nextImg.style.zIndex = 2;
      nextImg.style.opacity = 1;
      nextImg.style.clipPath = 'polygon(100% 0%, 100% 0%, 100% 0%)';

      let start = null;

      function animateTransition(timestamp) {
        if (!start) start = timestamp;
        const progress = (timestamp - start) / transitionDuration;

        if (progress >= 1) {
          nextImg.style.clipPath = 'none';
          currentImg.style.zIndex = 0;
          currentImg.style.opacity = 0;
          currentImg.style.clipPath = 'none';
          nextImg.style.zIndex = 1;

          timerRef.current = setTimeout(nextSlide, duration - transitionDuration);
          return;
        }

        const easeProgress = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        const d = easeProgress * 2;

        let polygon = '';
        if (d <= 1) {
          const topX = 100 - (d * 100);
          const rightY = d * 100;
          polygon = `polygon(100% 0%, ${topX}% 0%, 100% ${rightY}%)`;
        } else {
          const leftY = (d - 1) * 100;
          const bottomX = 100 - ((d - 1) * 100);
          polygon = `polygon(100% 0%, 0% 0%, 0% ${leftY}%, ${bottomX}% 100%, 100% 100%)`;
        }

        nextImg.style.clipPath = polygon;
        animFrameRef.current = requestAnimationFrame(animateTransition);
      }

      animFrameRef.current = requestAnimationFrame(animateTransition);
    }

    timerRef.current = setTimeout(nextSlide, duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="carousel-viewport">
        <div className="carousel" id="carousel">
          {carouselImages.map((src, idx) => (
            <img
              key={idx}
              ref={(el) => (imgRefs.current[idx] = el)}
              src={src}
              className="carousel-image"
              alt={`Carousel Image ${idx + 1}`}
            />
          ))}
        </div>
        <div className="hero-vignette"></div>
        <div className="hero-scanlines"></div>
        <div className="hud-frame">
          <span className="hud-corner top-left"></span>
          <span className="hud-corner top-right"></span>
          <span className="hud-corner bottom-left"></span>
          <span className="hud-corner bottom-right"></span>
        </div>
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-title-wrapper">
        <img src={esportstitle} alt="E-Sports Title" className="esports-title-img" />
        <div className="hero-subtitle">
          <div className="subtitle-primary">WHERE CHAMPIONS CLASH AND LEGENDS RISE</div>
          <div className="subtitle-secondary">GAMING DIVISION // TOURNAMENT PROTOCOL</div>
        </div>
      </div>
    </section>
  );
}
