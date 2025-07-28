import { ReactNode } from "react";

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  avatar: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
    email: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
  };
}

export interface Theme {
  name: string;
  value: string;
}

export interface AnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  type?: "fade" | "slide" | "scale" | "rotate";
}

export interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  disabled?: boolean;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
}

export interface TimelineItemProps {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  technologies: string[];
  isLast?: boolean;
}

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export interface SkillCardProps {
  skill: Skill;
  className?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}
