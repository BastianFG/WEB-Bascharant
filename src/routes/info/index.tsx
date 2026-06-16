import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, Leaf, ArrowRight, BrainCircuit, Droplets, Settings2, Syringe, ThermometerSun, Bug } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import FloatingBackButton from "@/components/site/FloatingBackButton";
import GlossaryLink from "@/components/site/GlossaryLink";

export const Route = createFileRoute("/info/")({
  head: () => ({
    meta: [
      { title: "Info y Artículos | Paisajismo Bascharant" },
      {
        name: "description",
        content: "Revista digital y blog con artículos sobre paisajismo, fumigaciones preventivas, poda técnica y mantenimiento de áreas verdes.",
      },
    ],
  }),
  component: InfoIndexPage,
});

const ARTICLES = [
  {
    title: "Importancia del Desmalezado y Control de Plagas",
    description: <>Descubre por qué el desmalezado regular es fundamental para la prevención y el <GlossaryLink>control fitosanitario</GlossaryLink> en recintos empresariales.</>,
    href: "/info/importancia-desmalezado-control-plagas-empresas",
    icon: <Bug className="w-8 h-8 text-[var(--olive)]" strokeWidth={1.5} />,
    tags: ["Maleza", "Prevención", "Plagas"],
    date: "15 Jun 2026"
  },
  {
    title: "La Importancia de las Fumigaciones Preventivas",
    description: <>Descubre por qué las <GlossaryLink>fumigaciones preventivas</GlossaryLink> son esenciales para la <GlossaryLink>bioseguridad</GlossaryLink> y el <GlossaryLink>control integral de plagas</GlossaryLink> en las empresas.</>,
    href: "/info/importancia-fumigaciones-preventivas",
    icon: <ShieldCheck className="w-8 h-8 text-[var(--olive)]" strokeWidth={1.5} />,
    tags: ["MIP", "Bioseguridad", "Corporativo"],
    date: "11 Jun 2026"
  },
  {
    title: "Importancia de la Poda Preventiva en Otoño",
    description: <>Preparar el <GlossaryLink>arbolado urbano</GlossaryLink> y los jardines corporativos antes del invierno reduce <GlossaryLink>riesgos biomecánicos</GlossaryLink> y mejora la salud vegetal.</>,
    href: "/info/importancia-poda-preventiva-otono",
    icon: <Leaf className="w-8 h-8 text-[var(--olive)]" strokeWidth={1.5} />,
    tags: ["Silvicultura", "Prevención", "Otoño"],
    date: "10 Jun 2026"
  },
  {
    title: "Beneficios del Diseño Biofílico en la Productividad",
    description: <>Aprende cómo la integración de áreas verdes y el <GlossaryLink>diseño biofílico</GlossaryLink> en empresas reduce el estrés y eleva la productividad.</>,
    href: "/info/beneficios-diseno-biofilico-productividad",
    icon: <BrainCircuit className="w-8 h-8 text-[var(--olive)]" strokeWidth={1.5} />,
    tags: ["Bienestar", "Biofilia", "Oficinas"],
    date: "11 Jun 2026"
  },
  {
    title: "Xerojardinería: Paisajismo ante la Crisis Hídrica",
    description: <>Conoce las ventajas corporativas de la <GlossaryLink>Xerojardinería</GlossaryLink> (paisajismo seco) y la eficiencia hídrica como solución a la sequía prolongada.</>,
    href: "/info/xerojardineria-paisajismo-seco-corporativo",
    icon: <Droplets className="w-8 h-8 text-[var(--olive)]" strokeWidth={1.5} />,
    tags: ["Agua", "Sostenibilidad", "Nativo"],
    date: "11 Jun 2026"
  },
  {
    title: "Reducción de Costos con Riego Inteligente",
    description: <>La importancia de implementar sistemas de <GlossaryLink>riego tecnificado</GlossaryLink> e inteligente para optimizar el consumo de agua corporativo.</>,
    href: "/info/importancia-riego-inteligente-empresas",
    icon: <Settings2 className="w-8 h-8 text-[var(--olive)]" strokeWidth={1.5} />,
    tags: ["Tecnología", "Eficiencia", "Ahorro"],
    date: "11 Jun 2026"
  },
  {
    title: "Endoterapia Vegetal: Alternativa Ecológica",
    description: <>Innovación en <GlossaryLink>sanidad vegetal</GlossaryLink> mediante <GlossaryLink>Endoterapia</GlossaryLink> que protege a los árboles sin emitir químicos al medio ambiente.</>,
    href: "/info/endoterapia-vegetal-alternativa-ecologica",
    icon: <Syringe className="w-8 h-8 text-[var(--olive)]" strokeWidth={1.5} />,
    tags: ["Innovación", "Ecológico", "Árboles"],
    date: "11 Jun 2026"
  },
  {
    title: "Muros Verdes contra las Islas de Calor",
    description: <>Descubre cómo los <GlossaryLink>jardines verticales</GlossaryLink> combaten las altas temperaturas urbanas (reduciendo las <GlossaryLink>islas de calor</GlossaryLink>) y mejoran la imagen corporativa.</>,
    href: "/info/muros-verdes-y-jardines-verticales-corporativos",
    icon: <ThermometerSun className="w-8 h-8 text-[var(--olive)]" strokeWidth={1.5} />,
    tags: ["Arquitectura", "Vertical", "Clima"],
    date: "11 Jun 2026"
  }
];

function InfoIndexPage() {
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
              <span>Revista Digital & Blog</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.1] text-balance mb-6"
            >
              Centro de <span className="italic text-muted-foreground">Información</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-muted-foreground text-lg text-balance mb-12"
            >
              Explora nuestros artículos especializados, consejos técnicos y mejores prácticas en el cuidado de áreas verdes y manejo de plagas corporativo.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="relative pb-24 md:pb-32 flex-grow">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ARTICLES.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-full flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--olive)]/0 to-[var(--clay)]/0 rounded-3xl blur-xl transition-all duration-500 group-hover:from-[var(--olive)]/10 group-hover:to-[var(--clay)]/10 -z-10" />
                
                <a href={item.href} className="h-full flex flex-col p-8 rounded-3xl bg-background/50 backdrop-blur-sm border border-border/40 hover:border-[var(--olive)]/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-[var(--olive)]/10 text-[var(--olive)]">
                      {item.icon}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground/60">{item.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-medium tracking-tight text-foreground group-hover:text-[var(--olive)] transition-colors mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-[14px] leading-relaxed flex-grow mb-6">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/30">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-2 py-0.5 rounded bg-secondary/50 text-secondary-foreground text-[10px] font-medium tracking-wider uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-[var(--olive)] group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
      <FloatingBackButton />
    </main>
  );
}
