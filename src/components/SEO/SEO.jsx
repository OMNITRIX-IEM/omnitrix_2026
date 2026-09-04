import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTES_SEO = {
  '/': {
    title: 'OMNITRIX 2026 | IEM — Robotics, Esports & Indoor Games',
    description:
      "OMNITRIX 2026 — IEM's ultimate technical and gaming festival featuring Robotics, Esports and Indoor Games. Explore events, compete, and register now.",
    canonical: 'https://omnitrix-iem.in/',
  },
  '/events': {
    title: 'Events | OMNITRIX 2026 — IEM',
    description:
      'Explore all OMNITRIX 2026 events at IEM, featuring robotics, esports and indoor games. Discover competitions and find your next challenge.',
    canonical: 'https://omnitrix-iem.in/events',
  },
  '/events/robotics': {
    title: 'Robotics Events | OMNITRIX 2026 — IEM',
    description:
      "Explore the robotics competitions at OMNITRIX 2026, IEM's technical and gaming festival. Discover challenges, rules and event details.",
    canonical: 'https://omnitrix-iem.in/events/robotics',
  },
  '/events/esports': {
    title: 'Esports Events | OMNITRIX 2026 — IEM',
    description:
      'Compete in OMNITRIX 2026 esports events at IEM. Explore the games, competitions and challenges waiting for you.',
    canonical: 'https://omnitrix-iem.in/events/esports',
  },
  '/events/indoor-games': {
    title: 'Indoor Games | OMNITRIX 2026 — IEM',
    description:
      'Take on the indoor games at OMNITRIX 2026, featuring competitive challenges and exciting games at IEM.',
    canonical: 'https://omnitrix-iem.in/events/indoor-games',
  },
  '/sponsors': {
    title: 'Sponsors | OMNITRIX 2026 — IEM',
    description:
      'Meet the organizations and brands supporting OMNITRIX 2026 at IEM and helping bring the festival to life.',
    canonical: 'https://omnitrix-iem.in/sponsors',
  },
};

function updateMetaTag(selector, attrName, attrValue, content) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function updateLinkTag(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const path =
      location.pathname.length > 1 && location.pathname.endsWith('/')
        ? location.pathname.slice(0, -1)
        : location.pathname;

    const seo = ROUTES_SEO[path] || ROUTES_SEO['/'];

    document.title = seo.title;

    updateMetaTag('meta[name="description"]', 'name', 'description', seo.description);
    updateMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow');
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', seo.title);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', seo.description);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', seo.canonical);
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);
    updateLinkTag('canonical', seo.canonical);
  }, [location]);

  return null;
}
