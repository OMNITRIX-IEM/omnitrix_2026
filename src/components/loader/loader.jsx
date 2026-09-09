import React, { useState, useEffect, useRef } from 'react';
import omnitrixImage from '@/assets/loader/images/omnitrix_loader.png';
import { markAppLoaded } from '@/utils/appLifecycle';
import './loader.css';

// 24 static background stars
const STARS = [
  { id: 1, top: '8%', left: '12%', size: '2px', twinkle: true, delay: '0s' },
  { id: 2, top: '15%', left: '85%', size: '1.5px', twinkle: false },
  { id: 3, top: '22%', left: '45%', size: '2px', twinkle: true, delay: '1.5s' },
  { id: 4, top: '28%', left: '78%', size: '1px', twinkle: false },
  { id: 5, top: '35%', left: '18%', size: '2.5px', twinkle: true, delay: '0.7s' },
  { id: 6, top: '42%', left: '92%', size: '1.5px', twinkle: false },
  { id: 7, top: '50%', left: '8%', size: '2px', twinkle: true, delay: '2.1s' },
  { id: 8, top: '58%', left: '88%', size: '1px', twinkle: false },
  { id: 9, top: '65%', left: '25%', size: '2px', twinkle: true, delay: '1.1s' },
  { id: 10, top: '72%', left: '70%', size: '1.5px', twinkle: false },
  { id: 11, top: '80%', left: '15%', size: '2.5px', twinkle: true, delay: '2.8s' },
  { id: 12, top: '88%', left: '82%', size: '1px', twinkle: false },
  { id: 13, top: '12%', left: '62%', size: '1.5px', twinkle: false },
  { id: 14, top: '19%', left: '30%', size: '2px', twinkle: true, delay: '0.4s' },
  { id: 15, top: '31%', left: '68%', size: '1px', twinkle: false },
  { id: 16, top: '48%', left: '82%', size: '2.5px', twinkle: true, delay: '1.8s' },
  { id: 17, top: '62%', left: '5%', size: '1.5px', twinkle: false },
  { id: 18, top: '76%', left: '40%', size: '2px', twinkle: true, delay: '2.4s' },
  { id: 19, top: '84%', left: '60%', size: '1px', twinkle: false },
  { id: 20, top: '92%', left: '35%', size: '1.5px', twinkle: false },
  { id: 21, top: '6%', left: '38%', size: '2px', twinkle: true, delay: '3.1s' },
  { id: 22, top: '40%', left: '12%', size: '1px', twinkle: false },
  { id: 23, top: '68%', left: '95%', size: '2px', twinkle: true, delay: '0.9s' },
  { id: 24, top: '95%', left: '90%', size: '1.5px', twinkle: false },
];

const STATUS_MESSAGES = [
  { threshold: 0, text: 'INITIALIZING CORE...' },
  { threshold: 20, text: 'CALIBRATING SYSTEM...' },
  { threshold: 40, text: 'SYNCING EVENT DATABASE...' },
  { threshold: 60, text: 'LOADING BATTLEFIELD...' },
  { threshold: 80, text: 'SYSTEM CHECK...' },
  { threshold: 100, text: 'SYSTEM READY' },
];

