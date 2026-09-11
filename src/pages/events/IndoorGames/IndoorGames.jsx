import React from 'react';
import Navbar from '@/navbar/Navbar';
import HeroSection from './components/HeroSection';
import GamesSection from './components/GamesSection';
import './IndoorGames.css';

export default function IndoorGames() {
  return (
    <div className="indoor-games-page">
      <Navbar />
      <HeroSection />
      <main className="main-content">
        <GamesSection />
      </main>
    </div>
  );
}
