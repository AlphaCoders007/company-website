"use client";
import React from "react";
import { TextRevealCard,TextRevealCardDescription,
    TextRevealCardTitle, } from "./ui/text-reveal-card";

export function TestRevealCard() {
  return (
    <div className="flex items-center justify-center  h-[20rem] rounded-2xl w-full py-8">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
        <TextRevealCardTitle>
        Application Design and Development
        STRATEGY  PLANNING  BUILDING 
        </TextRevealCardTitle>
        <TextRevealCardDescription>
        Reaching out to transform the business world into future technology. We help Start-ups, Entrepreneurs, Enterprises shape their business ideas into reality with the support of Next-Gen technology.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
