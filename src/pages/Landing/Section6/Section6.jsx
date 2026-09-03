import React, { useState, useEffect, useRef } from 'react';
import './Section6.css';

const EVENTS_DATA = [
  {
    id: 0,
    seq: 'EVENT_01',
    date: '24 AUG // 10:00 AM',
    title: 'ROBORACE',
    subtitle: 'High-speed autonomous and semi-autonomous robot racing on a custom tactical obstacle circuit. Engineers push mechanical speed, traction, and obstacle evasion to the absolute limit.',
    category: 'ADVANCED',
    categoryRed: true,
    participants: '48 TEAMS'
  },
  {
    id: 1,
    seq: 'EVENT_02',
    date: '24 AUG // 02:00 PM',
    title: 'ROBOCLASH',
    subtitle: 'Heavyweight mechanical combat where custom-built battlebots enter the arena for high-impact destruction. Features kinetic spinners, flippers, and armored chassis battling for arena dominance.',
    category: 'ADVANCED',
    categoryRed: true,
    participants: '32 COMBATANTS'
  },
  {
    id: 2,
    seq: 'EVENT_03',
    date: '25 AUG // 09:30 AM',
    title: 'LINE FOLLOWING ROBOT (LFR)',
    subtitle: 'Precision speed competition testing infrared sensor calibration and PID algorithms. Autonomous bots navigate sharp turns, intersections, and dynamic track speed traps.',
    category: 'INTERMEDIATE',
    categoryRed: true,
    participants: '85 COMPETITORS'
  },
  {
    id: 3,
    seq: 'EVENT_04',
    date: '25 AUG // 01:30 PM',
    title: 'UAV RACE',
    subtitle: 'First-Person View (FPV) drone racing through complex 3D aerial gate courses. Pilots maneuver high-speed quadcopters with extreme precision at speeds exceeding 100 km/h.',
    category: 'ADVANCED',
    categoryRed: true,
    participants: '40 PILOTS'
  },
  {
    id: 4,
    seq: 'EVENT_05',
    date: '26 AUG // 11:00 AM',
    title: 'ROBOSOCCER',
    subtitle: 'Tactical 3-on-3 robotic football tournament featuring customized wireless drive platforms. Teams coordinate offensive maneuvers, mechanical kicker mechanisms, and defensive blocking.',
    category: 'INTERMEDIATE',
    categoryRed: true,
    participants: '24 SQUADS'
  },
  {
    id: 5,
    seq: 'EVENT_06',
    date: '24 AUG // 09:00 AM',
    title: 'WORKSHOP: ML & DEEP LEARNING',
    subtitle: 'Hands-on masterclass covering neural network architectures, computer vision model training, and edge AI deployment on autonomous robotics hardware.',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: '250+ ATTENDEES'
  },
  {
    id: 6,
    seq: 'EVENT_07',
    date: '25 AUG // 10:00 AM',
    title: 'WORKSHOP: ROS 2',
    subtitle: 'Comprehensive technical session on Robot Operating System 2 core concepts, publisher-subscriber nodes, micro-ROS integration, and real-time robotic hardware control.',
    category: 'INTERMEDIATE',
    categoryRed: true,
    participants: '180+ ENGINEERS'
  },
  {
    id: 7,
    seq: 'EVENT_08',
    date: '25 AUG // 02:00 PM',
    title: 'WORKSHOP: EMBEDDED SYSTEMS',
    subtitle: 'Practical exploration of microcontrollers, RTOS firmware development, hardware sensor interfacing, and motor driver circuit design for combat robotics.',
    category: 'BEGINNER',
    categoryRed: true,
    participants: '200+ STUDENTS'
  },
  {
    id: 8,
    seq: 'EVENT_09',
    date: '26 AUG // 09:30 AM',
    title: 'WORKSHOP: DRONE PROGRESSION',
    subtitle: 'From flight dynamics to autonomous swarm navigation: build, program, and calibrate multi-rotor UAV systems with real-world flight testing.',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: '150+ PARTICIPANTS'
  },
  {
    id: 9,
    seq: 'EVENT_10',
    date: '24 AUG // 04:00 PM',
    title: 'CALL OF DUTY MOBILE (CODM)',
    subtitle: 'Action-packed tactical FPS esports tournament. Squads compete in intense Search & Destroy and Hardpoint matches for the RoboWars Championship trophy.',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: '64 SQUADS'
  },
  {
    id: 10,
    seq: 'EVENT_11',
    date: '25 AUG // 04:00 PM',
    title: 'BGMI LAN TOURNAMENT',
    subtitle: 'High-stakes battle royale LAN tournament bringing top esports rosters together in a fierce tactical showdown across custom room battlegrounds.',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: '100+ PLAYERS'
  },
  {
    id: 11,
    seq: 'EVENT_12',
    date: '24 AUG // 01:00 PM',
    title: 'EFOOTBALL PES',
    subtitle: 'Competitive digital football championship testing tactical formation management, skill moves, and clutch decision-making on high-refresh-rate gaming rigs.',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: '128 PLAYERS'
  },
  {
    id: 12,
    seq: 'EVENT_13',
    date: '25 AUG // 06:00 PM',
    title: 'FREE FIRE',
    subtitle: 'Fast-paced battle royale squad competition demanding quick reflexes, strategic positioning, and intense firefight coordination under pressure.',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: '48 SQUADS'
  },
  {
    id: 13,
    seq: 'EVENT_14',
    date: 'ALL DAYS // 10:00 AM',
    title: 'AR / VR EXPERIENCE',
    subtitle: 'Immersive virtual reality showcase featuring cutting-edge spatial computing, full-body motion tracking, and interactive robotic simulation environments.',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: 'OPEN TO ALL'
  },
  {
    id: 14,
    seq: 'EVENT_15',
    date: '24 AUG // 03:00 PM',
    title: 'STONE PAPER SCISSORS',
    subtitle: 'High-energy quick-thinking tournament arena with sudden-death elimination rounds and surprising tactical psychological twists.',
    category: 'BEGINNER',
    categoryRed: true,
    participants: '300+ ENTRIES'
  },
  {
    id: 15,
    seq: 'EVENT_16',
    date: '25 AUG // 03:00 PM',
    title: 'HAND CRICKET',
    subtitle: 'Classic casual sports challenge converted into a fast-paced live gaming bracket where split-second hand signals decide match outcomes.',
    category: 'BEGINNER',
    categoryRed: true,
    participants: '200+ PLAYERS'
  },
  {
    id: 16,
    seq: 'EVENT_17',
    date: '24 AUG // 12:00 PM',
    title: 'BALL IN BASKET',
    subtitle: 'Precision arcade skill competition testing trajectory estimation, wrist control, and timed target scoring under tight clock pressure.',
    category: 'BEGINNER',
    categoryRed: true,
    participants: '150+ PARTICIPANTS'
  },
  {
    id: 17,
    seq: 'EVENT_18',
    date: '26 AUG // 02:00 PM',
    title: 'PENALTY SHOOT',
    subtitle: 'Intense 1-on-1 penalty shootout challenge combining physical skill, goalkeeper anticipation, and high-pressure goal scoring.',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: '100+ COMPETITORS'
  },
  {
    id: 18,
    seq: 'EVENT_19',
    date: '25 AUG // 11:00 AM',
    title: 'CHESS',
    subtitle: 'Classical and blitz chess tournament challenging grand strategy, tactical foresight, and deep analytical calculations in silent competition.',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: '64 PLAYERS'
  },
  {
    id: 19,
    seq: 'EVENT_20',
    date: '24 AUG // 02:30 PM',
    title: 'CARROM',
    subtitle: 'Traditional striker precision championship featuring singles and doubles tournament brackets on polished tournament-grade carrom boards.',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: '48 TEAMS'
  },
  {
    id: 20,
    seq: 'EVENT_21',
    date: '26 AUG // 03:30 PM',
    title: 'ARM WRESTLING',
    subtitle: 'Raw physical strength and technique competition organized into standard weight classes with certified referee officiating.',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: '80+ ATHLETES'
  },
  {
    id: 21,
    seq: 'EVENT_22',
    date: '25 AUG // 01:00 PM',
    title: 'BEYBLADE',
    subtitle: 'High-speed spinning top battle arena where custom Beyblades clash for spin velocity, stadium center control, and burst finishes.',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: '120+ BLADERS'
  },
  {
    id: 22,
    seq: 'EVENT_23',
    date: '24 AUG // 09:00 AM',
    title: 'CULTURAL INAUGURATION',
    subtitle: 'Grand ceremonial opening of RoboWars 2026 featuring keynote addresses, robotic lighting ceremonies, and live orchestral fanfare.',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: 'ALL ATTENDEES'
  },
  {
    id: 23,
    seq: 'EVENT_24',
    date: '25 AUG // 05:00 PM',
    title: 'TECH TALK',
    subtitle: 'Inspiring talks from industry leaders, defense robotics pioneers, and AI researchers breaking down the future of autonomous systems.',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: '500+ AUDIENCE'
  },
  {
    id: 24,
    seq: 'EVENT_25',
    date: '25 AUG // 03:45 PM',
    title: 'FLASH MOB',
    subtitle: 'High-octane synchronized dance performance popping up unannounced at the central concourse to energize festival participants.',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: 'FESTIVAL GROUND'
  },
  {
    id: 25,
    seq: 'EVENT_26',
    date: '25 AUG // 07:00 PM',
    title: 'CULTURAL EVENING',
    subtitle: 'Spectacular night of live music bands, DJ sets, theatrical performances, and light shows celebrating the intersection of tech & art.',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: 'OPEN TO ALL'
  },
  {
    id: 26,
    seq: 'EVENT_27',
    date: '26 AUG // 05:00 PM',
    title: 'PRIZE DISTRIBUTION',
    subtitle: 'Official victory ceremony honoring champion roboticists, workshop graduates, and tournament winners with trophies & prize cash pools.',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: 'ALL FINALISTS'
  },
  {
    id: 27,
    seq: 'EVENT_28',
    date: 'ALL DAYS // 09:00 AM',
    title: 'IEEE MEMBERSHIP DRIVE',
    subtitle: 'Interactive networking hub to explore IEEE student branch benefits, technical paper publications, global conferences, and career mentorship.',
    category: 'BEGINNER',
    categoryRed: true,
    participants: 'ALL STUDENTS'
  },
  {
    id: 28,
    seq: 'EVENT_29',
    date: '26 AUG // 04:00 PM',
    title: 'SPECIAL SURPRISE EVENT',
    subtitle: 'Unannounced mystery challenge revealed live on the main stage. Expect unexpected obstacles, rapid prototyping, and high stakes!',
    category: 'OPEN CATEGORY',
    categoryRed: true,
    participants: 'MYSTERY ENTRY'
  }
];

