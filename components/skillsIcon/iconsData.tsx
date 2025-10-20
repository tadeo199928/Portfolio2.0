import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDocker,
  SiMysql,
} from "react-icons/si";
import type { IconType } from "react-icons/lib";

export type Skill = {
  name: string;
  icon: IconType;
  color?: string;
};

export interface SkillIcons {
  name: string;
  icon: IconType;
  color?: string;
}

export const techStack: Skill[] = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "MySQL", icon: SiMysql, color: "#4169E1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
];
