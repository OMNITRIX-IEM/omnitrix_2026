import React from 'react';
import './GalaxySection.css';
import GalaxyScene from "@/galaxy/GalaxyScene";
import GalaxyTextOverlay from "./GalaxyTextOverlay";

export default function GalaxySection() {
  return (
    <section
      id="galaxy-section"
      className="galaxy-section"
    >
      <div
        id="galaxy-section-canvas"
        className="galaxy-canvas-container"
      >
        <GalaxyScene />
        <GalaxyTextOverlay />
      </div>
    </section>
  );
}