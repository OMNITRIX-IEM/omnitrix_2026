import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/navbar/Navbar';
import EventWheel from './components/EventWheel';
import EventNavigation from './components/EventNavigation';
import EventFeature from './components/EventFeature';
import './Events.css';

export default function Events() {
  const [currentState, setCurrentState] = useState(0);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth > 1024 : true);

  const isAnimatingRef = useRef(false);
  const scrollConsumedRef = useRef(false);
  const scrollEndTimerRef = useRef(null);

  const scrollContainerRef = useRef(null);
  const isProgrammaticScrollRef = useRef(false);
  const snapTimerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updateState = (newState) => {
    if (newState < 0 || newState >= 3 || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setCurrentState(newState);

    if (isDesktop) {
      const container = scrollContainerRef.current;
      if (container) {
        isProgrammaticScrollRef.current = true;
        container.scrollTo({
          top: newState * container.clientHeight,
          behavior: 'smooth'
        });
      }
    }

    setTimeout(() => {
      isAnimatingRef.current = false;
      isProgrammaticScrollRef.current = false;
    }, 800); // 800ms lockout for transitions
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (isDesktop) {
        e.preventDefault();

        if (Math.abs(e.deltaY) < 10) return;

        if (scrollConsumedRef.current) {
          clearTimeout(scrollEndTimerRef.current);
          scrollEndTimerRef.current = setTimeout(() => {
            scrollConsumedRef.current = false;
          }, 150);
          return;
        }

        let nextState = currentState;
        if (e.deltaY > 0) {
          nextState = currentState + 1;
        } else if (e.deltaY < 0) {
          nextState = currentState - 1;
        }

        if (nextState >= 0 && nextState < 3) {
          updateState(nextState);
        }

        scrollConsumedRef.current = true;
        clearTimeout(scrollEndTimerRef.current);
        scrollEndTimerRef.current = setTimeout(() => {
          scrollConsumedRef.current = false;
        }, 150);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (scrollEndTimerRef.current) {
        clearTimeout(scrollEndTimerRef.current);
      }
    };
  }, [currentState, isDesktop]);

  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      if (isDesktop) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (isDesktop) {
        e.preventDefault();
        if (isAnimatingRef.current) return;

        const touchEndY = e.touches[0].clientY;
        const deltaY = touchStartY - touchEndY;

        if (Math.abs(deltaY) > 50) {
          if (deltaY > 0) {
            updateState(currentState + 1);
          } else {
            updateState(currentState - 1);
          }
          touchStartY = touchEndY;
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentState, isDesktop]);

  const handleScroll = () => {
    if (isProgrammaticScrollRef.current) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    const clientHeight = container.clientHeight;
    if (clientHeight === 0) return;

    const targetState = Math.round(scrollTop / clientHeight);

    if (targetState !== currentState && targetState >= 0 && targetState < 3) {
      setCurrentState(targetState);
    }

    clearTimeout(snapTimerRef.current);
    snapTimerRef.current = setTimeout(() => {
      const latestScrollTop = container.scrollTop;
      const latestState = Math.round(latestScrollTop / clientHeight);

      isProgrammaticScrollRef.current = true;
      container.scrollTo({
        top: latestState * clientHeight,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 400);
    }, 150);
  };

  const containerStyle = isDesktop ? {
    height: '100vh',
    overflowY: 'scroll',
    overflowX: 'hidden'
  } : {};

  const spacerStyle = isDesktop ? {
    height: '300vh',
    position: 'relative'
  } : {};

  const stickyStyle = isDesktop ? {
    position: 'sticky',
    top: 0,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  } : {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  };

  return (
    <div className="events-main-page">
      <Navbar />
      <div
        className={isDesktop ? "app-scroll-container" : ""}
        ref={scrollContainerRef}
        style={containerStyle}
        onScroll={isDesktop ? handleScroll : undefined}
      >
        <div style={spacerStyle}>
          <div style={stickyStyle}>
            <main className="container" id="scroll-container">
              <div className="bg-glow"></div>
              <EventWheel currentState={currentState} />
              <EventNavigation
                currentState={currentState}
                onSelectState={updateState}
              />
              <EventFeature currentState={currentState} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
