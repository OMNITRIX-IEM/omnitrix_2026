import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Section6.css';

const CATEGORIES_DATA = {
  robotics: {
    id: 'robotics',
    name: 'Robotics',
    events: [
      {
        id: 'rob-1',
        seq: 'EVENT_01',
        date: '24 AUG // 10:00 AM',
        title: 'Roborace',
        subtitle: 'High-speed autonomous and semi-autonomous robot racing on a custom tactical obstacle circuit. Engineers push mechanical speed, traction, and obstacle evasion to the absolute limit.',
        category: 'ROBOTICS',
        categoryRed: true
      },
      {
        id: 'rob-2',
        seq: 'EVENT_02',
        date: '24 AUG // 02:00 PM',
        title: 'Robosumo/Roboclash',
        subtitle: 'Heavyweight mechanical combat where custom-built battlebots enter the arena for high-impact destruction. Features kinetic spinners, flippers, and armored chassis battling for arena dominance.',
        category: 'ROBOTICS',
        categoryRed: true
      },
      {
        id: 'rob-3',
        seq: 'EVENT_03',
        date: '25 AUG // 11:00 AM',
        title: 'Robosoccer',
        subtitle: 'Tactical 3-on-3 robotic football tournament featuring customized wireless drive platforms. Teams coordinate offensive maneuvers, mechanical kicker mechanisms, and defensive blocking.',
        category: 'ROBOTICS',
        categoryRed: true
      },
      {
        id: 'rob-4',
        seq: 'EVENT_04',
        date: '25 AUG // 09:30 AM',
        title: 'Line following rover',
        subtitle: 'Precision speed competition testing infrared sensor calibration and PID algorithms. Autonomous bots navigate sharp turns, intersections, and dynamic track speed traps.',
        category: 'ROBOTICS',
        categoryRed: true
      },
      {
        id: 'rob-5',
        seq: 'EVENT_05',
        date: '25 AUG // 01:30 PM',
        title: 'Drone track competition/UAV race',
        subtitle: 'First-Person View (FPV) drone racing through complex 3D aerial gate courses. Pilots maneuver high-speed quadcopters with extreme precision at speeds exceeding 100 km/h.',
        category: 'ROBOTICS',
        categoryRed: true
      }
    ]
  },
  workshops: {
    id: 'workshops',
    name: 'Workshops & Hackathons',
    events: [
      {
        id: 'ws-1',
        seq: 'EVENT_01',
        date: '24 AUG // 09:00 AM',
        title: 'WS-ML DL',
        subtitle: 'Hands-on masterclass covering neural network architectures, computer vision model training, and edge AI deployment on autonomous robotics hardware.',
        category: 'WORKSHOP',
        categoryRed: true
      },
      {
        id: 'ws-2',
        seq: 'EVENT_02',
        date: '25 AUG // 10:00 AM',
        title: 'WS-ROS2',
        subtitle: 'Comprehensive technical session on Robot Operating System 2 core concepts, publisher-subscriber nodes, micro-ROS integration, and real-time robotic hardware control.',
        category: 'WORKSHOP',
        categoryRed: true
      },
      {
        id: 'ws-3',
        seq: 'EVENT_03',
        date: '25 AUG // 02:00 PM',
        title: 'WS-VLSI and Embedded systems',
        subtitle: 'Practical exploration of microcontrollers, RTOS firmware development, hardware sensor interfacing, and motor driver circuit design for combat robotics.',
        category: 'WORKSHOP',
        categoryRed: true
      },
      {
        id: 'ws-4',
        seq: 'EVENT_04',
        date: '26 AUG // 09:30 AM',
        title: 'WS Drone Prog.',
        subtitle: 'From flight dynamics to autonomous swarm navigation: build, program, and calibrate multi-rotor UAV systems with real-world flight testing.',
        category: 'WORKSHOP',
        categoryRed: true
      },
      {
        id: 'ws-5',
        seq: 'EVENT_05',
        date: '26 AUG // 02:00 PM',
        title: 'Project Exhibition',
        subtitle: 'Grand technological showcase displaying innovative engineering projects, hardware prototypes, and research models to expert panels and industrial leaders.',
        category: 'EXHIBITION',
        categoryRed: true
      },
      {
        id: 'ws-6',
        seq: 'EVENT_06',
        date: '26 AUG // 06:00 PM',
        title: 'Hackathon',
        subtitle: '24-hour non-stop rapid prototyping hackathon where developer teams build breakthrough software and hardware solutions under intense time pressure.',
        category: 'HACKATHON',
        categoryRed: true
      }
    ]
  },
  esports: {
    id: 'esports',
    name: 'E-Sports',
    events: [
      {
        id: 'esp-1',
        seq: 'EVENT_01',
        date: '25 AUG // 04:00 PM',
        title: 'BGMI LAN',
        subtitle: 'High-stakes battle royale LAN tournament bringing top esports rosters together in a fierce tactical showdown across custom room battlegrounds.',
        category: 'E-SPORTS',
        categoryRed: true
      },
      {
        id: 'esp-2',
        seq: 'EVENT_02',
        date: '24 AUG // 01:00 PM',
        title: 'E-Football',
        subtitle: 'Competitive digital football championship testing tactical formation management, skill moves, and clutch decision-making on high-refresh-rate gaming rigs.',
        category: 'E-SPORTS',
        categoryRed: true
      },
      {
        id: 'esp-3',
        seq: 'EVENT_03',
        date: '24 AUG // 04:00 PM',
        title: 'Call of Duty(COD)',
        subtitle: 'Action-packed tactical FPS esports tournament. Squads compete in intense Search & Destroy and Hardpoint matches for the RoboWars Championship trophy.',
        category: 'E-SPORTS',
        categoryRed: true
      },
      {
        id: 'esp-4',
        seq: 'EVENT_04',
        date: '25 AUG // 06:00 PM',
        title: 'Free fire clash',
        subtitle: 'Fast-paced battle royale squad competition demanding quick reflexes, strategic positioning, and intense firefight coordination under pressure.',
        category: 'E-SPORTS',
        categoryRed: true
      }
    ]
  },
  indoor: {
    id: 'indoor',
    name: 'Indoor Games',
    events: [
      {
        id: 'ind-1',
        seq: 'EVENT_01',
        date: '24 AUG // 03:00 PM',
        title: 'Stone Paper Scissors',
        subtitle: 'High-energy quick-thinking tournament arena with sudden-death elimination rounds and surprising tactical psychological twists.',
        category: 'INDOOR GAME',
        categoryRed: true
      },
      {
        id: 'ind-2',
        seq: 'EVENT_02',
        date: '25 AUG // 03:00 PM',
        title: 'Hand Cricket',
        subtitle: 'Classic casual sports challenge converted into a fast-paced live gaming bracket where split-second hand signals decide match outcomes.',
        category: 'INDOOR GAME',
        categoryRed: true
      },
      {
        id: 'ind-3',
        seq: 'EVENT_03',
        date: '24 AUG // 12:00 PM',
        title: 'Ball in Basket',
        subtitle: 'Precision arcade skill competition testing trajectory estimation, wrist control, and timed target scoring under tight clock pressure.',
        category: 'INDOOR GAME',
        categoryRed: true
      },
      {
        id: 'ind-4',
        seq: 'EVENT_04',
        date: '26 AUG // 02:00 PM',
        title: 'Penalty Shoot',
        subtitle: 'Intense 1-on-1 penalty shootout challenge combining physical skill, goalkeeper anticipation, and high-pressure goal scoring.',
        category: 'INDOOR GAME',
        categoryRed: true
      },
      {
        id: 'ind-5',
        seq: 'EVENT_05',
        date: '25 AUG // 11:00 AM',
        title: 'Chess',
        subtitle: 'Classical and blitz chess tournament challenging grand strategy, tactical foresight, and deep analytical calculations in silent competition.',
        category: 'INDOOR GAME',
        categoryRed: true
      },
      {
        id: 'ind-6',
        seq: 'EVENT_06',
        date: '24 AUG // 02:30 PM',
        title: 'Carrom',
        subtitle: 'Traditional striker precision championship featuring singles and doubles tournament brackets on polished tournament-grade carrom boards.',
        category: 'INDOOR GAME',
        categoryRed: true
      },
      {
        id: 'ind-7',
        seq: 'EVENT_07',
        date: '26 AUG // 03:30 PM',
        title: 'Arm Wrestling',
        subtitle: 'Raw physical strength and technique competition organized into standard weight classes with certified referee officiating.',
        category: 'INDOOR GAME',
        categoryRed: true
      },
      {
        id: 'ind-8',
        seq: 'EVENT_08',
        date: '25 AUG // 01:00 PM',
        title: 'Beyblade',
        subtitle: 'High-speed spinning top battle arena where custom Beyblades clash for spin velocity, stadium center control, and burst finishes.',
        category: 'INDOOR GAME',
        categoryRed: true
      }
    ]
  }
};

