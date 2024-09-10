"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return(
    <div className="mx-16 mt-8">
      <h2 className="flex justify-center text-4xl font-bold">My Projects</h2>
    <div className="md:grid md:grid-cols-2">
      {data.map((item, index) => {
        return(
          <ThreeDCardDemo key={index} item={item} />
        )
      })}
    </div>
    </div>
  )
}

function ThreeDCardDemo({item}) {
  const {name, description, image, content, link, github} = item
  return (
    (<CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {content}
        </CardItem>
        <div className="flex justify-between items-center mt-8">
        {link && (
  <CardItem
    translateZ={20}
    as={Link}
    href={link}
    target="__blank"
    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
    <FaExternalLinkAlt />
  </CardItem>
)}
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            <FaGithub/>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>)
  );
}

const data = [
  {
    name: 'PetSanctum',
    description: 'A pet Adoption Website',
    image: '/PetSanctum.png',
    content: "A free-commerce platform for pet adoption, rescue, and donation, facilitating a seamless user experience for pet lovers and organizations.",
    link: 'https://stellular-lamington-287e44.netlify.app/',
    github: 'https://github.com/TejasParse/pet-sanctum-react'
  },
  {
    name: 'InterviewAI',
    description: 'AI Based Mock Interview Platform',
    image: '/interview.png',
    content: "A platform where users input job descriptions and generate tailored interview questions, record video responses, and evaluate answers using AI.",
    github: 'https://github.com/tanishqawasthi/ai-mock-interview'
  },
  {
    name: 'SketchBook',
    description: 'A collaborative sketchbook',
    image: '/sketchbook.png',
    content: "A drawing application enabling users to collaboratively create and share sketches in real time on HTML5 Canvas using Socket.io.",
    github: 'https://github.com/tanishqawasthi/sketchbook-client',
    link: 'https://sketchbook-client.vercel.app/'
  },
  {
    name: 'Imagify',
    description: 'Generate Images from Text Prompts',
    image: '/imagify.png',
    content: "A website for generating high-quality images from text prompts, accompanied by an engaging community section that empowers users to share their creative outputs.",
    github: 'https://github.com/tanishqawasthi/imagify'
  },
]