export const siteConfig = {
  name: "Prashan Prajapati",
  title: "Software Engineer",
  description:
    "Full-stack developer specializing in modern web and app technologies with expertise in React, React Native, Flutter, TypeScript, Express.js, Hono, MongoDB, PostgreSQL and Node.js",
  url: "https://prashan.dev",
  ogImage: "https://prashan.dev/og.jpg",
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

// export const myResume = "https://www.overleaf.com/download/project/678784d9b49d21bef5ccdb3a/build/19961809e15-80df8d5a42cc0ff7/output/output.pdf?compileGroup=standard&clsiserverid=clsi-reg-n2d-b-f-bnxs&enable_pdf_caching=true&popupDownload=true"
export const myResume = "/resume.pdf";

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
      { name: "PostgreSQL", icon: "postgresql", level: 68 },
      { name: "MongoDB", icon: "mongodb", level: 80 },
      // { name: "GraphQL", icon: "graphql", level: 82 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: "git", level: 90 },
      // { name: "Docker", icon: "docker", level: 75 },
      // { name: "AWS", icon: "aws", level: 70 },
      { name: "Figma", icon: "figma", level: 63 },
      { name: "Postman", icon: "postman", level: 63 },
      // { name: "Jest", icon: "jest", level: 85 },
    ],
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "EdEarn",
    description:
      " Crafted a real-time gaming platform enabling point redemption and subscription purchases through Khalti integration, enhancing user engagement and accessibility. This innovation aims to redefine the gaming landscape by combining entertainment, rewards, and convenience for users.",
    image: "/projects/ecommerce.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Khalti",
      "MongoDB",
      "Express",
      "Tailwind CSS",
    ],
    github: "https://github.com/Prashan57/EdEarn.git",
    live: "https://github.com/Prashan57/EdEarn.git",
    liveStatus: false,
    featured: true,
  },
  {
    id: 2,
    title: "Envision Nepal",
    description:
      " Designed a procurement website with a simplified user interface, prioritizing intuitive navigation. Leveraging modern web design principles, users can effortlessly navigate the platform for streamlined procurement processes.",
    image: "/projects/taskapp.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com/Prashan57/Envision-Nepal.git",
    live: "https://github.com/Prashan57/Envision-Nepal.git",
    liveStatus: false,
    featured: true,
  },
  {
    id: 3,
    title: "Chat App",
    description:
      "A modern, responsive portfolio website with animations and dark mode",
    image: "/projects/portfolio.jpg",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Socket.io",
      "Node.js",
      "Express",
    ],
    github: "https://github.com/Prashan57/Nodejs-Chat-App.git",
    live: "https://github.com/Prashan57/Nodejs-Chat-App.git",
    liveStatus: false,
    featured: false,
  },
  {
    id: 4,
    title: "PomoFocus",
    description:
      "A timer app which helps you get focus and rest in a systematic order.",
    image: "/projects/weather.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Prashan57/Pomodoro",
    live: "https://pomodorororo.netlify.app/",
    liveStatus: true,
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Template",
    description: "Simple portfolio template built with React and Tailwind CSS.",
    image: "/projects/weather.jpg",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/Prashan57/Homepage",
    live: "https://prashanprajapat.netlify.app/",
    liveStatus: true,
    featured: false,
  },
  {
    id: 6,
    title: "Portfolio Template 2",
    description:
      "A timer app which helps you get focus and rest in a systematic order.",
    image: "/projects/weather.jpg",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/Prashan57/prashanprajapati",
    live: "http://prashan.com.np/",
    liveStatus: true,
    featured: false,
  },
] as const;

export const experience = [
  {
    id: 1,
    company: "Acme IT",
    position: "Full-Stack Developer",
    duration: "Present",
    description:
      "Leading development of scalable web applications using React, Node.js, and cloud technologies",
    technologies: ["React", "Node.js", "Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: 2,
    company: "CAS Total Solution",
    position: "SQL + Frontend Developer",
    duration: "Dec 16 2024 - May 15 2025",
    description:
      "Built responsive user interfaces and implemented modern frontend architectures with optimized query and performance",
    technologies: ["SQL", "HTML", "CSS", "JavaScript", "Oracle Database"],
  },
  {
    id: 3,
    company: "Qwik IT Services",
    position: "Frontend Engineer",
    duration: "Nov 1 – Jan 1 2023",
    description:
      "Developed client websites and learned modern web development practices",
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express",
      "Django",
    ],
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