export default function Loader({ ready = false, percent }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [visible, setVisible] = useState(true);

  const readyRef = useRef(ready);
  const percentRef = useRef(percent);

  useEffect(() => {
    readyRef.current = ready;
  }, [ready]);

  useEffect(() => {
    percentRef.current = percent;
  }, [percent]);

  // Robust Body Scroll Lock Management
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Smooth, deterministic progress engine
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        const isAppReady = readyRef.current || (percentRef.current !== undefined && percentRef.current >= 100);
        const realPercent = percentRef.current;

        // Target cap: if app is not ready yet, cap simulated progress at 90%
        const maxAllowed = isAppReady ? 100 : 90;

        let next;
        if (isAppReady) {
          // Accelerate smoothly to 100% when ready
          next = prev + Math.max(3, Math.floor(Math.random() * 4) + 3);
        } else if (realPercent !== undefined && realPercent > prev && realPercent <= 90) {
          // Follow actual preload percentage if available
          next = prev + Math.max(1, Math.min(3, realPercent - prev));
        } else {
          // Standard smooth increment (2-3% per step)
          next = prev + Math.floor(Math.random() * 2) + 2;
        }

        return next > maxAllowed ? maxAllowed : next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  // Trigger fade-out and unmount when progress reaches 100%
  useEffect(() => {
    if (progress === 100) {
      markAppLoaded();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('hero-layout-ready'));
      }

      const timer = setTimeout(() => {
        setIsFadingOut(true);
      }, 850);

      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 1450); // 850ms hold + 600ms fade-out transition

      return () => {
        clearTimeout(timer);
        clearTimeout(removeTimer);
      };
    }
  }, [progress]);

  // Master timeline calculations
  // Phase 1 (0% -> 80%): Exactly ONE 360° rotation
  const rotProgress = Math.min(progress / 80, 1);
  const rotationDeg = rotProgress * 360;

  // Phase 2 (80% -> 100%): Internal mechanism opening (0.0 to 1.0)
  const openProgress = Math.max(0, (progress - 80) / 20);

  const currentStatus = STATUS_MESSAGES.reduce((currentText, msg) => {
    return progress >= msg.threshold ? msg.text : currentText;
  }, STATUS_MESSAGES[0].text);

  if (!visible) return null;

  return (
    <div className={`loader-container ${isFadingOut ? 'fade-out' : ''}`}>
      {/* Background Stars Layer */}
      <div className="stars-layer" aria-hidden="true">
        {STARS.map((star) => (
          <span
            key={star.id}
            className={`star ${star.twinkle ? 'twinkle' : ''}`}
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay || '0s',
            }}
          />
        ))}
      </div>

      {/* Top HUD overlay */}
      <div className="hud-header">
        <span className="hud-tag">IEM // UEM</span>
      </div>

      {/* Main Center Content */}
      <main className="loader-center">
        {/* Layered Omnitrix Container */}
        <div className={`omnitrix-wrapper ${progress === 100 ? 'ready-pulse' : ''}`}>
          {/* Scanning Rings */}
          <div className="omnitrix-scan-ring" aria-hidden="true" />
          <div className="omnitrix-scan-ring-outer" aria-hidden="true" />

          {/* LAYER 1: STATIC BASE IMAGE (Outer Metallic Watch + 4 Nodes - NEVER Rotated) */}
          <img
            src={omnitrixImage}
            alt="Omnitrix Device Base"
            className="omnitrix-static-base"
            width="220"
            height="220"
          />

          {/* LAYER 2: ISOLATED INNER MECHANISM (Rotates 0°-360° during 0-80%, Opens during 80-100%) */}
          <div
            className="omnitrix-inner-rotating"
            style={{
              '--rotation-deg': `${rotationDeg}deg`,
              '--open-progress': openProgress,
            }}
            aria-hidden="true"
          >
            {/* Dial Background Texture */}
            <div className="omnitrix-dial-bg" />

            {/* Green Triangular Neon Energy Core (Reveals progressively from 80% to 100%) */}
            <div className="omnitrix-neon-core" />

            {/* Left Opposing Black Section (Moves outward left during 80-100%) */}
            <div className="omnitrix-chevron chevron-left" />

            {/* Right Opposing Black Section (Moves outward right during 80-100%) */}
            <div className="omnitrix-chevron chevron-right" />
          </div>
        </div>

        {/* System Status Display */}
        <h1 className="main-title">OMNITRIX SYSTEM INITIALIZING</h1>

        <p className="status-subtext" key={currentStatus}>
          {currentStatus}
        </p>

        {/* Progress Bar (Uses transform scaleX for compositor efficiency) */}
        <div
          className="progress-track"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Omnitrix Loading Progress"
        >
          <div
            className="progress-fill"
            style={{ '--progress': progress }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="percentage-display">{progress}%</div>
      </main>

      {/* Bottom HUD overlay */}
      <div className="hud-footer">
        <span className="hud-tag">BE READY</span>
        <span className="hud-tag brand-tag">OMNITRIX 2026</span>
      </div>
    </div>
  );
}
