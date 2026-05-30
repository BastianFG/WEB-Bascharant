import { motion } from "framer-motion";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const items = [
  { src: g1, t: "Jardín contemporáneo", l: "Lo Barnechea", span: "row-span-2" },
  { src: g2, t: "Terraza corporativa",  l: "Las Condes",    span: "" },
  { src: g3, t: "Muro vegetal",         l: "Vitacura",      span: "" },
  { src: g4, t: "Acceso corporativo",   l: "Santiago",      span: "" },
  { src: g5, t: "Piscina + olivos",     l: "Chicureo",      span: "row-span-2" },
  { src: g6, t: "Terraza comercial",    l: "Providencia",   span: "" },
];

export default function Gallery() {
  return (
    <section id="proyectos" className="relative py-28 md:py-40 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">— Proyectos</p>
          </div>
          <div className="col-span-12 md:col-span-8 flex items-end justify-between gap-6">
            <h2 className="text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tightest text-balance">
              Una selección de
              <span className="italic text-muted-foreground"> nuestro trabajo.</span>
            </h2>
            <a href="#contacto" className="hidden md:inline-flex shrink-0 text-[12.5px] tracking-wider uppercase border-b border-foreground pb-1 hover:text-[var(--olive)] hover:border-[var(--olive)] transition-colors">
              Ver más →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[220px] md:auto-rows-[280px] gap-3 md:gap-5">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-sm bg-muted ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.t}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <div className="text-white font-display text-lg leading-tight">{it.t}</div>
                <div className="text-white/70 text-[11px] tracking-[0.2em] uppercase mt-1">{it.l}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
