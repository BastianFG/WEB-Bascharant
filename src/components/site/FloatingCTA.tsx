import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Botón Tienda */}
      <motion.a
        href="https://www.bascharant.store/"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.96 }}
        title="Visitar tienda Bascharant"
        className="group inline-flex items-center gap-3 rounded-full bg-[var(--charcoal)] text-background pl-3 pr-5 py-3 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)] border border-white/10 transition-shadow hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.55)]"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--sage)]">
          <ShoppingBag strokeWidth={1.4} className="h-5 w-5 text-[var(--charcoal)] group-hover:scale-110 transition-transform duration-200" />
        </span>
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/60">Visítanos</span>
          <span className="text-[13px]">Nuestra tienda</span>
        </span>
      </motion.a>

      {/* Botón WhatsApp */}
      <motion.a
        href="https://wa.me/56988458216"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.04 }}
        className="group inline-flex items-center gap-3 rounded-full bg-[var(--charcoal)] text-background pl-3 pr-5 py-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] border border-white/10"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--sage)]">
          <MessageCircle strokeWidth={1.4} className="h-4 w-4 text-[var(--charcoal)]" />
        </span>
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/60">WhatsApp</span>
          <span className="text-[13px]">+56 9 8845 8216</span>
        </span>
      </motion.a>
    </div>
  );
}
