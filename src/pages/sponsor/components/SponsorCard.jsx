import React, { useRef } from 'react';

export default function SponsorCard({ className, children }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255, 34, 0, 0.25) 0%,
        rgba(232, 25, 44, 0.1) 40%,
        rgba(232, 25, 44, 0.05) 100%
      )
    `;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.background = '';
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
