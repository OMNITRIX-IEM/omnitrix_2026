import React, { useState, useEffect } from 'react';
import './Section8.css';

const EVENT_DATE = "2026-09-20T00:00:00+05:30";

export default function Section8() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false
  });

  useEffect(() => {
    const targetTime = new Date(EVENT_DATE).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isFinished: true
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isFinished: false
      });
    };

    calculateTime();
    const intervalId = setInterval(calculateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDays = (num) => String(num).padStart(3, '0');
  const formatTime = (num) => String(num).padStart(2, '0');

  return (
    <section className="robowars-countdown-section" id="countdown-section">
      {/* Background HUD Grid */}
      <div className="cd-bg-grid" aria-hidden="true"></div>

      <div className="cd-container">
        <header className="cd-header">
          <div className="cd-eyebrow">
            <span className="cd-eyebrow-icon">◆</span>
            <span>NEXT DEPLOYMENT // T-MINUS</span>
          </div>
          <h2 className="cd-title">
            THE BATTLE <span className="text-green">BEGINS IN.</span>
          </h2>
        </header>

        {timeLeft.isFinished ? (
          <div className="cd-active-banner">
            DEPLOYMENT ACTIVE
          </div>
        ) : (
          <div className="cd-grid">
            {/* DAYS */}
            <div className="cd-card">
              <div className="corner-bracket top-left" aria-hidden="true"></div>
              <div className="corner-bracket top-right" aria-hidden="true"></div>
              <div className="corner-bracket bottom-left" aria-hidden="true"></div>
              <div className="corner-bracket bottom-right" aria-hidden="true"></div>
              <div className="cd-val text-green">{formatDays(timeLeft.days)}</div>
              <div className="cd-label">DAYS</div>
            </div>

            {/* HOURS */}
            <div className="cd-card">
              <div className="corner-bracket top-left" aria-hidden="true"></div>
              <div className="corner-bracket top-right" aria-hidden="true"></div>
              <div className="corner-bracket bottom-left" aria-hidden="true"></div>
              <div className="corner-bracket bottom-right" aria-hidden="true"></div>
              <div className="cd-val">{formatTime(timeLeft.hours)}</div>
              <div className="cd-label">HOURS</div>
            </div>

            {/* MINUTES */}
            <div className="cd-card">
              <div className="corner-bracket top-left" aria-hidden="true"></div>
              <div className="corner-bracket top-right" aria-hidden="true"></div>
              <div className="corner-bracket bottom-left" aria-hidden="true"></div>
              <div className="corner-bracket bottom-right" aria-hidden="true"></div>
              <div className="cd-val">{formatTime(timeLeft.minutes)}</div>
              <div className="cd-label">MINUTES</div>
            </div>

            {/* SECONDS */}
            <div className="cd-card">
              <div className="corner-bracket top-left" aria-hidden="true"></div>
              <div className="corner-bracket top-right" aria-hidden="true"></div>
              <div className="corner-bracket bottom-left" aria-hidden="true"></div>
              <div className="corner-bracket bottom-right" aria-hidden="true"></div>
              <div className="cd-val text-green">{formatTime(timeLeft.seconds)}</div>
              <div className="cd-label">SECONDS</div>
            </div>
          </div>
        )}

        <div className="cd-quote-block">
          <p className="cd-quote">
            "WHEN THE SYSTEM ACTIVATES, THE BATTLEFIELD CHANGES."
          </p>
          <span className="cd-protocol-tag">
            ROBOWARS // DEPLOYMENT PROTOCOL
          </span>
        </div>
      </div>
    </section>
  );
}
