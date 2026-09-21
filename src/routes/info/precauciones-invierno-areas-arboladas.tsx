import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, User, Clock, AlertTriangle, Snowflake } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import FloatingBackButton from "@/components/site/FloatingBackButton";
import GlossaryLink from "@/components/site/GlossaryLink";

export const Route = createFileRoute("/info/precauciones-invierno-areas-arboladas")({
  head: () => ({
    meta: [
      { title: "Precauciones de Invierno en Áreas Arboladas | Info" },
      {
        name: "description",
        content:
          "Conoce las precauciones esenciales a tomar frente a la llegada del invierno en zonas con árboles para evitar accidentes y proteger la salud de tus áreas verdes.",
      },
    ],
  }),
  component: PrecaucionesInviernoArticle,
});

function PrecaucionesInviernoArticle() {
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
              Prevención
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium uppercase tracking-wider">
              Mantenimiento
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.1] text-balance mb-8"
          >
            Llegada del Invierno: <span className="italic text-[var(--olive)]">Precauciones</span>{" "}
            en Áreas Arboladas
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
              <span>23 de Junio, 2026</span>
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
              La llegada del invierno trae consigo desafíos significativos para el arbolado en zonas
              urbanas y corporativas. Los fuertes vientos, las lluvias intensas y las bajas
              temperaturas pueden convertir áreas verdes en zonas de riesgo si no se toman las
              precauciones adecuadas a tiempo.
            </p>

            <h2 className="text-3xl mt-12 mb-6">El Impacto del Clima Invernal en los Árboles</h2>
            <p>
              Durante el invierno, las condiciones climáticas extremas ponen a prueba la resistencia
              estructural de los árboles. La combinación de suelos saturados de agua, que debilitan
              el anclaje de las raíces, y ráfagas de viento intensas, incrementan exponencialmente
              la posibilidad de volcamientos o caída de ramas.
            </p>

            <div className="my-12 p-8 rounded-2xl bg-[var(--olive)]/5 border border-[var(--olive)]/20">
              <Snowflake className="w-10 h-10 text-[var(--olive)] mb-4" />
              <h3 className="text-xl font-medium mb-3 mt-0 text-foreground">
                El Efecto "Vela" en Árboles Perennifolios
              </h3>
              <p className="text-muted-foreground text-base m-0">
                Los árboles que no pierden su follaje en invierno (perennifolios) actúan como una
                vela de barco frente al viento. Al retener todas sus hojas, ofrecen mayor
                resistencia a las ráfagas, lo que aumenta la tensión sobre su tronco y sistema
                radicular.
              </p>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Precauciones Fundamentales</h2>

            <ul className="space-y-6 mt-6 mb-12 list-disc pl-5">
              <li>
                <strong>Evaluación Visual de Riesgos:</strong> Es vital inspeccionar los árboles en
                busca de signos de debilidad estructural, como grietas en el tronco, hongos en la
                base (que indican pudrición), o ramas muertas colgantes.
              </li>
              <li>
                <strong>
                  <GlossaryLink>Poda Preventiva</GlossaryLink> y de Descarga:
                </strong>{" "}
                Reducir el peso de las copas, eliminar ramas secas o enfermas y mejorar la
                permeabilidad al viento son acciones preventivas críticas. Esto disminuye la
                probabilidad de desganches imprevistos.
              </li>
              <li>
                <strong>Revisión del Entorno Radicular:</strong> Verificar que no existan
                encharcamientos prolongados cerca de la base de los árboles. Un suelo excesivamente
                saturado pierde cohesión y compromete el anclaje.
              </li>
            </ul>

            <h2 className="text-3xl mt-12 mb-6">Protección de Infraestructura y Personas</h2>
            <p>
              En recintos empresariales, condominios o espacios públicos, la prevención es también
              una cuestión de responsabilidad legal. Un árbol mal gestionado puede causar daños
              considerables a vehículos, techos, tendido eléctrico y, lo más grave, a transeúntes.
            </p>

            <div className="my-12 p-8 rounded-2xl bg-[var(--clay)]/5 border border-[var(--clay)]/20">
              <AlertTriangle className="w-10 h-10 text-[var(--clay)] mb-4" />
              <h3 className="text-xl font-medium mb-3 mt-0 text-foreground">
                Acción Rápida ante Señales de Alerta
              </h3>
              <p className="text-muted-foreground text-base m-0">
                Si notas que un árbol presenta una inclinación reciente, levantamiento del suelo en
                la zona de las raíces opuesta a la inclinación, o grietas grandes en su estructura
                principal, se debe restringir el paso inmediatamente y contactar a profesionales en{" "}
                <strong>
                  <GlossaryLink>Silvicultura Urbana</GlossaryLink>
                </strong>
                .
              </p>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Preparación Profesional</h2>
            <p>
              No confíes el mantenimiento de árboles grandes a personal no capacitado. Las podas
              severas o mal ejecutadas debilitan al árbol y aumentan su peligrosidad a mediano
              plazo. En Paisajismo Bascharant, realizamos evaluaciones técnicas para asegurar que
              tus áreas verdes sean un espacio seguro durante toda la temporada invernal.
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
