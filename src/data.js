import {
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import {
  SiExpress,
  SiFramer,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import project1 from "./assets/project-1.png";
import project2 from "./assets/project-2.png";
import project3 from "./assets/project-3.svg";
import certCloud from "./assets/certificates/cloud-computing.png";
import certAI from "./assets/certificates/generative-ai.png";
import certDSA from "./assets/certificates/dsa-internship.png";

export const PROFILE = {
  name: "Ayush Ranjan",
  title: "Full Stack Web Developer",
  tagline: "I build fast, accessible, and delightful web experiences.",
  objective:
    "Seeking software engineering opportunities where I can ship impactful products, learn fast, and contribute to a high-performing team.",
  intro:
    "I’m a developer who cares about clean UI, thoughtful UX, and reliable engineering. I enjoy turning complex problems into simple, elegant interfaces.",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/priyanshu-thakur1885",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/priyanshu-thakur-71a4652aa/",
      icon: FaLinkedin,
    },
    { label: "Email", href: "mailto:you@example.com", icon: null },
  ],
};

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  // { id: 'experience', label: 'Experience' },
  { id: "achievements", label: "Achievements" },
  { id: "certificates", label: "Certificates" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const SKILLS = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", icon: FaJs, level: 90 },
      { name: "TypeScript", icon: SiTypescript, level: 80 },
      { name: "Python", icon: FaPython, level: 75 },
      { name: "C++", icon: SiCplusplus, level: 65 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact, level: 90 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
      { name: "HTML", icon: FaHtml5, level: 90 },
      { name: "CSS", icon: FaCss3Alt, level: 85 },
      { name: "Framer Motion", icon: SiFramer, level: 75 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, level: 80 },
      { name: "Express", icon: SiExpress, level: 75 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, level: 70 },
      { name: "MongoDB", icon: SiMongodb, level: 70 },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", icon: FaGitAlt, level: 85 },
      { name: "GitHub", icon: FaGithub, level: 85 },
      { name: "Figma", icon: FaFigma, level: 60 },
      { name: "Framer Motion", icon: SiFramer, level: 75 },
    ],
  },
];

export const PROJECT_FILTERS = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "UI/UX",
];

export const PROJECTS = [
  {
    id: "p1",
    title: "Expense Tracker",
    description:
      "A responsive expense management dashboard that helps users track income and spending, visualize financial trends, and manage budgets with secure authentication and real-time data updates.",
    tags: ["Full Stack", "Frontend", "Backend"],
    tech: ["React", "Tailwind", "Node", "MongoDB"],
    github: "https://github.com/priyanshu-thakur1885/Expense-Tracker",
    demo: "https://expense-tracker-0ipq.onrender.com/",
    image: project1,
  },
  {
    id: "p2",
    title: "Travel Mate",
    description:
      "A responsive travel planning platform that helps users explore destinations, organize trips, and manage travel details through a clean and interactive interface with efficient data handling.",
    tags: ["Frontend", "UI/UX"],
    tech: ["React", "Tailwind", "Node", "MongoDB"],
    github: "https://github.com/priyanshu-thakur1885/Travel-Mate",
    demo: "https://example.com",
    image: project2,
  },
];

export const EDUCATION = [
  {
    title: "B.tech in Computer Science",
    place: "Lovely Professional University",
    year: "2023 — present",
    detail:
      "Relevant coursework: Data Structures, Algorithms, Databases, Web Engineering, Software Design, Operating Systems, Computer Networks, Computer Architecture, etc.",
  },
  {
    title: "Higher Secondary",
    place: "Aadharshila Sr Sec School, Palampur",
    year: "2022 — 2023",
    detail:
      "Completed 12th grade with Mathematics and Computer Science, developing strong analytical skills and early interest in programming and technology.",
  },
];

// export const EXPERIENCE = [
//   {
//     title: 'Software Engineering Intern',
//     place: 'Company Name',
//     year: 'Jun 2025 — Aug 2025',
//     detail:
//       'Built UI features, improved performance, and collaborated with designers/engineers to ship production changes.',
//   },
//   {
//     title: 'Freelance Frontend Developer',
//     place: 'Remote',
//     year: '2024 — Present',
//     detail:
//       'Delivered modern websites with responsive layouts, accessibility, and motion design for small businesses.',
//   },
// ]

export const ACHIEVEMENTS = [
  {
    title: "5 Star Rating",
    detail:
      "Earned 5-star rating in C++ on HackerRank for consistent coding performance.",
  },
  {
    title: "Top 5% on Coding Platform",
    detail: "Solved 200+ algorithmic problems with strong fundamentals.",
  },
  {
    title: "Open Source Contributor",
    detail:
      "Contributed bug fixes and documentation improvements to OSS projects.",
  },
  {
    title: "Dean’s List",
    detail: "Recognized for academic excellence across multiple semesters.",
  },
];

export const CERTIFICATES = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    year: "2025",
    link: "https://drive.google.com/file/d/1_3Z0u4RbJ7xqJWuBxTVBkyIcbA76RVvT/view?usp=sharing",
    image: certCloud,
  },
  {
    title: "Master Generative AI & Generative AI Tools",
    issuer: "Infosys",
    year: "2025",
    link: "https://drive.google.com/file/d/1ZegRoDrIZKBrR8c4H7-FYgyWrsvsi6ze/view",
    image: certAI,
  },
  {
    title: " Live Internship in Data Structures & Algorithms",
    issuer: "Techvanto Academy",
    year: "2025",
    link: "https://drive.google.com/file/d/1ywkZ62msm4_4lam_APTQ3Khkp96fX2JD/view?usp=drive_link",
    image: certDSA,
  },
];
