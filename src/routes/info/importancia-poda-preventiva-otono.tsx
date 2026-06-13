import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, User, Clock, Leaf, AlertTriangle } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import FloatingBackButton from "@/components/site/FloatingBackButton";
import GlossaryLink from "@/components/site/GlossaryLink";

export const Route = createFileRoute("/info/importancia-poda-preventiva-otono")({
  head: () => ({
    meta: [
      { title: "Importancia de la Poda Preventiva en Otoño | Info" },
      {
        name: "description",
        content: "Conoce por qué el otoño es el momento clave para la poda preventiva y la silvicultura urbana, evitando riesgos biomecánicos en invierno.",
      },
    ],
  }),
  component: PodaPreventivaOtonoArticle,
});

function PodaPreventivaOtonoArticle() {
  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Article Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--olive)]/5 to-transparent pointer-events-none" />
        
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="px-3 py-1 rounded-full bg-[var(--clay)]/10 text-[var(--clay)] text-xs font-medium uppercase tracking-wider">
              Silvicultura Urbana
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium uppercase tracking-wider">
              Prevención
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.1] text-balance mb-8"
          >
            La Importancia de la <span className="italic text-[var(--clay)]">Poda Preventiva</span> en Otoño
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Por Equipo Técnico Bascharant</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>10 de Junio, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>3 min de lectura</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative py-16 md:py-24 flex-grow">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 article-content">
          <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-normal prose-a:text-[var(--clay)] prose-a:no-underline hover:prose-a:underline max-w-none">
            
            <p className="lead text-xl text-muted-foreground mb-10">
              A medida que las temperaturas descienden y los días se acortan, el arbolado entra en un estado de letargo. El otoño y el principio del invierno son los momentos biológicamente más adecuados para intervenir las especies arbóreas, minimizando el estrés vegetal y preparando el entorno para los temporales.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Más allá de la estética: Gestión de Riesgos</h2>
            <p>
              En entornos urbanos y corporativos, un árbol no mantenido es un pasivo de alto riesgo. La <strong>evaluación de <GlossaryLink>riesgo biomecánico</GlossaryLink></strong> determina qué ramas tienen pudrición o uniones débiles que podrían ceder ante el viento y la lluvia intensa del invierno.
            </p>

            <div className="my-12 p-8 rounded-2xl bg-[var(--clay)]/5 border border-[var(--clay)]/20">
              <AlertTriangle className="w-10 h-10 text-[var(--clay)] mb-4" />
              <h3 className="text-xl font-medium mb-3 mt-0 text-foreground">El Peligro del Desganche en Invierno</h3>
              <p className="text-muted-foreground text-base m-0">
                Una rama gruesa que cae puede destruir vehículos, dañar la red eléctrica o herir gravemente a un transeúnte. La poda de descopado, aclareo y reducción de copa previene la caída accidental ("desganche") causada por el peso extra de la humedad y el azote del viento.
              </p>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Beneficios Biológicos de la Poda Otoñal</h2>
            
            <ul className="space-y-6 mt-6 mb-12 list-disc pl-5">
              <li>
                <strong>Cicatrización limpia:</strong> Durante el letargo invernal, el árbol detiene el flujo de savia hacia la copa, evitando que "sangre" excesivamente por los cortes. Esto previene infecciones por hongos patógenos.
              </li>
              <li>
                <strong>Visibilidad estructural:</strong> En las especies caducifolias (que pierden la hoja), la ausencia de follaje permite a nuestros arboristas ver con claridad la estructura del esqueleto del árbol, facilitando la identificación de ramas cruzadas, enfermas o mal formadas.
              </li>
              <li>
                <strong>Estimulación primaveral:</strong> Una poda bien ejecutada redirige la energía acumulada en las raíces hacia brotes fuertes y sanos para la próxima primavera.
              </li>
            </ul>

            <h2 className="text-3xl mt-12 mb-6">Silvicultura Urbana con Expertos</h2>
            <p>
              En Paisajismo Bascharant, nuestro servicio de <em><GlossaryLink>Silvicultura Urbana</GlossaryLink></em> emplea técnicas avanzadas de trepa y plataformas elevadoras para realizar cortas direccionales precisas. No "mutilamos" el arbolado (práctica lamentablemente común); realizamos podas sanitarias y de formación que respetan la arquitectura natural de la especie.
            </p>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
      <FloatingBackButton />
    </main>
  );
}
