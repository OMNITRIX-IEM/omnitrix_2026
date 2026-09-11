import bgmicropped from '@/assets/events/esports/bgmicropped.webp';
import eFootballcropped from '@/assets/events/esports/e-footballcropped.webp';
import callofdutycropped from '@/assets/events/esports/callofdutycropped.webp';
import freefirecropped from '@/assets/events/esports/freefirecropped.webp';

export const esportsGames = [
  {
    id: 1,
    tag: 'BATTLE',
    title: 'BGMI\nCHAMPIONSHIP',
    image: bgmicropped,
    price: '₹99 / ₹799',
    icon: 'emoji_events',
    registerLink: "https://forms.gle/ESmLEmDPf2U1Fxh18",
    exploreContent: [
      {
        type: "paragraph",
        text: "BGMI Championship is a mobile battle royale competition where players compete with skill, strategy, teamwork and survival instincts to dominate the battlefield."
      },
      {
        type: "heading",
        text: "KEY HIGHLIGHTS"
      },
      {
        type: "list",
        items: [
          "Prelims will be conducted online, allowing participants to compete from home using their personal mobile devices.",
          "Shortlisted participants will advance to the offline qualifiers, which will be conducted at the college.",
          "Players can participate either as Solo players or as part of a Squad, according to the event format.",
          "Participants must use their own personal mobile phones for the offline qualifiers and should ensure their devices are ready before the match.",
          "Players are expected to maintain fair play and sportsmanship throughout the competition; cheating, exploits or unauthorized assistance may result in disqualification."
        ]
      }
    ]
  },
  {
    id: 2,
    tag: 'BATTLE',
    title: 'E-FOOTBALL',
    image: eFootballcropped,
    price: '₹99',
    icon: 'swords',
    registerLink: "https://forms.gle/ESmLEmDPf2U1Fxh18",
    exploreContent: [
      {
        type: "paragraph",
        text: "E-Football is a competitive mobile football battle where players rely on tactical decisions, precise control and quick reactions to outplay their opponents and secure victory."
      },
      {
        type: "heading",
        text: "KEY HIGHLIGHTS"
      },
      {
        type: "list",
        items: [
          "Prelims will be conducted online from home using the participant's personal mobile phone.",
          "Selected participants will advance to offline qualifiers conducted at the college.",
          "Participants must bring and use their own personal mobile phone during the offline qualifiers.",
          "Players compete through their in-game teams and tactical decisions, making control, positioning and strategy essential to winning.",
          "Fair play is mandatory throughout the competition; cheating, exploits or unauthorized assistance may result in disqualification."
        ]
      }
    ]
  },
  {
    id: 3,
    tag: 'BATTLE',
    title: 'COD: MOBILE',
    image: callofdutycropped,
    price: '₹99 / ₹299',
    icon: 'my_location',
    registerLink: "https://forms.gle/ESmLEmDPf2U1Fxh18",
    exploreContent: [
      {
        type: "paragraph",
        text: "COD: Mobile Wars brings fast-paced mobile combat, sharp reflexes, tactical movement and battlefield strategy together in a competitive Call of Duty: Mobile experience."
      },
      {
        type: "heading",
        text: "KEY HIGHLIGHTS"
      },
      {
        type: "list",
        items: [
          "Prelims will be conducted online from home using the participant's personal mobile phone.",
          "Shortlisted participants will compete in offline qualifiers conducted at the college.",
          "Participants must use their own personal mobile phones for the offline qualifiers.",
          "Players must rely on their aim, movement, tactics and game awareness to outperform their opponents.",
          "Fair play is required throughout the event; cheating, exploits, unauthorized assistance or intentional unfair interference may result in disqualification."
        ]
      }
    ]
  },
  {
    id: 4,
    tag: 'BATTLE',
    title: 'FREE FIRE\nCLASH',
    image: freefirecropped,
    price: '₹399',
    icon: 'local_fire_department',
    registerLink: "https://forms.gle/ESmLEmDPf2U1Fxh18",
    exploreContent: [
      {
        type: "paragraph",
        text: "Free Fire Clash is a fast-paced mobile battle royale competition where survival, positioning, quick decision-making and combat skills determine who dominates the battlefield."
      },
      {
        type: "heading",
        text: "KEY HIGHLIGHTS"
      },
      {
        type: "list",
        items: [
          "Prelims will be conducted online from home using the participant's personal mobile phone.",
          "Selected participants will advance to offline qualifiers conducted at the college.",
          "Participants must use their own personal mobile phones during the offline qualifiers.",
          "Players will need strong survival strategy, positioning, combat skills and quick decision-making to gain an advantage.",
          "Fair play is mandatory; cheating, exploits, unauthorized assistance or other unfair practices may result in disqualification."
        ]
      }
    ]
  }
];
