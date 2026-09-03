import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { eventsData } from '../data/events';

const eventPaths = {
  workshops: '/events/robotics',
  esports: '/events/esports',
  games: '/events/indoor-games',
};

export default function EventFeature({ currentState }) {
  const targetEvent = eventsData[currentState];
  const [displayEvent, setDisplayEvent] = useState(targetEvent);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (targetEvent.id === displayEvent.id) return;

    setIsFading(true);

    const timer = setTimeout(() => {
      setDisplayEvent(targetEvent);
      setIsFading(false);
    }, 400); // 400ms match the fading out CSS duration

    return () => clearTimeout(timer);
  }, [targetEvent, displayEvent.id]);

  return (
    <div className="column-right">
      <div className={`feature-card ${isFading ? 'fading' : ''}`} id="feature-card">
        <div className="card-image">
          <img id="card-img" src={displayEvent.image} alt={displayEvent.title} />
          <div className="card-overlay"></div>
        </div>
        <div className="card-content">
          <div className="card-date" id="card-date">{displayEvent.date}</div>
          <h3 className="card-title" id="card-title">
            <Link
              to={eventPaths[displayEvent.id] || '#'}
              style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
            >
              {displayEvent.title}
            </Link>
          </h3>
          <p className="card-desc" id="card-desc">{displayEvent.desc}</p>
        </div>
      </div>
    </div>
  );
}
