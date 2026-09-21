import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

/**
 * Mariposa que vuela de forma aleatoria dentro del contenedor.
 * Usa la misma lógica de "flyRandomly" que el Hummingbird, pero con
 * un SVG de mariposa y una animación de aleteo ligera.
 */
export default function Butterfly() {
  const controls = useAnimation();
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const posRef = useRef({ x: -100, y: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sizeRef = useRef(30 + Math.random() * 20); // 30‑50 px

  // Detectar cambios de tamaño del contenedor
  useEffect(() => {
    if (!wrapperRef.current) return;
    setContainerSize({
      width: wrapperRef.current.offsetWidth,
      height: wrapperRef.current.offsetHeight,
    });

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  // Movimiento aleatorio continuo
  useEffect(() => {
    if (containerSize.width === 0) return;
    posRef.current = { x: -100, y: containerSize.height / 3 };
    let mounted = true;

    const flyRandomly = async () => {
      // Entrada inicial aleatoria
      const startX = containerSize.width * (0.05 + Math.random() * 0.25);
      const startY = containerSize.height * (0.1 + Math.random() * 0.5);
      await controls.start({
        x: startX,
        y: startY,
        scaleX: 1,
        transition: { duration: 2 + Math.random() * 2, ease: "easeOut" },
      });
      posRef.current = { x: startX, y: startY };

      while (mounted) {
        // Pequeña "pausa" como si la mariposa se posara
        await controls.start({
          y: posRef.current.y - (5 + Math.random() * 5),
          transition: {
            duration: 0.3 + Math.random() * 0.3,
            ease: "easeInOut",
            repeat: 2,
            repeatType: "reverse",
          },
        });

        // Próximo destino aleatorio
        const nextX = 30 + Math.random() * (containerSize.width - 60);
        const nextY = 30 + Math.random() * (containerSize.height - 60);
        const distance = Math.hypot(nextX - posRef.current.x, nextY - posRef.current.y);
        const duration = Math.max(2, distance / (80 + Math.random() * 80));
        const facingRight = nextX > posRef.current.x;

        await controls.start({
          x: nextX,
          y: nextY,
          scaleX: facingRight ? 1 : -1,
          transition: { duration, ease: "easeInOut" },
        });
        posRef.current = { x: nextX, y: nextY };
      }
    };

    flyRandomly();
    return () => {
      mounted = false;
    };
  }, [containerSize, controls]);

  return (
    <div ref={wrapperRef} className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
      {containerSize.width > 0 && (
        <motion.div
          initial={{ x: -100, y: containerSize.height / 3, scaleX: 1 }}
          animate={controls}
          className="absolute pointer-events-none"
          style={{ width: `${sizeRef.current}px`, height: `${sizeRef.current}px` }}
        >
          {/* SVG simple de una mariposa */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-lg"
            style={{ overflow: "visible" }}
          >
            {/* Alas – animadas vía CSS */}
            <g
              style={{
                transformOrigin: "50px 45px",
                animation: "flap 0.4s infinite alternate ease-in-out",
              }}
            >
              <path d="M 50 10 Q 20 0 30 30 Q 20 60 50 50 Z" fill="#f5c2e7" opacity="0.9" />
              <path d="M 50 10 Q 80 0 70 30 Q 80 60 50 50 Z" fill="#f5c2e7" opacity="0.9" />
            </g>

            {/* Cuerpo */}
            <rect x="48" y="45" width="4" height="20" fill="#f28482" />
            {/* Antenas */}
            <line x1="50" y1="45" x2="45" y2="35" stroke="#f28482" strokeWidth="2" />
            <line x1="50" y1="45" x2="55" y2="35" stroke="#f28482" strokeWidth="2" />
          </svg>

          {/* CSS keyframes internos */}
          <style>{`
            @keyframes flap {
              0%   { transform: rotate(0deg) scaleY(1); }
              100% { transform: rotate(-30deg) scaleY(0.6); }
            }
          `}</style>
        </motion.div>
      )}
    </div>
  );
}
