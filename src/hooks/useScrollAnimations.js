import useHeroAnimations from './useHeroAnimations';
import useDroneAnimations from './useDroneAnimations';
import useSectionAnimations from './useSectionAnimations';
import useGalaxyAnimations from './useGalaxyAnimations';

export default function useScrollAnimations(setTargetFrame, setPaused) {
  useHeroAnimations();
  useDroneAnimations(setTargetFrame);
  useSectionAnimations();
  useGalaxyAnimations(setPaused);
}