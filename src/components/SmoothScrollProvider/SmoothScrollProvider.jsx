import React from 'react';
import useLenis from '@/hooks/useLenis';

export default function SmoothScrollProvider({ children }) {
  // Initialize Lenis smooth scroll
  useLenis();

  return <>{children}</>;
}
