import React from 'react';
import EventCard from '../EventCard/EventCard';
import './EventGrid.css';

const EventGrid = ({ events, onExplore }) => {
  return (
    <section className="omni-grid-section" id="workshops" aria-label="Workshops and Hackathons Grid">
      <div className="omni-grid-container">
        {events.map((event) => (
          <EventCard 
            key={event.id}
            event={event}
            onExplore={onExplore}
          />
        ))}
      </div>
    </section>
  );
};

export default EventGrid;
