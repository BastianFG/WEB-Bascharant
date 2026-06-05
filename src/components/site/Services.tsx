import { motion } from "framer-motion";
import {
  Leaf,
  Sprout,
  HardHat,
  Scissors,
  Flower2,
  Building2,
  Store,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

const items = [
  {
    icon: Leaf,
    n: "01",
    t: "Diseño & Licitaciones",
    d: "Conceptualización, modelado 3D y especificaciones técnicas para licitaciones y permisos.",
  },
  {
    icon: HardHat,
    n: "02",
    t: "Ejecución a Gran Escala",
    d: "Movimiento de tierras, urbanización verde y plantación con personal acreditado en obra.",
  },
  {
    icon: Scissors,
    n: "03",
    t: "Mantención Corporativa",
    d: "Programas continuos con reportes técnicos fitosanitarios y cumplimiento estricto de SLAs.",
  },
  {
    icon: Sprout,
    n: "04",
    t: "Riego Tecnificado",
    d: "Diseño y automatización de riego con telemetría para la optimización del recurso hídrico.",
  },
  {
    icon: Building2,
    n: "05",
    t: "Paisajismo Inmobiliario",
    d: "Habilitación de áreas comunes para condominios, parques urbanos y proyectos inmobiliarios.",
  },
  {
    icon: Store,
    n: "06",
    t: "Espacios Comerciales & Oficinas",
    d: "Diseño y conservación botánica de interiores, fachadas y terrazas corporativas.",
  },
];

import useEmblaCarousel from "embla-carousel-react";

const DELAY = 5500;

// ─── Mobile carousel ───────────────────────────────────────────────────────────
function MobileCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
    if (resumeRef.current) {
      clearTimeout(resumeRef.current);
      resumeRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, DELAY);
  }, [emblaApi, stopAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    startAutoplay();

    // Pause autoplay on interaction and resume after inactivity
    const handlePointerDown = () => stopAutoplay();
    const handlePointerUp = () => {
      stopAutoplay();
      resumeRef.current = setTimeout(startAutoplay, 4000);
    };

    emblaApi.on("pointerDown", handlePointerDown);
    emblaApi.on("pointerUp", handlePointerUp);

    return () => {
      stopAutoplay();
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("pointerDown", handlePointerDown);
      emblaApi.off("pointerUp", handlePointerUp);
    };
  }, [emblaApi, onSelect, startAutoplay, stopAutoplay]);

  const handlePrev = () => {
    if (!emblaApi) return;
    stopAutoplay();
    emblaApi.scrollPrev();
    resumeRef.current = setTimeout(startAutoplay, 4000);
  };

  const handleNext = () => {
    if (!emblaApi) return;
    stopAutoplay();
    emblaApi.scrollNext();
    resumeRef.current = setTimeout(startAutoplay, 4000);
  };

  const handleDotClick = (index: number) => {
    if (!emblaApi) return;
    stopAutoplay();
    emblaApi.scrollTo(index);
    resumeRef.current = setTimeout(startAutoplay, 4000);
  };

  return (
    <div className="md:hidden relative select-none">
      {/* Viewport */}
      <div className="overflow-hidden rounded-2xl border border-border" ref={emblaRef}>
        {/* Container */}
        <div className="flex">
          {items.map((s) => (
            <div
              key={s.t}
              className="shrink-0 grow-0 basis-full bg-background p-8 aspect-square flex flex-col items-center justify-center text-center relative overflow-hidden"
            >
              {/* Floating Top Number */}
              <span className="absolute top-6 right-6 text-[10px] font-mono tracking-[0.3em] text-muted-foreground/80">
                {s.n}
              </span>

              {/* Centered Icon Container */}
              <div className="mb-4 p-4 bg-secondary/50 rounded-2xl flex items-center justify-center">
                <s.icon strokeWidth={1.2} className="h-8 w-8 text-[var(--olive)]" />
              </div>

              {/* Centered Text Content */}
              <h3 className="font-display text-2xl leading-tight mb-2.5 text-foreground px-2">
                {s.t}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground px-4 text-balance">
                {s.d}
              </p>

              {/* Bottom Line */}
              <span className="absolute bottom-0 left-0 h-1 w-full bg-[var(--olive)] opacity-20" />
            </div>
          ))}
        </div>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between mt-5 px-1">
        <button
          onClick={handlePrev}
          aria-label="Anterior servicio"
          className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary transition-colors cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              aria-label={`Ir al servicio ${i + 1}`}
              style={{
                height: 6,
                borderRadius: 99,
                width: i === current ? 20 : 6,
                background: i === current ? "var(--olive)" : "var(--border)",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Siguiente servicio"
          className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary transition-colors cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

// ─── Main section ──────────────────────────────────────────────────────────────
export default function Services() {
  return (
    <section id="servicios" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="w-full md:col-span-4">
            <p className="eyebrow">— Servicios</p>
          </div>
          <div className="w-full md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tightest text-balance"
            >
              Soluciones integrales de paisajismo
              <span className="italic text-muted-foreground">
                {" "}
                para infraestructura corporativa.
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Mobile: carousel */}
        <MobileCarousel />

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {items.map((s, i) => (
            <motion.article
              key={s.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-background p-8 md:p-10 min-h-[280px] flex flex-col justify-between overflow-hidden transition-colors duration-700 hover:bg-secondary/60"
            >
              <div className="flex items-start justify-between">
                <s.icon
                  strokeWidth={1.1}
                  className="h-7 w-7 text-[var(--olive)] transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-110"
                />
                <span className="text-[11px] tracking-[0.25em] text-muted-foreground">{s.n}</span>
              </div>
              <div>
                <h3 className="font-display text-2xl leading-tight mb-3">{s.t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--olive)] transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
