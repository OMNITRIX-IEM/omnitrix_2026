import React, { useState } from 'react';
import Navbar from '@/navbar/Navbar';
import Background from './components/Background/Background';
import { TopSideText, BottomSideText } from './components/SideText/SideText';
import HeroHeader from './components/Hero/HeroHeader';
import EventGrid from './components/EventGrid/EventGrid';
import Footer from './components/Footer/Footer';
import DetailsModal from './components/Modal/DetailsModal';
import { eventsData } from './data/eventsData';
import './styles/WorkshopHackathon.css';

export default function WorkshopHackathon() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    event: null,
  });

  const handleExplore = (event) => {
    setModalState({
      isOpen: true,
      event: event,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="workshop-hackathon-page">
      <Navbar />

      <div className="omni-app-container">
        {/* Dynamic Background Layer */}
        <Background bgImage="/images/bg.jpg" />

        {/* Floating Side Ambient Typography */}
        <TopSideText />
        <BottomSideText />

        {/* Main UI Layer */}
        <div className="omni-main-content">
          <main id="main-content">
            <HeroHeader />
            <EventGrid 
              events={eventsData} 
              onExplore={handleExplore}
            />
          </main>

          <Footer />
        </div>

        {/* Explore Modal */}
        <DetailsModal 
          isOpen={modalState.isOpen}
          event={modalState.event}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
}
