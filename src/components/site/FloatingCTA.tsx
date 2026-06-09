import { motion } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      {/* Botón Agendar Reunión Técnica (Redirige a Propuesta Comercial) */}
      <motion.a
        href="#empresas"
        initial={{ opacity: 0, scale: 0.8, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.08, y: -4 }}
        whileTap={{ scale: 0.95 }}
        title="Agendar Reunión Técnica"
        className="group relative inline-flex items-center justify-center gap-0 md:gap-3 rounded-full bg-[var(--charcoal)] text-background p-2.5 md:pl-3 md:pr-5 md:py-3 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        
        <span className="relative flex h-9 w-9 items-center justify-center shrink-0">
          <span className="absolute inset-0 rounded-full bg-[var(--sage)] animate-ping opacity-60"></span>
          <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[var(--sage)]">
            <Calendar strokeWidth={1.4} className="h-5 w-5 text-[var(--charcoal)]" />
          </span>
        </span>
        <span className="hidden md:flex flex-col text-left leading-tight relative z-10">
          <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--sage)]">Reunión Técnica</span>
          <span className="text-[13px] font-medium text-white">Agendar Sesión</span>
        </span>
      </motion.a>

      {/* Botón WhatsApp Corporativo */}
      <motion.a
        href="https://wa.me/56988458216"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.08, y: -4 }}
        whileTap={{ scale: 0.95 }}
        title="WhatsApp Corporativo"
        className="group relative inline-flex items-center justify-center gap-0 md:gap-3 rounded-full bg-[var(--charcoal)] text-background p-2.5 md:pl-3 md:pr-5 md:py-3 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

        <span className="relative flex h-9 w-9 items-center justify-center shrink-0">
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" style={{ animationDelay: "0.5s" }}></span>
          <span className="relative flex h-full w-full items-center justify-center rounded-full bg-emerald-500">
            <MessageCircle strokeWidth={1.4} className="h-5 w-5 text-white" />
          </span>
        </span>
        <span className="hidden md:flex flex-col text-left leading-tight relative z-10">
          <span className="text-[9px] tracking-[0.2em] uppercase text-emerald-400">Canal Directo</span>
          <span className="text-[13px] font-medium text-white">WhatsApp</span>
        </span>
      </motion.a>
    </div>
  );
}
