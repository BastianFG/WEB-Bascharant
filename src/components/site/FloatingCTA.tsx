import { motion } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      {/* Botón Agendar Reunión Técnica */}
      <div className="animate-float" style={{ animationDelay: "0s" }}>
        <motion.a
          href="/#empresas"
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          title="Agendar Reunión Técnica"
          className="group relative inline-flex items-center justify-center gap-0 md:gap-3 rounded-full bg-[var(--charcoal)]/95 hover:bg-white backdrop-blur-md text-background p-2.5 md:pl-3 md:pr-5 md:py-3 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-white/5 hover:border-[var(--border)] transition-all duration-500 overflow-hidden"
        >
          {/* Subtle slow pulse instead of harsh ping */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <span className="relative flex h-9 w-9 items-center justify-center shrink-0">
            <span className="absolute inset-0 rounded-full bg-[var(--sage)] blur-[6px] opacity-40 group-hover:opacity-70 transition-opacity duration-500"></span>
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[var(--sage)] shadow-sm">
              <Calendar strokeWidth={1.4} className="h-5 w-5 text-[var(--charcoal)]" />
            </span>
          </span>
          <span className="hidden md:flex flex-col text-left leading-tight relative z-10">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--sage)] group-hover:text-[var(--olive)] transition-colors duration-500">Reunión Técnica</span>
            <span className="text-[13px] font-medium text-white/90 group-hover:text-[var(--charcoal)] transition-colors duration-500">Agendar Sesión</span>
          </span>
        </motion.a>
      </div>

      {/* Botón WhatsApp Corporativo */}
      <div className="animate-float" style={{ animationDelay: "1s" }}>
        <motion.a
          href="https://wa.me/56988458216"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          title="WhatsApp Corporativo"
          className="group relative inline-flex items-center justify-center gap-0 md:gap-3 rounded-full bg-[var(--charcoal)]/95 hover:bg-white backdrop-blur-md text-background p-2.5 md:pl-3 md:pr-5 md:py-3 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-white/5 hover:border-[var(--border)] transition-all duration-500 overflow-hidden"
        >
          {/* Subtle slow pulse instead of harsh ping */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <span className="relative flex h-9 w-9 items-center justify-center shrink-0">
            <span className="absolute inset-0 rounded-full bg-emerald-500 blur-[6px] opacity-40 group-hover:opacity-70 transition-opacity duration-500"></span>
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-emerald-500 shadow-sm">
              <MessageCircle strokeWidth={1.4} className="h-5 w-5 text-white" />
            </span>
          </span>
          <span className="hidden md:flex flex-col text-left leading-tight relative z-10">
            <span className="text-[9px] tracking-[0.2em] uppercase text-emerald-400 group-hover:text-emerald-700 transition-colors duration-500">Canal Directo</span>
            <span className="text-[13px] font-medium text-white/90 group-hover:text-[var(--charcoal)] transition-colors duration-500">WhatsApp</span>
          </span>
        </motion.a>
      </div>
    </div>
  );
}
