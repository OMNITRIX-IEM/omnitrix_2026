import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useHeroAnimations() {
  useEffect(() => {
    // 1. Pin #hero-section so it stays in place while Section 2 (#phase-01) scrolls UP over it
    const heroPinTrigger = ScrollTrigger.create({
      trigger: '#hero-section',
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
      refreshPriority: 10,
    });

    // 2. Smoothly fade in #drone-sequence as Section 2 (#phase-01) scrolls UP over the Hero
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
  }, []);
}


