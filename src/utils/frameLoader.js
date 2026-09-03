import { TOTAL_DRONE_FRAMES } from './constants';

// Load all optimized spaceship frames
const frameModules = import.meta.glob(
  '../assets/spaceship_frames/scene*.jpeg',
  { eager: true }
);

// Sort frames numerically by scene number
const allFrameKeys = Object.keys(frameModules).sort((a, b) => {
  const matchA = a.match(/scene(\d+)\.jpeg$/);
  const matchB = b.match(/scene(\d+)\.jpeg$/);

  const numA = matchA ? parseInt(matchA[1], 10) : 0;
  const numB = matchB ? parseInt(matchB[1], 10) : 0;

  return numA - numB;
});

console.log("🚀 SPACESHIP FRAME MODULES:", allFrameKeys);
console.log("🚀 TOTAL FOUND:", allFrameKeys.length);
console.log("🚀 FIRST FRAME:", allFrameKeys[0]);
console.log("🚀 LAST FRAME:", allFrameKeys[allFrameKeys.length - 1]);

export const getDroneFrameUrls = () => {
  const selectedUrls = [];

  const frameCount = Math.min(
    TOTAL_DRONE_FRAMES,
    allFrameKeys.length
  );

  for (let i = 0; i < frameCount; i++) {
    const key = allFrameKeys[i];
    const module = frameModules[key];

    if (module) {
      selectedUrls.push(module.default || module);
    }
  }

  console.log("🚀 FRAME URL COUNT:", selectedUrls.length);
  console.log("🚀 FIRST URL:", selectedUrls[0]);
  console.log("🚀 LAST URL:", selectedUrls[selectedUrls.length - 1]);

  return selectedUrls;
};