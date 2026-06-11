import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, User, Clock, Syringe, ArrowRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import FloatingBackButton from "@/components/site/FloatingBackButton";

export const Route = createFileRoute("/info/endoterapia-vegetal-alternativa-ecologica")({
  head: () => ({
    meta: [
      { title: "Endoterapia Vegetal | Info" },
      {
        name: "description",
        content: "Conoce la Endoterapia Vegetal, una alternativa ecológica y segura para el control fitosanitario del arbolado en entornos corporativos y urbanos.",
      },
    ],
  }),
  component: EndoterapiaArticle,
});

function EndoterapiaArticle() {
  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      
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
              Sanidad Vegetal
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium uppercase tracking-wider">
              Innovación
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.1] text-balance mb-8"
          >
            <span className="italic text-[var(--olive)]">Endoterapia Vegetal:</span> Alternativa Ecológica para Empresas
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
              <span>3 min de lectura</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 flex-grow">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 article-content">
          <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-normal prose-a:text-[var(--olive)] prose-a:no-underline hover:prose-a:underline max-w-none">
            
            <p className="lead text-xl text-muted-foreground mb-10">
              Durante décadas, el control de plagas en árboles de gran altura ha dependido de fumigaciones aéreas y aspersiones. Este método no solo desperdicia gran cantidad de químicos, sino que es altamente tóxico para los transeúntes, empleados y fauna útil (como abejas). La <strong>Endoterapia</strong> llega a cambiar el paradigma.
            </p>

            <div className="my-12 p-8 rounded-2xl bg-[var(--olive)]/5 border border-[var(--olive)]/20">
              <Syringe className="w-10 h-10 text-[var(--olive)] mb-4" />
              <h3 className="text-xl font-medium mb-3 mt-0 text-foreground">¿En qué consiste la Endoterapia?</h3>
              <p className="text-muted-foreground text-base m-0">
                Al igual que una "vacuna", la endoterapia vegetal consiste en la inyección directa del producto fitosanitario (o nutriente) en el sistema vascular del árbol. La propia savia de la planta se encarga de distribuir el producto de manera uniforme hasta las hojas, eliminando la plaga desde adentro.
              </p>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Ventajas Críticas para Entornos Corporativos</h2>
            
            <ul>
              <li><strong>Cero contaminación ambiental:</strong> Al no haber aspersión, no hay deriva por viento. El químico jamás entra en contacto con el aire, el suelo, ni el agua subterránea.</li>
              <li><strong>Inocuidad para personas:</strong> Se puede aplicar en pleno horario laboral o en zonas de alto tránsito peatonal sin necesidad de evacuar ni acordonar el área.</li>
              <li><strong>Efectividad prolongada:</strong> El producto queda encapsulado dentro del árbol, protegiéndolo hasta por un año entero, lo que reduce la frecuencia de intervenciones de mantenimiento.</li>
              <li><strong>Protección de Biodiversidad:</strong> Como solo afecta a los insectos que se alimentan de la savia o las hojas del árbol (plagas), los insectos polinizadores y depredadores naturales no sufren daños.</li>
            </ul>

            <h2 className="text-3xl mt-12 mb-6">El Estándar Moderno</h2>
            <p>
              Cualquier empresa que busque certificaciones ambientales o de sustentabilidad (como LEED o ISO 14001) debe considerar fuertemente el reemplazo de fumigaciones tradicionales por Endoterapia para el cuidado de su arbolado.
            </p>

            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h4 className="font-medium text-lg mb-1">Protege tu arbolado de forma segura</h4>
                <p className="text-muted-foreground text-sm">Ofrecemos servicios de Endoterapia y Control Fitosanitario.</p>
              </div>
              <a 
                href="/control-fitosanitario-y-manejo-de-plagas-areas-verdes" 
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[var(--olive)] text-white hover:bg-[var(--olive-dark)] transition-colors font-medium tracking-wide whitespace-nowrap"
              >
                Servicios Fitosanitarios <ArrowRight className="ml-2 w-4 h-4" />
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
