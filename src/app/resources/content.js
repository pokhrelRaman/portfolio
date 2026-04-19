import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Raman",
  lastName: "Pokhrel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Game Developer",
  avatar: "/images/avata.jpg",
  location: "Asia/Kathmandu",
  languages: ["English", "Nepali"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <></>,
};

const social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/raman-pokhrel-3810242b6",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Game Developer</>,
  subline: (
    <>
      I'm Raman, a Game Developer who builds with a <b>player's mindset</b>.
      I specialize in architecting immersive multiplayer experiences and
      high-performance gameplay systems. Beyond writing code, I focus on
      user experience, retention strategy, performance optimization, and the
      subtle game-feel details that turn mechanics into memorable experiences.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "The Intersection of Tech & Product",
    description: (
      <>
        With 4+ years of professional experience, I design and engineer
        production-ready gameplay systems that scale. I bridge the gap between
        complex C# architectures and player-centric design, ensuring every
        technical decision contributes to retention, stability, and long-term
        growth.
        <br /><br />
        I thrive in high-stakes environments where real-time multiplayer,
        performance optimization, and scalability intersect — always building
        with clarity, maintainability, and the end-user in mind.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Solo Project (Indie Launch)",
        timeframe: "2025 - Present",
        role: "Full-cycle Developer",
        achievements: [
          <>
            Developed a <b>custom truck physics model</b> focusing on weight
            distribution and trailer pivot constraints to ensure realistic
            handling in an open-world environment.
          </>,
          <>
            Built a <b>flexible Mission System architecture</b> capable of
            handling dynamic job states, rewards, and destination triggers
            without hard-coding specific routes.
          </>,
          <>
            Implemented <b>IAP and Ad-Mediation</b> (Rewarded/Interstitial)
            systems to sustain the in-game economy and development lifecycle.
          </>,
          <>
            Managed <b>performance optimization</b> for a large-scale map,
            ensuring stable gameplay on mid-range mobile devices through
            manual draw-call batching and memory control.
          </>,
          <>
            Successfully scaled the project to <b>50K+ organic downloads</b>,
            maintaining consistent growth of <b>850+ new users per day on average</b>
            ,  through niche targeting, ASO optimization, and retention-focused
            loop refinement.
          </>,
          <>
            Optimized the core gameplay loop to sustain a
            <b> 1,500 Average DAU</b> (rapidly growing), leveraging player
            feedback, crash analytics, and behavioral iteration to improve
            retention and stability.
          </>,
          <>
            Handled the <b>full release cycle</b> — from prototype and QA
            testing to post-launch monitoring, live updates, and crash-based
            patch deployment.
          </>,
        ],
        images: [],
      },
      {
        company: "Hi-Math",
        timeframe: "Apr 2025 - June 2025",
        role: "Consulting Team Lead",
        achievements: [
          <>
            Directed the full development lifecycle to
            <b> ship an MVP from concept to store in 30 days</b>, defining
            technical architecture, sprint execution structure, and rapid
            iteration workflows.
          </>,
          <>
            Led a cross-functional team of 5 (3 developers, 2 designers),
            ensuring alignment between engineering, UX research, and product goals.
          </>,
          <>
            Conducted user experience research focused on
            <b> neurodiversity and autism-friendly design</b>, implementing
            specialized UI/UX patterns to enhance cognitive learning outcomes.
          </>,
          <>
            Defined scalable technical architecture for the educational engine,
            ensuring accessibility, maintainability, and long-term adaptability.
          </>,
        ],
        images: [],
      },
      {
        company: "Veda Studios",
        timeframe: "Mar 2024 - 2025",
        role: "Unity Game Developer",
        achievements: [
          <>
            Re-architected a scalable LAN networking framework for multiplayer
            titles, prioritizing low-latency synchronization and refactoring
            legacy systems for long-term maintainability.
          </>,
          <>
            Integrated <b>Nakama and WebSockets</b> to power real-time player
            dashboards and competitive matchmaking systems.
          </>,
          <>
            Engineered an adaptive UI system that reduced layout-related issues
            across 50+ unique device aspect ratios.
          </>,
          <>
            Bridged Design and Engineering pipelines to optimize high-fidelity
            assets, maintaining consistent 60 FPS performance on mid-tier hardware.
          </>,
        ],
        images: [],
      },
      {
        company: "Avana Game Studios",
        timeframe: "Jul 2022 – Apr 2024",
        role: "Unity Game Developer",
        achievements: [
          <>
            Led technical implementation for a flagship 3D title, managing
            complex physics-based movement systems and character animation flows.
          </>,
          <>
            Reduced build sizes by <b>60%</b> using Unity Addressables,
            significantly improving mobile conversion rates.
          </>,
          <>
            Developed reusable flight mechanics and hit-detection systems
            utilized across multiple project iterations.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [
      {
        name: "Sagarmatha Engineering College",
        description: (
          <>Bachelor's in Electronics, Communication, and Information Engineering.</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "Unity Ecosystem",
        description: (
          <>Expertise in 2D/3D development, ragdoll physics, Addressables, and mobile performance optimization with strong memory management practices.</>
        ),
      },
      {
        title: "Multiplayer & Networking",
        description: (
          <>Deep experience with Mirror, Photon, and Nakama. Proficient in LAN synchronization, authoritative server models, and real-time communication pipelines.</>
        ),
      },
      {
        title: "Product & Growth",
        description: (
          <>Market trend analysis, ASO (App Store Optimization), retention loop refinement, and organic user acquisition strategy.</>
        ),
      },
      {
        title: "Full-Stack Foundation",
        description: (
          <>Strong proficiency in C#, C++, Python, and Node.js for gameplay systems and backend services.</>
        ),
      },
      {
        title: "AI & Simulation",
        description: (
          <>Pathfinding algorithms (A*, Dijkstra) and real-time physics simulations for robotics and interactive systems.</>
        ),
      },
      {
        title: "IoT Integration",
        description: (
          <>Specialized in hardware-software bridges, building gameplay systems controlled by physical IoT devices and sensors.</>
        ),
      },
    ],
  },
  leadership: {
    title: "Leadership & Impact",
    display: true,
    achievements: [
      {
        title: "Delivered MVP in 30 Days (Team-Led Execution)",
        description:
          "Led a 5-member cross-functional team from concept to store launch within 30 days. Defined technical architecture, sprint structure, and rapid iteration cycles to ensure on-time delivery without compromising product stability.",
      },
      {
        title: "Hackathon Champion – Execution Under Pressure",
        description:
          "Won COESIS (12 hrs) and Orbit (48 hrs) hackathons by architecting polished, MVP-ready game and IoT prototypes under extreme time constraints, balancing speed with structural clarity.",
        icon: "trophy",
      },
      {
        title: "President, SEC Robotics Club",
        description:
          "Directed and mentored 30+ members in regional competitions, establishing structured prototyping workflows and fostering technical ownership and peer mentorship.",
        icon: "robot",
      },
      {
        title: "Technical Mentor – AWS Community Day",
        description:
          "Mentored aspiring developers on scalable backend architecture for multiplayer systems, emphasizing reliability, performance, and real-world deployment strategy.",
        icon: "lightbulb",
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "DevLog & Product Insights",
  description: `Sharing lessons from shipping games to 20K+ players and building scalable systems.`,
};

const work = {
  label: "Work",
  title: "Shipped Projects",
  description: `A collection of games ranging from indie solo successes to corporate multiplayer titles.`,
};

const gallery = {
  label: "Gallery",
  title: "Behind the Scenes",
  description: `Moments from development, experimentation, and community engagement.`,
  images: [
    /* keep your existing gallery images here */
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };