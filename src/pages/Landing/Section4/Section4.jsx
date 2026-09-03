import React from 'react';
import './Section4.css';

export default function Section4() {
  return (
    <section id="phase-03" className="phase-section relative w-full h-screen flex items-center overflow-hidden px-[80px]">
      {/* Background Layer */}
      <div className="phase-bg absolute inset-0 z-0 opacity-0">
        <div className="phase-bg-overlay"></div>
      </div>
      {/* Content Grid */}
      <div className="relative z-10 w-full max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter h-full items-center">
        {/* Left Column: Content Card */}
        <div className="col-span-1 flex flex-col justify-center items-start pl-8 xl:pl-16 2xl:pl-24">
          <div className="phase-panel-wrapper ml-[-80px]">
            <div className="phase-panel relative opacity-0 -translate-x-16 xl:-translate-x-24 2xl:-translate-x-32">
              <div className="phase-content">
                <h2 className="phase-heading font-rajdhani font-bold text-[72px] leading-[0.95] text-white uppercase phase-heading-glow mb-[24px]">
                  GAMING<br />TRANSFORMATIONS
                </h2>
                <p className="font-inter font-normal text-[16px] leading-[1.8] text-white/80 mb-[36px]">
                  Beyond the thrill of combat, OMNITRIX expands into a vibrant gaming universe, transforming the arena into a dynamic carnival of entertainment and competition. This electrifying evolution seamlessly blends the intensity of robotic battles with the excitement of modern gaming culture. Explore a diverse landscape of high-octane multiplayer showdowns, immersive esports tournaments, and interactive challenges that cater to every type of gamer.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column: Reserved for Drone frame animation */}
        <div className="col-span-1 hidden md:flex items-center justify-center">
          <div id="drone-sequence-phase3" className="drone-sequence-container"></div>
        </div>
      </div>
    </section>
  );
}
