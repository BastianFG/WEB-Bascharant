import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import FloatingBackButton from "@/components/site/FloatingBackButton";

export const Route = createFileRoute("/info/importancia-fumigaciones-preventivas")({
  head: () => ({
    meta: [
      { title: "Importancia de las Fumigaciones Preventivas | Info" },
      {
        name: "description",
        content: "Descubre por qué las fumigaciones preventivas son vitales para las empresas, asegurando bioseguridad y el control integrado de plagas corporativas.",
      },
    ],
  }),
  component: FumigacionesPreventivasArticle,
});

function FumigacionesPreventivasArticle() {
  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Article Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--charcoal)]/5 to-transparent pointer-events-none" />
        
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="px-3 py-1 rounded-full bg-[var(--olive)]/10 text-[var(--olive)] text-xs font-medium uppercase tracking-wider">
              Control de Plagas
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium uppercase tracking-wider">
              Corporativo
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.1] text-balance mb-8"
          >
            ¿Por qué son importantes las <span className="italic text-[var(--olive)]">Fumigaciones Preventivas</span> en tu Empresa?
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
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 article-content">
          <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-normal prose-a:text-[var(--olive)] prose-a:no-underline hover:prose-a:underline max-w-none">
            
            <p className="lead text-xl text-muted-foreground mb-10">
              En el entorno corporativo, la presencia de plagas no solo daña la reputación de una marca, sino que compromete la salud ocupacional y puede detener la operatividad. Actuar cuando el problema ya es visible es costoso y peligroso; la clave radica en la <strong>prevención</strong>.
            </p>

            <h2 className="text-3xl mt-12 mb-6">El Costo Oculto de la Reactividad</h2>
            <p>
              Muchas empresas cometen el error de solicitar servicios de fumigación únicamente cuando detectan roedores, termitas o insectos en sus instalaciones. Esta estrategia reactiva genera tiempos de inactividad obligatorios, pérdida de inventario y riesgos de demandas por salubridad.
            </p>

            <div className="my-12 p-8 rounded-2xl bg-[var(--olive)]/5 border border-[var(--olive)]/20">
              <ShieldCheck className="w-10 h-10 text-[var(--olive)] mb-4" />
              <h3 className="text-xl font-medium mb-3 mt-0 text-foreground">El Manejo Integrado de Plagas (MIP)</h3>
              <p className="text-muted-foreground text-base m-0">
                A diferencia de las fumigaciones tradicionales, el <strong>Manejo Integrado de Plagas (MIP)</strong> es una estrategia sostenible que combina herramientas de control biológico, físico y químico de manera focalizada para prevenir infestaciones antes de que ocurran. (Ver más en nuestro <a href="/glosario">Glosario</a>).
              </p>
            </div>

            <h2 className="text-3xl mt-12 mb-6">3 Razones Vitales para Implementar Fumigaciones Preventivas</h2>
            
            <ul className="space-y-6 mt-6 mb-12 list-none pl-0">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[var(--olive)] shrink-0 mt-1" />
                <div>
                  <strong className="block text-lg font-medium text-foreground mb-1">Protección de la Bioseguridad</strong>
                  <span className="text-muted-foreground block">
                    Las plagas son <em>vectores sanitarios</em> de múltiples enfermedades transmisibles al ser humano. La bioseguridad en el lugar de trabajo garantiza un ambiente sano, reduciendo el ausentismo laboral por enfermedades.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[var(--olive)] shrink-0 mt-1" />
                <div>
                  <strong className="block text-lg font-medium text-foreground mb-1">Cumplimiento Normativo y Auditorías</strong>
                  <span className="text-muted-foreground block">
                    Las empresas están sujetas a estrictas normativas del Ministerio de Salud. Un programa de mantención preventiva documentada facilita el éxito en auditorías de higiene y seguridad, evitando multas o clausuras.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[var(--olive)] shrink-0 mt-1" />
                <div>
                  <strong className="block text-lg font-medium text-foreground mb-1">Cuidado del Patrimonio y Activos</strong>
                  <span className="text-muted-foreground block">
                    Termitas, roedores que mastican cables (causando cortocircuitos) y aves que dañan fachadas con sus deposiciones generan pérdidas millonarias en infraestructura.
                  </span>
                </div>
              </li>
            </ul>

            <h2 className="text-3xl mt-12 mb-6">Nuestra Estrategia B2B</h2>
            <p>
              En Paisajismo Bascharant, nuestros contratos de mantenimiento incluyen servicios de control fitosanitario programado y fumigaciones preventivas. A través de un <strong>SLA (Service Level Agreement)</strong>, aseguramos inspecciones periódicas, barreras perimetrales y endoterapia en el arbolado, protegiendo las inversiones de nuestros clientes corporativos.
            </p>

            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h4 className="font-medium text-lg mb-1">¿Necesitas proteger tu empresa?</h4>
                <p className="text-muted-foreground text-sm">Contáctanos para una evaluación gratuita.</p>
              </div>
              <a 
                href="/contacto" 
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[var(--olive)] text-white hover:bg-[var(--olive-dark)] transition-colors font-medium tracking-wide"
              >
                Solicitar Evaluación
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
