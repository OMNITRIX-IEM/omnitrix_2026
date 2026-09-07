import React from 'react';
import { 
  BrainCircuit, 
  Bot, 
  Cpu, 
  LayoutGrid, 
  Code2, 
  Share2 
} from 'lucide-react';
import { REGISTRATION_URL } from '../../data/eventsData';
import './EventCard.css';

// Dynamic Header Icon Resolver
const renderHeaderIcon = (iconName) => {
  switch (iconName) {
    case 'brain':
      return <BrainCircuit className="card-header-icon" size={24} />;
    case 'robot':
      return <Bot className="card-header-icon" size={24} />;
    case 'chip':
      return <Cpu className="card-header-icon" size={24} />;
    case 'drone':
      return (
        <div className="custom-drone-icon">
          <Share2 className="card-header-icon" size={22} />
        </div>
      );
    case 'exhibition':
      return <LayoutGrid className="card-header-icon" size={22} />;
    case 'code':
      return <Code2 className="card-header-icon" size={24} />;
    default:
      return <BrainCircuit className="card-header-icon" size={22} />;
  }
};

const EventCard = ({ event, onExplore }) => {
  return (
    <article className="omni-card" data-id={event.id}>
      {/* Outer Card Glow Frame */}
      <div className="omni-card-frame">
        
        {/* Top Number Tag */}
        <div className="card-number-badge">
          <span>{event.id}</span>
        </div>

        {/* Vertical Left Ribbon Label */}
        <div className="card-side-label-track">
          <span className="card-side-label">{event.type}</span>
        </div>

        {/* Card Main Body */}
        <div className="card-content-area">
          
          {/* Card Preview Image */}
          <div className="card-image-box">
            <img 
              src={event.image} 
              alt={event.fullTitle} 
              className="card-image" 
              loading="lazy"
            />
            <div className="card-image-overlay" />
            <div className="card-scan-line" />
          </div>

          {/* Title and Header Icon */}
          <div className="card-header-row">
            <div className="icon-badge">
              {renderHeaderIcon(event.headerIcon)}
            </div>
            <h2 className="card-title">
              {event.titlePrefix && (
                <span className="title-prefix">{event.titlePrefix}</span>
              )}
              <span className="title-highlight">{event.titleHighlight}</span>
            </h2>
          </div>

          {/* Action Buttons Row */}
          <div className="card-buttons-row">
            <a 
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card-btn btn-register"
              aria-label={`Register for ${event.fullTitle} via Google Form`}
            >
              REGISTER
            </a>
            <button 
              type="button" 
              className="card-btn btn-explore"
              onClick={() => onExplore(event)}
              aria-label={`Explore details for ${event.fullTitle}`}
            >
              EXPLORE
            </button>
          </div>

        </div>

      </div>
    </article>
  );
};

export default EventCard;
