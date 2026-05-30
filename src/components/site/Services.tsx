import { motion } from "framer-motion";
import {
  Leaf, Sprout, HardHat, Scissors, Flower2, Building2, Store,
} from "lucide-react";

const items = [
  { icon: Leaf,     n: "01", t: "Diseño paisajístico",            d: "Conceptualización y planimetría de espacios verdes con visión arquitectónica." },
  { icon: Sprout,   n: "02", t: "Renovación de jardines",         d: "Rediseño integral de jardines existentes con criterio estético contemporáneo." },
  { icon: HardHat,  n: "03", t: "Ejecución de proyectos",         d: "Construcción y plantación con cuadrillas especializadas y materiales premium." },
  { icon: Scissors, n: "04", t: "Mantención",                     d: "Programas continuos que preservan la salud y la belleza del paisaje en el tiempo." },
  { icon: Flower2,  n: "05", t: "Jardineras ornamentales",        d: "Composiciones vegetales sofisticadas para interiores, terrazas y fachadas." },
  { icon: Building2,n: "06", t: "Áreas verdes corporativas",      d: "Soluciones a escala para oficinas, condominios y proyectos inmobiliarios." },
  { icon: Store,    n: "07", t: "Paisajismo comercial",           d: "Identidad visual natural para cafés, locales, hoteles y espacios de marca." },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">— Servicios</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tightest text-balance"
            >
              Un estudio que entiende el espacio como
              <span className="italic text-muted-foreground"> una experiencia viva.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
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
                <s.icon strokeWidth={1.1} className="h-7 w-7 text-[var(--olive)] transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-110" />
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
