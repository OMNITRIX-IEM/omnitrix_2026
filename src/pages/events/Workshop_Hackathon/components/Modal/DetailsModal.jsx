import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { generalRules, REGISTRATION_URL } from '../../data/eventsData';
import './DetailsModal.css';

const DetailsModal = ({ isOpen, event, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !event) return null;

  return (
    <div className="omni-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="omni-modal-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-category-tag">{event.type} // {event.id}</span>
            <h2 className="modal-heading">
              {event.fullTitle}
            </h2>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body-scroll">
          
          {/* Section 1: Prerequisites */}
          <div className="modal-section">
            <h3 className="section-title">
              <CheckCircle2 size={18} className="section-icon" />
              PREREQUISITES
            </h3>
            <ul className="modal-bullet-list">
              {event.prerequisites && event.prerequisites.map((point, idx) => (
                <li key={idx} className="bullet-item">
                  <span className="bullet-dot" />
                  <span className="bullet-text">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: General Workshop Rule Points */}
          <div className="modal-section rules-section">
            <h3 className="section-title">
              <AlertCircle size={18} className="section-icon" />
              GENERAL WORKSHOP RULE POINTS
            </h3>
            <ul className="modal-bullet-list">
              {generalRules.map((rule, idx) => (
                <li key={idx} className="bullet-item">
                  <span className="bullet-dot rule-dot" />
                  <span className="bullet-text">{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Google Form Registration Button */}
          <div className="modal-action-footer">
            <a 
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-cta-btn"
            >
              <span>REGISTER FOR THIS {event.type}</span>
              <ExternalLink size={16} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
