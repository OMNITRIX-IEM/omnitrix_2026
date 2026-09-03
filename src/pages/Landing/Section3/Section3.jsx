import React from 'react';
import './Section3.css';

export default function Section3() {
  return (
    <section id="phase-02" className="phase-section relative w-full h-screen flex items-center overflow-hidden px-[80px]">
      {/* Background Layer */}
      <div className="phase-bg absolute inset-0 z-0 opacity-0">
        <div className="phase-bg-overlay"></div>
      </div>
      {/* Content Grid */}
      <div className="relative z-10 w-full max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter h-full items-center">
        {/* Left Column: Reserved for Drone frame animation */}
        <div className="col-span-1 hidden md:flex items-center justify-center">
          <div id="drone-sequence-phase2" className="drone-sequence-container"></div>
        </div>
        {/* Right Column: Content Card */}
        <div className="col-span-1 flex flex-col justify-center translate-x-40 xl:translate-x-48 2xl:translate-x-56">
          <div className="phase-panel-wrapper">
            <div className="phase-panel relative opacity-0">
              <div className="phase-content">
                <h2 className="phase-heading font-rajdhani font-bold text-[72px] leading-[0.95] text-white uppercase phase-heading-glow mb-[24px]">
                  ONE of the LARGEST<br />STAGE
                </h2>
                <p className="font-inter font-normal text-[16px] leading-[1.8] text-white/80 mb-[36px]">
                  This electrifying event transforms IEM into a high-octane battlefield, showcasing an exhilarating lineup of fierce robo-battles, drone competitions, and innovative engineering marvels. Prepare for intense clashes, strategic showdowns, and a display of technical brilliance as teams push the limits of design, durability, and combat strategy in a celebration of next-generation innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
