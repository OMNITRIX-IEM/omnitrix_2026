import React from 'react';
import './DroneSequence.css';

export default function DroneSequence({ currentFrameUrl }) {
  return (
    <div id="drone-sequence">
      <img
        id="drone-frame"
        src={currentFrameUrl || ''}
        alt="Cinematic Drone Frame"
      />
      <div className="drone-overlay"></div>
    </div>
  );
}
