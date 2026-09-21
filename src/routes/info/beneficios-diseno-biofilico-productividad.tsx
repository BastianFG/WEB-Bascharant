import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, User, Clock, BrainCircuit, ArrowRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import FloatingBackButton from "@/components/site/FloatingBackButton";
import GlossaryLink from "@/components/site/GlossaryLink";

export const Route = createFileRoute("/info/beneficios-diseno-biofilico-productividad")({
  head: () => ({
    meta: [
      { title: "Beneficios del Diseño Biofílico | Info" },
      {
        name: "description",
        content: "Aprende cómo la integración de áreas verdes y el diseño biofílico en empresas corporativas reduce el estrés, mejora la salud mental y eleva la productividad.",
      },
    ],
  }),
  component: DisenoBiofilicoArticle,
});

function DisenoBiofilicoArticle() {
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
              Bienestar Laboral
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium uppercase tracking-wider">
              Diseño Biofílico
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.1] text-balance mb-8"
          >
            Beneficios del <span className="italic text-[var(--olive)]">Diseño Biofílico</span> en la Productividad Laboral
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
              <span>11 de Junio, 2026</span>
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
              Las oficinas estériles y grises son cosa del pasado. Hoy en día, la incorporación estratégica de la naturaleza en los espacios de trabajo, conocida como <strong><GlossaryLink>Diseño Biofílico</GlossaryLink></strong>, se ha convertido en una herramienta comprobada para potenciar la retención de talento y la productividad.
            </p>

            <h2 className="text-3xl mt-12 mb-6">¿Qué es el Diseño Biofílico?</h2>
            <p>
              El término <em><GlossaryLink>biofilia</GlossaryLink></em> significa literalmente "amor a la vida". En arquitectura y paisajismo, se refiere a la necesidad humana innata de estar en contacto con la naturaleza. Un diseño biofílico va más allá de poner una maceta en un escritorio; implica una integración profunda de luz natural, agua, vegetación y materiales orgánicos en la estructura de la empresa.
            </p>

            <div className="my-12 p-8 rounded-2xl bg-[var(--olive)]/5 border border-[var(--olive)]/20">
              <BrainCircuit className="w-10 h-10 text-[var(--olive)] mb-4" />
              <h3 className="text-xl font-medium mb-3 mt-0 text-foreground">El Impacto Cognitivo</h3>
              <p className="text-muted-foreground text-base m-0">
                Diversos estudios globales (como el informe Human Spaces) indican que los trabajadores en entornos con elementos naturales reportan niveles de bienestar un <strong>15% más altos</strong> y son hasta un <strong>6% más productivos</strong>. La exposición a plantas ayuda a reponer la fatiga cognitiva, mejorando la concentración.
              </p>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Reducción del Síndrome del Edificio Enfermo</h2>
            <p>
              La mala ventilación, la iluminación artificial constante y los compuestos orgánicos volátiles (COV) de muebles y alfombras causan fatiga, dolores de cabeza e irritación, contribuyendo al ausentismo laboral. Un diseño de paisajismo interior mitiga esto:
            </p>
            <ul>
              <li><strong>Filtros vivos:</strong> Las plantas absorben dióxido de carbono y toxinas del aire, liberando oxígeno fresco.</li>
              <li><strong>Confort acústico:</strong> Las hojas y el sustrato de jardines interiores o muros verdes actúan como paneles fonoabsorbentes, disminuyendo el eco en oficinas abiertas ("open space").</li>
            </ul>

            <h2 className="text-3xl mt-12 mb-6">Atracción y Retención de Talento</h2>
            <p>
              Para las nuevas generaciones que se integran a la fuerza laboral, un entorno que refleje preocupación por el medio ambiente y la salud de las personas no es un lujo, es una exigencia. Un paisajismo corporativo vibrante y bien mantenido proyecta una cultura de bienestar, reduciendo significativamente los índices de rotación.
            </p>

            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h4 className="font-medium text-lg mb-1">¿Quieres transformar tus oficinas?</h4>
                <p className="text-muted-foreground text-sm">Nuestro equipo de paisajistas diseña y mantiene áreas verdes corporativas.</p>
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
