import robosoccer from '@/assets/events/robotics/robosoccer.jpg';
import roborace from '@/assets/events/robotics/roborace.webp';
import robosumo from '@/assets/events/robotics/robosumo.webp';
import uavr from '@/assets/events/robotics/UAV_race.webp';
import lfr from '@/assets/events/robotics/LFR.webp';
import robosoccerPdf from '@/assets/events/robotics/Robosoccer.pdf';
import roboracePdf from '@/assets/events/robotics/Roborace_rulebook.pdf';
import lfrPdf from '@/assets/events/robotics/LFR.pdf';
import roboclashPdf from '@/assets/events/robotics/Roboclash.pdf';
import droneracePdf from '@/assets/events/robotics/Dronerace.pdf';


export const workshops = [
  {
    id: 1,
    titleLine1: "ROBOSOCCER",
    image: robosoccer,
    priceCurrent: "₹299",
    icon: "bolt",
    delay: "100ms",
    registerLink: "https://forms.gle/vNMQB8nwRFTdbSt47",
    rulebook: robosoccerPdf,
    exploreContent: [
      { type: "heading", text: "ROBOSOCCER" },
      {
        type: "list",
        items: [
          "Activate Kickin Hawk and step onto the robotic football field!",
          "RoboSoccer brings together speed, precision, strategy and engineering as teams battle it out to score goals and dominate the arena. Control your bot, outplay your opponents and lead your team to victory!",
          "Key Rules / Highlights:",
          "Teams compete using robots designed to play football and score goals against their opponents.",
          "Robots must operate within the specified size, weight, and technical regulations.",
          "Teams must control their robots according to the event's permitted control system.",
          "Matches are decided by goals scored, with the team scoring the most goals declared the winner.",
          "Strategy, precision, teamwork, and effective robot control will be crucial to dominating the arena."
        ]
      }
    ]
  },
  {
    id: 2,
    titleLine1: "ROBO RACE",
    image: roborace,
    priceCurrent: "₹299",
    icon: "psychology",
    delay: "200ms",
    registerLink: "https://forms.gle/kSyXCWQbz99KSgNRA",
    rulebook: roboracePdf,
    exploreContent: [
      { type: "heading", text: "ROBO RACE" },
      {
        type: "list",
        items: [
          "Team size: 1–5 members; manual wireless control only.",
          "Robot must be within 3 kg and 300 × 300 × 300 mm at the start.",
          "Battery-powered robots only, with a maximum supply of 24V.",
          "The robot must follow the designated track and direction.",
          "Obstacle skipping is permitted but will incur a time penalty.",
          "Final ranking will be based on completion time + penalties; referee decisions are final."
        ]
      }
    ]
  },
  {
    id: 3,
    titleLine1: "LINE FOLLOWING ROVER",
    image: lfr,
    priceCurrent: "₹299",
    icon: "hub",
    delay: "300ms",
    registerLink: "https://forms.gle/4BZdfh14shuBG3aEA",
    rulebook: lfrPdf,
    exploreContent: [
      {
        type: "list",
        items: [
          "The rover must autonomously follow the designated track using onboard sensors.",
          "Manual control or external assistance during the run is strictly prohibited.",
          "The rover must remain within the specified size and weight limits.",
          "The course may include turns, intersections, curves, and other challenges.",
          "Touching or manually repositioning the rover during the run will result in a penalty/restart.",
          "Winner will be decided based on fastest successful completion time."
        ]
      }
    ]
  },
  {
    id: 4,
    titleLine1: "ROBOSUMO / ROBOCLASH",
    image: robosumo,
    priceCurrent: "₹299",
    icon: "group_work",
    delay: "400ms",
    registerLink: "https://forms.gle/75SPqxvbZT53L6hV8",
    rulebook: roboclashPdf,
    exploreContent: [
      { type: "paragraph", text: "Two autonomous robots compete to push the opponent outside the designated arena." },
      { type: "paragraph", text: "Robots must comply with the specified size, weight, and power limits." },
      { type: "paragraph", text: "Robots must operate autonomously after the start signal." },
      { type: "paragraph", text: "No remote control, external assistance, or communication with the robot is permitted during the match." },
      { type: "paragraph", text: "Intentional use of hazardous, damaging, or entangling mechanisms is strictly prohibited." },
      { type: "paragraph", text: "The robot that successfully pushes its opponent out of the arena wins the round." },
      { type: "heading", text: "ROBOSUMO — 2 CATEGORIES" },
      { type: "heading", text: "Category 1: Under 3 KG" },
      {
        type: "list",
        items: [
          "Maximum robot weight: 3 kg.",
          "Robots compete one-on-one inside the designated arena.",
          "Robots must operate autonomously after the start signal.",
          "The objective is to push the opponent outside the arena.",
          "No external assistance, remote control, or intentional interference is allowed.",
          "Hazardous, entangling, or damaging mechanisms will result in disqualification."
        ]
      },
      { type: "heading", text: "Category 2: Under 8 KG" },
      {
        type: "list",
        items: [
          "Maximum robot weight: 8 kg.",
          "Robots compete one-on-one inside the designated arena.",
          "Robots must operate autonomously after the start signal.",
          "The objective is to push the opponent outside the arena.",
          "No external assistance, remote control, or intentional interference is allowed.",
          "Hazardous, entangling, or damaging mechanisms will result in disqualification."
        ]
      }
    ]
  },
  {
    id: 5,
    titleLine1: "DRONE TRACK COMPETITION / UAV RACE",
    image: uavr,
    priceCurrent: "₹349",
    icon: "group_work",
    delay: "400ms",
    registerLink: "https://forms.gle/eBpFeMwSKNzCqkwe7",
    rulebook: droneracePdf,
    exploreContent: [
      {
        type: "list",
        items: [
          "Teams must operate drones only within the designated flight arena and track.",
          "All drones and pilots must pass a mandatory safety inspection before the event.",
          "The drone must complete the designated checkpoints/obstacles in the prescribed sequence.",
          "Crossing restricted boundaries or missing checkpoints will result in time penalties.",
          "Any collision, unsafe flying, or intentional interference with another drone may lead to disqualification.",
          "Final ranking will be based on fastest successful completion time including penalties."
        ]
      }
    ]
  }
];
