import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Generates an animation of trees on the sides and branches falling.
 */
export default function FallingBranches() {
  const [branches, setBranches] = useState<{ id: number; isLeft: boolean }[]>([]);

  useEffect(() => {
    // Every 10 seconds, a branch breaks and falls
    const interval = setInterval(() => {
      setBranches((prev) => [
        ...prev,
        {
          id: Date.now(),
          isLeft: Math.random() > 0.5,
        },
      ]);
      
      // Clean up old branches to prevent DOM bloat
      setBranches((prev) => {
        if (prev.length > 3) return prev.slice(prev.length - 3);
        return prev;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {/* Ramas cayendo */}
      <AnimatePresence>
        {branches.map((branch) => (
          <motion.div
            key={branch.id}
            initial={{
              x: branch.isLeft ? "15vw" : "80vw",
              y: "15vh",
              rotate: branch.isLeft ? -30 : 30,
              opacity: 1,
            }}
            animate={{
              y: "120vh", // Cae hacia abajo del componente
              rotate: branch.isLeft ? 120 : -120, // Rota mientras cae
              opacity: [1, 1, 0],
              x: branch.isLeft ? "25vw" : "70vw", // Se desplaza un poco hacia el centro
            }}
            transition={{
              duration: 3, // Cae relativamente rápido (peso de la rama)
              ease: "easeIn",
            }}
            className="absolute"
          >
            {/* SVG de una rama rota */}
            <svg
              width="64"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[var(--charcoal)] drop-shadow-xl"
            >
              <path d="M12 22V8" />
              <path d="M12 16l6-6" />
              <path d="M12 12L6 6" />
              <path d="M12 8l4-4" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
