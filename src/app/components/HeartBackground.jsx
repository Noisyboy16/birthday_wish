"use client";

import React, { useMemo } from "react";

export default function HeartBackground() {
  const hearts = useMemo(() => {
    return Array.from({ length: 1000 }).map(() => {
      const size = 12 + Math.random() * 10;
      const left = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = 8 + Math.random() * 5;
      const opacity = 1 + Math.random() * 1;

      return {
        size,
        left,
        delay,
        duration,
        opacity,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart, i) => (
        <div
          key={i}
          className="absolute bg-red-800"
          style={{
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            left: `${heart.left}%`,
            bottom: "-40px",
            animation: `floatingHeart ${heart.duration}s linear ${heart.delay}s infinite`,
            opacity: heart.opacity,
            clipPath:
              "path('M10 30 C10 10, 40 10, 40 30 C40 50, 10 50, 10 30 Z')",
            transform: "rotate(45deg)",
          }}
        />
      ))}

      <style>
        {`
          @keyframes floatingHeart {
            0% {
              transform: translateY(0) rotate(45deg) scale(1);
              opacity: 0.6;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateY(-100vh) rotate(45deg) scale(1.2);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}