import phoneHero from '@/assets/images/phone_hero.webp';
import omnitrixHero from '@/assets/images/hero_section_2.webp';
import iemLogo from '@/assets/logos/iem.webp';
import uemLogo from '@/assets/logos/uem.webp';
import casLogo from '@/assets/logos/CAS.png';
import ieeeLogo from '@/assets/logos/IEEE-Logo.jpg';

let preloadPromise = null;

export function preloadHeroAssets() {
  if (preloadPromise) {
    return preloadPromise;
  }

  preloadPromise = new Promise((resolve) => {
    const urls = [phoneHero, omnitrixHero, iemLogo, uemLogo, casLogo, ieeeLogo];
    let loadedCount = 0;

    const checkComplete = () => {
      loadedCount++;
      if (loadedCount >= urls.length) {
        if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
          document.fonts.ready.then(() => resolve()).catch(() => resolve());
        } else {
          resolve();
        }
      }
    };

    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
      if (img.decode) {
        img.decode().then(checkComplete).catch(checkComplete);
      } else {
        img.onload = checkComplete;
        img.onerror = checkComplete;
      }
    });
  });

  return preloadPromise;
}
