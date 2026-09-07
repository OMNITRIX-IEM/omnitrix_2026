import React, { useRef } from 'react';

export default function WorkshopCard({
  titleLine1,
  titleLine2,
  image,
  priceCurrent,
  priceOld,
  icon,
  delay,
  registerLink,
  exploreContent,
  onExplore,
  workshop
}) {
  const cardRef = useRef(null);

  const t1 = titleLine1 || workshop?.titleLine1;
  const t2 = titleLine2 || workshop?.titleLine2;
  const img = image || workshop?.image;
  const currPrice = priceCurrent || workshop?.priceCurrent;
  const oldPrice = priceOld || workshop?.priceOld;
  const ic = icon || workshop?.icon;
  const del = delay || workshop?.delay;
  const regLink = registerLink !== undefined ? registerLink : workshop?.registerLink;
  const currentWorkshop = workshop || {
    titleLine1: t1,
    titleLine2: t2,
    image: img,
    priceCurrent: currPrice,
    priceOld: oldPrice,
    icon: ic,
    delay: del,
    registerLink: regLink,
    exploreContent: exploreContent !== undefined ? exploreContent : workshop?.exploreContent
  };

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
      style={{ transitionDelay: del }}
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
            src={img}
            alt={`${t1 || ''} ${t2 || ''}`}
            className="card-image"
          />
          <div className="image-gradient"></div>
        </div>
        <div className="card-content-area">
          <h3 className="card-heading">
            {t1}
            {t2 && <br />}
            {t2}
          </h3>
          <div className="card-actions">
            {regLink ? (
              <a
                href={regLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-card btn-register-link"
              >
                REGISTER
              </a>
            ) : (
              <button
                type="button"
                className="btn-card btn-disabled"
                aria-disabled="true"
                onClick={(e) => e.preventDefault()}
              >
                REGISTER
              </button>
            )}
            <button
              type="button"
              className="btn-card"
              onClick={() => onExplore && onExplore(currentWorkshop)}
            >
              EXPLORE
            </button>
          </div>
        </div>
        <div className="card-footer">
          <div className="price-wrap">
            <span className="price-current">{currPrice}</span>
            <span className="price-old">{oldPrice}</span>
          </div>
          <span className="material-symbols-outlined footer-icon">{ic}</span>
        </div>
      </div>
    </div>
  );
}
