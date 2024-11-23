// src/ui/typewriter-effect.tsx
import React, { useEffect, useState } from "react";

interface TypewriterEffectProps {
  words: { text: string; className?: string }[];
}

export const TypewriterEffect = ({ words }: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 150;
  const deletingSpeed = 50;
  const delayBetweenWords = 1000;

  useEffect(() => {
    const word = words[currentWordIndex]?.text || "";
    let typingTimeout: NodeJS.Timeout;
    let deletingTimeout: NodeJS.Timeout;

    if (isTyping) {
      typingTimeout = setTimeout(() => {
        setCurrentText((prevText) => word.slice(0, prevText.length + 1));
        if (currentText.length === word.length) {
          setIsTyping(false);
        }
      }, typingSpeed);
    } else if (isDeleting) {
      deletingTimeout = setTimeout(() => {
        setCurrentText((prevText) => word.slice(0, prevText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setIsTyping(true);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }, deletingSpeed);
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(deletingTimeout);
    };
  }, [currentWordIndex, currentText, isTyping, isDeleting, words]);

  return (
    <span className="typewriter-effect">
      <span className={words[currentWordIndex]?.className}>{currentText}</span>
    </span>
  );
};