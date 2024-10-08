import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import ResumeButton from "./ResumeButton";

export default function Hero() {
  return (
    (<BackgroundBeamsWithCollision>

      <h2
        className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight mt-20">
        Hi <span className="inline-block animate-wave transform origin-bottom-right">👋</span> I&#39;m Tanishq{" "}, a <br/>
        <div
          className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div
            className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4 ">
            <span className="">Full Stack Web Developer</span>
          </div>
          <div className="w-[50rem] h-5 relative mx-auto">
            {/* Gradients */}
            <div
            className="absolute inset-x-24 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div
            className="absolute inset-x-24 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div
              className="absolute inset-x-80 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div
              className="absolute inset-x-80 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
          <div className="flex justify-center font-thin text-lg">
            <ResumeButton/>
          </div>
        </div>
      <div className="flex justify-center mt-8 font-thin">
        <MdKeyboardDoubleArrowDown className="inline-block animate-updown"/>
      </div>
    </h2>
    </BackgroundBeamsWithCollision>)
  );
}
