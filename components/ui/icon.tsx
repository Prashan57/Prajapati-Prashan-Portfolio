"use client";

import { cn } from "@/lib/utils";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Eye,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sun,
  X,
  Quote,
  Send,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { ComponentProps } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFigma,
} from "react-icons/si";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  external: ExternalLink,
  eye: Eye,
  map: MapPin,
  menu: Menu,
  moon: Moon,
  phone: Phone,
  sun: Sun,
  x: X,
  quote: Quote,
  send: Send,
  download: Download,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
} as const;

export type IconName = keyof typeof iconMap;

type IconProps = {
  name: IconName;
  className?: string;
} & Omit<ComponentProps<typeof Github>, "className">;

export function Icon({ name, className, ...rest }: IconProps) {
  const Cmp = iconMap[name] ?? iconMap["external"];
  return <Cmp className={cn("h-4 w-4", className)} {...rest} />;
}

// Skill icon map for brand logos using react-icons
export const skillIconMap: Record<string, React.ComponentType<any>> = {
  js: SiJavascript,
  ts: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  html: SiHtml5,
  nodejs: SiNodedotjs,
  express: SiExpress,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  git: SiGit,
  docker: SiDocker,
  figma: SiFigma,
};


