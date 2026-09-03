import React from 'react';
import { eventsData } from '../data/events';

export default function EventNavigation({ currentState, onSelectState }) {
  return (
    <div className="column-center">
      <div className="event-list" id="event-list">
        {eventsData.map((event, index) => {
          const numStr = String(index + 1).padStart(2, '0');
          return (
            <div
              key={event.id}
              className={`event-item ${index === currentState ? 'active' : ''}`}
              data-index={index}
              onClick={() => onSelectState(index)}
            >
              <span className="event-num">{numStr}</span>
              <h2 className="event-name">{event.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
