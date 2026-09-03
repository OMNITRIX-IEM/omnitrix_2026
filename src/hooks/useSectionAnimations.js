import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PHASE_SECTION_IDS } from '@/utils/constants';

gsap.registerPlugin(ScrollTrigger);

export default function useSectionAnimations() {
  useEffect(() => {
    const triggers = [];

    PHASE_SECTION_IDS.forEach((id) => {
      const sec = document.querySelector(id);
      if (!sec) return;

      const panel = sec.querySelector('.phase-panel');
      if (!panel) return;

      // --- Panel Exit Transition (scale & opacity fade) ---
      const exitTween = gsap.fromTo(panel,
        { opacity: 1, scale: 1, rotation: 0 },
        {
          opacity: 0.6,
          scale: 0.98,
          rotation: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sec,
            start: 'bottom 90%',
            end: 'bottom top',
            scrub: true
          }
        }
      );
      if (exitTween.scrollTrigger) triggers.push(exitTween.scrollTrigger);
      triggers.push(exitTween);

      // --- Panel Entrance Timeline (gradually comes on scroll for phase-02 and phase-03) ---
      if (id !== '#phase-01') {
        const entranceTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            start: 'top bottom',
            end: 'top 35%',
            scrub: 1
          }
        });

        // Panel Container translation, fade, and 3D rotateX (Z-rotation locked at 0deg)
        entranceTimeline.fromTo(panel,
          { 
            opacity: 0, 
            y: 60, 
            rotateX: 8, 
            rotation: 0, 
            transformPerspective: 1000 
          },
          { 
            opacity: 1, 
            y: 0, 
            rotateX: 0, 
            rotation: 0, 
            ease: 'power2.out' 
          },
          0
        );
        if (entranceTimeline.scrollTrigger) triggers.push(entranceTimeline.scrollTrigger);
        triggers.push(entranceTimeline);
      }
    });

    // --- Randomized Cyberpunk HUD Glitch scheduler ---
    let nextGlitchTimeoutId = null;
    let glitchActiveTimeoutId = null;
    const headings = document.querySelectorAll('.phase-heading');

    if (headings.length > 0) {
      const scheduleNextGlitch = () => {
        const delay = Math.random() * 6000 + 6000; // random delay between 6s and 12s
        nextGlitchTimeoutId = setTimeout(() => {
          const targetHeading = headings[Math.floor(Math.random() * headings.length)];
          if (targetHeading) {
            targetHeading.classList.add('glitching');
            const duration = Math.random() * 100 + 150; // duration 150ms to 250ms
            glitchActiveTimeoutId = setTimeout(() => {
              targetHeading.classList.remove('glitching');
            }, duration);
          }
          scheduleNextGlitch();
        }, delay);
      };

      scheduleNextGlitch();
    }

    return () => {
      triggers.forEach(t => {
        if (typeof t.kill === 'function') t.kill();
        if (t.scrollTrigger && typeof t.scrollTrigger.kill === 'function') t.scrollTrigger.kill();
      });
      if (nextGlitchTimeoutId) clearTimeout(nextGlitchTimeoutId);
      if (glitchActiveTimeoutId) clearTimeout(glitchActiveTimeoutId);
    };
  }, []);
}
