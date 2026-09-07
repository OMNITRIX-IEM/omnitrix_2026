import React, { useState } from 'react';
import GameCard from './GameCard';
import ExploreModal from '@/pages/events/Robotics/components/ExploreModal';
import { esportsGames } from '../data/esports';

export default function GameGrid() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="esports-grid">
      {esportsGames.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          onExplore={(g) => setSelectedGame(g)}
        />
      ))}

      {selectedGame && (
        <ExploreModal
          event={selectedGame}
          onClose={() => setSelectedGame(null)}
        />
      )}
    </div>
  );
}
