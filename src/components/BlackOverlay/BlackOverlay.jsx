import React from 'react';

export default function BlackOverlay() {
  return (
    <div
      id="black-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: `
        radial-gradient(
          circle at center,
          rgba(0,0,0,0) 0%,
          rgba(0,0,0,0.15) 45%,
          rgba(0,0,0,0.55) 75%,
          rgba(0,0,0,0.95) 100%
          )
        `,
        zIndex: 999,
        pointerEvents: 'none',
        opacity: 0,
        willChange: 'opacity',
      }}
    ></div>
  );
}
