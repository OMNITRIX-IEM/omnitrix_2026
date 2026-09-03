import React from 'react';
import SponsorCard from './SponsorCard';

export default function SponsorSection({
  sectionClass,
  title,
  containerClass,
  cardClass,
  sponsors
}) {
  return (
    <section className={sectionClass}>
      <div className="section-divider">
        <div className="line"></div>
        <h2 className="section-title">{title}</h2>
        <div className="line"></div>
      </div>

      <div className={containerClass}>
        {sponsors.map((sponsor) => (
          <SponsorCard
            key={sponsor.id}
            className={`sponsor-card ${cardClass}`}
          >
            {cardClass === 'media-card' ? (
              sponsor.logoPlaceholder
            ) : (
              <div className="card-inner">
                {sponsor.logoPlaceholder && (
                  <div className="logo-placeholder">{sponsor.logoPlaceholder}</div>
                )}
                {sponsor.name && <h3 className="sponsor-name">{sponsor.name}</h3>}
                {sponsor.tagline && <p className="sponsor-tagline">{sponsor.tagline}</p>}
              </div>
            )}
          </SponsorCard>
        ))}
      </div>
    </section>
  );
}
