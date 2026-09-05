import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TOTAL_DRONE_FRAMES } from '@/utils/constants';

gsap.registerPlugin(ScrollTrigger);

export default function useDroneAnimations(setTargetFrame) {
  useEffect(() => {
    if (!setTargetFrame) return;

    const mm = gsap.matchMedia();

    // Desktop > 768px: Original desktop 3-phase frame mapping logic
    mm.add('(min-width: 769px)', () => {
      const scrollTriggerInstance = ScrollTrigger.create({
        trigger: '#phase-01',
        start: 'top top',
        endTrigger: '#phase-03',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress; // 0 to 1
          let frameProgress = 0;

          if (progress < 1 / 3) {
            const localProgress = progress * 3;
            frameProgress = localProgress * 0.30;
          } else if (progress < 2 / 3) {
            const localProgress = (progress - 1 / 3) * 3;
            frameProgress = 0.30 + localProgress * 0.35;
          } else {
            const localProgress = (progress - 2 / 3) * 3;
            frameProgress = 0.65 + localProgress * 0.35;
          }

          const frameIndex = Math.min(
            TOTAL_DRONE_FRAMES - 1,
            Math.max(0, Math.floor(frameProgress * (TOTAL_DRONE_FRAMES - 1)))
          );

          setTargetFrame(frameIndex);
        },
      });

      return () => {
        scrollTriggerInstance.kill();
      };
    });

    // Mobile <= 768px: Even linear frame scrubbing from #phase-01 top 80% to #phase-03 bottom bottom
    mm.add('(max-width: 768px)', () => {
      const mobileTrigger = ScrollTrigger.create({
        trigger: '#phase-01',
        start: 'top 80%',
        endTrigger: '#phase-03',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          const frameIndex = Math.min(
            TOTAL_DRONE_FRAMES - 1,
            Math.max(0, Math.floor(self.progress * (TOTAL_DRONE_FRAMES - 1)))
          );

          setTargetFrame(frameIndex);
        },
      });

      return () => {
        mobileTrigger.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, [setTargetFrame]);
}

