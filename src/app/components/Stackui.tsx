'use client'
import React, {useState } from 'react';
import { motion } from 'framer-motion';
import { TestRevealCard } from './TextReveal';
const gradientClass = 'bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text';
const words = [
  { text: "Build Application", className: `text-3xl sm:text-6xl px-3 ${gradientClass}` },
  { text: "Design And Develop", className: `text-3xl sm:text-6xl px-3 ${gradientClass}` },
  { text: "awesome", className: `text-5xl sm:text-7xl px-3  ${gradientClass}` },
  { text: "apps", className: `text-3xl sm:text-6xl px-3 ${gradientClass}` },
  { text: "Alhacoders.", className: `text-blue-500 dark:text-blue-500 text-5xl sm:text-7xl px-3 ${gradientClass}` },
];


const QueueWords = () => {
  const [currentWordIndex] = useState(0);

  return (
    <div className="flex justify-center items-center text-5xl sm:text-7xl">
      <motion.div
        key={currentWordIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} // Fade out
        transition={{ duration: 0.5 }} // Fade-in and fade-out duration
        className={`text-xl ${words[currentWordIndex].className || ""}`}
      >
        {words[currentWordIndex].text}
      </motion.div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-8">
       <div className="flex flex-row items-center space-x-4">
        <p className="text-8xl sm:text-7xl">We</p>
        <QueueWords />
      </div>
      <TestRevealCard/>
    </div>
  );
}
