import { motion } from "framer-motion";
import hero from "@/assets/hero.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
        className="absolute inset-0"
      >
        <img
          src={hero}
          alt="Paisajismo contemporáneo Bascharant"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(20,25,18,0.55)] via-[rgba(20,25,18,0.25)] to-[rgba(20,25,18,0.75)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.4),transparent_60%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 lg:px-10 pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease }}
          className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/70"
        >
          <span className="inline-block h-px w-10 bg-white/50" />
          Estudio de paisajismo · Chile
        </motion.div>

        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease }}
            className="font-display text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.98] tracking-tightest text-white text-balance"
          >
            Transformamos espacios <br className="hidden md:block" />
            <span className="italic text-white/85">en experiencias naturales.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease }}
            className="mt-8 max-w-xl text-base md:text-[17px] leading-relaxed text-white/75"
          >
            Diseño, ejecución y mantención de proyectos paisajísticos
            para empresas, hogares y espacios comerciales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#empresas"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[13px] font-medium tracking-wide text-foreground transition-all duration-500 hover:bg-[var(--sage)] hover:text-white hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]"
            >
              Solicitar evaluación
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://wa.me/56988458216"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-[13px] font-medium tracking-wide text-white backdrop-blur-sm transition-all duration-500 hover:bg-white/10"
            >
              Hablar por WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex items-end justify-between text-white/70"
        >
          <div className="flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase">
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block h-8 w-px bg-white/60"
            />
            Scroll
          </div>
          <div className="hidden md:block text-right text-[11px] tracking-[0.25em] uppercase">
            Diseño · Ejecución · Mantención
          </div>
        </motion.div>
      </div>
    </section>
  );
}
