import robotCombat from '@/assets/events/main/robot_combat.png';
import droneWarfare from '@/assets/events/main/drone_warfare.png';
import aiSummit from '@/assets/events/main/ai_summit.png';

export const eventsData = [
  {
    id: "robotics",
    title: "ROBOTICS",
    date: "OCTOBER 15, 2026",
    desc: "Robot battle event",
    image: robotCombat
  },
  {
    id: "workshops",
    title: "WORKSHOPS & HACKATHONS",
    date: "OCTOBER 18, 2026",
    desc: "Hands-on tech workshops & competitive hackathons covering ML/DL, ROS 2, VLSI, Drones, and AI innovations.",
    image: "/images/cards/hackathon.jpg"
  },
  {
    id: "esports",
    title: "E-SPORTS",
    date: "OCTOBER 22, 2026",
    desc: "High-speed aerial combat featuring the most advanced military drones. Watch as pilots navigate complex obstacle courses while engaging targets.",
    image: droneWarfare
  },
  {
    id: "games",
    title: "INDOOR GAMES",
    date: "NOVEMBER 05, 2026",
    desc: "A gathering of the greatest minds in artificial intelligence. Witness neural networks battle in real-time strategy simulations.",
    image: aiSummit
  }
];
