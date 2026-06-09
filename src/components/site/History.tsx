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
                Abordamos el paisajismo desde una mirada arquitectónica: su objetivo es crear un entorno atractivo y funcional, donde composición, luz, materia y vegetación trabajan juntas para construir espacios con belleza y una sólida relación entre forma y uso. Entendemos el proyecto como un sistema integrado donde el paisajismo integra arte, ciencia y técnica, combina horticultura, botánica y ecología, y define las características, estructuras y la representación de elementos inertes como pavimentos y muros dentro del paisajismo duro, junto con la selección botánica dentro del paisajismo blando. En paisajismo urbano, la planificación de espacios verdes se desarrolla en equipos interdisciplinarios y exige coordinación entre profesionales, perfiles técnicos y especialidades de ingeniería, contribuyendo además a mejorar la calidad de vida en ciudades. Ese enfoque amplía el ámbito de intervención hacia parques, plazas y urbanizaciones, con especial relevancia para la calidad de vida de las personas y su vínculo con la naturaleza en la ciudad contemporánea, pensado para el ser humano. A la vez, el paisajismo ecosistémico busca restaurar ecosistemas funcionales en entornos urbanos y reforzar el bienestar de quienes habitan esos espacios.
              </p>
              <p>
                Diseñamos propuestas adaptadas a cada cliente, con ideas sustentadas en datos e información del sitio, considerando su ubicación, escala, condiciones, suelos, la arquitectura y el medio. No diseñamos "jardines bonitos" y nos vamos; nuestros diseños priorizan la funcionalidad y el uso, creando ambientes habitables al aire libre que pueden integrar iluminación, huertos y otros recursos decorativos funcionales. También incorporamos árboles, especies nativas y hojas de distintas texturas para enriquecer el verde, favorecer la biodiversidad y reducir la demanda de agua de riego. Entendemos además que el paisajismo blando se enfoca en la selección y plantación de plantas, por lo que el manejo correcto de estos seres vivos es clave para su desarrollo. Además, nuestra mantención continua considera la gestión del material vegetal y su evolución en cada etapa de trabajo, previendo también cómo evolucionan las plantas a través del tiempo, con informes fitosanitarios periódicos, cuidado del arbolado urbano y criterios de bajo mantenimiento, en línea con jardines contemporáneos que evolucionan hacia espacios más simples y con foco en la generación de soluciones sostenibles para lograr mejores resultados frente al desafío del cambio climático. A la vez, el diseño considera sustrato, asoleamiento y soluciones como rain gardens, que ayudan a controlar la escorrentía del agua en terrenos y pueden aumentar el valor de una vivienda hasta un 15%. También integramos biodiversidad como una tendencia actual del paisajismo.
              </p>
            </div>

            {/* Micro-indicators */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border/60 pt-8 max-w-lg">
              <div className="flex gap-3 items-start">
                <Award className="h-5 w-5 text-[var(--olive)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground leading-tight mb-1.5">Sello IDMA y medio ambiente</h4>
                  <p className="text-[11px] text-muted-foreground mt-1">Dirección técnica calificada en ecología y paisajismo, con formación y criterio para integrar diseño, construcción y arte.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <ShieldCheck className="h-5 w-5 text-[var(--olive)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground leading-tight mb-1.5">Empresa Familiar y ser humano</h4>
                  <p className="text-[11px] text-muted-foreground mt-1">Atención directa, transparente y de confianza.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Leaf className="h-5 w-5 text-[var(--olive)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground leading-tight mb-1.5">ECO-Eficiencia y calidad de vida</h4>
                  <p className="text-[11px] text-muted-foreground mt-1">Riego tecnificado y diseño adaptado al clima, a la disponibilidad de agua y al manejo eficiente.</p>
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
