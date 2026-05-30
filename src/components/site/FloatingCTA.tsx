import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  return (
    <motion.a
      href="https://wa.me/56988458216"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04 }}
      className="group fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 rounded-full bg-[var(--charcoal)] text-background pl-3 pr-5 py-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] border border-white/10"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--sage)]">
        <MessageCircle strokeWidth={1.4} className="h-4 w-4 text-[var(--charcoal)]" />
      </span>
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/60">WhatsApp</span>
        <span className="text-[13px]">+56 9 8845 8216</span>
      </span>
    </motion.a>
  );
}
