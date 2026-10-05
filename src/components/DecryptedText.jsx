import React, { useEffect, useState, useRef } from "react";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export const DecryptedText = ({
  text,
  speed = 40,
  maxIterations = 10,
  className = "",
  animateOn = "hover", // 'view' or 'hover'
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const startScramble = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 2;
    }, speed);
  };

  useEffect(() => {
    if (animateOn === "view") {
      startScramble();
    }
  }, []);

  return (
    <span
      className={`inline-block font-mono cursor-pointer transition-colors ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
        startScramble();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText}
    </span>
  );
};
