import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useGalaxyAnimations(setPaused) {
  useEffect(() => {
    const galaxySection = document.getElementById('galaxy-section');
    const galaxyCanvas = document.getElementById('galaxy-section-canvas');

    if (!galaxySection || !galaxyCanvas) {
      console.log('Galaxy not mounted. Skipping galaxy animations.');
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: galaxySection,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Entrance phase: Fade IN galaxy canvas (0 -> 0.33)
    tl.fromTo(
      "#galaxy-section-canvas",
      { opacity: 0 },
      { opacity: 1, ease: "none", duration: 0.33 },
      0
    );

    // Drone sequence fades out as galaxy enters (0.08 -> 0.33)
    tl.to(
      "#drone-sequence",
      { opacity: 0, ease: "none", duration: 0.25 },
      0.08
    );

    // Hold phase: Galaxy stays fully visible (0.33 -> 0.66)
    tl.to(
      "#galaxy-section-canvas",
      { opacity: 1, ease: "none", duration: 0.33 },
      0.33
    );

    // Exit phase: Fade OUT galaxy canvas to pure black (0.66 -> 0.88)
    tl.to(
      "#galaxy-section-canvas",
      { opacity: 0, ease: "power1.inOut", duration: 0.22 },
      0.66
    );

    // Pure Black Buffer (0.88 -> 1.0): opacity stays 0
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
  }, [setPaused]);
}