import React, { useRef } from 'react';
import WorkshopCard from './WorkshopCard.jsx';
import { workshops } from '../data/workshops.js';

export default function WorkshopsSection() {
  const headerRef = useRef(null);

  const handleHeaderMouseMove = (e) => {
    const header = headerRef.current;
    if (header) {
      const rect = header.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      header.style.setProperty('--mouse-x', `${x}px`);
      header.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <section className="workshops-section">

      {/* SVG Mask for Cards */}
      <svg height="0" width="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <clipPath id="workshop-mask-svg" clipPathUnits="objectBoundingBox">
            <path
              d="M 0.15,0 L 0.85,0 L 1,0.1 L 1,0.3 L 0.92,0.3 L 0.92,0.4 L 1,0.4 L 1,0.85 L 0.7,1 L 0.08,1 L 0.08,0.92 L 0,0.92 L 0,0.4 L 0.08,0.4 L 0.08,0.3 L 0,0.3 L 0,0.1 Z"
            ></path>
          </clipPath>
        </defs>
      </svg>

      <div className="workshop-header fade-up">
        <div 
          ref={headerRef} 
          className="header-panel group"
          onMouseMove={handleHeaderMouseMove}
        >
          <div className="glow-strip left-strip"></div>
          <div className="glow-strip right-strip"></div>
          <h2 className="workshop-title">ROBOTICS & WORKSHOPS</h2>
          <div className="header-gradient"></div>
        </div>
      </div>

      <div className="tile-grid">
        {workshops.map((workshop) => (
          <WorkshopCard
            key={workshop.id}
            titleLine1={workshop.titleLine1}
            titleLine2={workshop.titleLine2}
            image={workshop.image}
            priceCurrent={workshop.priceCurrent}
            priceOld={workshop.priceOld}
            icon={workshop.icon}
            delay={workshop.delay}
          />
        ))}
      </div>
    </section>
  );
}
