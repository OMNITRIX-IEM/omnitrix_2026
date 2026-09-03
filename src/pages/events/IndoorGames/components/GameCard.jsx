import React from 'react';

export default function GameCard({ game }) {
  const { name, desc, prize, tag, icon, prizeIcon } = game;

  return (
    <article className="game-card-wrapper">
      <div className="game-card">
        <div className="card-media">
          <span className="card-tag">{tag}</span>
          <div className="media-icon">{icon}</div>
        </div>

        <div className="card-body">
          <span className="vertical-label">BATTLE</span>
          <div className="card-info">
            <h3 className="game-name">{name}</h3>
            <p className="game-desc">{desc}</p>
          </div>

          <div className="card-buttons">
            <a href="#register" className="btn-card btn-register">
              REGISTER
            </a>
            <a href="#" className="btn-card btn-explore">
              EXPLORE
            </a>
          </div>
        </div>

        <div className="card-prize-banner">
          <span className="prize-text">{prize}</span>
          <span className="prize-icon">{prizeIcon}</span>
        </div>
      </div>
    </article>
  );
}
