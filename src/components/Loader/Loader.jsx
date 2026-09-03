import React, { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader({ ready, percent }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (ready) {
      // Fade out and hide loader after a small delay
      const timer1 = setTimeout(() => {
        const loaderEl = document.getElementById('loader');
        if (loaderEl) {
          loaderEl.style.opacity = '0';
        }
        const timer2 = setTimeout(() => {
          setVisible(false);
        }, 600);
        return () => clearTimeout(timer2);
      }, 500);

      return () => clearTimeout(timer1);
    }
  }, [ready]);

  if (!visible) return null;

  return (
    <div id="loader">
      <div className="loader-content">
        <div className="loader-logo-mark"></div>
        <div className="loader-text">INITIALIZING BENGAL E-SUMMIT 2026</div>
        <div className="loader-bar-wrap">
          <div
            className="loader-bar"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
