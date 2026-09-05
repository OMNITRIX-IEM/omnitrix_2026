import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  // Handle Escape key and body scroll locking when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="robowars-navbar">
      <div className="robowars-navbar-inner">
        {/* LEFT: OMNITRIX LOGO */}
        <Link to="/" className="robowars-navbar-logo" aria-label="ROBOWARS Home" onClick={closeMobileMenu}>
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

        {/* CENTER: DESKTOP NAV LINKS */}
        <nav className="robowars-navbar-nav">
          <ul className="robowars-navbar-links">
            <li className={`robowars-navbar-item ${isHomeActive ? 'is-active' : ''}`}>
              <Link to="/" className="robowars-navbar-link">
                HOME
              </Link>
            </li>
            <li className={`robowars-navbar-item ${isEventsActive ? 'is-active' : ''}`}>
              <Link to="/events" className="robowars-navbar-link">
                EVENTS
              </Link>
            </li>
            <li className={`robowars-navbar-item ${isBrochureActive ? 'is-active' : ''}`}>
              <Link to="/brochure" className="robowars-navbar-link">
                BROCHURE
              </Link>
            </li>
            <li className={`robowars-navbar-item ${isSponsorsActive ? 'is-active' : ''}`}>
              <Link to="/sponsors" className="robowars-navbar-link">
                SPONSORS
              </Link>
            </li>
            <li className={`robowars-navbar-item ${isAboutActive ? 'is-active' : ''}`}>
              <Link to="/about-us" className="robowars-navbar-link">
                ABOUT US
              </Link>
            </li>
          </ul>
        </nav>

        {/* RIGHT: DESKTOP REGISTER NOW CTA */}
        <Link to="/register" className="robowars-navbar-cta desktop-only-cta">
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

        {/* MOBILE HAMBURGER BUTTON (Visible <= 768px) */}
        <button
          type="button"
          className={`robowars-navbar-hamburger ${isMobileMenuOpen ? 'is-open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* MOBILE DRAWER & BACKDROP */}
      {isMobileMenuOpen && (
        <>
          <div className="robowars-mobile-backdrop" onClick={closeMobileMenu} />
          <nav className="robowars-mobile-menu">
            <ul className="robowars-mobile-links">
              <li className={`robowars-mobile-item ${isHomeActive ? 'is-active' : ''}`}>
                <Link to="/" className="robowars-mobile-link" onClick={closeMobileMenu}>
                  HOME
                </Link>
              </li>
              <li className={`robowars-mobile-item ${isEventsActive ? 'is-active' : ''}`}>
                <Link to="/events" className="robowars-mobile-link" onClick={closeMobileMenu}>
                  EVENTS
                </Link>
              </li>
              <li className={`robowars-mobile-item ${isBrochureActive ? 'is-active' : ''}`}>
                <Link to="/brochure" className="robowars-mobile-link" onClick={closeMobileMenu}>
                  BROCHURE
                </Link>
              </li>
              <li className={`robowars-mobile-item ${isSponsorsActive ? 'is-active' : ''}`}>
                <Link to="/sponsors" className="robowars-mobile-link" onClick={closeMobileMenu}>
                  SPONSORS
                </Link>
              </li>
              <li className={`robowars-mobile-item ${isAboutActive ? 'is-active' : ''}`}>
                <Link to="/about-us" className="robowars-mobile-link" onClick={closeMobileMenu}>
                  ABOUT US
                </Link>
              </li>
            </ul>

            <Link to="/register" className="robowars-mobile-cta" onClick={closeMobileMenu}>
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
          </nav>
        </>
      )}
    </header>
  );
}

