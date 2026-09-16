export const NAV_LINKS = ["Home", "About", "Projects", "Skills", "Contact"];
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiGit,
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa6";

export const socials = [
  { label: "GitHub",   href: "https://github.com/Sameer-azm",      icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sameer-azam-4b7299356/", icon: FaLinkedin },
  { label: "Email",    href: "sameerazamned@gmail.com",               icon: FaEnvelope },
{ label: "WhatsApp", href: "https://wa.me/923152452680",  icon: FaWhatsapp },
];

export const PROJECTS = [
  {
title: "Padel-APP-client",
desc: "Full-Stack Padel Court Booking & Management System",
tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Brevo", "Tailwind CSS"],
textcolor: "text-[#00d5d4]",
icon: "",
link: "https://padel-client.vercel.app/",
repo: "https://github.com/Sameer-azm/padel-management/tree/main/client",
},

{
title: "Padel-APP-admin",
desc: "Admin Management Dashboard for Padel Court Booking System",
tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Brevo", "Tailwind CSS"],
textcolor: "text-[#ff6b6b]",
icon: "",
link: "https://admin-padel-two.vercel.app/",
repo: "https://github.com/Sameer-azm/padel-management/tree/main/admin",
},
  {
    title: "Shopee <Fullstack/>",
    desc:  "Full-stack e-commerce platform with real-time inventory, Stripe payments, JWT auth, and admin dashboard.",
    tags:  ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    textcolor: "text-[#00f5d4]",
    icon:  "🛒",
    link:  "https://ecommerce-xon1.vercel.app/",
    repo:  "https://github.com/Sameer-azm/ecommerce-platform",
  },
  {
    title: "Agency.ai",
    desc:  "A modern digital agency website showcasing web development, mobile apps, UI/UX design, digital marketing, and creative digital solutions",
    tags:  ["Next.js", "Socket.io", "MongoDB", "TailwindCSS"],
    textcolor: "text-[#f5a623]",
    icon:  "💻",
    link:  "https://agencybysameer.netlify.app/",
    repo:  "https://github.com/Sameer-azm/Agency-website",
  },
  {
    title: "Real-Time Dual-Device Location Tracker",
    desc:  "A web application built to track and visually pinpoint the live geographic positions of two connected devices simultaneously on an interactive map.",
    tags:  ["Node.js", "Express.js", "Socket.IO", "Web Geolocation API", "CSS3"],
    textcolor: "text-[#bd5fff]",
    bordercolor  :"bg-[#bd5fff]",
    icon:  "📍",
    link:  "https://github.com/Sameer-azm/RealTimeDeviceTrack.git",
    repo:  "https://github.com/Sameer-azm/RealTimeDeviceTrack.git",
  },
  {
title: "Full-Stack Social Post Application",

desc: "A full-stack web application that allows users to create posts with images and captions, upload media, and view published posts through a responsive feed.",

tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Multer", "Axios"],

textcolor: "text-[#ff6b6b]",

bordercolor: "bg-[#ff6b6b]",

icon: "📝",

link: "https://post-app-x18n-23y2lrnz1-sameerazamned-9015s-projects.vercel.app/",

repo: "https://github.com/Sameer-azm/post-app/tree/main",
},

  // {
  //   title: "Notes-APP",
  //     desc:  "A sleek and intuitive note-taking application that allows users to create, edit, and organize their notes seamlessly. Built with a focus on user experience and performance.",
  //   tags:  ["Next.js", "React", "Node.js", "TailwindCSS"],
  //   textcolor: "text-[#ff6b6b]",
  //   icon:  "📋",
  //   link:  "https://notesappbysame.netlify.app/",
  //   repo:  "https://github.com/Sameer-azm/Notes-app",
  // },
  {
    title: "30 Days JavaScript Projects",
      desc:  "A collection of  practical JavaScript projects to enhance skills and build a strong foundation in the language.",
    tags:  ["JavaScript", "HTML", "CSS"],
    textcolor: "text-[#ff6b6b]",
    icon:  "📈",
    link:  "https://notesappbysame.netlify.app/",
    repo:  "https://github.com/Sameer-azm/30-days-js-projects/tree/main",
  },
];

export const SKILLS = [
  { name: "React.js",       level: 92, cat: "Frontend" },
  { name: "Next.js",        level: 88, cat: "Frontend" },
  { name: "TailwindCSS",    level: 90, cat: "Frontend" },
  { name: "JavaScript",     level: 93, cat: "Frontend" },
  { name: "TypeScript",     level: 80, cat: "Frontend" },
  { name: "Node.js",        level: 89, cat: "Backend"  },
  { name: "Express.js",     level: 87, cat: "Backend"  },
  { name: "MongoDB",        level: 85, cat: "Backend"  },
  { name: "REST APIs",      level: 91, cat: "Backend"  },
  { name: "Socket.io",      level: 78, cat: "Backend"  },
  { name: "Git & GitHub",   level: 88, cat: "Tools"    },
  { name: "Docker",         level: 70, cat: "Tools"    },
  { name: "Postman",        level: 85, cat: "Tools"    },
  { name: "Vercel/Netlify", level: 82, cat: "Tools"    },
];


export const TECH_ICONS = [
  { label: "React",      icon: SiReact },
  { label: "Next.js",    icon: SiNextdotjs },
  { label: "Node.js",    icon: SiNodedotjs },
  { label: "MongoDB",    icon: SiMongodb },
  { label: "Express",    icon: SiExpress },
  { label: "Tailwind",   icon: SiTailwindcss },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Git",        icon: SiGit },
];

export const CUBE_FACES = [
  { key: "front",  label: "React",    color: "#61dafb" },
  { key: "back",   label: "Node.js",  color: "#68a063" },
  { key: "left",   label: "Express",  color: "#ffffff" },
  { key: "right",  label: "HTML",     color: "#e34f26" },
  { key: "top",    label: "Tailwind", color: "#38bdf8" },
  { key: "bottom", label: "MongoDB",  color: "#47a248" },
];

export const PERSONAL_INFO = {
  name:      "Sam",
  location:  "Karachi, Pakistan",
  degree:    "CS Graduate",
  work:      "Freelance & Remote",
  languages: "English / Urdu",
  email:     "sameerazamku@email.com",  // 👈 replace
  linkedin:  "https://www.linkedin.com/in/sameer-azam-4b7299356/",              // 👈 replace
  github:    "https://github.com/Sameer-azm",              // 👈 replace
  whatsapp:  "https://wa.me/923152452680",              // 👈 replace
  bio1: "I'm Sam, a passionate MERN stack developer based in Karachi. I specialize in building scalable, high-performance web applications with clean, maintainable code.",
  bio2: "From dynamic React frontends to robust Node/Express APIs and MongoDB schemas — I own the full stack. I'm obsessed with developer experience, performance, and design.",
};
