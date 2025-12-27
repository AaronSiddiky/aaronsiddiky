"use client";
import React, { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  className?: string;
  typingSpeed?: number; // ms per character
  pauseDuration?: number; // ms to pause after finishing
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  className = "",
  typingSpeed = 40,
  pauseDuration = 5000,
}) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pause = setTimeout(() => {
        setDisplayed("");
        setIndex(0);
        setIsPaused(false);
      }, pauseDuration);
      return () => clearTimeout(pause);
    }
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((i) => i + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (index === text.length) {
      setIsPaused(true);
    }
  }, [index, isPaused, text, typingSpeed, pauseDuration]);

  return (
    <span className={className} aria-label={text}>
      {displayed}
      <span className="inline-block w-2 animate-pulse">|</span>
    </span>
  );
};

export default Typewriter; 