import React from 'react';
import Navbar from '@/navbar/Navbar';
import './ComingSoon.css';

export default function ComingSoon() {
  return (
    <div className="coming-soon-page">
      <Navbar />

      <main className="coming-soon-container">
        {/* Subtle Green Radial Glow Background */}
        <div className="coming-soon-glow-bg" />

        {/* Tactical Scanlines Overlay */}
        <div className="coming-soon-scanlines" />

        <div className="coming-soon-content">
          {/* Subtle Glowing Omnitrix Hourglass Emblem */}
          <div className="coming-soon-emblem-wrapper">
            <svg
              className="coming-soon-omnitrix-emblem"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30"
                cy="30"
                r="27"
                stroke="#E8E8E3"
                strokeWidth="2"
                strokeOpacity="0.7"
              />
              <circle
                cx="30"
                cy="30"
                r="21"
                stroke="#B6FF00"
                strokeWidth="1.5"
                strokeOpacity="0.5"
                strokeDasharray="4 3"
              />
              <path
                d="M18 16L30 30L18 44H42L30 30L42 16H18Z"
                fill="#B6FF00"
                fillOpacity="0.9"
              />
              <circle cx="30" cy="30" r="3.5" fill="#FFFFFF" />
            </svg>
          </div>

          <h1 className="coming-soon-title">COMING SOON</h1>
        </div>
      </main>
    </div>
  );
}
