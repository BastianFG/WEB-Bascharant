import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, ShieldCheck, Leaf } from "lucide-react";
import historyImg from "@/assets/historia.png";

export default function History() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="historia" ref={ref} className="relative py-24 md:py-36 border-t border-border/60 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Text content (Left on desktop) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <p className="eyebrow mb-6">— Nuestra Historia</p>
            
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tightest text-balance mb-8"
            >
              Cada proyecto comienza
              <span className="italic text-muted-foreground"> escuchando el lugar.</span>
            </motion.h2>

            <div className="space-y-6 text-[15px] leading-[1.75] text-foreground/75 max-w-xl">
              <p>
                La sociedad Paisajismo Bascharant S.P.A fue fundada en el año 2013, prestando un servicio integral enfocado en la mantención de las áreas verdes y diseño paisajístico. El proceso parte con criterios de análisis del territorio y la zonificación que organiza áreas sociales, de tránsito y descanso.
              </p>
              <p>
                Abordamos el paisajismo desde una mirada arquitectónica: composición, luz, materia y vegetación trabajan juntas para construir espacios que se sienten inevitables. Entendemos el proyecto como un sistema integrado donde conviven elementos inertes como pavimentos y muros dentro del paisajismo duro, y la selección botánica dentro del paisajismo blando.
              </p>
              <p>
                Diseñamos propuestas adaptadas a cada cliente, considerando sus necesidades, la arquitectura y la ecología. No diseñamos "jardines bonitos" y nos vamos; nuestros diseños priorizan la funcionalidad creando jardines habitables. Además, nuestra mantención continua asegura que el proyecto evolucione favorablemente, considerando el clima, la biodiversidad y el bienestar humano en el tiempo.
              </p>
            </div>

            {/* Micro-indicators */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border/60 pt-8 max-w-lg">
              <div className="flex gap-3 items-start">
                <Award className="h-5 w-5 text-[var(--olive)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Sello IDMA</h4>
                  <p className="text-[11px] text-muted-foreground mt-1">Dirección técnica calificada en ecología y paisajismo.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <ShieldCheck className="h-5 w-5 text-[var(--olive)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Empresa Familiar</h4>
                  <p className="text-[11px] text-muted-foreground mt-1">Atención directa, transparente y de confianza.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Leaf className="h-5 w-5 text-[var(--olive)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">ECO-Eficiencia</h4>
                  <p className="text-[11px] text-muted-foreground mt-1">Riego tecnificado y diseño adaptado al clima .</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image visual (Right on desktop) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted shadow-[var(--shadow-soft)]">
              <motion.img
                src={historyImg}
                alt="Planificación y diseño botánico de Paisajismo Bascharant por José Alfredo Fuentes Gómez"
                style={{ y }}
                className="absolute inset-0 h-[120%] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
