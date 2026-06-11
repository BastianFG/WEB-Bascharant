import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ThermometerSun, ArrowRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import FloatingBackButton from "@/components/site/FloatingBackButton";

export const Route = createFileRoute("/info/muros-verdes-y-jardines-verticales-corporativos")({
  head: () => ({
    meta: [
      { title: "Muros Verdes y Jardines Verticales | Info" },
      {
        name: "description",
        content: "Descubre cómo los muros verdes combaten las islas de calor urbanas, mejoran la calidad del aire y elevan la estética arquitectónica de tu empresa.",
      },
    ],
  }),
  component: MurosVerdesArticle,
});

function MurosVerdesArticle() {
  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--sage)]/10 to-transparent pointer-events-none" />
        
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="px-3 py-1 rounded-full bg-[var(--sage)]/20 text-[var(--sage)] text-xs font-medium uppercase tracking-wider">
              Arquitectura Verde
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium uppercase tracking-wider">
              Tendencias
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.1] text-balance mb-8"
          >
            Muros Verdes: Combatiendo <span className="italic text-[var(--sage)]">Islas de Calor</span> y Mejorando la Imagen
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
          <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-normal prose-a:text-[var(--sage)] prose-a:no-underline hover:prose-a:underline max-w-none">
            
            <p className="lead text-xl text-muted-foreground mb-10">
              En zonas densamente pobladas y parques industriales, el espacio horizontal es un recurso escaso. Las fachadas de edificios, muros ciegos y columnas representan "lienzos" perfectos para implementar <strong>jardines verticales</strong> que no solo decoran, sino que cumplen un rol ecológico vital.
            </p>

            <div className="my-12 p-8 rounded-2xl bg-[var(--sage)]/10 border border-[var(--sage)]/20">
              <ThermometerSun className="w-10 h-10 text-[var(--sage)] mb-4" />
              <h3 className="text-xl font-medium mb-3 mt-0 text-foreground">El Efecto de "Isla de Calor"</h3>
              <p className="text-muted-foreground text-base m-0">
                Las superficies de concreto y asfalto absorben la radiación solar y la re-emiten como calor, elevando artificialmente la temperatura de la ciudad. Un muro verde actúa como un <strong>aislante térmico</strong>. Refleja la radiación solar, reduce la temperatura de la pared exterior (y por ende el uso de aire acondicionado interior) y refresca el aire mediante la evapotranspiración de las hojas.
              </p>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Beneficios de un Jardín Vertical Corporativo</h2>
            
            <ul>
              <li><strong>Optimización de Espacio:</strong> Permite tener un jardín exuberante sin restar metros cuadrados útiles al estacionamiento o áreas comunes.</li>
              <li><strong>Purificación del Aire:</strong> Las plantas capturan el material particulado (smog, polvo) y absorben dióxido de carbono.</li>
              <li><strong>Aislamiento Acústico:</strong> La masa vegetal amortigua el ruido de la calle, creando un interior mucho más silencioso.</li>
              <li><strong>Estética Monumental:</strong> Una fachada verde cubierta de vida posiciona visualmente el edificio como un hito sustentable e innovador.</li>
            </ul>

            <h2 className="text-3xl mt-12 mb-6">Mantenimiento y Riego</h2>
            <p>
              Construir un muro verde requiere pericia técnica. Utilizamos sistemas hidropónicos o de sustrato especializado con riego por goteo automatizado y canaletas de recirculación de agua para garantizar que la estructura no sufra filtraciones de humedad y la vegetación se mantenga próspera con bajo consumo hídrico.
            </p>

            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h4 className="font-medium text-lg mb-1">¿Imaginando tu fachada verde?</h4>
                <p className="text-muted-foreground text-sm">Explora nuestros proyectos de habilitación vertical.</p>
              </div>
              <a 
                href="/proyecto-muro-verde-vertical-vitacura-chile" 
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[var(--sage)] text-background hover:opacity-90 transition-opacity font-medium tracking-wide whitespace-nowrap"
              >
                Ver Proyecto de Muro Verde <ArrowRight className="ml-2 w-4 h-4" />
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
