import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, User, Clock } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import FloatingBackButton from "@/components/site/FloatingBackButton";

export const Route = createFileRoute("/info/importancia-de-areas-verdes-oficinas-empresas")({
  head: () => ({
    meta: [
      { title: "Importancia de Áreas Verdes en Oficinas | Info" },
      {
        name: "description",
        content: "Por qué llevar la naturaleza al interior de la empresa se ha vuelto una ventaja competitiva indispensable para la salud y productividad.",
      },
    ],
  }),
  component: AreasVerdesArticle,
});

function AreasVerdesArticle() {
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
              Bienestar Corporativo
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium uppercase tracking-wider">
              Paisajismo
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.1] text-balance mb-8"
          >
            Importancia de <span className="italic text-[var(--olive)]">Áreas Verdes</span> en Oficinas y Empresas
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
              <span>16 de Junio, 2026</span>
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
              🌿 ¿Por qué gigantes como Amazon están transformando sus oficinas en auténticos jardines botánicos?
            </p>

            <p>
              La idea de "ir a la oficina" era sinónimo de edificios grises, rodeados de cubículos y bajo luces artificiales. Pero con el retorno al trabajo presencial, las empresas se han dado cuenta de algo fundamental: <strong>el espacio de trabajo debe inspirar, no agotar.</strong>
            </p>

            <p>
              Imagínate llegar a trabajar y tomarte un café rodeado de naturaleza real. Eso es exactamente lo que hizo Amazon con sus famosas oficinas “The Spheres” en Seattle: tres impresionantes cúpulas de cristal que albergan más de 40.000 plantas de todo el mundo.
            </p>

            <p>
              ¿Es solo un lujo arquitectónico? Para nada. <strong>Es una inversión estratégica respaldada por la ciencia.</strong>
            </p>

            <h2 className="text-3xl mt-12 mb-6 text-[var(--olive)]">Por qué llevar la naturaleza al interior de la empresa se ha vuelto indispensable:</h2>

            <div className="my-8 p-6 rounded-2xl bg-secondary/30 border border-border/40">
              <h3 className="text-xl font-medium mb-3 mt-0 flex items-center gap-3">
                <span>🧠</span> 1. Es un antídoto natural contra el estrés
              </h3>
              <p className="text-muted-foreground text-base m-0">
                Para quienes asisten a la oficina todos los días, la rutina pesa. Estudios demuestran que tener contacto visual con elementos naturales (como muros verdes o jardines interiores) disminuye los niveles de cortisol. Un entorno verde ofrece un "respiro visual" que calma la ansiedad y reduce drásticamente el burnout o agotamiento emocional.
              </p>
            </div>

            <div className="my-8 p-6 rounded-2xl bg-secondary/30 border border-border/40">
              <h3 className="text-xl font-medium mb-3 mt-0 flex items-center gap-3">
                <span>💡</span> 2. Dispara la concentración y la productividad
              </h3>
              <p className="text-muted-foreground text-base m-0">
                A diferencia de lo que algunos creen, las áreas de descanso verdes no son una distracción; son un "cargador de baterías". Los equipos que trabajan en espacios con integración paisajística resuelven problemas de forma más creativa, se concentran mejor y cometen menos errores que aquellos en oficinas estériles.
              </p>
            </div>

            <div className="my-8 p-6 rounded-2xl bg-secondary/30 border border-border/40">
              <h3 className="text-xl font-medium mb-3 mt-0 flex items-center gap-3">
                <span>🍃</span> 3. Aire más limpio, equipos más sanos
              </h3>
              <p className="text-muted-foreground text-base m-0">
                Las plantas son los mejores filtros de aire gratuitos del mundo. En espacios cerrados donde pasamos más de 8 horas diarias, la vegetación purifica el ambiente y regula la humedad. ¿El resultado? Menos dolores de cabeza, menos fatiga visual y una caída importante en el ausentismo por enfermedad.
              </p>
            </div>

            <div className="my-8 p-6 rounded-2xl bg-secondary/30 border border-border/40">
              <h3 className="text-xl font-medium mb-3 mt-0 flex items-center gap-3">
                <span>🧲</span> 4. Es un imán para el mejor talento
              </h3>
              <p className="text-muted-foreground text-base m-0">
                Los profesionales de hoy evalúan la calidad de vida que les ofrece su lugar de trabajo. Una empresa que invierte en áreas verdes y paisajismo está enviando un mensaje claro: "Nos importa tu bienestar". Es una herramienta de retención de talento poderosísima.
              </p>
            </div>

            <div className="my-12 p-8 rounded-2xl bg-[var(--olive)]/5 border border-[var(--olive)]/20 text-center">
              <p className="text-lg font-medium text-foreground m-0">
                La buena noticia es que no necesitas construir una cúpula de millones de dólares para lograr esto.
              </p>
              <p className="text-muted-foreground mt-4 mb-0">
                El paisajismo corporativo dejó de ser un simple adorno. Hoy, es la mejor inversión para el activo más importante de tu empresa.
              </p>
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
