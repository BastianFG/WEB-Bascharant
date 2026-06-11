import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, User, Clock, Settings2, ArrowRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import FloatingBackButton from "@/components/site/FloatingBackButton";

export const Route = createFileRoute("/info/importancia-riego-inteligente-empresas")({
  head: () => ({
    meta: [
      { title: "Sistemas de Riego Inteligente | Info" },
      {
        name: "description",
        content: "La importancia de implementar sistemas de riego tecnificado e inteligente en áreas corporativas para optimizar el consumo de agua y reducir costos.",
      },
    ],
  }),
  component: RiegoInteligenteArticle,
});

function RiegoInteligenteArticle() {
  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--clay)]/5 to-transparent pointer-events-none" />
        
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="px-3 py-1 rounded-full bg-[var(--clay)]/10 text-[var(--clay)] text-xs font-medium uppercase tracking-wider">
              Tecnología
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium uppercase tracking-wider">
              Optimización
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.1] text-balance mb-8"
          >
            Reducción de Costos con <span className="italic text-[var(--clay)]">Sistemas de Riego Inteligente</span>
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

      <section className="relative py-16 md:py-24 flex-grow">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 article-content">
          <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-normal prose-a:text-[var(--clay)] prose-a:no-underline hover:prose-a:underline max-w-none">
            
            <p className="lead text-xl text-muted-foreground mb-10">
              Un error común en las grandes infraestructuras empresariales es mantener un sistema de riego anticuado (con mangueras o aspersores mal calibrados) basándose en que "aún funciona". Esta ineficiencia se traduce en pérdidas millonarias anuales debido al desperdicio de agua y daño estructural.
            </p>

            <h2 className="text-3xl mt-12 mb-6">El Problema del Riego Tradicional</h2>
            <p>
              El riego manual o con programadores obsoletos no toma en cuenta las variables ambientales. Riega durante lluvias, evapora el agua si riega en horas de calor máximo, y a menudo genera encharcamientos que pudren las raíces y propician enfermedades fungosas (hongos).
            </p>

            <div className="my-12 p-8 rounded-2xl bg-[var(--clay)]/5 border border-[var(--clay)]/20">
              <Settings2 className="w-10 h-10 text-[var(--clay)] mb-4" />
              <h3 className="text-xl font-medium mb-3 mt-0 text-foreground">El Riego Tecnificado e Inteligente</h3>
              <p className="text-muted-foreground text-base m-0">
                Un sistema de riego inteligente incluye <strong>sensores de lluvia y humedad de suelo</strong>. Además, los programadores modernos se conectan a internet para leer el pronóstico del clima local, ajustando automáticamente los tiempos de riego según la evapotranspiración diaria real.
              </p>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Riego por Goteo: Precisión Quirúrgica</h2>
            <p>
              Especialmente en proyectos de Xerojardinería y macizos florales, el cambio de aspersores a <strong>líneas de goteo</strong> es fundamental. El agua se entrega directamente a la zona radicular (las raíces) de forma lenta, eliminando la evaporación por viento y minimizando el crecimiento de malezas, ya que el suelo superficial permanece seco.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Retorno de Inversión (ROI)</h2>
            <p>
              Aunque la instalación de un sistema automatizado requiere una inversión inicial, el retorno es sorprendentemente rápido. La disminución de hasta un 50% en la cuenta de agua potable (o industrial) y la fuerte reducción en las horas-hombre dedicadas al riego manual amortizan el proyecto generalmente en los primeros 12 a 18 meses.
            </p>

            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h4 className="font-medium text-lg mb-1">Moderniza el sistema de tu empresa</h4>
                <p className="text-muted-foreground text-sm">Evaluamos y reparamos la red hídrica de tu corporación.</p>
              </div>
              <a 
                href="/diseno-y-construcion-de-sistemas-de-riego" 
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[var(--clay)] text-white hover:opacity-90 transition-opacity font-medium tracking-wide whitespace-nowrap"
              >
                Servicio de Riego <ArrowRight className="ml-2 w-4 h-4" />
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
