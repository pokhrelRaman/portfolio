import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Raman",
  lastName: "Pokhrel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Game Developer",
  avatar: "/images/avata.jpg",
  location: "Asia/Kathmandu", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Nepali"], // optional: Leave the array empty if you don't want to display languages
};


const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>

    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
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
      I'm Raman, a dedicated Unity Game Developer with a deep passion for every aspect of game development.
       I thrive on crafting immersive experiences, from gameplay mechanics to optimization, 
        I'm always pushing the boundaries of what's possible in interactive entertainment. 
        Currently, I'm working at <InlineCode>Veda Studios</InlineCode> 
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
    title: "Introduction",
    description: (
      <>
        A dedicated game developer with 3+ years of professional experience and a strong foundation in programming. Specialized in multiplayer game development, real-time simulations, and performance optimization. Deep expertise in networking, game mechanics, UI and designs. Passionate about crafting high-performance, engaging games with scalable architectures.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Veda Studios",
        timeframe: "Mar 2024 - Present",
        role: "Unity Game Developer",
        achievements: [
          <>
            Designed and implemented scalable networking architecture, ensuring low latency and high performance.
          </>,
          <>
            Developed a multiplayer card game with LAN-based networking, allowing players to connect without the internet.
          </>,
          <>
            Fixed existing logical issue and smoothed gameplay. 
          </>,
          <>
            Built an adaptive UI system that seamlessly adjusts to different screen resolutions and devices.
          </>,
          <>
            Collaborated with backend developers to integrate real-time updates, multiplayer rooms, and dashboard features using Nakama and sockets.
          </>,
          <> 
            Collaborated with project managers and QA teams to ensure product meets the clients expectation and requirements.
          </>,
          <> 
            Collaborated with design teams to acquire optimized assets and refine designs for better performance and visual consistency..
        </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Avana Game Studios",
        timeframe: "Jul 2022 – Apr 2024",
        role: "Unity Game developer",
        achievements: [
          <>
            Led the development of a 3D games, handling gameplay mechanics, in-game physics, and animations.
          </>,
          <>
            Optimized the iOS and Android builds using addressables to reduce game size by 60% .
          </>,
          <>
            Built an adaptive UI system that seamlessly adjusts to different screen resolutions and devices.
          </>,
          <>
            Developed and fine-tuned fly mechanics, integrating shooting mechanics, hit detection, and movement systems.
          </>,
          <>
            Integrated sound, animations, and particle systems for a seamless gaming experience.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Sagarmatha Engineering College",
        description: <>Studied Electronics Communication and Information Engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Unity",
        description: <>Experienced in developing both 2D and 3D games across multiple genres, including driving, combat, ragdoll physics, flying, card games, and educational games. Skilled in implementing game mechanics, adaptive UI design, and optimization techniques to enhance performance and player experience.</>,
      },
      {
        title: "Multiplayer & Networking",
        description: <>Skilled in implementing real-time multiplayer using Mirror, Photon, and Nakama, including LAN-based and client-server architectures.</>,
      },
      {
        title: "Programming Languages",
        description: <>Proficient in C#, C++, Python, and Node.js for game development, backend services, and performance-driven applications.</>,
      },
      {
        title: "Game Optimization",
        description: <>Skilled in Unity Addressables, object pooling, memory management, and UI performance improvements to ensure smooth gameplay.</>,
      },
      {
        title: "Tools & Version Control",
        description: <>Comfortable with Git, PlasticSCM,  and profiling tools for debugging and optimization.</>,
      },
      {
        title: "Backend & Cloud",
        description: <>Familiar with backend technologies like Node.js, Django.</>,
      },
      {
        title: "AI & Algorithms",
        description: <>Experienced in developing AI-driven pathfinding (A*, Dijkstra), and real-time robot simulations.</>,
      },
      {
        title: "Internet Of things",
        description: <>Experienced in developing Iot projects, Comfortable enough to create games using IoT devices</>,
      },
    ], 
  },
  leadership: {
    title: "Leadership and Achievements",
    display: true,
    achievements: [
      {
        title: "President of Robotics Club Of Sagarmatha Engineering College",
        description: "Led the team in building robots for regional competitions. Worked on team management and fostering innovation. Mentored juniors to uplift their coding skills",
        icon: "robot", // Optional: can be an icon name (or an image URL)
      },
      {
        title: "Mentor for Hackathons",
        description: "Guided participants to build innovative solutions within 48 hours in Orbit 2.0 organized by engineering vlogs. Provided mentorship and helped design competitive strategies on game, IoT and backend technology.",
        icon: "lightbulb", // Optional: an icon for this role
      },
      {
        title: "Winner of Delta and Orbit",
        description: "Led the team to victory in a project demonstration with a laser tag project, showcasing teamwork.",
        icon: "trophy", // Optional: an icon for winning
      },
      {
        title: "Winner of Hackathon",
        description: "Won Hackathon organized by COESIS with the educational game we designed and implemented within the time frame of 12hrs.",
        icon: "medal", // Optional: an icon for hackathon victories
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
