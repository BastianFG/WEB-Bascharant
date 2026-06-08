import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Generates falling autumn leaves animation in the background.
 */
export default function FallingLeaves() {
  const [leaves, setLeaves] = useState<
    { id: number; left: number; delay: number; duration: number; size: number; rotation: number }[]
  >([]);

  useEffect(() => {
    // Generate some random leaves initially
    const newLeaves = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Random starting left position (percentage)
      delay: Math.random() * 5, // Random animation delay
      duration: 5 + Math.random() * 10, // Random fall duration (5-15s)
      size: 15 + Math.random() * 20, // Random size (15-35px)
      rotation: -180 + Math.random() * 360, // Initial random rotation
    }));

    setLeaves(newLeaves);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          initial={{
            x: `${leaf.left}vw`,
            y: "-10vh",
            rotate: leaf.rotation,
            opacity: 0,
          }}
          animate={{
            y: "110vh",
            rotate: leaf.rotation + (Math.random() > 0.5 ? 360 : -360),
            opacity: [0, 1, 1, 0],
            x: `${leaf.left + (Math.random() * 10 - 5)}vw`, // slight horizontal drift
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{ width: leaf.size, height: leaf.size }}
        >
          {/* Simple leaf SVG */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-md"
          >
            <path
              d="M12 2C7.5 2 4 7 4 12C4 16.5 7.5 22 12 22C16.5 22 20 16.5 20 12C20 7 16.5 2 12 2Z"
              fill={Math.random() > 0.5 ? "#d97706" : "#b45309"} // Amber/Brown autumn colors
              opacity="0.8"
            />
            <path d="M12 2V22" stroke="#78350f" strokeWidth="1" opacity="0.6" />
            <path d="M12 12L8 8" stroke="#78350f" strokeWidth="1" opacity="0.6" />
            <path d="M12 16L16 12" stroke="#78350f" strokeWidth="1" opacity="0.6" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
