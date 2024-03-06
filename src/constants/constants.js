import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  inkSync,
  tracker,
  nextjs,
  socialSphere,
  creator,
  github,
  shopify,
  bootstrap,
  materialUi,
  sass,
  framerMotion,
  wordpress,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Programmer",
    icon: backend,
  },
  {
    title: "Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    position: [2, 0, 0],
  },
  {
    name: "Material Ui",
    icon: materialUi,
    position: [2, 0, 0],
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Framer Motion",
    icon: framerMotion,
  },
  {
    name: "Next JS",
    icon: nextjs,
    position: [2, 0, 0],
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Shopify",
    icon: shopify,
  },
  {
    name: "WordPress",
    icon: wordpress,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "InkSync",
    description:
      "A real-time collaborative whiteboard web application built with NextJs, Express, and Socket.io.",
    features: [
      "Users can create a room and invite others to join the room using a unique room code.",
      "Users can draw on the whiteboard and the changes will be reflected in real-time to all the users in the room.",
    ],
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
    ],
    image: inkSync,
    source_code_link: "https://github.com/himanshu8443/InkSync",
    live_link: "https://www.inksync.cloud/",
  },
  {
    name: "Hayasaka",
    description:
      "A dynamic full-stack music streaming web application with Next.js 13 and MongoDB.",
    features: [
      "User authentication using NextAuth.js with JWT and OAuth providers.",
      "Redux to Manage app state effectively.",
      "Play, pause, skip, and control the playback of songs.",
      "Users can Create, update and delete their own playlists.",
      "Add songs to favorites in one click.",
      "Auto adds similar songs to the queue.",
      "Swipe and touch gestures for touch-responsive devices.",
      "Display song details such as title, artist, album, and album artwork.",
      "PWA (Progressive Web App) support. ",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "nextauth",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/himanshu8443/hayasaka",
    live_link: "https://hayasaka.live/",
  },
  {
    name: "Study Notion",
    description: "Developed an educational technology website with CMS.",
    features: [
      "Implemented Email verification and using OTP user authentication and login/signup functionality using JWT for secure access to the platform.",
      "Students can browse and purchase courses. Instructors can create new courses, edit existing courses, and delete courses they have created.",
      "Integrated MongoDB database to store user information, course data, and progress tracking.",
      "Employed RESTful API principles for seamless communication between the frontend and backend systems.",
      "Razorpay payment integration.",
      "PWA (Progressive Web App) support.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/himanshu8443/Study-Notion-master",
    live_link: "https://studynotion.fun/",
  },
  {
    name: "FlipKart Price Tracker",
    description:
      "Chrome extension to track FlipKart product prices and send an alert to users when prices go below the user-selected price.",
    features: [
      "Users can add products to the watchlist by clicking on the extension icon on the product page.",
      "Users can set a price alert by entering the desired price for the product.",
    ],
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Chrome Extension",
        color: "green-text-gradient",
      },
      {
        name: "ReactJs",
        color: "pink-text-gradient",
      },
    ],
    image: tracker,
    source_code_link: "https://github.com/himanshu8443/FlipKart-Price-Tracker",
    live_link:
      "https://chromewebstore.google.com/detail/fliptrack-flipkart-price/pekpfcghlbljghaojdlajgpceebobokd?hl=en",
  },
  {
    name: "Social Sphere",
    description:
      "A full-stack social media application with user authentication, infinite scroll, and image and video uploads.",
    features: [
      "User authentication using JWT and OAuth providers.",
      "Infinite scroll for posts.",
      "Image and video uploads.",
      "Like, comment, and share posts.",
      "Follow and unfollow users.",
      "Dark mode support.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: socialSphere,
    source_code_link: "https://github.com/himanshu8443/SocialSphere",
    live_link: "https://socialspherex.vercel.app/",
  },
];

export { services, technologies, projects };
