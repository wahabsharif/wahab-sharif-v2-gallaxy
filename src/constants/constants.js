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

  // === Projects
  allyAssistance,
  beaconTechh,
  castleMarketing,
  wahabSharifPortfolioVsCode,
  aeonMarketing,
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
  // == Ally Assistance
  {
    name: "Ally Assistance",
    description:
      '"Ally Assistance, my latest project, embodies the fusion of innovation and personalized service, marking the pinnacle of my passion for redefining travel experiences."',
    tags: [
      {
        name: "NextJs",
        color: "black-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: allyAssistance,
    source_code_link: "https://github.com/wahabsharif/ally-assistance",
    live_link: "https://ally-assistance.vercel.app/",
  },

  // == Beacon Techh
  {
    name: "Beacon Techh",
    description:
      '"Beacon Tech: Illuminating brands in the digital era with innovative solutions, creative flair, and strategic expertise, guiding businesses through web and app development to digital marketing success."',
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: beaconTechh,
    source_code_link: "https://github.com/wahabsharif/beacontech-react-1.0",
    live_link: "https://beacontech-react.vercel.app/",
  },

  // == Castle Marketing
  {
    name: "Castle Marketing",
    description:
      '"Castle Marketing: Your trusted partner in Pakistans real estate prioritizing investor security client satisfaction and dream achievement."',
    tags: [
      {
        name: "NextJs",
        color: "Black-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: castleMarketing,
    source_code_link:
      "https://github.com/wahabsharif/castle-marketing-next-1.0",
    live_link: "https://www.castlemarketing.pk/",
  },

  // == Wahab Sharif Portfolio Vs Code Version
  {
    name: "Wahab Sharif Portfolio VS Code Version",
    description: '"My personal portfolio in Vs Code Version."',
    tags: [
      {
        name: "NextJs",
        color: "black-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: wahabSharifPortfolioVsCode,
    source_code_link: "https://github.com/wahabsharif/wahab-sharif-portfolio",
    live_link: "https://wahab-sharif-portfolio.vercel.app/",
  },

  // == Aeon Marketing
  {
    name: "Aeon Marketing",
    description:
      '"Aeon Marketing: Is a Pakistan Based real estate comapny who deals in Societies and Commercial Projects."',
    tags: [
      {
        name: "NextJs",
        color: "black-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "Php",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: aeonMarketing,
    source_code_link:
      "https://github.com/wahabsharif/Aeon-Marketing-Next-js-1.0",
    live_link: "https://www.aeonmarketing.com.pk/",
  },
];

export { services, technologies, projects };
