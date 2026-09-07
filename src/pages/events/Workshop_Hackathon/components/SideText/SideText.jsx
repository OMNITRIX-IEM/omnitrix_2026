import React from 'react';
import './SideText.css';

export const TopSideText = () => {
  return (
    <div className="omni-top-sidetext" aria-hidden="true">
      {/* Top Left Text */}
      <div className="side-block side-top-left">
        <p>IDEAS</p>
        <p>PEOPLE</p>
        <p>TECHNOLOGY</p>
        <p>A BRIGHTER</p>
        <p>TOMORROW</p>
      </div>

      {/* Top Right Text */}
      <div className="side-block side-top-right">
        <p>SAME</p>
        <p>CURIOSITY</p>
        <p>DIFFERENT</p>
        <p>POSSIBILITIES</p>
      </div>
    </div>
  );
};

export const BottomSideText = () => {
  return (
    <div className="omni-bottom-sidetext" aria-hidden="true">
      {/* Bottom Left */}
      <div className="side-block side-bottom-left">
        <p>TRANSFORM</p>
        <p>YOUR</p>
        <p>IDEAS</p>
        <div className="side-dash" />
      </div>

      {/* Bottom Right */}
      <div className="side-block side-bottom-right">
        <p>INTO</p>
        <p>REAL-WORLD</p>
        <p>IMPACT</p>
        <div className="side-dash" />
      </div>
    </div>
  );
};
