import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Generates an animation of falling sunflowers for the Spring season.
 */
export default function Primavera() {
  const [decorations, setDecorations] = useState<{ 
    id: number; 
    isLeft: boolean; 
    type: number;
    startX: number;
    midX: number;
    endX: number;
  }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const isLeft = Math.random() > 0.5;
      const type = Math.floor(Math.random() * 5); // 0: Sunflower, 1: Blue Butterfly, 2: Pink Butterfly, 3: Orange Butterfly, 4: Bee
      
      const startX = isLeft ? Math.random() * 40 : 60 + Math.random() * 30;
      const midX = isLeft ? 15 + Math.random() * 25 : 35 + Math.random() * 25;
      const endX = isLeft ? Math.random() * 30 : 50 + Math.random() * 30;

      setDecorations((prev) => [
        ...prev,
        {
          id: Date.now(),
          isLeft,
          type,
          startX,
          midX,
          endX,
        },
      ]);
      
      setDecorations((prev) => {
        if (prev.length > 15) return prev.slice(prev.length - 15);
        return prev;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const renderSunflower = () => (
    <svg width="45" height="45" viewBox="0 0 60 60" className="drop-shadow-lg">
      {/* Petals */}
      <path d="M30 5 C35 15, 35 25, 30 30 C25 25, 25 15, 30 5 Z" fill="#FCD34D" transform="rotate(0 30 30)" />
      <path d="M30 5 C35 15, 35 25, 30 30 C25 25, 25 15, 30 5 Z" fill="#FCD34D" transform="rotate(45 30 30)" />
      <path d="M30 5 C35 15, 35 25, 30 30 C25 25, 25 15, 30 5 Z" fill="#FCD34D" transform="rotate(90 30 30)" />
      <path d="M30 5 C35 15, 35 25, 30 30 C25 25, 25 15, 30 5 Z" fill="#FCD34D" transform="rotate(135 30 30)" />
      <path d="M30 5 C35 15, 35 25, 30 30 C25 25, 25 15, 30 5 Z" fill="#FCD34D" transform="rotate(180 30 30)" />
      <path d="M30 5 C35 15, 35 25, 30 30 C25 25, 25 15, 30 5 Z" fill="#FCD34D" transform="rotate(225 30 30)" />
      <path d="M30 5 C35 15, 35 25, 30 30 C25 25, 25 15, 30 5 Z" fill="#FCD34D" transform="rotate(270 30 30)" />
      <path d="M30 5 C35 15, 35 25, 30 30 C25 25, 25 15, 30 5 Z" fill="#FCD34D" transform="rotate(315 30 30)" />
      {/* Center */}
      <circle cx="30" cy="30" r="10" fill="#78350F" />
      <circle cx="30" cy="30" r="8" fill="#451A03" />
    </svg>
  );

  const renderButterfly = (color1: string, color2: string) => (
    <svg width="28" height="28" viewBox="0 0 64 64" className="drop-shadow-md">
      {/* Upper Wings */}
      <path d="M 32 32 C 10 0, 0 10, 10 32 Z" fill={color1} />
      <path d="M 32 32 C 54 0, 64 10, 54 32 Z" fill={color1} />
      {/* Lower Wings */}
      <path d="M 32 32 C 10 64, 0 54, 20 40 Z" fill={color2} />
      <path d="M 32 32 C 54 64, 64 54, 44 40 Z" fill={color2} />
      {/* Body */}
      <rect x="30" y="15" width="4" height="34" rx="2" fill="#333" />
      {/* Antennae */}
      <path d="M 31 15 C 28 5, 20 5, 25 10" stroke="#333" strokeWidth="2" fill="none" />
      <path d="M 33 15 C 36 5, 44 5, 39 10" stroke="#333" strokeWidth="2" fill="none" />
    </svg>
  );

  const renderBee = () => (
    <svg width="24" height="24" viewBox="0 0 40 40" className="drop-shadow-md">
      {/* Wings */}
      <ellipse cx="15" cy="10" rx="6" ry="10" fill="#E2E8F0" opacity="0.9" transform="rotate(-30 15 10)" />
      <ellipse cx="25" cy="10" rx="6" ry="10" fill="#E2E8F0" opacity="0.9" transform="rotate(30 25 10)" />
      {/* Body */}
      <rect x="10" y="15" width="20" height="14" rx="7" fill="#FBBF24" />
      {/* Stripes */}
      <rect x="14" y="15" width="3" height="14" fill="#1F2937" />
      <rect x="20" y="15" width="3" height="14" fill="#1F2937" />
      <rect x="26" y="15" width="3" height="14" fill="#1F2937" />
      {/* Head */}
      <circle cx="9" cy="22" r="5" fill="#1F2937" />
      {/* Stinger */}
      <polygon points="30,20 34,22 30,24" fill="#1F2937" />
    </svg>
  );

  const renderDecoration = (type: number) => {
    switch (type) {
      case 0: return renderSunflower();
      case 1: return renderButterfly("#60A5FA", "#3B82F6"); // Blue
      case 2: return renderButterfly("#F472B6", "#EC4899"); // Pink
      case 3: return renderButterfly("#FB923C", "#F97316"); // Orange
      case 4: return renderBee(); // Bee
      default: return renderSunflower();
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      <AnimatePresence>
        {decorations.map((dec) => (
          <motion.div
            key={dec.id}
            initial={{
              x: `${dec.startX}vw`,
              y: "-10vh",
              rotate: Math.random() * 360,
              opacity: 0,
            }}
            animate={
              dec.type === 0
                ? {
                    y: "110vh",
                    rotate: dec.isLeft ? 360 : -360,
                    opacity: [0, 1, 1, 0],
                    x: `${dec.endX}vw`,
                  }
                : {
                    y: "110vh",
                    rotate: dec.isLeft ? [15, -15, 15] : [-15, 15, -15],
                    scaleX: dec.type === 4 ? [1, 0.8, 1] : [1, 0.3, 1], // Bees scale less, butterflies flap fully
                    opacity: [0, 1, 1, 0],
                    x: [`${dec.startX}vw`, `${dec.midX}vw`, `${dec.endX}vw`],
                  }
            }
            transition={
              dec.type === 0
                ? {
                    duration: 12 + Math.random() * 5,
                    ease: "linear",
                  }
                : {
                    duration: 15 + Math.random() * 8, // Much slower fall for bugs
                    ease: "easeInOut",
                    scaleX: {
                      repeat: Infinity,
                      duration: dec.type === 4 ? 0.05 : 0.2 + Math.random() * 0.1, // Bees buzz very fast, butterflies flap relaxed
                      ease: "easeInOut",
                    },
                    rotate: {
                      repeat: Infinity,
                      duration: 3 + Math.random() * 2, // Slower, wider swaying
                      ease: "easeInOut",
                    },
                  }
            }
            className="absolute"
          >
            {renderDecoration(dec.type)}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
