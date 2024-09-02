import { HoverEffect } from "../ui/card-hover-effect";
import { PiFileCpp } from "react-icons/pi";
import { FaHtml5, FaReact, FaJava, FaPython } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill, RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostman, SiTypescript, SiOracle } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export default function TechStack() {
  return (
    (<div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: "HTML",
    icon: (
      <FaHtml5 className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "CSS",
    icon: (
      <IoLogoCss3 className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "JavaScript",
    icon: (
      <RiJavascriptFill className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "Node.js",
    icon: (
      <FaNodeJs className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "Express.js",
    icon: (
      <SiExpress className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "React.js",
    icon: (
      <FaReact className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "Next.js",
    icon: (
      <RiNextjsLine className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "MongoDB",
    icon: (
      <SiMongodb className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "PostgreSQL",
    icon: (
      <BiLogoPostgresql className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "C++",
    icon: (
      <PiFileCpp className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "Java",
    icon: (
      <FaJava className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "Python",
    icon: (
      <FaPython className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "Git",
    icon: (
      <FaGitAlt className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "Github",
    icon: (
      <FaGithub className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "Postman",
    icon: (
      <SiPostman className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "TypeScript",
    icon: (
      <SiTypescript className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "Oracle JET",
    icon: (
      <SiOracle className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "Tailwind CSS",
    icon: (
      <RiTailwindCssFill className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
    ),
  },
];
