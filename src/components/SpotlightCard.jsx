import React, { useRef, useState } from "react";

export const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(45, 212, 191, 0.08)",
}) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-sm transition-all duration-200 hover:border-teal-500/30 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-200"
        style={{
          opacity,
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 75%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
