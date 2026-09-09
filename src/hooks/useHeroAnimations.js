import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useHeroAnimations() {
  useEffect(() => {
    // Ensure initial scroll starts at top on fresh load
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }

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
          },
        }
      );

      return () => {
        droneSequenceTween.scrollTrigger?.kill();
        droneSequenceTween.kill();
      };
    });

    // Refresh ScrollTrigger and listen for initial layout stabilization (loader finish, asset loads, page restoration)
    const refreshPositions = () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      if (window.scrollY !== 0) {
        window.scrollTo(0, 0);
      }
      ScrollTrigger.refresh();
    };

    refreshPositions();

    const rafId = requestAnimationFrame(() => {
      refreshPositions();
    });

    window.addEventListener('hero-layout-ready', refreshPositions);
    window.addEventListener('load', refreshPositions);
    window.addEventListener('pageshow', refreshPositions);

    let resizeObserver = null;
    const heroEl = document.getElementById('hero-section');
    if (heroEl && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });
      resizeObserver.observe(heroEl);
      if (document.body) {
        resizeObserver.observe(document.body);
      }
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('hero-layout-ready', refreshPositions);
      window.removeEventListener('load', refreshPositions);
      window.removeEventListener('pageshow', refreshPositions);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      mm.revert();
    };
  }, []);
}



