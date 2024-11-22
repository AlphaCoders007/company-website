"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import styles from "./Hero.module.css";
import FloatingIcons from "./FloatingIcons";

const Hero: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 500;
      const progress = Math.min(100, (scrollPosition / maxScroll) * 100);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.floatingIconsContainer}>
        <FloatingIcons />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          <span>STRATEGY PLANNING BUILDING</span>
          <h1>
            <span>Application Design and Development</span>
          </h1>
        </h1>

        <p className={styles.subtext}>
          Reaching out to transform the business world into future technology.
        </p>

        {/* Framer Motion Button */}
        <motion.button
          className={styles.cta}
          style={{
            width: `calc(100vw * ${scrollProgress / 100})`, // Dynamic width
            height: `calc(100vh * ${scrollProgress / 100})`, // Dynamic height
          }}
          animate={{
            width: `calc(100vw * ${scrollProgress / 100})`,
            height: `calc(100vh * ${scrollProgress / 100})`,
            scale: 1 + scrollProgress / 100, // Optional scaling
          }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <span className={styles.videoWrapper}>
            <video
              className={styles.video}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/path/to/your/video.mp4" type="video/mp4" />
            </video>
          </span>
          Let's Get Started!
          <span className={styles.arrow}>→</span>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;