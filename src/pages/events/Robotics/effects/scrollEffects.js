import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero section pinning animation
 * Pins Section 1 (Hero) while Section 2 (Workshops) scrolls UP over it.
 */
export function initHeroPin() {
  const heroEl = document.querySelector('.robotics-page .hero-section');
  if (!heroEl) return () => {};

  const heroPinTrigger = ScrollTrigger.create({
    trigger: heroEl,
    start: 'top top',
    end: () => `+=${heroEl.offsetHeight}`,
    pin: true,
    pinSpacing: false,
    anticipatePin: 1,
    refreshPriority: 10,
  });

  ScrollTrigger.refresh();

  return () => {
    heroPinTrigger.kill();
  };
}

/**
 * Scroll reveal animations (Intersection Observer)
 */
export function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-up');
  fadeElements.forEach(el => {
    scrollObserver.observe(el);
  });

  return () => {
    scrollObserver.disconnect();
  };
}

