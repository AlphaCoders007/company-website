"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SiReact, SiPython, SiNextdotjs, SiJavascript, SiNodedotjs, SiFlask, SiMongodb } from "react-icons/si";
import styles from "./Hero.module.css";

const FloatingIcons: React.FC = () => {
  const iconContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconContainerRef.current) {
      const icons = iconContainerRef.current.querySelectorAll(`.${styles.icon}`);

      icons.forEach((icon) => {
        const randomX = gsap.utils.random(-300, 300); // Random horizontal offset
        const randomY = gsap.utils.random(-100, -300); // Random vertical offset above the viewport

        gsap.timeline({ repeat: -1, repeatDelay: 1 })
          .set(icon, {
            x: `50%`, // Center horizontally by default
            y: `${randomY}vh`, // Start above the viewport randomly
            opacity: 0,
          })
          .to(icon, {
            x: `+=${randomX}`, // Drift to a random horizontal position
            y: "80vh", // Fall through the viewport but bounce before exiting
            rotation: gsap.utils.random(-45, 45), // Add random rotation for dynamics
            scale: 1, // Ensure consistent scale
            opacity: 1, // Fade in
            duration: gsap.utils.random(6, 8), // Increased duration for slower fall
            ease: "power2.out", // Smooth easing for slow fall
          })
          .to(icon, {
            y: "60vh", // Bounce upwards a bit
            duration: 1.5, // Increased bounce duration for smooth effect
            ease: "elastic.out(1, 0.4)", // Use elastic easing for natural bounce
            scale: 1.1, // Slightly increase size during bounce for emphasis
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", // Add shadow to emphasize bounce
          })
          .to(icon, {
            y: "80vh", // Fall back down after the bounce
            opacity: 1, // Ensure visibility
            duration: 1.5, // Longer fall duration for smoother effect
            ease: "power2.inOut", // Smooth easing for fall back down
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Soft shadow during fall
            scale: 1, // Return to original size
          })
          .to(icon, {
            y: "120vh", // Move out of the viewport (disappear)
            opacity: 0, // Fade out
            duration: 2, // Increased duration for smooth exit
            ease: "power2.in", // Smooth easing for disappearing
            scale: 0.9, // Shrink when disappearing
            boxShadow: "none", // Remove shadow while disappearing
          });
      });
    }
  }, []);

  return (
    <div className={styles.floatingIconsContainer} ref={iconContainerRef}>
      <div className={`${styles.icon} ${styles.iconReact}`}>
        <SiReact size={50} color="#61DAFB" />
      </div>
      <div className={`${styles.icon} ${styles.iconPython}`}>
        <SiPython size={50} color="#3776AB" />
      </div>
      <div className={`${styles.icon} ${styles.iconNextjs}`}>
        <SiNextdotjs size={50} color="#000000" />
      </div>
      <div className={`${styles.icon} ${styles.iconJavascript}`}>
        <SiJavascript size={50} color="#F7DF1E" />
      </div>
      <div className={`${styles.icon} ${styles.iconNodejs}`}>
        <SiNodedotjs size={50} color="#43853D" />
      </div>
      <div className={`${styles.icon} ${styles.iconFlask}`}>
        <SiFlask size={50} color="#000000" />
      </div>
      <div className={`${styles.icon} ${styles.iconMongodb}`}>
        <SiMongodb size={50} color="#47A248" />
      </div>
    </div>
  );
};

export default FloatingIcons;