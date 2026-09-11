import React from 'react';
import Navbar from '@/navbar/Navbar';
import sponsorsBg from '@/assets/sponsor/sponsors_bg.webp';
import {
  aboutContent,
  director,
  facultyMembers,
  studentChapter,
  developers,
} from './data';
import './AboutUs.css';

// SVG Icon components for social links
const LinkedInIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const MailIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// Fallback avatar handler for image load resilience
const handleImageError = (e) => {
  e.target.onerror = null;
  e.target.src =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400';
};

export default function AboutUs() {
  return (
    <div className="about-us-page">
      {/* --------------------------------------------------------------------------
         FIXED BACKGROUND LAYER (Remains stationary while content scrolls)
         -------------------------------------------------------------------------- */}
      <div
        className="about-bg-fixed"
        style={{ backgroundImage: `url(${sponsorsBg})` }}
      >
        <div className="about-bg-overlay" />
      </div>

      {/* TOP NAVIGATION BAR */}
      <Navbar />

      {/* MAIN VERTICAL SCROLLING CONTENT */}
      <main className="about-content-container">
        {/* ========================================================================
           SECTION 1: ABOUT OMNITRIX
           ======================================================================== */}
        <section id="about-omnitrix" className="about-section">
          <div className="hero-about-card">
            <span className="hud-tag">{aboutContent.sectionTag}</span>
            <h1 className="hero-main-title">
              {aboutContent.titlePrefix}
              <span className="text-neon">{aboutContent.titleHighlight}</span>
            </h1>
            <div className="hero-tagline">{aboutContent.tagline}</div>

            <h2 className="hero-subheading">{aboutContent.subHeading}</h2>
            <p className="hero-description">{aboutContent.description}</p>

            <div className="hero-highlight-box">
              <p>"{aboutContent.highlightBox}"</p>
            </div>
          </div>
        </section>

        {/* ========================================================================
           SECTION 2: EVENT HEADS (DIRECTOR & FACULTY)
           ======================================================================== */}
        <section id="event-heads" className="about-section">
          <span className="hud-tag">02 / EVENT HEADS</span>
          <h2 className="section-title">OUR EVENT HEADS</h2>
          <p className="section-subtitle">
            Visionary leaders and mentors guiding OMNITRIX 2026 toward technological and competitive excellence.
          </p>

          {/* FEATURED PROFILE: DIRECTOR (COMMENTED OUT TEMPORARILY)
          <div className="director-featured-card">
            <div className="director-image-wrapper">
              <img
                src={director.image}
                alt={director.name}
                className="director-image"
                onError={handleImageError}
              />
            </div>
            <div className="director-details">
              <span className="director-badge">{director.tag}</span>
              <h3 className="director-name">{director.name}</h3>
              <div className="director-role">{director.role}</div>
              <div className="director-title">{director.title}</div>
              <p className="director-desc">{director.description}</p>
              <div className="director-socials">
                {director.socials?.linkedin && (
                  <a
                    href={director.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="Director LinkedIn"
                  >
                    <LinkedInIcon size={18} />
                  </a>
                )}
                {director.socials?.email && (
                  <a
                    href={director.socials.email}
                    className="social-btn"
                    aria-label="Director Email"
                  >
                    <MailIcon size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
          */}

          {/* TEMPORARY COMING SOON PLACEHOLDER FOR DIRECTOR */}
          <div className="about-coming-soon-box">
            <span className="cs-status-tag">[ SYSTEM UPDATE PENDING ]</span>
            <h3 className="cs-title">COMING SOON</h3>
            <p className="cs-subtext">LEADERSHIP PROFILE DATA CLASSIFIED</p>
          </div>

          {/* FACULTY IN CHARGE */}
          <h3 className="faculty-subheading">FACULTY IN CHARGE</h3>

          {/* ORIGINAL FACULTY CARDS (COMMENTED OUT TEMPORARILY)
          <div className="faculty-grid">
            {facultyMembers.map((member) => (
              <div key={member.id} className="hud-profile-card">
                <span className="card-hud-bracket" />
                <div className="card-avatar-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="card-avatar"
                    onError={handleImageError}
                  />
                </div>
                <h4 className="card-name">{member.name}</h4>
                <div className="card-role">{member.role}</div>
                <div className="card-dept">{member.dept}</div>
                <div className="social-links-row">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <LinkedInIcon size={16} />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={member.email}
                      className="social-btn"
                      aria-label={`${member.name} Email`}
                    >
                      <MailIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          */}

          {/* TEMPORARY COMING SOON PLACEHOLDER FOR FACULTY IN CHARGE */}
          <div className="about-coming-soon-box">
            <span className="cs-status-tag">[ SYSTEM UPDATE PENDING ]</span>
            <h3 className="cs-title">COMING SOON</h3>
            <p className="cs-subtext">FACULTY IN-CHARGE DATA CLASSIFIED</p>
          </div>
        </section>

        {/* ========================================================================
           SECTION 3: STUDENT'S CHAPTER
           ======================================================================== */}
        <section id="student-chapter" className="about-section">
          <span className="hud-tag">03 / STUDENT'S CHAPTER</span>
          <h2 className="section-title">STUDENT'S CHAPTER</h2>
          <p className="section-subtitle">
            Driven by passion, executed with precision — the student committee empowering OMNITRIX 2026.
          </p>

          {/* ORIGINAL STUDENT CHAPTER CARDS (COMMENTED OUT TEMPORARILY)
          <div className="student-grid">
            {studentChapter.map((student) => (
              <div key={student.id} className="hud-profile-card">
                <span className="card-hud-bracket" />
                <div className="card-avatar-wrapper">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="card-avatar"
                    onError={handleImageError}
                  />
                </div>
                <h4 className="card-name">{student.name}</h4>
                <div className="card-role">{student.role}</div>
                <div className="social-links-row">
                  {student.linkedin && (
                    <a
                      href={student.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      aria-label={`${student.name} LinkedIn`}
                    >
                      <LinkedInIcon size={16} />
                    </a>
                  )}
                  {student.instagram && (
                    <a
                      href={student.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      aria-label={`${student.name} Instagram`}
                    >
                      <InstagramIcon size={16} />
                    </a>
                  )}
                  {student.email && (
                    <a
                      href={student.email}
                      className="social-btn"
                      aria-label={`${student.name} Email`}
                    >
                      <MailIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          */}

          {/* TEMPORARY COMING SOON PLACEHOLDER FOR STUDENT'S CHAPTER */}
          <div className="about-coming-soon-box">
            <span className="cs-status-tag">[ SYSTEM UPDATE PENDING ]</span>
            <h3 className="cs-title">COMING SOON</h3>
            <p className="cs-subtext">STUDENT COMMITTEE ROSTER CLASSIFIED</p>
          </div>
        </section>

        {/* ========================================================================
           SECTION 4: DEVELOPER'S ZONE
           ======================================================================== */}
        <section id="developers-zone" className="about-section">
          <span className="hud-tag">04 / DEVELOPER'S ZONE</span>
          <h2 className="section-title">DEVELOPER'S ZONE</h2>
          <p className="section-subtitle">
            The web architects, 3D engineers, and creative technologists behind the digital realm of OMNITRIX.
          </p>

          {/* ORIGINAL DEVELOPER CARDS (COMMENTED OUT TEMPORARILY)
          <div className="developer-grid">
            {developers.map((dev) => (
              <div key={dev.id} className="hud-profile-card">
                <span className="card-hud-bracket" />
                <div className="card-avatar-wrapper">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="card-avatar"
                    onError={handleImageError}
                  />
                </div>
                <h4 className="card-name">{dev.name}</h4>
                <div className="card-role">{dev.role}</div>
                <div className="social-links-row">
                  {dev.linkedin && (
                    <a
                      href={dev.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      aria-label={`${dev.name} LinkedIn`}
                    >
                      <LinkedInIcon size={16} />
                    </a>
                  )}
                  {dev.instagram && (
                    <a
                      href={dev.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      aria-label={`${dev.name} Instagram`}
                    >
                      <InstagramIcon size={16} />
                    </a>
                  )}
                  {dev.email && (
                    <a
                      href={dev.email}
                      className="social-btn"
                      aria-label={`${dev.name} Email`}
                    >
                      <MailIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          */}

          {/* TEMPORARY COMING SOON PLACEHOLDER FOR DEVELOPER'S ZONE */}
          <div className="about-coming-soon-box">
            <span className="cs-status-tag">[ SYSTEM UPDATE PENDING ]</span>
            <h3 className="cs-title">COMING SOON</h3>
            <p className="cs-subtext">DEVELOPER ROSTER CLASSIFIED</p>
          </div>
        </section>
      </main>
    </div>
  );
}
