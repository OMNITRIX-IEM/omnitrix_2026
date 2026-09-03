import React from 'react';
import GameCard from './GameCard';
import { GAMES_DATA } from '../data/gamesData';

export default function GamesSection() {
  return (
    <section className="games-section" id="events">
      <div className="section-heading">
        <span></span>
        <h2>FEATURED GAMES</h2>
        <span></span>
      </div>

      <div className="games-grid">
        {GAMES_DATA.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
