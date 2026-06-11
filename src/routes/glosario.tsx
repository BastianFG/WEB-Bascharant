import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BookOpen, Leaf, X } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import { Toaster } from "@/components/ui/sonner";
import FloatingBackButton from "@/components/site/FloatingBackButton";

export const Route = createFileRoute("/glosario")({
  head: () => ({
    meta: [
      { title: "Glosario Técnico | Paisajismo Bascharant" },
      {
        name: "description",
        content: "Diccionario y conceptos técnicos sobre paisajismo, mantención de áreas verdes, tratamientos fitosanitarios y servicios corporativos B2B.",
      },
      { property: "og:title", content: "Glosario Técnico — Paisajismo Bascharant" },
      {
        property: "og:description",
        content: "Aprende el significado de conceptos clave como Endoterapia, Fitosanitario, Xerojardinería y más.",
      },
    ],
  }),
  component: GlosarioPage,
});

const GLOSSARY_TERMS = [
  {
    term: "Fitosanitario",
    definition: "Relativo a la prevención y curación de las enfermedades de las plantas. Involucra el control de plagas y enfermedades mediante métodos ecológicos, químicos o biológicos para mantener la salud integral de las áreas verdes.",
    tags: ["Mantenimiento", "Salud Vegetal"]
  },
  {
    term: "Endoterapia",
    definition: "Innovador método terapéutico de tratamientos fitosanitarios del arbolado urbano. Consiste en la inyección del producto directamente en el sistema vascular de la planta. Es más ecológico, focalizado y seguro para el entorno que las fumigaciones tradicionales en spray.",
    tags: ["Innovación", "Arbolado"]
  },
  {
    term: "B2B (Business to Business)",
    definition: "Modelo de negocio corporativo en el que los servicios se prestan de una empresa a otra. En Paisajismo Bascharant, nos especializamos en servicios B2B, atendiendo los exigentes requerimientos de constructoras, condominios, oficinas y corporaciones.",
    tags: ["Corporativo", "Negocios"]
  },
  {
    term: "SLA (Service Level Agreement)",
    definition: "Acuerdo de Nivel de Servicio. Es un contrato corporativo que documenta y asegura los servicios específicos que proveeremos y los estándares de calidad obligatorios. Garantiza a nuestros clientes resultados medibles, predecibles y profesionales.",
    tags: ["Corporativo", "Contratos"]
  },
  {
    term: "Xerojardinería / Paisajismo Seco",
    definition: "Estilo de paisajismo de vanguardia diseñado para minimizar o eliminar la necesidad de riego suplementario. Utiliza especies nativas o exóticas adaptadas al clima árido y técnicas de conservación de humedad, ideal para la crisis hídrica actual en Chile.",
    tags: ["Diseño", "Sustentabilidad"]
  },
  {
    term: "Silvicultura Urbana",
    definition: "Cuidado, manejo y planificación de poblaciones de árboles en entornos urbanos con el propósito de mejorar el medio ambiente y la calidad de vida. Incluye poda técnica, tala preventiva, plantación y evaluación de riesgo biomecánico del arbolado.",
    tags: ["Mantenimiento", "Arbolado"]
  },
  {
    term: "Escorrentía",
    definition: "Flujo del agua de lluvia o riego que escurre sobre la superficie del terreno sin ser absorbida. Un diseño paisajístico ecosistémico, como los 'rain gardens' (jardines de lluvia), ayuda a controlar y retener la escorrentía, previniendo inundaciones locales.",
    tags: ["Agua", "Ecosistema"]
  },
  {
    term: "Biodiversidad",
    definition: "Variedad y variabilidad de especies de flora, fauna y microorganismos en un área verde. Un paisajismo moderno y sustentable busca aumentar activamente la biodiversidad para crear ecosistemas resilientes, hermosos y autorregulados frente a plagas.",
    tags: ["Ecosistema", "Sustentabilidad"]
  },
  {
    term: "Cubicación Técnica",
    definition: "Proceso de cálculo preciso de los materiales, volúmenes de tierra, cantidad de especies vegetales e insumos necesarios para ejecutar un proyecto de paisajismo de acuerdo a los planos y especificaciones técnicas.",
    tags: ["Diseño", "Ejecución"]
  }
];

function GlosarioPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((item) => {
      const searchLower = searchQuery.toLowerCase();
      return (
        item.term.toLowerCase().includes(searchLower) ||
        item.definition.toLowerCase().includes(searchLower) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    });
  }, [searchQuery]);

  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--olive)]/5 pattern-dots opacity-50 pointer-events-none" />
        
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 z-10">
          <div className="max-w-3xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--olive)]/30 bg-[var(--olive)]/10 text-[var(--olive)] text-xs font-medium mb-6"
            >
              <BookOpen size={14} />
              <span>Diccionario Corporativo</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.1] text-balance mb-6"
            >
              Glosario <span className="italic text-muted-foreground">Técnico</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-muted-foreground text-lg text-balance mb-12"
            >
              Comprende los términos clave de la arquitectura del paisaje, la silvicultura urbana y nuestros servicios B2B.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative max-w-xl mx-auto group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--olive)]/20 to-[var(--clay)]/20 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl opacity-50" />
              <div className="relative flex items-center bg-background/80 backdrop-blur-md border border-border/50 rounded-2xl p-2 shadow-lg transition-all focus-within:border-[var(--olive)] focus-within:ring-1 focus-within:ring-[var(--olive)]/50">
                <Search className="w-5 h-5 text-muted-foreground ml-3 mr-2" />
                <input
                  type="text"
                  placeholder="Buscar término (ej. Fitosanitario, SLA...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none outline-none py-2 text-foreground placeholder:text-muted-foreground/70"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="relative pb-24 md:pb-32 flex-grow">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <AnimatePresence mode="popLayout">
            {filteredTerms.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {filteredTerms.map((item, index) => (
                  <motion.div
                    key={item.term}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative h-full"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--olive)]/0 to-[var(--clay)]/0 rounded-3xl blur-xl transition-all duration-500 group-hover:from-[var(--olive)]/10 group-hover:to-[var(--clay)]/10 -z-10" />
                    
                    {/* Card */}
                    <div className="h-full flex flex-col p-8 rounded-3xl bg-background/50 backdrop-blur-sm border border-border/40 hover:border-[var(--olive)]/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-medium tracking-tight text-foreground group-hover:text-[var(--olive)] transition-colors">
                          {item.term}
                        </h3>
                        <Leaf className="w-5 h-5 text-muted-foreground/30 group-hover:text-[var(--olive)]/50 transition-colors" strokeWidth={1.5} />
                      </div>
                      
                      <p className="text-muted-foreground text-[14px] leading-relaxed flex-grow">
                        {item.definition}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/30">
                        {item.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground text-[11px] font-medium tracking-wider uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/50 mb-4">
                  <Search className="w-6 h-6 text-muted-foreground/50" />
                </div>
                <h3 className="text-lg font-medium mb-2">Sin resultados</h3>
                <p className="text-muted-foreground">
                  No encontramos ningún término que coincida con "{searchQuery}".
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
      <FloatingBackButton />
      <Toaster position="bottom-left" />
    </main>
  );
}
