import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="omnitrix-footer">
      <div className="footer-glow-line" aria-hidden="true" />
      <div className="footer-container">
        {/* LEFT COLUMN (Extreme Left) */}
        <div className="footer-col footer-col-left">
          <h3 className="footer-heading">JOIN US AT:</h3>
          <p className="footer-address">
            Gurukul Building, Institute of Engineering and Management,<br />
            Salt Lake, Sector 5, Kolkata - 700091
          </p>
          <a
            href="https://goo.gl/maps/WXa9BLz6g5vSy5id7"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-maps-link"
            aria-label="Open Google Maps location for Gurukul Building IEM"
          >
            <span className="maps-icon">📍</span> MAPS
          </a>
        </div>

        {/* CENTER COLUMN (Exact Center) */}
        <div className="footer-col footer-col-center">
          <div className="footer-brand">
            <svg
              className="footer-omnitrix-icon"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
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
              <path
                d="M12 11L20 20L12 29H28L20 20L28 11H12Z"
                fill="#B6FF00"
                fillOpacity="0.95"
              />
              <circle cx="20" cy="20" r="2.5" fill="#FFFFFF" />
            </svg>
            <span className="footer-title">
              OMNITRIX <span className="text-neon">IEM 2026</span>
            </span>
          </div>
          {/* Tagline commented out for compact footer */}
          {/* <p className="footer-tagline">
            ROBOTICS • ESPORTS • INNOVATION • COMPETITION
          </p> */}
        </div>

        {/* RIGHT COLUMN (Extreme Right) */}
        <div className="footer-col footer-col-right">
          <h3 className="footer-heading">CONTACT US AT:</h3>
          <div className="footer-contact-item">
            <span className="contact-label">Gmail:</span>
            <a
              href="mailto:omnitrix.iem2026@gmail.com"
              className="footer-contact-link"
            >
              omnitrix.iem2026@gmail.com
            </a>
          </div>
          <div className="footer-contact-item">
            <span className="contact-label">For queries:</span>
            <a
              href="tel:+919876543211"
              className="footer-contact-link"
            >
              +91-9876543211
            </a>
          </div>
          <div className="footer-contact-item">
            <span className="contact-label">For technical help:</span>
            <a
              href="tel:+918167243225"
              className="footer-contact-link"
            >
              +91-8167243225
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM BAR - Commented out for compact height */}
      {/* <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            © 2026 OMNITRIX IEM. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div> */}
    </footer>
  );
}


