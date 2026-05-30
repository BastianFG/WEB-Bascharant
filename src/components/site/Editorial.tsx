import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import img from "@/assets/editorial.jpg";

export default function Editorial() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative bg-secondary/40 py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
              <motion.img
                src={img}
                alt="Estudio Bascharant"
                style={{ y }}
                className="absolute inset-0 h-[115%] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
            <p className="eyebrow mb-6">— Filosofía</p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tightest text-balance mb-8"
            >
              Cada proyecto comienza escuchando
              <span className="italic text-muted-foreground"> el lugar.</span>
            </motion.h2>
            <div className="space-y-5 text-[15.5px] leading-[1.75] text-foreground/75 max-w-lg">
              <p>
                En Bascharant abordamos el paisajismo desde una mirada arquitectónica:
                composición, luz, materia y vegetación trabajan juntas para construir
                espacios que se sienten inevitables.
              </p>
              <p>
                Diseñamos propuestas adaptadas a cada cliente, con un enfoque
                personalizado, funcional y profundamente estético. Nuestra mantención
                continua asegura que el proyecto siga creciendo con el tiempo.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["+10", "años de experiencia"],
                ["120+", "proyectos entregados"],
                ["100%", "diseño a medida"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-display text-3xl text-[var(--olive)]">{k}</div>
                  <div className="text-[11px] tracking-wider uppercase text-muted-foreground mt-2">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
