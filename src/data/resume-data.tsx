import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

// Profile Image
import me from "../images/me/reec.jpg";

export const RESUME_DATA = {
  name: "Reece Anderson",
  initials: "RA",
  location: "Kutztown University, Kutztown, Pennsylvania (US)",
  locationLink: "https://www.kutztown.edu",
  about:
    "IT student passionate about computing security and systems administration.",
  summary:
    "Motivated sophomore at Kutztown University working towards my B.S. in Information Technology. As a student, I am eager to expand my knowledge and gain valuable professional experience. My latest project is experimenting with homelab technology to learn how server networking and virtualization can be applied to my future career in the IT field. As I navigate my academic journey, I am excited to bridge the gap between theory and practice, turning my passion for technology into a driving force for positive change.",
    
  avatarUrl: "https://avatars.githubusercontent.com/u/55410535?s=400&u=7117faa8bf5c513082e64bf696e1c33dd921b1d9&v=4",
  personalWebsiteUrl: "https://reeceanderson.net",
  contact: {
    email: "myself@reeceanderson.net",
    tel: "4849342200",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/reeceanderson",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/reeceandersonn/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Kutztown University of Pennsylvania",
      degree: (
          <>
            B.S. Information Technology <br />
            Cybersecurity Certificate <br />
            3.19 GPA
          </>
      ),
      start: "August 2022",
      end: "Present",
    },
    {
      school: "Bethlehem Area Vocational Technical School",
      degree: (
          <>
            Website Design and Development Program
          </>
      ),
      start: "August 2019",
      end: "May 2022",
    },
    {
      school: "Northampton Area High School",
      degree: (
          <>
            General Education <br />
            3.89 GPA
          </>
      ),
      start: "August 2018",
      end: "May 2022",
    },
  ],
  work: [
    {
      company: "Bethlehem Area Vocational Technical School",
      link: "https://bethlehemavts.org",
      badges: [],
      title: "Information Technology Intern",
      logo: "",
      start: "May 2022",
      end: "August 2022",
      description:
          "Worked alongside full-time IT staff for the summer to deploy and provision new devices for student and staff use, log inventory of existing classroom technology, and maintain ethernet network in the building.",
    },
    {
      company: "Enterprise Mobility",
      link: "https://www.enterprise.com/en/home.html",
      badges: [],
      title: "Automotive Detailer",
      logo: "",
      start: "June 2023",
      end: "Present",
      description:
          "Strive to provide a superior cleaning standard and quality customer service while detailing fleet vehicles and delivering customers to and from rental locations. This position has enhanced my time-management and customer service skills through an often autonomous workload given to me by management.",
    },
  ],
  techSkills: [
    "JavaScript",
    "HTML",
    "CSS",
    "PHP",
    "MySQL",
    "React/Next.js",
    "Node.js",
    "Python",
    "C++",
    "Windows",
    "Linux",
    "Bash & Shell Scripting",
  ],
  proSkills: [
    "Time Management",
    "Customer Service",
    "Inventory Management",
    "Collaboration",
    "Organization",
    "Communication",
    "Adaptability",
  ],

  honors: [
    {
      organization: "National Society for Leadership & Success",
      status: "Inducted Current Member",
      joinDate: "February 2023",
    },
    {
      organization: "National Technical Honors Society",
      status: "Alumni Member",
      joinDate: "March 2020",
    },
    {
      organization: "SkillsUSA",
      status: "Bronze Medalist in District Competition for Web Development",
      joinDate: "September 2019",
    },
    {
      organization: "Boy Scouts of America",
      status: "Eagle Scout",
      joinDate: "February 2021",
    },
  ],

  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;