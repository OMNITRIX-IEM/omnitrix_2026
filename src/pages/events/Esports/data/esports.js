import bgmicropped from '@/assets/events/esports/bgmicropped.webp';
import valorant1cropped from '@/assets/events/esports/valorant1cropped.webp';
import callofdutycropped from '@/assets/events/esports/callofdutycropped.webp';
import freefirecropped from '@/assets/events/esports/freefirecropped.webp';

export const esportsGames = [
  {
    id: 1,
    tag: 'BATTLE',
    title: 'BGMI\nCHAMPIONSHIP',
    image: bgmicropped,
    price: '₹50,000',
    icon: 'emoji_events'
  },
  {
    id: 2,
    tag: 'BATTLE',
    title: 'VALORANT\nINVITATIONAL',
    image: valorant1cropped,
    price: '₹75,000',
    icon: 'swords'
  },
  {
    id: 3,
    tag: 'BATTLE',
    title: 'COD: MOBILE\nWARS',
    image: callofdutycropped,
    price: '₹40,000',
    icon: 'my_location'
  },
  {
    id: 4,
    tag: 'BATTLE',
    title: 'FREE FIRE\nCLASH',
    image: freefirecropped,
    price: '₹30,000',
    icon: 'local_fire_department'
  }
];
