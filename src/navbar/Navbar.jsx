import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Active state checkers
  const isHomeActive = currentPath === '/' || currentPath === '/home';
  const isEventsActive =
    currentPath.startsWith('/events') ||
    currentPath.startsWith('/esports') ||
    currentPath.startsWith('/workshop') ||
    currentPath.startsWith('/indoor-games');
  const isBrochureActive = currentPath.startsWith('/brochure');
  const isSponsorsActive = currentPath.startsWith('/sponsors');
  const isAboutActive = currentPath.startsWith('/about');

  return (
    <header className="robowars-navbar">
      <div className="robowars-navbar-inner">
        {/* LEFT: OMNITRIX LOGO */}
        <Link to="/" className="robowars-navbar-logo" aria-label="ROBOWARS Home">
          <svg
            className="robowars-omnitrix-icon"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer tactical ring */}
            <circle
              cx="20"
              cy="20"
              r="17.5"
              stroke="#E8E8E3"
              strokeWidth="2"
              strokeOpacity="0.85"
            />
            <circle
              cx="20"
              cy="20"
              r="13.5"
              stroke="#B6FF00"
              strokeWidth="1"
              strokeOpacity="0.4"
              strokeDasharray="3 2"
            />
            {/* Inner Omnitrix hourglass mark */}
            <path
              d="M12 11L20 20L12 29H28L20 20L28 11H12Z"
              fill="#B6FF00"
              fillOpacity="0.95"
            />
            {/* Core dot */}
            <circle cx="20" cy="20" r="2.5" fill="#FFFFFF" />
          </svg>
        </Link>

        {/* CENTER: NAV LINKS */}
        <nav className="robowars-navbar-nav">
          <ul className="robowars-navbar-links">
            {/* 1. HOME */}
            <li className={`robowars-navbar-item ${isHomeActive ? 'is-active' : ''}`}>
              <Link to="/" className="robowars-navbar-link">
                HOME
              </Link>
            </li>

            {/* 2. EVENTS */}
            <li className={`robowars-navbar-item ${isEventsActive ? 'is-active' : ''}`}>
              <Link to="/events" className="robowars-navbar-link">
                EVENTS
              </Link>
            </li>

            {/* 3. BROCHURE */}
            <li className={`robowars-navbar-item ${isBrochureActive ? 'is-active' : ''}`}>
              <Link to="/brochure" className="robowars-navbar-link">
                BROCHURE
              </Link>
            </li>

            {/* 4. SPONSORS */}
            <li className={`robowars-navbar-item ${isSponsorsActive ? 'is-active' : ''}`}>
              <Link to="/sponsors" className="robowars-navbar-link">
                SPONSORS
              </Link>
            </li>

            {/* 5. ABOUT US */}
            <li className={`robowars-navbar-item ${isAboutActive ? 'is-active' : ''}`}>
              <Link to="/about-us" className="robowars-navbar-link">
                ABOUT US
              </Link>
            </li>
          </ul>
        </nav>

        {/* RIGHT: REGISTER NOW CTA */}
        <Link to="/register" className="robowars-navbar-cta">
          <span>REGISTER NOW</span>
          <svg
            className="robowars-cta-arrow"
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
        </Link>
      </div>
    </header>
  );
}
