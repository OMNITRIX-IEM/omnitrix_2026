import React from 'react';

export default function GameCard({ game }) {
  const { tag, title, image, price, icon } = game;

  return (
    <div className="esports-card group">
      <div className="card-energy-glow" aria-hidden="true"></div>
      <div className="esports-card-border">
        <svg fill="none" viewBox="0 0 300 420" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M 45,1 L 255,1 L 299,42 L 299,126 L 276,126 L 276,168 L 299,168 L 299,357 L 210,419 L 24,419 L 24,386 L 1,386 L 1,168 L 24,168 L 24,126 L 1,126 L 1,42 Z"
            stroke="white"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div className="esports-card-mask">
        <div className="esports-card-tag">{tag}</div>
        <div className="esports-card-image-wrap">
          <img alt={title.replace('\n', ' ')} src={image} />
          <div className="esports-card-gradient"></div>
        </div>
        <div className="esports-card-content">
          <h3>
            {title.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                {idx < title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h3>
          <div className="esports-card-actions">
            <button>REGISTER</button>
            <button>EXPLORE</button>
          </div>
        </div>
        <div className="esports-card-footer">
          <div className="esports-card-price">
            <span className="price-current">{price}</span>
          </div>
          <span className="esports-card-icon material-symbols-outlined">{icon}</span>
        </div>
      </div>
    </div>
  );
}
