"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import FloatingIcons from "./FloatingIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const heroElement = heroRef.current;
    const buttonElement = buttonRef.current;

    if (heroElement && buttonElement) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroElement,
          start: "top top", // Animation starts when Hero enters viewport
          end: "bottom top", // Ends when Hero leaves viewport
          scrub: true, // Smooth animation on scroll
          pin: true, // Pin the Hero section during the animation
          pinSpacing: false, // No extra space after pinning
        },
      });

      // Button animation sequence
      timeline
        .fromTo(
          buttonElement,
          {
            width: "120px", // Initial size
            height: "50px",
            borderRadius: "30px",
            backgroundColor: "#c3195d",
          },
          {
            width: "50vw", // Midway size
            height: "50vh",
            borderRadius: "10px",
            backgroundColor: "#ff7eb9",
            duration: 1.5,
            ease: "power3.inOut", // Smooth acceleration and deceleration
          }
        )
        .to(buttonElement, {
          width: "100vw", // Full-screen button
          height: "100vh",
          borderRadius: "0",
          backgroundColor: "#000", // Transition to a darker background
          duration: 2,
          ease: "power2.out",
        });
    }
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          <span>STRATEGY PLANNING BUILDING</span>
        </h1>
        <h2 className={styles.heading}>
          <span>Application Design and Development</span>
        </h2>
        <p className={styles.subtext}>
          Reaching out to transform the business world into future technology.
        </p>
      </div>

      <div className={styles.floatingIconsContainer}>
        <FloatingIcons />
      </div>

      <button
        ref={buttonRef}
        className={styles.cta}
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          overflow: "hidden", // Hide overflow for video
        }}
      >
        {/* Video Layer */}
        <video
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </button>
    </section>
  );
};

export default Hero;