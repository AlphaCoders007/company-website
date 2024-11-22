"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Hero.module.css";

const FloatingIcons: React.FC = () => {
  const iconContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconContainerRef.current) {
      const icons = iconContainerRef.current.querySelectorAll(`.${styles.icon}`);

      // Animate each icon to float with rotation, 3D effect, and arc motion
      icons.forEach((icon, index) => {
        gsap.fromTo(
          icon,
          {
            y: -100, // Start just above the view
            x: gsap.utils.random(-200, 200), // Random horizontal starting point
            rotation: gsap.utils.random(-360, 360), // Random initial rotation
            opacity: 0,
            scale: 0.5, // Start with smaller size
          },
          {
            y: "100vh", // Fall to the bottom of the screen
            x: gsap.utils.random(-200, 200), // Random horizontal sway
            opacity: 1,
            scale: 1, // Return to normal size
            rotation: gsap.utils.random(-360, 360), // Random rotation for more dynamic movement
            repeat: -1, // Infinite loop
            delay: index * 0.3, // Staggered start time
            duration: gsap.utils.random(5, 8), // Randomized animation duration
            ease: "power1.inOut",
            yoyo: true, // Add yoyo effect for smooth back-and-forth animation
          }
        );
      });
    }
  }, []);

  return (
    <div className={styles.floatingIcons} ref={iconContainerRef}>
      <div className={`${styles.icon} ${styles.iconFigma}`}>F</div>
      <div className={`${styles.icon} ${styles.iconAi}`}>Ai</div>
      <div className={`${styles.icon} ${styles.iconPs}`}>Ps</div>
      <div className={`${styles.icon} ${styles.iconAe}`}>De</div>
    </div>
  );
};

export default FloatingIcons;