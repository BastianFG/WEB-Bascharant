import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Hummingbird() {
  const controls = useAnimation();
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const posRef = useRef({ x: -100, y: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);
  // Give each bird a random size between 30px and 65px
  const sizeRef = useRef(30 + Math.random() * 35);

  useEffect(() => {
    if (!wrapperRef.current) return;

    setContainerSize({
      width: wrapperRef.current.offsetWidth,
      height: wrapperRef.current.offsetHeight,
    });

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (containerSize.width === 0) return;

    // Initial start position
    posRef.current = { x: -100, y: containerSize.height / 3 };

    let isMounted = true;

    const flyRandomly = async () => {
      // First enter screen at random target
      const initialTargetX = containerSize.width * (0.1 + Math.random() * 0.4);
      const initialTargetY = containerSize.height * (0.2 + Math.random() * 0.6);

      await controls.start({
        x: initialTargetX,
        y: initialTargetY,
        scaleX: 1,
        transition: { duration: 2 + Math.random() * 3, ease: "easeOut" },
      });

      posRef.current = { x: initialTargetX, y: initialTargetY };

      while (isMounted) {
        // Hover in place to "feed"
        await controls.start({
          y: posRef.current.y - (10 + Math.random() * 10),
          transition: {
            duration: 0.4 + Math.random() * 0.4,
            ease: "easeInOut",
            repeat: 3,
            repeatType: "reverse",
          },
        });

        if (!isMounted) break;

        // Random destination
        const nextX = 30 + Math.random() * (containerSize.width - 60);
        const nextY = 30 + Math.random() * (containerSize.height - 60);

        // Distance for speed calculation
        const dx = nextX - posRef.current.x;
        const dy = nextY - posRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Calculate a nice duration based on distance, slightly randomized
        const duration = Math.max(2, distance / (100 + Math.random() * 100));
        const facingRight = nextX > posRef.current.x;

        // Fly to next point
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
      isMounted = false;
    };
  }, [containerSize, controls]);

  return (
    <div ref={wrapperRef} className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
      {containerSize.width > 0 && (
        <motion.div
          initial={{ x: -100, y: containerSize.height / 3, scaleX: 1 }}
          animate={controls}
          className="absolute pointer-events-none"
          style={{ width: `${sizeRef.current}px`, height: `${sizeRef.current}px` }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-lg"
            style={{ overflow: "visible" }}
          >
            {/* Tail */}
            <path d="M 15 75 Q 5 85 2 95 Q 10 90 20 80 Z" fill="#2d6a4f" />

            {/* Body */}
            <path
              d="M 20 80 Q 40 90 55 65 Q 65 50 60 40 Q 45 45 35 60 Q 25 70 20 80 Z"
              fill="#40916c"
            />

            {/* Head */}
            <circle cx="60" cy="40" r="8" fill="#52b788" />

            {/* Beak */}
            <path d="M 67 38 L 105 32 L 65 42 Z" fill="#1b4332" />

            {/* Eye */}
            <circle cx="62" cy="38" r="1.5" fill="#081c15" />

            {/* Wings with CSS Animation */}
            <g
              style={{
                transformOrigin: "40px 50px",
                animation: "flap 0.03s infinite alternate ease-in-out",
              }}
            >
              {/* Wing Back */}
              <path d="M 45 55 Q 30 15 10 5 Q 35 30 45 55 Z" fill="#74c69d" opacity="0.8" />
              {/* Wing Front */}
              <path d="M 40 60 Q 20 20 5 15 Q 30 40 40 60 Z" fill="#95d5b2" />
            </g>

            <style>
              {`
                @keyframes flap {
                  0% { transform: rotate(0deg) scaleY(1); }
                  100% { transform: rotate(-60deg) scaleY(0.3); }
                }
              `}
            </style>
          </svg>
        </motion.div>
      )}
    </div>
  );
}
