import { motion } from "framer-motion";

export default function CopihueDesign({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ rotate: -2, originX: 0.5, originY: 0 }}
      animate={{ rotate: 2 }}
      transition={{ repeat: Infinity, repeatType: "reverse", duration: 4, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
      >
        {/* Tallo principal */}
        <path
          d="M70 60 Q 110 30 130 80 Q 140 130 120 160"
          stroke="#209848"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Hojas */}
        {/* Hoja superior izquierda */}
        <path d="M75 55 Q 85 20 110 30 Q 95 45 75 55 Z" fill="#209848" />
        {/* Hoja superior derecha */}
        <path d="M100 40 Q 130 15 150 45 Q 120 60 100 40 Z" fill="#209848" />
        {/* Hoja inferior derecha */}
        <path d="M130 85 Q 170 100 190 120 Q 150 130 130 85 Z" fill="#209848" />

        {/* Copihue 1 (Izquierdo) */}
        <g transform="translate(45, 60) rotate(15)">
          {/* Base verde del copihue */}
          <path d="M40 10 L48 20 L32 20 Z" fill="#209848" />
          <circle cx="40" cy="10" r="5" fill="#209848" />

          {/* Pétalos traseros */}
          <path
            d="M40 20 Q 15 40 5 85 Q 25 75 40 110 Q 55 75 75 85 Q 65 40 40 20 Z"
            fill="#b91329"
          />

          {/* Pétalos delanteros */}
          <path
            d="M40 20 Q 25 50 20 80 Q 40 105 40 125 Q 40 105 60 80 Q 55 50 40 20 Z"
            fill="#dc1835"
          />
        </g>

        {/* Copihue 2 (Derecho) */}
        <g transform="translate(90, 85) rotate(-15)">
          {/* Base verde del copihue */}
          <path d="M40 10 L48 20 L32 20 Z" fill="#209848" />
          <circle cx="40" cy="10" r="5" fill="#209848" />

          {/* Pétalos traseros */}
          <path
            d="M40 20 Q 15 40 5 85 Q 25 75 40 110 Q 55 75 75 85 Q 65 40 40 20 Z"
            fill="#b91329"
          />

          {/* Pétalos delanteros */}
          <path
            d="M40 20 Q 25 50 20 80 Q 40 105 40 125 Q 40 105 60 80 Q 55 50 40 20 Z"
            fill="#e61f3e"
          />
        </g>
      </svg>
    </motion.div>
  );
}
