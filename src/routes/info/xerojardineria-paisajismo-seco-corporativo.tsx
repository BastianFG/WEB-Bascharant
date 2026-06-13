import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, User, Clock, Droplets, ArrowRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import FloatingBackButton from "@/components/site/FloatingBackButton";
import GlossaryLink from "@/components/site/GlossaryLink";

export const Route = createFileRoute("/info/xerojardineria-paisajismo-seco-corporativo")({
  head: () => ({
    meta: [
      { title: "Xerojardinería y Paisajismo Seco | Info" },
      {
        name: "description",
        content: "Soluciones de paisajismo sustentable ante la crisis hídrica. Conoce las ventajas corporativas de la xerojardinería y la eficiencia hídrica.",
      },
    ],
  }),
  component: XerojardineriaArticle,
});

function XerojardineriaArticle() {
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
            <span className="px-3 py-1 rounded-full bg-[var(--charcoal)]/10 text-[var(--charcoal)] text-xs font-medium uppercase tracking-wider">
              Eficiencia Hídrica
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium uppercase tracking-wider">
              Sostenibilidad
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.1] text-balance mb-8"
          >
            <span className="italic text-muted-foreground">Xerojardinería:</span> La Solución Sustentable ante la Crisis Hídrica
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
              <span>5 min de lectura</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative py-16 md:py-24 flex-grow">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 article-content">
          <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-normal prose-a:text-[var(--charcoal)] prose-a:no-underline hover:prose-a:underline max-w-none">
            
            <p className="lead text-xl text-muted-foreground mb-10">
              Con el cambio climático y la sequía prolongada en la zona central, mantener vastas extensiones de césped en corporaciones es insostenible financiera y ecológicamente. La respuesta es la <strong><GlossaryLink>Xerojardinería</GlossaryLink></strong> (o Paisajismo Seco).
            </p>

            <h2 className="text-3xl mt-12 mb-6">El Fin del Césped Excesivo</h2>
            <p>
              El modelo tradicional de paisajismo comercial priorizaba grandes explanadas de pasto que consumen cientos de litros de agua diarios, además de requerir cortadoras (que consumen combustible y emiten ruido) y altos niveles de fertilizantes. Las empresas modernas están haciendo una transición rápida hacia el reemplazo de estos paños de pasto por alternativas de bajo consumo.
            </p>

            <div className="my-12 p-8 rounded-2xl bg-[var(--charcoal)]/5 border border-[var(--charcoal)]/20">
              <Droplets className="w-10 h-10 text-[var(--charcoal)] mb-4" />
              <h3 className="text-xl font-medium mb-3 mt-0 text-foreground">El Estrés Hídrico en Chile</h3>
              <p className="text-muted-foreground text-base m-0">
                Al adoptar especies nativas y flora adaptada, una empresa puede reducir su huella hídrica (consumo de agua para riego) <strong>hasta en un 70%</strong>. Esto no solo genera un impacto ecológico tremendo, sino que amortigua directamente la factura mensual de servicios.
              </p>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Pilares del Paisajismo Seco Corporativo</h2>
            
            <ul>
              <li><strong>Selección Vegetal Nativa:</strong> Especies xerófitas o de clima mediterráneo (como el pennisetum, romero rastrero, lavandas y suculentas) que están biológicamente preparadas para soportar largos períodos de sequía.</li>
              <li><strong>Uso de Mulch y Cubresuelos:</strong> Aplicar cortezas de árbol, gravillas o canto rodado sobre el sustrato frena la evaporación del agua, manteniendo la humedad del suelo y dificultando el crecimiento de malezas.</li>
              <li><strong>Topografía Funcional:</strong> Diseño de leves desniveles ("Rain Gardens") que captan el agua lluvia invernal y permiten que percole hacia las napas, evitando la <GlossaryLink>escorrentía</GlossaryLink> inútil.</li>
            </ul>

            <h2 className="text-3xl mt-12 mb-6">Imagen Corporativa de Responsabilidad</h2>
            <p>
              Cambiar un jardín tradicional por xerojardinería manda un mensaje potente a la comunidad y a los inversionistas (ESG): la corporación es consciente de su entorno, asume el desafío del cambio climático y toma acciones concretas de conservación de recursos.
            </p>

            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h4 className="font-medium text-lg mb-1">¿Listo para reconvertir tus áreas verdes?</h4>
                <p className="text-muted-foreground text-sm">Realizamos proyectos de reconversión hídrica "llave en mano".</p>
              </div>
              <a 
                href="/proyecto-paisajismo" 
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[var(--charcoal)] text-white hover:bg-black transition-colors font-medium tracking-wide whitespace-nowrap"
              >
                Ver Proyectos Similares <ArrowRight className="ml-2 w-4 h-4" />
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
