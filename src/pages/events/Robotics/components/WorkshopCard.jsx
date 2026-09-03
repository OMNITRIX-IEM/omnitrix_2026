import React, { useRef } from 'react';

export default function WorkshopCard({ titleLine1, titleLine2, image, priceCurrent, priceOld, icon, delay }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <div
      ref={cardRef}
      className="workshop-card group fade-up"
      style={{ transitionDelay: delay }}
      onMouseMove={handleMouseMove}
    >
      <div className="card-border">
        <svg viewBox="0 0 300 420" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path
            d="M 45,1 L 255,1 L 299,42 L 299,126 L 276,126 L 276,168 L 299,168 L 299,357 L 210,419 L 24,419 L 24,386 L 1,386 L 1,168 L 24,168 L 24,126 L 1,126 L 1,42 Z"
            stroke="white"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          ></path>
        </svg>
      </div>
      <div className="card-mask">
        <div className="vertical-tag">WORKSHOP</div>
        <div className="card-image-wrap">
          <img 
            src={image} 
            alt={`${titleLine1} ${titleLine2}`} 
            className="card-image" 
          />
          <div className="image-gradient"></div>
        </div>
        <div className="card-content-area">
          <h3 className="card-heading">
            {titleLine1}
            <br />
            {titleLine2}
          </h3>
          <div className="card-actions">
            <button className="btn-card">REGISTER</button>
            <button className="btn-card">EXPLORE</button>
          </div>
        </div>
        <div className="card-footer">
          <div className="price-wrap">
            <span className="price-current">{priceCurrent}</span>
            <span className="price-old">{priceOld}</span>
          </div>
          <span className="material-symbols-outlined footer-icon">{icon}</span>
        </div>
      </div>
    </div>
  );
}
