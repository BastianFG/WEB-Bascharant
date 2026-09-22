import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, User, Clock, Sprout, Droplets, Scissors, Sun } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import FloatingBackButton from "@/components/site/FloatingBackButton";
import GlossaryLink from "@/components/site/GlossaryLink";

export const Route = createFileRoute("/info/preparacion-areas-verdes-primavera")({
  head: () => ({
    meta: [
      { title: "Preparación de Áreas Verdes en Primavera | Info" },
      {
        name: "description",
        content: "Descubre cómo preparar tus áreas verdes corporativas para la primavera: ajustes de riego, poda de formación y manejo del césped.",
      },
    ],
  }),
  component: PreparacionPrimaveraArticle,
});

function PreparacionPrimaveraArticle() {
  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden min-h-screen flex flex-col">
      <h1 className="sr-only">Preparación de Áreas Verdes en Primavera - Paisajismo Bascharant</h1>
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
            <span className="px-3 py-1 rounded-full bg-[var(--olive)]/10 text-[var(--olive)] text-xs font-medium uppercase tracking-wider">
              Mantenimiento
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium uppercase tracking-wider">
              Primavera
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.1] text-balance mb-8"
          >
            Llegada de la Primavera: <span className="italic text-[var(--olive)]">Preparación</span> y Mantenimiento Estratégico
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
              <span>22 de Septiembre, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>5 min de lectura</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative py-16 md:py-24 flex-grow">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 article-content">
          <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-normal prose-a:text-[var(--olive)] prose-a:no-underline hover:prose-a:underline max-w-none">
            
            <p className="lead text-xl text-muted-foreground mb-10">
              La transición climática hacia la primavera marca el inicio de la temporada de mayor actividad fisiológica para las plantas. Para mantener las áreas verdes corporativas e industriales en óptimo estado, es fundamental adaptar nuestras estrategias de mantenimiento, prestando especial atención al agua, la estructura vegetal y el vigor del césped.
            </p>

            <h2 className="text-3xl mt-12 mb-6 flex items-center gap-3">
              <Droplets className="text-[var(--olive)]" /> Ajustes Críticos en los Sistemas de Riego
            </h2>
            <p>
              Con el aumento de las temperaturas y la prolongación de las horas de luz solar, el <strong>requerimiento hídrico</strong> de las áreas verdes se dispara. El error más común en condominios y empresas es mantener la misma programación de riego del invierno, lo que genera estrés hídrico inmediato o, por el contrario, un derroche innecesario si no se calibra correctamente.
            </p>
            <ul>
              <li><strong>Reprogramación de controladores:</strong> Es necesario aumentar la frecuencia y los tiempos de riego progresivamente. Se recomienda regar temprano por la mañana para minimizar la evaporación y evitar enfermedades fúngicas que proliferan con el riego nocturno.</li>
              <li><strong>Revisión de emisores:</strong> Tras el invierno, aspersores y goteros pueden estar obstruidos por sedimentos o raíces. Una purga del sistema asegura una cobertura uniforme.</li>
              <li><strong>Monitoreo de evapotranspiración:</strong> En instalaciones de gran escala, integrar <GlossaryLink>riego tecnificado inteligente</GlossaryLink> permite ajustar las dosis diarias basadas en el clima real, ahorrando hasta un 30% de agua.</li>
            </ul>

            <h2 className="text-3xl mt-12 mb-6 flex items-center gap-3">
              <Scissors className="text-[var(--olive)]" /> La Poda de Formación y Limpieza
            </h2>
            <p>
              La primavera es el momento idóneo para realizar la <strong>poda de formación</strong> en arbustos y ciertas especies ornamentales. A diferencia de la poda severa de invierno, esta intervención busca guiar el nuevo crecimiento estructural de la planta.
            </p>
            <div className="my-8 p-6 rounded-2xl bg-[var(--olive)]/5 border border-[var(--olive)]/20">
              <h3 className="text-xl font-medium mb-3 mt-0 text-foreground">Objetivos de la Poda Primaveral</h3>
              <ul className="mb-0 mt-2 text-muted-foreground">
                <li>Eliminación de material vegetal muerto o dañado por las heladas invernales.</li>
                <li>Despeje del centro de la planta para permitir una mejor circulación de aire y penetración de la luz solar, reduciendo plagas.</li>
                <li>Control del volumen para mantener la estética corporativa y evitar que el follaje invada senderos o infraestructura.</li>
              </ul>
            </div>
            <p>
              Es crucial utilizar herramientas desinfectadas para evitar la propagación de patógenos en las heridas de corte frescas, ya que la savia está en pleno movimiento.
            </p>

            <h2 className="text-3xl mt-12 mb-6 flex items-center gap-3">
              <Sprout className="text-[var(--olive)]" /> Corte, Nutrición y Crecimiento del Pasto
            </h2>
            <p>
              El césped reanuda su crecimiento acelerado durante la primavera. Para lograr una carpeta verde, densa y resistente al tránsito, el manejo debe ser proactivo.
            </p>
            <p>
              <strong>Frecuencia de corte:</strong> El césped deberá cortarse con mayor asiduidad, pasando de cortes quincenales a semanales. Se debe respetar la "regla del tercio": nunca cortar más de un tercio de la hoja en una sola pasada para evitar debilitar el sistema radicular.
            </p>
            <p>
              <strong>Abonado y Fertilización:</strong> El inicio de la primavera es el momento exacto para aplicar fertilizantes ricos en nitrógeno. Esto estimulará un rápido crecimiento del follaje y un color verde intenso. En <em>Paisajismo Bascharant</em> recomendamos incorporar un <strong>abonado orgánico</strong> o compost en la base para mejorar la estructura del suelo y su capacidad de retención de agua de cara a los meses más cálidos.
            </p>
            <p>
              <strong>Control de malezas:</strong> Con la primavera no solo crece el pasto, sino también las malezas. Un plan de <GlossaryLink>control fitosanitario</GlossaryLink> preventivo evitará que especies invasoras compitan por nutrientes y agua.
            </p>

            <hr className="my-12 border-border/60" />
            
            <div className="bg-secondary/30 p-8 rounded-2xl text-center">
              <Sun className="w-12 h-12 text-[var(--olive)] mx-auto mb-4" />
              <h3 className="text-2xl font-display mb-4">¿Tu empresa está lista para la primavera?</h3>
              <p className="mb-6 text-muted-foreground">
                Asegura el esplendor y la salud de tus áreas verdes corporativas con un plan de mantenimiento preventivo especializado.
              </p>
              <a href="/contacto" className="inline-flex items-center justify-center rounded-md bg-[var(--olive)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--olive)]/90">
                Agendar Visita Técnica
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
      <FloatingBackButton />
    </main>
  );
}
