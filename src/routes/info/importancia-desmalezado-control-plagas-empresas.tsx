import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, User, Clock, Bug, ShieldAlert } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import FloatingBackButton from "@/components/site/FloatingBackButton";
import GlossaryLink from "@/components/site/GlossaryLink";

export const Route = createFileRoute("/info/importancia-desmalezado-control-plagas-empresas")({
  head: () => ({
    meta: [
      { title: "Importancia del Desmalezado y Control de Plagas | Info" },
      {
        name: "description",
        content: "Descubre por qué el desmalezado regular es fundamental para la prevención y el control de plagas en recintos empresariales e industriales.",
      },
    ],
  }),
  component: DesmalezadoPlagasArticle,
});

function DesmalezadoPlagasArticle() {
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
              Mantenimiento Industrial
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium uppercase tracking-wider">
              Control de Plagas
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.1] text-balance mb-8"
          >
            La Importancia del <span className="italic text-[var(--clay)]">Desmalezado</span> en las Empresas
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
              <span>15 de Junio, 2026</span>
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
          <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-normal prose-a:text-[var(--clay)] prose-a:no-underline hover:prose-a:underline max-w-none">
            
            <p className="lead text-xl text-muted-foreground mb-10">
              El crecimiento descontrolado de malezas en recintos industriales y corporativos no es solo un problema estético. Es el principal factor de riesgo para la proliferación de plagas, problemas de seguridad y riesgos de incendio que pueden afectar severamente la operatividad de una empresa.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Refugio Natural para Plagas Urbanas</h2>
            <p>
              La maleza densa y alta crea un microclima húmedo y protegido que resulta ideal para la anidación y reproducción de vectores peligrosos. Los roedores (ratones y guarenes), arañas (como la araña de rincón), garrapatas y diversas especies de insectos encuentran en estas zonas abandonadas el ecosistema perfecto para prosperar.
            </p>

            <div className="my-12 p-8 rounded-2xl bg-[var(--clay)]/5 border border-[var(--clay)]/20">
              <Bug className="w-10 h-10 text-[var(--clay)] mb-4" />
              <h3 className="text-xl font-medium mb-3 mt-0 text-foreground">El Impacto en el Control Fitosanitario</h3>
              <p className="text-muted-foreground text-base m-0">
                Cualquier estrategia de <strong><GlossaryLink>Control Fitosanitario</GlossaryLink></strong> o desratización en una instalación fracasará si no se aborda el problema de raíz: el hábitat. Eliminar la maleza perimetral destruye los corredores biológicos que utilizan las plagas para ingresar a las bodegas y oficinas.
              </p>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Prevención de Incendios y Seguridad Operativa</h2>
            <p>
              Especialmente durante las temporadas secas, la maleza muerta o seca se convierte en un combustible altamente inflamable. En entornos industriales, donde puede haber almacenamiento de materiales o tránsito constante de maquinaria, una chispa puede desencadenar una emergencia mayor si el perímetro no está debidamente despejado.
            </p>
            <p>
              Además, el desmalezado mejora significativamente la visibilidad para las cámaras de seguridad (CCTV) y permite al personal de vigilancia detectar intrusiones o anomalías perimetrales sin obstrucciones.
            </p>

            <div className="my-12 p-8 rounded-2xl bg-secondary/20 border border-secondary/30">
              <ShieldAlert className="w-10 h-10 text-secondary-foreground mb-4" />
              <h3 className="text-xl font-medium mb-3 mt-0 text-foreground">Cumplimiento Normativo</h3>
              <p className="text-muted-foreground text-base m-0">
                Mantener los exteriores limpios y desmalezados es fundamental para cumplir con las normativas de higiene y seguridad laboral dictadas por la Seremi de Salud, evitando multas y garantizando un entorno de trabajo seguro.
              </p>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Nuestra Solución Integral</h2>
            <p>
              En Paisajismo Bascharant entendemos que el mantenimiento de áreas verdes industriales va más allá del césped. Nuestro servicio incluye programas regulares de desmalezado mecánico y aplicación controlada de herbicidas autorizados, trabajando en conjunto con estrategias de manejo integral de plagas para mantener sus instalaciones seguras, limpias y operativas los 365 días del año.
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
