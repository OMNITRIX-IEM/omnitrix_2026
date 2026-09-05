import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useHeroAnimations() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop > 768px: Pin hero section and fade in drone sequence on scroll
    mm.add('(min-width: 769px)', () => {
      const heroPinTrigger = ScrollTrigger.create({
        trigger: '#hero-section',
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        refreshPriority: 10,
      });

      const droneSequenceTween = gsap.fromTo(
        '#drone-sequence',
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '#phase-01',
            start: 'top bottom',
            end: 'top top',
            scrub: true,
            refreshPriority: 9,
          },
        }
      );

      return () => {
        heroPinTrigger.kill();
        droneSequenceTween.scrollTrigger?.kill();
        droneSequenceTween.kill();
      };
    });

    // Mobile <= 768px: Unpinned hero, section 2 follows naturally in document flow
    mm.add('(max-width: 768px)', () => {
      gsap.set('#drone-sequence', { opacity: 1 });
    });

    return () => {
      mm.revert();
    };
  }, []);
}