export default function Section6() {
  // DOM & State Refs (kept in refs to avoid React re-renders during 60fps loop)
  const sectionRef = useRef(null);
  const consoleRef = useRef(null);
  const cardCanvasRef = useRef(null);
  const cardsRef = useRef([]);
  const latencyInputRef = useRef(null);
  const readoutCounterRef = useRef(null);
  const progressFillRef = useRef(null);
  const istClockRef = useRef(null);
  const lastWheelTimeRef = useRef(0);

  // Editable Latency state
  const [latencyVal, setLatencyVal] = useState('0.5');
  const [latencyStatusText, setLatencyStatusText] = useState('OPTIMAL LINK');
  const [latencyStatusColor, setLatencyStatusColor] = useState('var(--text-dim)');
  const [inputWidth, setInputWidth] = useState('4.2rem');

  // Animation & Physics Refs
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const physicsLerpRef = useRef(0.08);

  // 3D Tilt Refs
  const targetRotXRef = useRef(0);
  const targetRotYRef = useRef(0);
  const currentRotXRef = useRef(0);
  const currentRotYRef = useRef(0);

  // Touch Gesture Refs
  const touchStartYRef = useRef(0);
  const isTouchingRef = useRef(false);

  // Animation frame and timer IDs
  const animFrameIdRef = useRef(null);
  const istIntervalIdRef = useRef(null);

  const maxProgress = EVENTS_DATA.length - 1; // 28

  // ------------------------------------------------------------------------
  // 1. LATENCY-DRIVEN PHYSICS UPDATER
  // ------------------------------------------------------------------------
  const updateLatencyPhysics = (valStr) => {
    let latencyNum = parseFloat(valStr);
    if (isNaN(latencyNum) || latencyNum <= 0) {
      latencyNum = 0.5;
    }

    const len = String(valStr).length;
    setInputWidth(Math.max(4.2, len * 1.25) + 'rem');

    // Calculate LERP Factor: Lower latency = snappy (0.2), Higher latency = heavy mechanical lag (0.015)
    physicsLerpRef.current = Math.max(0.015, Math.min(0.2, 0.08 / (latencyNum / 0.5)));

    if (latencyNum <= 1.0) {
      setLatencyStatusText('OPTIMAL LINK');
      setLatencyStatusColor('var(--text-dim)');
    } else if (latencyNum <= 20.0) {
      setLatencyStatusText('NOMINAL LINK');
      setLatencyStatusColor('var(--text-white)');
    } else {
      setLatencyStatusText('HIGH LATENCY (LAGGED)');
      setLatencyStatusColor('var(--plasma-red)');
    }
  };

  const handleLatencyInputChange = (e) => {
    const newVal = e.target.value;
    setLatencyVal(newVal);
    updateLatencyPhysics(newVal);
  };

  // ------------------------------------------------------------------------
  // 2. NAV BUTTON HANDLERS
  // ------------------------------------------------------------------------
  const handlePrev = () => {
    targetProgressRef.current = targetProgressRef.current - 1;
  };

  const handleNext = () => {
    targetProgressRef.current = targetProgressRef.current + 1;
  };

  // ------------------------------------------------------------------------
  // 3. 60 FPS CARD STACK & TILT RENDER LOOP
  // ------------------------------------------------------------------------
  useEffect(() => {
    const TOTAL_EVENTS = EVENTS_DATA.length;

    const updateStack = () => {
      // Dynamic physics lerp driven by latency
      currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * physicsLerpRef.current;

      // Smooth tilt interpolation
      currentRotXRef.current += (targetRotXRef.current - currentRotXRef.current) * 0.08;
      currentRotYRef.current += (targetRotYRef.current - currentRotYRef.current) * 0.08;

      if (cardCanvasRef.current) {
        cardCanvasRef.current.style.transform = `rotateY(${currentRotYRef.current.toFixed(2)}deg) rotateX(${currentRotXRef.current.toFixed(2)}deg)`;
      }

      // Smooth circular progress normalization (prevents overflow while maintaining lerp continuity)
      if (currentProgressRef.current >= TOTAL_EVENTS) {
        currentProgressRef.current -= TOTAL_EVENTS;
        targetProgressRef.current -= TOTAL_EVENTS;
      } else if (currentProgressRef.current < 0) {
        currentProgressRef.current += TOTAL_EVENTS;
        targetProgressRef.current += TOTAL_EVENTS;
      }

      const rawActive = Math.round(currentProgressRef.current);
      const activeIndex = ((rawActive % TOTAL_EVENTS) + TOTAL_EVENTS) % TOTAL_EVENTS;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Circular distance on a 29-element volumetric ring
        let relativePos = (index - currentProgressRef.current) % TOTAL_EVENTS;
        if (relativePos > TOTAL_EVENTS / 2) {
          relativePos -= TOTAL_EVENTS;
        } else if (relativePos < -TOTAL_EVENTS / 2) {
          relativePos += TOTAL_EVENTS;
        }

        let scale, translateZ, translateY, opacity, blurValue, zIndex;

        if (relativePos < 0) {
          // Zone 1: Active card zooming forward toward camera as it exits
          const passedRatio = Math.min(1, Math.abs(relativePos));
          scale = 0.95 + passedRatio * 0.70; // 0.95 -> 1.65 (near full-screen volumetric layer)
          translateZ = passedRatio * 420;   // 0px -> 420px (zooming past camera)
          translateY = relativePos * 40;
          opacity = Math.max(0, 1 - Math.pow(passedRatio, 1.8) * 1.5);
          blurValue = passedRatio * 6;
          zIndex = 200 - Math.floor(relativePos * 10);
        } else {
          // Zone 2 & 3: Card in focus or waiting behind in depth stack
          const distance = relativePos;
          if (distance <= 1) {
            // Smooth zoom-in as card approaches focus inside the frame
            scale = 0.95 - distance * 0.30;     // 0.65 -> 0.95
            translateZ = -distance * 220;      // -220px -> 0px
            translateY = distance * 36;
            opacity = 1 - distance * 0.55;       // 0.45 -> 1.0
            blurValue = distance * 4;           // 4px -> 0px (depth of field blur)
          } else {
            // Cards deeper in stack
            scale = Math.max(0.40, 0.65 - (distance - 1) * 0.15);
            translateZ = -220 - (distance - 1) * 180;
            translateY = 36 + (distance - 1) * 24;
            opacity = Math.max(0, 0.45 - (distance - 1) * 0.35);
            blurValue = Math.min(10, 4 + (distance - 1) * 4);
          }
          zIndex = 100 - Math.floor(distance * 10);
        }

        card.style.transform = `translateZ(${translateZ.toFixed(1)}px) scale(${scale.toFixed(3)}) translateY(${translateY.toFixed(1)}px)`;
        card.style.opacity = opacity.toFixed(3);
        card.style.filter = `blur(${blurValue.toFixed(1)}px)`;
        card.style.zIndex = zIndex;
        card.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';

        if (index === activeIndex) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });

      // Update readout counter (e.g. "01 / 29")
      if (readoutCounterRef.current) {
        const formattedNum = String(activeIndex + 1).padStart(2, '0');
        readoutCounterRef.current.textContent = `${formattedNum} / ${TOTAL_EVENTS}`;
      }

      // Update progress bar fill
      if (progressFillRef.current) {
        const progressPercent = (activeIndex / (TOTAL_EVENTS - 1)) * 100;
        progressFillRef.current.style.width = `${Math.min(100, Math.max(0, progressPercent)).toFixed(1)}%`;
      }

      animFrameIdRef.current = requestAnimationFrame(updateStack);
    };

    animFrameIdRef.current = requestAnimationFrame(updateStack);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  // ------------------------------------------------------------------------
  // 4. NON-TRAPPING WHEEL SCROLL CONTROLLER
  // ------------------------------------------------------------------------
  useEffect(() => {
    const consoleEl = consoleRef.current;
    if (!consoleEl) return;

    const handleWheel = (e) => {
      const delta = e.deltaY;
      if (!delta) return;

      e.preventDefault();
      e.stopPropagation();
      if (e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
      }

      // Smooth circular volumetric scroll progress
      const step = delta * 0.0018;
      targetProgressRef.current += step;
    };

    consoleEl.addEventListener('wheel', handleWheel, { passive: false, capture: true });

    return () => {
      consoleEl.removeEventListener('wheel', handleWheel, { capture: true });
    };
  }, []);

  // ------------------------------------------------------------------------
  // 5. TOUCH SWIPE CONTROLLER (MOBILE)
  // ------------------------------------------------------------------------
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        touchStartYRef.current = e.touches[0].clientY;
        isTouchingRef.current = true;
      }
    };

    const handleTouchMove = (e) => {
      if (!isTouchingRef.current || e.touches.length !== 1) return;
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - currentY;
      touchStartYRef.current = currentY;

      targetProgressRef.current += deltaY * 0.003;
    };

    const handleTouchEnd = () => {
      isTouchingRef.current = false;
    };

    sectionEl.addEventListener('touchstart', handleTouchStart, { passive: true });
    sectionEl.addEventListener('touchmove', handleTouchMove, { passive: true });
    sectionEl.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      sectionEl.removeEventListener('touchstart', handleTouchStart);
      sectionEl.removeEventListener('touchmove', handleTouchMove);
      sectionEl.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // ------------------------------------------------------------------------
  // 6. KEYBOARD NAVIGATION CONTROLLER
  // ------------------------------------------------------------------------
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement === latencyInputRef.current) return;

      const key = e.key;
      if (key === 'ArrowDown' || key === 'ArrowRight' || key === 'PageDown' || key.toLowerCase() === 's') {
        e.preventDefault();
        targetProgressRef.current += 1;
      } else if (key === 'ArrowUp' || key === 'ArrowLeft' || key === 'PageUp' || key.toLowerCase() === 'w') {
        e.preventDefault();
        targetProgressRef.current -= 1;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [maxProgress]);

  // ------------------------------------------------------------------------
  // 7. 3D TILT CONTROLLER (MOUSE MOVEMENT)
  // ------------------------------------------------------------------------
  useEffect(() => {
    const handleMouseMove = (e) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetRotYRef.current = normX * 3.5;
      targetRotXRef.current = normY * -3.5;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // ------------------------------------------------------------------------
  // 8. REAL INDIAN STANDARD TIME (IST) CLOCK
  // ------------------------------------------------------------------------
  useEffect(() => {
    const updateISTClock = () => {
      if (!istClockRef.current) return;
      const now = new Date();
      try {
        const istString = now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
        istClockRef.current.textContent = `${istString} IST`;
      } catch (err) {
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        const secs = String(now.getSeconds()).padStart(2, '0');
        istClockRef.current.textContent = `${hrs}:${mins}:${secs} IST`;
      }
    };

    updateISTClock();
    istIntervalIdRef.current = setInterval(updateISTClock, 1000);

    return () => {
      if (istIntervalIdRef.current) {
        clearInterval(istIntervalIdRef.current);
      }
    };
  }, []);

  return (
    <section className="mission-control-section" id="mission-control" ref={sectionRef}>
      {/* Subtle Moving HUD Grid Overlay (4% opacity) */}
      <div className="hud-bg-grid" aria-hidden="true"></div>

      {/* Central Event Command Console Container */}
      <div className="mission-control-container">
        {/* CENTRAL VIEWPORT FRAME */}
        <div className="viewport-frame" id="viewport-frame" ref={consoleRef}>
          {/* Viewport Header Telemetry Bar */}
          <header className="viewport-header">
            <div className="viewport-title-group">
              <span className="hud-badge">EVENT COMMAND</span>
              <h1 className="viewport-title">OMNITRIX 2026 // EVENT CONSOLE</h1>
            </div>
            <div className="viewport-meta">
              <span className="meta-tag">TOTAL_EVENTS // 29</span>
              <span className="meta-tag text-red">LIVE_SCHEDULE</span>
            </div>
          </header>

          {/* 3D CARD CANVAS (29 EVENT CARDS) */}
          <div className="card-stack-container" id="card-stack-container">
            <div className="card-canvas" id="card-canvas" ref={cardCanvasRef}>
              {EVENTS_DATA.map((event, index) => (
                <article
                  key={event.id}
                  className={`hud-card ${index === 0 ? 'active' : ''}`}
                  data-index={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                >
                  <div className="card-header">
                    <span className="seq-tag">{event.seq}</span>
                    <span className="card-id">{event.date}</span>
                  </div>
                  <div className="card-main">
                    <h2 className="card-title">{event.title}</h2>
                    <div className="card-line"></div>
                    <p className="card-subtitle">{event.subtitle}</p>
                  </div>
                  <div className="card-footer-group">
                    <div className="card-meta-chips">
                      <span className={`hud-tag ${event.categoryRed ? 'text-red' : ''}`}>
                        {event.category}
                      </span>
                      <span className="hud-tag">{event.participants}</span>
                    </div>
                    <button className="event-cta-btn" type="button">
                      GO TO EVENT →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Viewport Footer HUD Toolbar */}
          <footer className="viewport-footer">
            <div className="nav-hint">
              <span className="hint-icon">◆</span>
              <span className="hint-text">SCROLL OR ARROWS TO EXPLORE EVENTS</span>
            </div>

            {/* Step Progress Tracker */}
            <div className="card-pagination" id="card-pagination">
              <span className="progress-bar-bg">
                <span className="progress-bar-fill" id="progress-fill" ref={progressFillRef}></span>
              </span>
            </div>

            {/* Prev/Next Tactical Buttons */}
            <div className="hud-nav-controls">
              <button
                className="hud-btn"
                id="btn-prev"
                onClick={handlePrev}
                aria-label="Previous Event Card"
                type="button"
              >
                <span className="btn-arrow">◄</span> PREV
              </button>
              <button
                className="hud-btn"
                id="btn-next"
                onClick={handleNext}
                aria-label="Next Event Card"
                type="button"
              >
                NEXT <span className="btn-arrow">►</span>
              </button>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
