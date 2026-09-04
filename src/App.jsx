import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEO from '@/components/SEO/SEO';
import Landing from '@/pages/Landing';
import Events from '@/pages/events/Events/Events';
import Robotics from '@/pages/events/Robotics/Robotics';
import Esports from '@/pages/events/Esports/Esports';
import IndoorGames from '@/pages/events/IndoorGames/IndoorGames';
import Sponsor from '@/pages/sponsor/Sponsor';
import ComingSoon from '@/pages/ComingSoon/ComingSoon';

export default function App() {
  return (
    <Router>
      <SEO />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/robotics" element={<Robotics />} />
        <Route path="/events/esports" element={<Esports />} />
        <Route path="/events/indoor-games" element={<IndoorGames />} />
        <Route path="/sponsors" element={<Sponsor />} />
        <Route path="/brochure" element={<ComingSoon />} />
        <Route path="/about-us" element={<ComingSoon />} />
        <Route path="/register" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}