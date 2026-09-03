import React from 'react';
import GameCard from './GameCard';
import { esportsGames } from '../data/esports';

export default function GameGrid() {
  return (
    <div className="esports-grid">
      {esportsGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
