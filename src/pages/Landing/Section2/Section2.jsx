import React from 'react';
import './Section2.css';

export default function Section2() {
  return (
    <section id="phase-01" className="phase-section relative w-full min-h-screen flex items-center overflow-hidden px-4 md:px-[80px]">
      {/* Background Layer */}
      <div className="phase-bg absolute inset-0 z-0 opacity-0">
        <div className="phase-bg-overlay"></div>
      </div>
      {/* Content Grid */}
      <div className="relative z-10 w-full max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter h-full items-center">
        {/* Left Column: Content Card */}
        <div className="col-span-1 flex flex-col justify-center items-center md:items-start md:pl-8 xl:pl-16 2xl:pl-24">
          <div className="phase-panel-wrapper ml-0 md:ml-[-80px]">
            <div className="phase-panel relative opacity-100 translate-x-0 md:-translate-x-16 xl:-translate-x-24 2xl:-translate-x-32">
              <div className="hud-scan"></div>
              <div className="hud-noise"></div>
              <div className="phase-content text-center md:text-left">


                <h2 className="phase-heading glitch-title text-center md:text-left">
                  ABOUT<br />OMNITRIX
                </h2>
                <p className="font-inter font-normal text-[16px] leading-[1.8] text-white/80 mb-[36px] text-center md:text-left">
                  Step into the heart of the competition at OMNITRIX, the region's premier arena for cutting-edge combat robotics, where engineering prowess meets tactical warfare.
                </p>


              </div>
            </div>
          </div>
        </div>
        {/* Right Column: Reserved for Drone frame animation */}
        <div className="col-span-1 hidden md:flex items-center justify-center">
          <div id="drone-sequence-phase1" className="drone-sequence-container"></div>
        </div>
      </div>
    </section>
  );
}
