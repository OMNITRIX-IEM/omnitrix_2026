import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export default function ExploreModal({ event, onClose }) {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    // Store previously focused element to return focus on close
    previousFocusRef.current = document.activeElement;

    // Body scroll locking with scrollbar compensation to avoid layout shift
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Auto focus close button inside modal
    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }

    // Escape key handler
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);

      // Restore previous focus
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
    };
  }, [onClose]);

  if (!event) return null;

  const { titleLine1, titleLine2, title, exploreContent } = event;
  const fullTitle = title ? title.replace(/\n/g, ' ') : [titleLine1, titleLine2].filter(Boolean).join(' ');

  const modalJSX = (
    <div
      className="explore-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="explore-modal-title"
    >
      <div
        ref={modalRef}
        className="explore-modal-panel"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* HUD Border SVG / Geometry */}
        <div className="explore-modal-border">
          <svg viewBox="0 0 600 700" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path
              d="M 30,1 L 570,1 L 599,30 L 599,670 L 570,699 L 30,699 L 1,670 L 1,30 Z"
              stroke="rgba(44, 238, 47, 0.6)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* Modal Header */}
        <div className="explore-modal-header">
          <div className="explore-header-left">
            <span className="explore-tag">OMNITRIX // EVENT RULES</span>
            <h3 id="explore-modal-title" className="explore-modal-title">
              {fullTitle}
            </h3>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="explore-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        {/* Header Accent Line */}
        <div className="explore-modal-divider"></div>

        {/* Modal Content Body */}
        <div className="explore-modal-body">
          {Array.isArray(exploreContent) && exploreContent.length > 0 ? (
            exploreContent.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="explore-paragraph">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'heading') {
                return (
                  <h4 key={index} className="explore-heading">
                    {block.text}
                  </h4>
                );
              }
              if (block.type === 'list' && Array.isArray(block.items)) {
                return (
                  <ul key={index} className="explore-list">
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="explore-list-item">
                        <span className="bullet-icon">&gt;</span>
                        <span className="item-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })
          ) : (
            <div className="explore-coming-soon">
              <span className="material-symbols-outlined coming-soon-icon">info</span>
              <h4 className="coming-soon-title">DETAILS COMING SOON</h4>
              <p className="coming-soon-desc">
                Event rules and detailed specifications for {fullTitle} will be published soon.
              </p>
            </div>
          )}
        </div>

        {/* Footer Bar */}
        <div className="explore-modal-footer">
          <span className="hud-status">SYS.STATUS // ACTIVE</span>
          <button type="button" className="btn-modal-close" onClick={onClose}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalJSX, document.body);
}
