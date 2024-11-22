"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTeam } from "./TeamAimated";
export function Team() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Meet Our Team
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
      <div className='flex flex-row items-center justify-center mb-10 w-full'>
        <AnimatedTeam/>
        </div>
    </WavyBackground>
    </div>
        
  );
}
