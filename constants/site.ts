export const siteConfig = {
  name: "Prashan Prajapati",
  title: "Software Engineer | Full-Stack Developer",
  description:
    "Full-stack developer specializing in modern web and app technologies with expertise in React, React Native, Flutter, TypeScript, Express.js, Hono, MongoDB, PostgresSQL and Node.js",
  url: "https://johndoe.dev",
  ogImage: "https://johndoe.dev/og.jpg",
  links: {
    twitter: "https://x.com/pprashan_p",
    github: "https://github.com/Prashan57",
    linkedin: "https://www.linkedin.com/in/prashan-prajapati-b3a87a18b/",
    email: "officialprashan@gmail.com",
  },
  contact: {
    email: "officialprashan@gmail.com",
    phone: "+977 9860465706",
    location: "Bhaktapur, Nepal",
  },
} as const;

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
] as const;

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: "js", level: 90 },
      { name: "TypeScript", icon: "ts", level: 85 },
      { name: "React", icon: "react", level: 90 },
      { name: "Next.js", icon: "nextjs", level: 88 },
      { name: "Tailwind CSS", icon: "tailwind", level: 85 },
      { name: "HTML/CSS", icon: "html", level: 95 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs", level: 88 },
      { name: "Express", icon: "express", level: 85 },
      { name: "PostgreSQL", icon: "postgresql", level: 80 },
      { name: "MongoDB", icon: "mongodb", level: 80 },
      // { name: "GraphQL", icon: "graphql", level: 82 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: "git", level: 90 },
      { name: "Docker", icon: "docker", level: 75 },
      // { name: "AWS", icon: "aws", level: 70 },
      { name: "Figma", icon: "figma", level: 63 },
      // { name: "Jest", icon: "jest", level: 85 },
    ],
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration",
    image: "/projects/ecommerce.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    github: "https://github.com/johndoe/ecommerce",
    live: "https://ecommerce.johndoe.dev",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates",
    image: "/projects/taskapp.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com/johndoe/taskapp",
    live: "https://taskapp.johndoe.dev",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website with animations and dark mode",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/johndoe/portfolio",
    live: "https://johndoe.dev",
    featured: false,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A weather dashboard with real-time data and interactive charts",
    image: "/projects/weather.jpg",
    technologies: ["React", "Chart.js", "OpenWeather API", "TypeScript"],
    github: "https://github.com/johndoe/weather-dashboard",
    live: "https://weather.johndoe.dev",
    featured: false,
  },
] as const;

export const experience = [
  {
    id: 1,
    company: "TechCorp Inc.",
    position: "Senior Full-Stack Developer",
    duration: "2022 - Present",
    description:
      "Leading development of scalable web applications using React, Node.js, and cloud technologies",
    technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Frontend Developer",
    duration: "2020 - 2022",
    description:
      "Built responsive user interfaces and implemented modern frontend architectures",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    id: 3,
    company: "Digital Agency",
    position: "Junior Developer",
    duration: "2018 - 2020",
    description:
      "Developed client websites and learned modern web development practices",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
  },
] as const;

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO at TechCorp",
    content:
      "John is an exceptional developer who consistently delivers high-quality code and innovative solutions.",
    avatar: "/testimonials/sarah.jpg",
  },
  {
    id: 2,
    name: "Mike Chen",
    position: "Product Manager",
    content:
      "Working with John was a pleasure. His attention to detail and problem-solving skills are outstanding.",
    avatar: "/testimonials/mike.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    position: "Senior Developer",
    content:
      "John's expertise in TypeScript and React has been invaluable to our team's success.",
    avatar: "/testimonials/emily.jpg",
  },
] as const;

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Prashan57", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prashan-prajapati-b3a87a18b/",
    icon: "linkedin",
  },
  { name: "Twitter", url: "https://x.com/pprashan_p", icon: "twitter" },
  { name: "Email", url: "mailto:officialprashan@gmail.com", icon: "mail" },
] as const;
