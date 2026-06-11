import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "@tanstack/react-router";

export default function FloatingBackButton() {
  const router = useRouter();

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-3 select-none">
      <div className="animate-float" style={{ animationDelay: "0.2s" }}>
        <motion.button
          onClick={() => router.history.back()}
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          title="Volver a la página anterior"
          className="group relative inline-flex items-center justify-center gap-0 md:gap-3 rounded-full bg-background/90 hover:bg-background backdrop-blur-md text-foreground p-2.5 md:pr-5 md:pl-3 md:py-3 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] border border-border/60 hover:border-[var(--olive)]/50 transition-all duration-500 overflow-hidden"
        >
          {/* Subtle slow pulse */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--olive)]/0 via-[var(--olive)]/5 to-[var(--olive)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <span className="relative flex h-9 w-9 items-center justify-center shrink-0">
            <span className="absolute inset-0 rounded-full bg-[var(--olive)] blur-[6px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></span>
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-background/50 border border-border/50 shadow-sm group-hover:border-[var(--olive)]/30 transition-colors duration-500">
              <ArrowLeft strokeWidth={1.5} className="h-4 w-4 text-foreground group-hover:text-[var(--olive)] transition-colors duration-500" />
            </span>
          </span>
          <span className="hidden md:flex flex-col text-left leading-tight relative z-10">
            <span className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground group-hover:text-[var(--olive)] transition-colors duration-500">Anterior</span>
            <span className="text-[13px] font-medium text-foreground transition-colors duration-500">Volver atrás</span>
          </span>
        </motion.button>
      </div>
    </div>
  );
}