const CATEGORIES_LIST = [
  { key: 'robotics', label: 'Robotics' },
  { key: 'workshops', label: 'Workshops & Hackathons' },
  { key: 'esports', label: 'E-Sports' },
  { key: 'indoor', label: 'Indoor Games' }
];

export default function Section6() {
  // Category State
  const [activeCategory, setActiveCategory] = useState('robotics');
  const activeEvents = CATEGORIES_DATA[activeCategory]?.events || CATEGORIES_DATA.robotics.events;

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

  const maxProgress = activeEvents.length - 1;

  // Category switch handler
  const handleCategorySelect = (key) => {
    if (key === activeCategory) return;
    setActiveCategory(key);
    targetProgressRef.current = 0;
    currentProgressRef.current = 0;
    cardsRef.current = [];
  };

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
    const TOTAL_EVENTS = activeEvents.length;
    targetProgressRef.current = 0;
    currentProgressRef.current = 0;
    cardsRef.current = cardsRef.current.slice(0, TOTAL_EVENTS);

    const updateStack = () => {
      // Dynamic physics lerp driven by latency
      currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * physicsLerpRef.current;

      // Smooth tilt interpolation
      currentRotXRef.current += (targetRotXRef.current - currentRotXRef.current) * 0.08;
      currentRotYRef.current += (targetRotYRef.current - currentRotYRef.current) * 0.08;

      if (cardCanvasRef.current) {
        cardCanvasRef.current.style.transform = `rotateY(${currentRotYRef.current.toFixed(2)}deg) rotateX(${currentRotXRef.current.toFixed(2)}deg)`;
      }

      // Smooth circular progress normalization
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

        // Circular distance on dynamic volumetric ring
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
          scale = 0.95 + passedRatio * 0.70;
          translateZ = passedRatio * 420;
          translateY = relativePos * 40;
          opacity = Math.max(0, 1 - Math.pow(passedRatio, 1.8) * 1.5);
          blurValue = passedRatio * 6;
          zIndex = 200 - Math.floor(relativePos * 10);
        } else {
          // Zone 2 & 3: Card in focus or waiting behind in depth stack
          const distance = relativePos;
          if (distance <= 1) {
            scale = 0.95 - distance * 0.30;
            translateZ = -distance * 220;
            translateY = distance * 36;
            opacity = 1 - distance * 0.55;
            blurValue = distance * 4;
          } else {
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

      // Update readout counter (e.g. "01 / 05")
      if (readoutCounterRef.current) {
        const formattedNum = String(activeIndex + 1).padStart(2, '0');
        readoutCounterRef.current.textContent = `${formattedNum} / ${String(TOTAL_EVENTS).padStart(2, '0')}`;
      }

      // Update progress bar fill
      if (progressFillRef.current) {
        const progressPercent = TOTAL_EVENTS > 1 ? (activeIndex / (TOTAL_EVENTS - 1)) * 100 : 100;
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
  }, [activeCategory]);

  // ------------------------------------------------------------------------
  // 4. NON-TRAPPING WHEEL SCROLL CONTROLLER
  // ------------------------------------------------------------------------
  useEffect(() => {
    const consoleEl = consoleRef.current;
    if (!consoleEl) return;

    const handleWheel = (e) => {
      // Disable wheel-based event scrolling on mobile view (<= 1024px)
      if (window.innerWidth <= 1024 || window.matchMedia('(max-width: 1024px)').matches) return;

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
      // Disable touch swipe event transitions on mobile view (<= 1024px) so native page scrolling is uninterrupted
      if (window.innerWidth <= 1024 || window.matchMedia('(max-width: 1024px)').matches) return;

      if (e.touches.length === 1) {
        touchStartYRef.current = e.touches[0].clientY;
        isTouchingRef.current = true;
      }
    };

    const handleTouchMove = (e) => {
      if (window.innerWidth <= 1024 || window.matchMedia('(max-width: 1024px)').matches) return;

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
        {/* Viewport Header Telemetry Bar - Full Width Across Top */}
        <header className="viewport-header">
          <div className="viewport-title-group">
            <span className="hud-badge">EVENT COMMAND</span>
            <h1 className="viewport-title">OMNITRIX 2026 // EVENT CONSOLE</h1>
          </div>
          <div className="viewport-meta">
            <span className="meta-tag">TOTAL_EVENTS // {String(activeEvents.length).padStart(2, '0')}</span>
            <span className="meta-tag text-red">LIVE_SCHEDULE</span>
          </div>
        </header>

        {/* Console Main Body Layout Wrapper */}
        <div className="console-body-wrapper">
          {/* EVENT CATEGORIES SELECTOR (LEFT SIDE) */}
          <aside className="category-sidebar" aria-label="Event Categories">
            <div className="sidebar-header">
              <span className="sidebar-tag">SYSTEM // CATEGORIES</span>
            </div>
            <div className="category-list">
              {CATEGORIES_LIST.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    className={`category-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleCategorySelect(cat.key)}
                  >
                    <span className="category-label">{cat.label}</span>
                    <span className="category-indicator">{isActive ? '◄' : '◇'}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* CENTRAL VIEWPORT FRAME */}
          <div className="viewport-frame" id="viewport-frame" ref={consoleRef}>
            {/* 3D CARD CANVAS */}
            <div className="card-stack-container" id="card-stack-container">
            <div className="card-canvas" id="card-canvas" ref={cardCanvasRef}>
              {activeEvents.map((event, index) => (
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
                    </div>
                    <Link to="/events" className="event-cta-btn">
                      GO TO EVENT →
                    </Link>
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
              <span className="readout-counter" ref={readoutCounterRef}>
                01 / {String(activeEvents.length).padStart(2, '0')}
              </span>
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
    </div>
  </section>
  );
}

