import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useGalaxyAnimations(setPaused) {
  useEffect(() => {
    const galaxySection = document.getElementById('galaxy-section');
    const galaxyCanvas = document.getElementById('galaxy-section-canvas');

    if (!galaxySection || !galaxyCanvas) {
      return;
    }

    const mm = gsap.matchMedia();

    // Desktop > 768px: Original desktop galaxy timeline
    mm.add('(min-width: 769px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: galaxySection,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });

      tl.fromTo(
        "#galaxy-section-canvas",
        { opacity: 0 },
        { opacity: 1, ease: "none", duration: 0.33 },
        0
      );

      tl.to(
        "#drone-sequence",
        { opacity: 0, ease: "none", duration: 0.25 },
        0.08
      );

      tl.to(
        "#galaxy-section-canvas",
        { opacity: 1, ease: "none", duration: 0.33 },
        0.33
      );

      tl.to(
        "#galaxy-section-canvas",
        { opacity: 0, ease: "power1.inOut", duration: 0.22 },
        0.66
      );

      tl.to(
        "#galaxy-section-canvas",
        { opacity: 0, ease: "none", duration: 0.12 },
        0.88
      );

      const pauseTrigger = ScrollTrigger.create({
        trigger: galaxySection,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (self) => {
          if (setPaused) {
            setPaused(self.isActive);
          }
        }
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
        pauseTrigger.kill();
      };
    });

    // Mobile <= 768px: Galaxy starts ONLY when galaxy section reaches top top (strictly after Section 4)
    mm.add('(max-width: 768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: galaxySection,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });

      tl.fromTo(
        "#galaxy-section-canvas",
        { opacity: 0 },
        { opacity: 1, ease: "none", duration: 0.33 },
        0
      );

      tl.to(
        "#drone-sequence",
        { opacity: 0, ease: "none", duration: 0.25 },
        0
      );

      tl.to(
        "#galaxy-section-canvas",
        { opacity: 1, ease: "none", duration: 0.33 },
        0.33
      );

      tl.to(
        "#galaxy-section-canvas",
        { opacity: 0, ease: "power1.inOut", duration: 0.22 },
        0.66
      );

      tl.to(
        "#galaxy-section-canvas",
        { opacity: 0, ease: "none", duration: 0.12 },
        0.88
      );

      const pauseTrigger = ScrollTrigger.create({
        trigger: galaxySection,
        start: 'top top',
        end: 'bottom top',
        onToggle: (self) => {
          if (setPaused) {
            setPaused(self.isActive);
          }
        }
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
        pauseTrigger.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, [setPaused]);
}