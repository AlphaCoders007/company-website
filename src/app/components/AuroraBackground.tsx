"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { QueueWords } from "./Stackui";
// import QueueWords from "./Stackui";
export function AuroraBackgrounds() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center flex gap-2">
          {/* <p className="mt-4">What we do</p> */}
         <QueueWords/>
        </div>
      </motion.div>
         {/* <QueueWords/> */}
      
    </AuroraBackground>
  );
}