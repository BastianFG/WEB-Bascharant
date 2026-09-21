import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, User, Clock, AlertTriangle, ArrowRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import FloatingBackButton from "@/components/site/FloatingBackButton";
import GlossaryLink from "@/components/site/GlossaryLink";

export const Route = createFileRoute("/info/mala-eleccion-arbol-costos-infraestructura")({
  head: () => ({
    meta: [
      { title: "El enemigo silencioso de las veredas | Info" },
      {
        name: "description",
        content: "Por qué una mala elección de árbol puede costar caro. Descubre cómo evitar la destrucción de veredas y pavimentos mediante una correcta selección de especies arbóreas.",
      },
    ],
  }),
  component: MalaEleccionArbolArticle,
});

function MalaEleccionArbolArticle() {
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
            <span className="px-3 py-1 rounded-full bg-[var(--olive)]/10 text-[var(--olive)] text-xs font-medium uppercase tracking-wider">
              Infraestructura
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium uppercase tracking-wider">
              Arbolado Urbano
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.1] text-balance mb-8"
          >
            El enemigo silencioso de las veredas: Por qué una mala elección de árbol <span className="italic text-[var(--olive)]">puede costar caro</span>
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
              <span>20 de Junio, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>4 min de lectura</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative py-16 md:py-24 flex-grow">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 article-content">
          <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-normal prose-a:text-[var(--olive)] prose-a:no-underline hover:prose-a:underline max-w-none">
            
            <p className="lead text-xl text-muted-foreground mb-10">
              Es una escena que vemos constantemente en proyectos corporativos y urbanos: veredas destrozadas, pavimentos levantados y peatones tropezando. ¿El culpable más frecuente? La plantación de especies como el Brachychiton en espacios reducidos.
            </p>

            <p>
              El Brachychiton (como el popular Árbol Botella) es una especie hermosa y resistente. Sin embargo, plantarlo en "tazas" estrechas o cerca de veredas peatonales es una bomba de tiempo para la infraestructura de cualquier instalación.
            </p>

            <div className="my-12 p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
              <AlertTriangle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-medium mb-3 mt-0 text-foreground">¿Por qué ocurre esto?</h3>
              <p className="text-muted-foreground text-base mb-4">
                Este tipo de árbol desarrolla un sistema radicular superficial, grueso y extremadamente vigoroso. Al encontrarse confinado bajo el concreto, sus raíces buscan oxígeno y humedad empujando hacia arriba. El resultado se traduce en:
              </p>
              <ul className="text-muted-foreground text-base m-0 space-y-2">
                <li>❌ Destrucción de pavimentos y veredas.</li>
                <li>❌ Riesgo altísimo de caídas y accidentes para peatones (y posibles demandas por responsabilidad civil).</li>
                <li>❌ Costos millonarios en reparaciones de infraestructura y extracción de emergencia.</li>
              </ul>
            </div>

            <h2 className="text-3xl mt-12 mb-6">La solución: El árbol correcto en el lugar correcto</h2>
            <p>
              Para evitar estos dolores de cabeza, la planificación estratégica es vital. Si necesitas diseñar áreas peatonales estrechas, la flora nativa chilena ofrece alternativas espectaculares con sistemas radiculares profundos (pivotantes) que respetan la infraestructura y, además, consumen mucha menos agua:
            </p>

            <ul className="mt-8 space-y-6">
              <li>
                <strong>🌳 1. Quillay (Quillaja saponaria):</strong> El campeón indiscutido. De follaje siempre verde, crecimiento rápido y raíces profundas que no rompen el pavimento. Es ideal para dar sombra en estacionamientos o accesos sin riesgo estructural.
              </li>
              <li>
                <strong>🌼 2. Pelú (Sophora cassioides):</strong> Perfecto para espacios confinados. Su tamaño es completamente controlable, no levanta veredas y regala una floración amarilla espectacular que eleva la estética de cualquier entorno corporativo.
              </li>
              <li>
                <strong>🌿 3. Tara (Tara spinosa):</strong> Un árbol de tamaño mediano, extraordinariamente resistente a la sequía y con raíces nobles que no compiten con el concreto ni las tuberías subterráneas.
              </li>
            </ul>

            <h2 className="text-3xl mt-12 mb-6">Una Decisión Estratégica</h2>
            <p>
              El paisajismo no debe ser una elección al azar basada solo en la estética; es una decisión de ingeniería y mitigación de riesgos. Más de 10 años manteniendo la calidad de nuestros servicios nos han enseñado que un diseño inteligente protege tu inversión operativa y garantiza la seguridad de tu equipo y clientes.
            </p>
            <p>
              ¿Tu instalación está sufriendo problemas de infraestructura por raíces invasivas? Es momento de evaluar un recambio estratégico.
            </p>

            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h4 className="font-medium text-lg mb-1">¿Necesitas una evaluación técnica?</h4>
                <p className="text-muted-foreground text-sm">Contáctanos para inspeccionar el arbolado de tu empresa.</p>
              </div>
              <a 
                href="/contacto" 
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[var(--olive)] text-white hover:bg-[var(--olive-dark)] transition-colors font-medium tracking-wide whitespace-nowrap"
              >
                Agendar Visita <ArrowRight className="ml-2 w-4 h-4" />
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
