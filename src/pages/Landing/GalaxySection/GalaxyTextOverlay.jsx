import React, { useState, useEffect, useRef } from 'react';

const LEFT_BLOCK = [
  {
    id: 'left-1',
    size: 'lg',
    tokens: [
      { text: 'THE ', isGreen: false },
      { text: 'MACHINE ', isGreen: true },
      { text: 'AWAKENS.', isGreen: false },
    ],
  },
  {
    id: 'left-2',
    size: 'md',
    tokens: [
      { text: 'BEYOND THE ', isGreen: false },
      { text: 'BATTLEFIELD.', isGreen: true },
    ],
  },
  {
    id: 'left-3',
    size: 'sm',
    tokens: [
      { text: 'WHERE ', isGreen: false },
      { text: 'TECHNOLOGY ', isGreen: true },
      { text: 'BECOMES POWER.', isGreen: false },
    ],
  },
];

const RIGHT_BLOCK = [
  {
    id: 'right-1',
    size: 'lg',
    tokens: [
      { text: 'THE ', isGreen: false },
      { text: 'ARENA ', isGreen: true },
      { text: 'IS READY.', isGreen: false },
    ],
  },
  {
    id: 'right-2',
    size: 'md',
    tokens: [
      { text: 'TACTICS. ', isGreen: true },
      { text: 'PRECISION. ', isGreen: false },
      { text: 'CONTROL.', isGreen: true },
    ],
  },
  {
    id: 'right-3',
    size: 'sm',
    tokens: [
      { text: 'ENTER THE ', isGreen: false },
      { text: 'NEXT FRONTIER.', isGreen: true },
    ],
  },
];

function flattenTokensToChars(tokens) {
  const chars = [];
  tokens.forEach((token) => {
    for (let i = 0; i < token.text.length; i++) {
      chars.push({
        char: token.text[i],
        isGreen: token.isGreen,
      });
    }
  });
  return chars;
}

export default function GalaxyTextOverlay() {
  const [revealedCounts, setRevealedCounts] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const hasStartedRef = useRef(false);
  const timersRef = useRef([]);

  useEffect(() => {
    const galaxySection = document.getElementById('galaxy-section');
    if (!galaxySection) return;

    const startTypingSequence = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;

      const baseDelay = 150;

      const animateBlock = (lines, startDelay) => {
        let currentDelay = startDelay;

        lines.forEach((line) => {
          const chars = flattenTokensToChars(line.tokens);
          const totalChars = chars.length;

          for (let i = 1; i <= totalChars; i++) {
            const charDelay = currentDelay + i * 28;
            const timer = setTimeout(() => {
              setRevealedCounts((prev) => ({
                ...prev,
                [line.id]: i,
              }));
            }, charDelay);
            timersRef.current.push(timer);
          }

          currentDelay += totalChars * 28 + 140;
        });

        return currentDelay;
      };

      const leftEnd = animateBlock(LEFT_BLOCK, baseDelay);
      const rightEnd = animateBlock(RIGHT_BLOCK, baseDelay + 300);

      const maxEnd = Math.max(leftEnd, rightEnd) + 200;
      const finalTimer = setTimeout(() => {
        setIsComplete(true);
      }, maxEnd);
      timersRef.current.push(finalTimer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStartedRef.current) {
            startTypingSequence();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(galaxySection);

    return () => {
      observer.disconnect();
      timersRef.current.forEach((t) => clearTimeout(t));
      timersRef.current = [];
    };
  }, []);

  const renderLine = (line) => {
    const chars = flattenTokensToChars(line.tokens);
    const count = isComplete ? chars.length : (revealedCounts[line.id] || 0);

    return (
      <div key={line.id} className={`galaxy-text-line size-${line.size}`}>
        {chars.map((charObj, index) => {
          const isVisible = isComplete || index < count;
          const displayChar = charObj.char === ' ' ? '\u00A0' : charObj.char;
          const colorClass = charObj.isGreen ? 'color-green' : 'color-white';

          return (
            <span
              key={index}
              className={`galaxy-char ${colorClass} ${isVisible ? 'is-visible' : ''}`}
            >
              {displayChar}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="galaxy-text-overlay">
      <div className="galaxy-text-block galaxy-text-block-left">
        {LEFT_BLOCK.map(renderLine)}
      </div>
      <div className="galaxy-text-block galaxy-text-block-right">
        {RIGHT_BLOCK.map(renderLine)}
      </div>
    </div>
  );
}
