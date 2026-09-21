import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, User, Clock, AlertTriangle } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import FloatingBackButton from "@/components/site/FloatingBackButton";

export const Route = createFileRoute("/info/riesgos-desmalezar-espacios-publicos-sin-gestion")({
  head: () => ({
    meta: [
      { title: "Riesgos de Desmalezar sin Gestión | Info" },
      {
        name: "description",
        content: "Los graves riesgos de desmalezar en espacios públicos sin gestión previa. Conoce los peligros de proyectiles, daños a propiedad y contaminación acústica.",
      },
    ],
  }),
  component: RiesgosDesmalezadoArticle,
});

function RiesgosDesmalezadoArticle() {
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
            <span className="px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-medium uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle size={14} /> Prevención de Riesgos
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
            El proyectil invisible: Los graves riesgos de desmalezar en espacios públicos sin <span className="italic text-[var(--olive)]">gestión previa</span>
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
              <span>19 de Junio, 2026</span>
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
          <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-normal prose-a:text-[var(--olive)] prose-a:no-underline hover:prose-a:underline max-w-none">
            
            <p className="lead text-xl text-muted-foreground mb-10">
              Es una escena común en casi cualquier instalación comercial, parque logístico o centro corporativo: un operario trabajando con una máquina desmalezadora para mantener a raya la vegetación. Sin embargo, lo que parece una simple tarea de mantenimiento rutinario puede convertirse en segundos en un grave problema legal y financiero si no existe una gestión de riesgos previa.
            </p>

            <p>
              Las desmalezadoras (o motoguadañas) operan a miles de revoluciones por minuto. En espacios con alto flujo de clientes, colaboradores o vehículos, el uso de esta maquinaria sin protocolos estrictos es, literalmente, operar cerca de un campo de tiro.
            </p>

            <h2 className="text-3xl mt-12 mb-6 text-destructive">Estos son los tres riesgos críticos que toda administración debe considerar antes de autorizar estos trabajos:</h2>

            <div className="my-8 p-6 rounded-2xl bg-secondary/30 border border-border/40">
              <h3 className="text-xl font-medium mb-3 mt-0 flex items-center gap-3">
                <span className="text-destructive font-bold">1.</span> El riesgo de proyectiles a alta velocidad
              </h3>
              <p className="text-muted-foreground text-base m-0">
                El hilo o la cuchilla de una desmalezadora no solo corta hierba. Al impactar contra el suelo, la máquina puede levantar piedras, trozos de alambre, escombros o ramas secas, convirtiéndolos en proyectiles que salen disparados a más de 200 km/h. Un impacto de este tipo contra un transeúnte puede causar lesiones oculares graves o traumatismos severos, derivando en demandas por responsabilidad civil contra el recinto.
              </p>
            </div>

            <div className="my-8 p-6 rounded-2xl bg-secondary/30 border border-border/40">
              <h3 className="text-xl font-medium mb-3 mt-0 flex items-center gap-3">
                <span className="text-destructive font-bold">2.</span> Daños a la propiedad y activos de terceros
              </h3>
              <p className="text-muted-foreground text-base m-0">
                Incluso si no hay personas cerca, los daños materiales son una amenaza constante en áreas sin gestión previa. Una piedra proyectada puede destrozar los ventanales de cristal de un local comercial, dañar luminarias o, lo que es muy común, abollar y romper los parabrisas de los vehículos estacionados en las instalaciones. El costo de reparar estos daños y la pérdida de confianza del cliente o locatario superan con creces cualquier ahorro en mantenimiento.
              </p>
            </div>

            <div className="my-8 p-6 rounded-2xl bg-secondary/30 border border-border/40">
              <h3 className="text-xl font-medium mb-3 mt-0 flex items-center gap-3">
                <span className="text-destructive font-bold">3.</span> Contaminación acústica y riesgos operativos
              </h3>
              <p className="text-muted-foreground text-base m-0">
                El uso de maquinaria de combustión genera altos niveles de decibeles. Realizar estos trabajos en horarios de alta afluencia o cerca de oficinas operativas sin una planificación de horarios interrumpe el bienestar laboral, afecta la experiencia del cliente y genera un entorno hostil que contradice los estándares de calidad de cualquier corporación moderna.
              </p>
            </div>

            <h2 className="text-3xl mt-12 mb-6">La solución: Mantenimiento bajo protocolos estrictos</h2>

            <p>
              Evitar estos peligros no significa dejar crecer la maleza, sino profesionalizar su control. Una gestión operativa responsable exige:
            </p>

            <ul className="space-y-4 my-8">
              <li>
                <strong>Zonificación y aislamiento:</strong> Uso de mallas perimetrales móviles (pantallas protectoras) para atrapar proyectiles antes de que salgan de la zona de trabajo.
              </li>
              <li>
                <strong>Inspección del terreno:</strong> Un barrido visual previo al encendido de la máquina para retirar piedras y escombros del área a intervenir.
              </li>
              <li>
                <strong>Planificación horaria:</strong> Ejecutar las tareas de mayor impacto en ventanas de tiempo con nulo o bajo flujo peatonal y vehicular.
              </li>
            </ul>

            <div className="my-12 p-8 rounded-2xl bg-[var(--olive)]/5 border border-[var(--olive)]/20 text-center">
              <p className="text-lg font-medium text-foreground m-0">
                Garantizar que estos procesos se realicen de forma completamente segura requiere experiencia y rigor operativo.
              </p>
              <p className="text-muted-foreground mt-4 mb-0">
                Mantener la calidad de nuestros servicios por más de 10 años nos ha demostrado que la prevención de riesgos es el pilar fundamental de cualquier mantenimiento corporativo exitoso.
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
