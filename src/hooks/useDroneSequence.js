import { useEffect, useState, useRef } from 'react';
import { getDroneFrameUrls } from '@/utils/frameLoader';
import { TOTAL_DRONE_FRAMES, INITIAL_PRELOAD_COUNT } from '@/utils/constants';

export function useDroneSequence() {
  const [firstStageReady, setFirstStageReady] = useState(false);
  const [loadedPercent, setLoadedPercent] = useState(0);
  const frameUrls = useRef(getDroneFrameUrls());
  const frames = useRef([]);
  const loadedImages = useRef({});
  
  // Interpolation variables
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const lastDisplayedFrameRef = useRef(-1);
  const animationFrameIdRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const urls = frameUrls.current;
    const firstStageUrls = urls.slice(0, INITIAL_PRELOAD_COUNT);
    const secondStageUrls = urls.slice(INITIAL_PRELOAD_COUNT);

    let stage1Loaded = 0;

    const loadRemainingStages = () => {
      const loadRemaining = () => {
        secondStageUrls.forEach((url, relativeIndex) => {
          const index = INITIAL_PRELOAD_COUNT + relativeIndex;
          const img = new Image();
          img.src = url;
          img.decode()
            .then(() => {
              loadedImages.current[url] = img;
              frames.current[index] = img;
            })
            .catch(() => {
              loadedImages.current[url] = img;
              frames.current[index] = img;
            });
        });
      };

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(loadRemaining);
      } else {
        setTimeout(loadRemaining, 1000);
      }
    };

    firstStageUrls.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      img.decode()
        .then(() => {
          loadedImages.current[url] = img;
          frames.current[index] = img;
          stage1Loaded++;
          setLoadedPercent(Math.round((stage1Loaded / INITIAL_PRELOAD_COUNT) * 100));
          if (stage1Loaded === firstStageUrls.length) {
            setFirstStageReady(true);
            loadRemainingStages();
          }
        })
        .catch(() => {
          loadedImages.current[url] = img;
          frames.current[index] = img;
          stage1Loaded++;
          setLoadedPercent(Math.round((stage1Loaded / INITIAL_PRELOAD_COUNT) * 100));
          if (stage1Loaded === firstStageUrls.length) {
            setFirstStageReady(true);
            loadRemainingStages();
          }
        });
    });

    // Cleanup RAF on unmount
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // Update frame drawing loop
  const updateLoop = () => {
    if (isPausedRef.current) return;
    
    // Interpolation factor: 0.15
    currentFrameRef.current += (targetFrameRef.current - currentFrameRef.current) * 0.15;
    const displayFrame = Math.round(currentFrameRef.current);

    if (displayFrame !== lastDisplayedFrameRef.current) {
      lastDisplayedFrameRef.current = displayFrame;
      const droneFrame = document.getElementById('drone-frame');
      if (droneFrame && frameUrls.current[displayFrame]) {
        const targetUrl = frameUrls.current[displayFrame];
        const targetImg = frames.current[displayFrame];
        if (targetImg && targetImg.src) {
          droneFrame.src = targetImg.src;
        } else {
          droneFrame.src = targetUrl;
        }
      }
    }

    if (Math.abs(targetFrameRef.current - currentFrameRef.current) > 0.05) {
      animationFrameIdRef.current = requestAnimationFrame(updateLoop);
    } else {
      animationFrameIdRef.current = null;
    }
  };

  const setTargetFrame = (frameIndex) => {
    targetFrameRef.current = Math.min(TOTAL_DRONE_FRAMES - 1, Math.max(0, frameIndex));
    if (!animationFrameIdRef.current && !isPausedRef.current) {
      animationFrameIdRef.current = requestAnimationFrame(updateLoop);
    }
  };

  const setPaused = (paused) => {
    isPausedRef.current = paused;
    if (paused && animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
    } else if (!paused && !animationFrameIdRef.current) {
      animationFrameIdRef.current = requestAnimationFrame(updateLoop);
    }
  };

  return {
    firstStageReady,
    loadedPercent,
    setTargetFrame,
    setPaused,
    initialFrameUrl: frameUrls.current[0] || '',
  };
}
