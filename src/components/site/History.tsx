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
            
            {/* Historia */}
            <div className="mb-12">
              <p className="eyebrow mb-5">— Nuestra Historia y Trayectoria</p>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(1.6rem,3.2vw,2.4rem)] leading-[1.1] tracking-tight text-balance mb-6"
              >
                Fundada en 2013 con un propósito claro: <span className="italic text-muted-foreground">elevar el estándar del diseño y la mantención de áreas verdes.</span>
              </motion.h2>
              <p className="text-[15px] leading-[1.75] text-foreground/80 max-w-xl">
                La sociedad Paisajismo Bascharant S.P.A. está respaldada por más de 10 años de experiencia ininterrumpida en el rubro, consolidando nuestro trabajo al gestionar proyectos de alta exigencia. Como empresa familiar, nuestro sello es la atención directa, transparente y de confianza. No somos solo proveedores; somos socios estratégicos en el cuidado y la evolución de tu entorno.
              </p>
            </div>

            {/* Filosofia */}
            <div className="mb-12">
              <p className="eyebrow mb-5">— Nuestra Filosofía: Más allá del jardín</p>
              <div className="space-y-4 text-[15px] leading-[1.75] text-foreground/80 max-w-xl">
                <p>
                  Cada proyecto comienza escuchando el lugar. Abordamos el paisajismo desde una mirada arquitectónica. No nos limitamos a diseñar "jardines bonitos" para luego irnos; creamos ecosistemas atractivos y funcionales donde la composición, la luz, la materia y la vegetación trabajan juntas.
                </p>
                <p>
                  Entendemos el proyecto como un sistema integrado. Seleccionamos cuidadosamente las especies botánicas nativas y de bajo consumo hídrico, combinándolas con elementos estructurales para crear espacios habitables. Nuestros diseños priorizan la biodiversidad y el control de escorrentía (como los rain gardens).
                </p>
              </div>
            </div>

            {/* Pilares */}
            <div className="border-t border-border/60 pt-10">
              <p className="eyebrow mb-8">— Nuestros Pilares de Trabajo</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 max-w-xl">
                <div className="flex gap-4 items-start">
                  <Leaf className="h-6 w-6 text-[var(--olive)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[15px] font-semibold text-foreground mb-1.5">Mantención Evolutiva y Fitosanitaria</h4>
                    <p className="text-[13.5px] text-muted-foreground leading-relaxed">Entendemos que las plantas son seres vivos. Nuestra mantención continua asegura que el proyecto crezca con el tiempo, incluyendo informes fitosanitarios periódicos, cuidado del arbolado y criterios de bajo mantenimiento adaptados al cambio climático.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Award className="h-6 w-6 text-[var(--olive)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[15px] font-semibold text-foreground mb-1.5">Sello IDMA y Dirección Técnica</h4>
                    <p className="text-[13.5px] text-muted-foreground leading-relaxed">Contamos con dirección calificada en ecología y medio ambiente, aplicando formación técnica para integrar diseño, ciencia y arte en cada espacio.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <ShieldCheck className="h-6 w-6 text-[var(--olive)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[15px] font-semibold text-foreground mb-1.5">Eco-Eficiencia Hídrica</h4>
                    <p className="text-[13.5px] text-muted-foreground leading-relaxed">Diseñamos propuestas adaptadas al clima actual, priorizando el riego tecnificado y el manejo inteligente de los recursos frente a los desafíos ambientales de hoy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image visual (Right on desktop) */}
          <div className="lg:col-span-6 relative flex flex-col gap-4">
            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted shadow-[var(--shadow-soft)]">
              <motion.img
                src={historyImg}
                alt="Planificación y diseño botánico de Paisajismo Bascharant por José Alfredo Fuentes Gómez"
                style={{ y }}
                className="absolute inset-0 h-[120%] w-full object-cover"
                loading="lazy"
              />
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Founder info overlay */}
            <div className="md:absolute md:bottom-8 md:left-8 md:right-8 bg-background/50 md:bg-background/80 backdrop-blur-md border border-border md:border-white/10 p-5 rounded-xl shadow-sm md:shadow-2xl z-10">
              <p className="font-display text-lg md:text-xl font-medium tracking-tight text-foreground mb-1">José Alfredo Fuentes Gómez</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs md:text-sm text-muted-foreground">
                <span className="font-medium text-[var(--olive)]">Profesional Paisajista</span>
                <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-border"></span>
                <span>Fundador de la empresa</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
