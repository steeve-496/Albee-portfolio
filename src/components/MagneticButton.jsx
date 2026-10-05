import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const MagneticButton = ({
  children,
  className = "",
  onClick,
  distance = 0.25,
  ...props
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Only apply magnetic pull on devices that support hover (pointers)
    if (window.matchMedia("(hover: none)").matches) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * distance, y: middleY * distance });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", damping: 15, stiffness: 150, mass: 0.1 }}
      className="inline-block touch-manipulation"
    >
      <button
        onClick={onClick}
        className={`relative inline-flex items-center justify-center rounded-xl transition-all duration-200 cursor-pointer ${className}`}
        {...props}
      >
        {children}
      </button>
    </motion.div>
  );
};
