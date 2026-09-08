import React, { useEffect, useState, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import loadingVideo from '@/assets/videos/loading.mp4';
import './Loader.css';

export default function Loader({ ready }) {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);
  const videoRef = useRef(null);
  const finishTriggered = useRef(false);

  const handleFinish = () => {
    if (finishTriggered.current) return;
    finishTriggered.current = true;
    setFadingOut(true);
    setTimeout(() => {
      setVisible(false);
      if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.refresh) {
        ScrollTrigger.refresh();
      }
    }, 600);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }

    // Safety fallback timer if video fails or stalls
    const fallbackTimer = setTimeout(() => {
      handleFinish();
    }, 4200);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div id="loader" className={fadingOut ? 'loader-fade-out' : ''}>
      <video
        ref={videoRef}
        src={loadingVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="loader-video"
        onEnded={handleFinish}
      />
    </div>
  );
}
