import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TOTAL_DRONE_FRAMES } from '@/utils/constants';

gsap.registerPlugin(ScrollTrigger);

export default function useDroneAnimations(setTargetFrame) {
  useEffect(() => {
    console.log("useDroneAnimations mounted");
    console.log("setTargetFrame:", setTargetFrame);
    if (!setTargetFrame) return;

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: '#phase-01',
      start: 'top top',
      endTrigger: '#phase-03',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        console.log("scroll progress", self.progress);
        const progress = self.progress; // 0 to 1
        let frameProgress = 0;

        if (progress < 1 / 3) {
          // Section 2 (Phase 1): first 30% of frames
          const localProgress = progress * 3;
          frameProgress = localProgress * 0.30;
        } else if (progress < 2 / 3) {
          // Section 3 (Phase 2): middle 35% of frames (30% to 65%)
          const localProgress = (progress - 1 / 3) * 3;
          frameProgress = 0.30 + localProgress * 0.35;
        } else {
          // Section 4 (Phase 3): remaining frames (65% to 100%)
          const localProgress = (progress - 2 / 3) * 3;
          frameProgress = 0.65 + localProgress * 0.35;
        }

        // Calculate target frame index (0 to 77)
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
  }, [setTargetFrame]);
}
