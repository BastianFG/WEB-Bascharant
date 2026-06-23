import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Generates falling rain animation in the background.
 */
export default function FallingRain() {
  const [raindrops, setRaindrops] = useState<
    { id: number; left: number; delay: number; duration: number; height: number; opacity: number }[]
  >([]);

  useEffect(() => {
    // Generate some random raindrops initially
    const newRaindrops = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Random starting left position (percentage)
      delay: Math.random() * 2, // Random animation delay
      duration: 1.5 + Math.random() * 1.5, // Random fall duration (slower for a softer look)
      height: 15 + Math.random() * 20, // Random height (15-35px)
      opacity: 0.4 + Math.random() * 0.4, // Random opacity (increased so it's visible)
    }));

    setRaindrops(newRaindrops);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {raindrops.map((drop) => (
        <motion.div
          key={drop.id}
          initial={{
            x: `${drop.left}vw`,
            y: "-10vh",
            opacity: 0,
          }}
          animate={{
            y: "110vh",
            opacity: [0, drop.opacity, drop.opacity, 0],
            x: `${drop.left - (Math.random() * 2 + 1)}vw`, // slight diagonal drift due to wind
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bg-gradient-to-b from-transparent to-blue-300/80 drop-shadow-sm rounded-full"
          style={{ width: "2px", height: drop.height, transform: "rotate(10deg)" }}
        />
      ))}
    </div>
  );
}
