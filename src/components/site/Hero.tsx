import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import heroVideo from "@/assets/Cinematic_subtle_animation_of.mp4";
import heroPoster from "@/assets/hero.jpg";

const ease = [0.22, 1, 0.36, 1] as const;
export default function Hero() {
  const vidRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="inicio" className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
        className="absolute inset-0 bg-black"
      >
        <video
          ref={vidRef}
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover transition-opacity duration-300"
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
          Empresa de paisajismo · Chile
        </motion.div>

        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease }}
            className="font-display text-[clamp(2.6rem,6.2vw,5.5rem)] leading-[0.98] tracking-tightest text-white text-balance"
          >
            Paisajismo Corporativo <br className="hidden md:block" />
            <span className="italic text-white/85">a Gran Escala.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease }}
            className="mt-8 max-w-2xl text-base md:text-[18px] leading-relaxed text-white/80"
          >
            Diseño, ejecución y mantención de áreas verdes para constructoras, inmobiliarias e
            industrias. Capacidad operativa certificada, plazos garantizados y cobertura a nivel
            nacional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease }}
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none"
          >
            <a
              href="#empresas"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-[13px] font-medium tracking-wide text-foreground transition-all duration-500 hover:bg-[var(--sage)] hover:text-white hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] text-center"
            >
              Solicitar Propuesta Comercial
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#reunion-tecnica"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-7 py-4 text-[13px] font-medium tracking-wide text-white backdrop-blur-sm transition-all duration-500 hover:bg-white/10 text-center"
            >
              Agendar Reunión Técnica
            </a>
          </motion.div>

          {/* SLA & B2B Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease }}
            className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 max-w-2xl text-left"
          >
            <div>
              <div className="text-2xl md:text-3xl font-display text-white font-semibold">100%</div>
              <div className="text-[8px] tracking-wider uppercase text-white/50 mt-1">
                Cumplimiento de Plazos
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-display text-white font-semibold">
                +13 años
              </div>
              <div className="text-[8px] tracking-wider uppercase text-white/50 mt-1">
                Años de Experiencia
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex items-end justify-between text-white/50"
        >
          <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase">
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block h-8 w-px bg-white/40"
            />
            Desplazar
          </div>
          <div className="hidden md:block text-right text-[10px] tracking-[0.25em] uppercase">
            Planiﬁcación · Ejecución · SLA de Conservación
          </div>
        </motion.div>
      </div>
    </section>
  );
}
