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
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.96 }}
        title="Agendar Reunión Técnica"
        className="group inline-flex items-center gap-3 rounded-full bg-[var(--charcoal)] text-background pl-3 pr-5 py-3 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.4)] border border-white/10"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--sage)]">
          <Calendar strokeWidth={1.4} className="h-5 w-5 text-[var(--charcoal)]" />
        </span>
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[9px] tracking-[0.2em] uppercase text-white/50">Reunión Técnica</span>
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
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.96 }}
        title="WhatsApp Corporativo"
        className="group inline-flex items-center gap-3 rounded-full bg-[var(--charcoal)] text-background pl-3 pr-5 py-3 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.4)] border border-white/10"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500">
          <MessageCircle strokeWidth={1.4} className="h-5 w-5 text-white" />
        </span>
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[9px] tracking-[0.2em] uppercase text-white/50">Canal Directo</span>
          <span className="text-[13px] font-medium text-white">WhatsApp</span>
        </span>
      </motion.a>
    </div>
  );
}
