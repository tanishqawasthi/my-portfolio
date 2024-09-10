"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export default function About() {
  return (
    (<HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-sm px-4 md:text-base lg:text-2xl text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
        I’m a Software Developer from India with a solid foundation in Full-Stack Development and a continuous drive to learn. I completed my B.Tech from <span className="font-bold">IIIT Sri City</span> in Computer Science & Engineering. My experience spans various disciplines, including {" "}
        <Highlight className="text-black dark:text-white">
        front-end, back-end, web scraping, and prompt engineering.
        </Highlight>
        &nbsp;I also led the GDSC Design Team during my time in college. As I’ve recently entered the software development market, I’m eager to collaborate with like-minded individuals to deliver impactful solutions that help others and contribute to my growth.
      </motion.h1>
    </HeroHighlight>)
  );
}
