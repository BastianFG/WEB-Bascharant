import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Generates an animation of Chilean decorations for 18 de Septiembre.
 */
export default function FiestasPatrias() {
  const [decorations, setDecorations] = useState<{ id: number; isLeft: boolean; type: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDecorations((prev) => [
        ...prev,
        {
          id: Date.now(),
          isLeft: Math.random() > 0.5,
          type: Math.random() > 0.5 ? 0 : 2, // 0: Bandera, 2: Remolino
        },
      ]);
      
      setDecorations((prev) => {
        if (prev.length > 8) return prev.slice(prev.length - 8);
        return prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const renderIcon = (type: number) => {
    if (type === 0) {
      // Bandera (Simplified SVG)
      return (
        <svg width="40" height="30" viewBox="0 0 60 40" className="drop-shadow-md">
          <rect width="60" height="20" y="20" fill="#d52b1e" />
          <rect width="60" height="20" fill="#ffffff" />
          <rect width="20" height="20" fill="#0039a6" />
          <polygon points="10,3 12,8 17,8 13,11 15,16 10,13 5,16 7,11 3,8 8,8" fill="#ffffff" />
        </svg>
      );
    } else if (type === 1) {
      // Copihue (Simplified)
      return (
        <svg width="30" height="40" viewBox="0 0 24 36" fill="#d52b1e" className="drop-shadow-md">
          <path d="M12 2C6 10 2 18 6 30C8 36 16 36 18 30C22 18 18 10 12 2Z" />
          <path d="M10 2C10 0 14 0 14 2L13 6L11 6Z" fill="#2d5a27" />
        </svg>
      );
    } else {
      // Remolino
      return (
        <svg width="35" height="35" viewBox="0 0 40 40" className="drop-shadow-md">
          <path d="M20 20 L20 0 L40 0 Z" fill="#d52b1e" />
          <path d="M20 20 L40 20 L40 40 Z" fill="#ffffff" />
          <path d="M20 20 L20 40 L0 40 Z" fill="#0039a6" />
          <path d="M20 20 L0 20 L0 0 Z" fill="#ffffff" />
          <circle cx="20" cy="20" r="3" fill="#ffd700" />
        </svg>
      );
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      <AnimatePresence>
        {decorations.map((dec) => (
          <motion.div
            key={dec.id}
            initial={{
              x: dec.isLeft ? `${Math.random() * 40}vw` : `${60 + Math.random() * 30}vw`,
              y: "-10vh",
              rotate: Math.random() * 360,
              opacity: 0,
            }}
            animate={{
              y: "110vh",
              rotate: dec.isLeft ? 360 : -360,
              opacity: [0, 1, 1, 0],
              x: dec.isLeft ? `${10 + Math.random() * 30}vw` : `${50 + Math.random() * 30}vw`,
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              ease: "linear",
            }}
            className="absolute"
          >
            {renderIcon(dec.type)}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
