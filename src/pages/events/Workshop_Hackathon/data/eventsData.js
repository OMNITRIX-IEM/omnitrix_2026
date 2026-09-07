export const REGISTRATION_URL = "https://forms.gle/dvkvp23kZqn3GfX88";

export const generalRules = [
  "Participants must register before the event and carry their registration confirmation/ID.",
  "Participants should report 15–20 minutes before the scheduled start time.",
  "Participants are responsible for bringing their own laptops and required accessories, wherever applicable.",
  "Any damage caused due to careless handling of equipment may be the participant's responsibility.",
  "Organizers' and instructors' decisions will be final regarding event participation and technical matters."
];

export const eventsData = [
  {
    id: "01",
    type: "WORKSHOP",
    titlePrefix: "WS - ",
    titleHighlight: "ML DL",
    fullTitle: "ML & DL WORKSHOP",
    image: "/images/cards/ml-dl.jpg",
    headerIcon: "brain",
    prerequisites: [
      "Basic knowledge of Python is recommended.",
      "Familiarity with basic programming concepts.",
      "Basic understanding of mathematics and statistics is helpful.",
      "No prior Machine Learning or Deep Learning experience required.",
      "Participants should bring a laptop with Python/Jupyter Notebook installed."
    ]
  },
  {
    id: "02",
    type: "WORKSHOP",
    titlePrefix: "WS - ",
    titleHighlight: "ROS2",
    fullTitle: "ROS 2 WORKSHOP",
    image: "/images/cards/ros2.jpg",
    headerIcon: "robot",
    prerequisites: [
      "Basic knowledge of Linux/Ubuntu is recommended.",
      "Familiarity with basic Python or C++ programming.",
      "Basic understanding of robotics concepts is helpful.",
      "No prior ROS/ROS 2 experience required.",
      "Participants should bring a laptop with Ubuntu/Linux environment ready."
    ]
  },
  {
    id: "03",
    type: "WORKSHOP",
    titlePrefix: "WS - ",
    titleHighlight: "VLSI & EMBEDDED SYSTEM",
    fullTitle: "VLSI & EMBEDDED SYSTEM WORKSHOP",
    image: "/images/cards/vlsi.jpg",
    headerIcon: "chip",
    prerequisites: [
      "Basic knowledge of digital electronics is recommended.",
      "Familiarity with basic C/C++ programming is helpful.",
      "Basic understanding of microcontrollers and electronic components is an advantage.",
      "No prior VLSI or Embedded Systems experience required.",
      "Participants should bring a laptop with the required software/tools installed."
    ]
  },
  {
    id: "04",
    type: "WORKSHOP",
    titlePrefix: "WS - ",
    titleHighlight: "DRONE PROG.",
    fullTitle: "DRONE MAKING WORKSHOP",
    image: "/images/cards/drone.jpg",
    headerIcon: "drone",
    prerequisites: [
      "Basic knowledge of electronics and circuits is recommended.",
      "Familiarity with basic Arduino/microcontroller concepts is helpful.",
      "Basic understanding of motors, batteries and sensors is an advantage.",
      "No prior drone-building experience required.",
      "Participants should follow all safety instructions and workshop guidelines."
    ]
  },
  {
    id: "05",
    type: "EVENT",
    titlePrefix: "",
    titleHighlight: "PROJECT EXHIBITION",
    fullTitle: "PROJECT EXHIBITION",
    image: "/images/cards/exhibition.jpg",
    headerIcon: "exhibition",
    prerequisites: [
      "Open to all students with working hardware/software project prototypes.",
      "Teams can consist of 1 to 4 members.",
      "Participants must bring all necessary project hardware, presentation slides, and posters.",
      "Basic understanding of their demonstrated technology and working demo readiness.",
      "Teams should follow setup guidelines and present to judges during evaluation rounds."
    ]
  },
  {
    id: "06",
    type: "EVENT",
    titlePrefix: "",
    titleHighlight: "HACKATHON",
    fullTitle: "AI AGENT HACKATHON — NO CODE",
    image: "/images/cards/hackathon.jpg",
    headerIcon: "code",
    prerequisites: [
      "No coding experience required.",
      "Basic familiarity with AI tools and web applications is helpful.",
      "Participants should have a laptop and stable internet connection.",
      "Creativity and problem-solving skills are more important than technical expertise.",
      "Teams will build and demonstrate an AI-powered solution using no-code tools."
    ]
  }
];
