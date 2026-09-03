import React from 'react';
import gamingWheel from '@/assets/events/main/gaming-wheel.webp';

export default function EventWheel({ currentState }) {
  const rotationAngle = currentState * 120;

  return (
    <div className="column-left">
      <div className="wheel-container">
        <img
          src={gamingWheel}
          className="gaming-wheel"
          id="main-wheel"
          alt="Steering Wheel"
          style={{ transform: `rotate(${rotationAngle}deg)` }}
        />
      </div>
    </div>
  );
}
