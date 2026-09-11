import React from 'react';
import Navbar from '@/navbar/Navbar';
import bg2 from '@/assets/images/bg2.webp';
import sponsorPdf from '@/assets/brochures/sponsor_brochure.pdf';
import './Brochure.css';

export default function Brochure() {
  // Handler for Event Brochure card (placeholder for future link insertion)
  const handleEventBrochureClick = (e) => {
    e.preventDefault();
    // Future Event Brochure link will be configured here
  };

  return (
    <div
      className="brochure-page"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      {/* Dark & Ambient Omnitrix Overlay for Readability */}
      <div className="brochure-overlay" />
      <div className="brochure-glow-bg" />

      {/* Common Navbar Component */}
      <Navbar />

      <main className="brochure-container">
        <div className="brochure-content">
          {/* Header Section */}
          <div className="brochure-header">
            <div className="brochure-emblem-wrapper">
              <svg
                className="brochure-omnitrix-emblem"
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
            <h1 className="brochure-title">BROCHURE</h1>
          </div>

          {/* Cards Container */}
          <div className="brochure-cards">
            {/* SPONSOR BROCHURE CARD */}
            <a
              href={sponsorPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="brochure-card sponsor-card"
              aria-label="Open Sponsor Brochure in a new tab"
            >
              <div className="card-ambient-glow" />
              <div className="card-body">
                <div className="card-icon-wrapper">
                  <svg
                    className="card-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <polyline points="9 15 12 18 15 15" />
                  </svg>
                </div>

                <div className="card-text-wrapper">
                  <h2 className="card-title">SPONSOR BROCHURE</h2>
                  <span className="card-subtitle">Official Sponsorship Overview & Packages</span>
                </div>

                <div className="card-cta-badge">
                  <span>VIEW PDF</span>
                  <svg
                    className="cta-arrow"
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                  >
                    <path
                      d="M8 1L13 6M13 6L8 11M13 6H1"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </a>

            {/* EVENT BROCHURE CARD (Placeholder for future link) */}
            <div
              className="brochure-card event-card"
              onClick={handleEventBrochureClick}
              role="button"
              tabIndex={0}
              aria-label="Event Brochure"
            >
              <div className="card-ambient-glow" />
              <div className="card-body">
                <div className="card-icon-wrapper">
                  <svg
                    className="card-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>

                <div className="card-text-wrapper">
                  <h2 className="card-title">EVENT BROCHURE</h2>
                  <span className="card-subtitle">Schedule, Competitions & Guidelines</span>
                </div>

                <div className="card-cta-badge">
                  <span>VIEW PDF</span>
                  <svg
                    className="cta-arrow"
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                  >
                    <path
                      d="M8 1L13 6M13 6L8 11M13 6H1"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
