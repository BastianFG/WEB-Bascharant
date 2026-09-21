import { motion, AnimatePresence } from "framer-motion";
import { Hammer, Image as ImageIcon, Sparkles, X } from "lucide-react";
import { useState } from "react";

export default function UnderConstructionOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm md:bottom-10 md:left-10 md:-translate-x-0"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/80 backdrop-blur-xl shadow-2xl p-6 text-center md:text-left">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors bg-secondary/50 rounded-full p-1"
            >
              <X size={16} />
            </button>

            <div className="flex justify-center md:justify-start items-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <Hammer className="text-[var(--olive)]" size={28} strokeWidth={1.5} />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              >
                <ImageIcon className="text-[var(--sage)]" size={24} strokeWidth={1.5} />
              </motion.div>
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              >
                <Sparkles className="text-yellow-500" size={24} strokeWidth={1.5} />
              </motion.div>
            </div>

            <h3 className="font-display text-xl font-medium tracking-tight mb-2">
              Página en Desarrollo
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Estamos{" "}
              <span className="font-medium text-foreground">recopilando las mejores fotos</span> de
              nuestros proyectos para mostrarlas aquí muy pronto.
            </p>

            {/* Animated progress bar */}
            <div className="mt-5 h-1.5 w-full bg-secondary overflow-hidden rounded-full">
              <motion.div
                className="h-full w-1/3 bg-gradient-to-r from-[var(--sage)] to-[var(--olive)] rounded-full"
                animate={{ x: ["-100%", "300%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
