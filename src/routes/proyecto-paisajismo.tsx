import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import Gallery from "@/components/site/Gallery";
import Testimonials from "@/components/site/Testimonials";
import UnderConstructionOverlay from "@/components/site/UnderConstructionOverlay";
import { Toaster } from "@/components/ui/sonner";
import { ArrowRight, Leaf, Droplets, ShieldCheck, Scissors, TreePine } from "lucide-react";

export const Route = createFileRoute("/proyecto-paisajismo")({
  head: () => ({
    meta: [
      { title: "Proyectos de Paisajismo y Mantención de Áreas Verdes en Chile | Bascharant" },
      {
        name: "description",
        content: "Explora nuestro portafolio de proyectos de paisajismo en Chile. Especialistas en mantención de áreas verdes, diseño sustentable, riego tecnificado y poda profesional.",
      },
      { property: "og:title", content: "Proyectos de Paisajismo y Áreas Verdes — Bascharant" },
      {
        property: "og:description",
        content: "Líderes en Chile en paisajismo corporativo, mantención de áreas verdes y sistemas de riego.",
      },
      {
        name: "keywords",
        content: "paisajismo chile, mantencion areas verdes, proyectos de paisajismo, diseño de areas verdes, sistemas de riego chile, control fitosanitario, poda de arbolado urbano",
      },
    ],
  }),
  component: ProyectosPage,
});

const seoProjects = [
  {
    title: "Diseño y Construcción de Áreas Verdes",
    href: "/diseno-y-construccion-de-areas-verdes",
    description: "Desarrollo integral de proyectos de paisajismo, desde la concepción arquitectónica hasta la ejecución de obras verdes en todo Chile.",
    icon: <Leaf className="w-8 h-8 text-primary" />,
  },
  {
    title: "Servicio de Mantención de Áreas Verdes",
    href: "/servicio-de-mantencion-de-areas-verdes",
    description: "Expertos en mantención de áreas verdes para empresas, industrias y corporaciones. Cuidado preventivo y correctivo para garantizar la salud de tu entorno.",
    icon: <TreePine className="w-8 h-8 text-primary" />,
  },
  {
    title: "Diseño y Construcción de Sistemas de Riego",
    href: "/diseno-y-construcion-de-sistemas-de-riego",
    description: "Implementación de riego tecnificado y automatizado para optimizar el recurso hídrico en proyectos de paisajismo sustentable.",
    icon: <Droplets className="w-8 h-8 text-primary" />,
  },
  {
    title: "Control Fitosanitario y Manejo de Plagas",
    href: "/control-fitosanitario-y-manejo-de-plagas-areas-verdes",
    description: "Diagnóstico y tratamiento fitosanitario especializado para proteger la vegetación de enfermedades y plagas urbanas en Chile.",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  },
  {
    title: "Poda, Tala y Transplante Profesional de Arbolado",
    href: "/poda-tala-y-transplante-profesional-de-arbolado-urbano-comercial",
    description: "Manejo experto de arbolado urbano y comercial. Servicios de poda en altura, tala controlada y transplante seguro de especies mayores.",
    icon: <Scissors className="w-8 h-8 text-primary" />,
  },
] as const;

function ProyectosPage() {
  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden pt-20">
      <Navbar />
      
      {/* SEO Hero Section */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden bg-gradient-to-b from-muted/50 to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto relative z-10 max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Expertos en Paisajismo en Chile
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Proyectos de <span className="text-primary">Paisajismo</span> y Mantención de Áreas Verdes
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
            En Bascharant somos líderes en el desarrollo de <strong>proyectos de paisajismo en Chile</strong>. 
            Nuestra especialidad abarca desde el diseño inicial hasta el <strong>servicio de mantención de áreas verdes</strong>, 
            garantizando espacios sustentables, eficientes y visualmente impactantes para el sector corporativo, industrial y urbano.
          </p>
        </div>
      </section>

      {/* SEO Index / Hub Section */}
      <section className="py-16 md:py-24 container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios y Especialidades</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Selecciona uno de nuestros proyectos o áreas de experiencia para conocer en detalle cómo transformamos y cuidamos el paisaje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seoProjects.map((project, index) => (
            <Link 
              key={index} 
              to={project.href}
              className="group relative flex flex-col justify-between p-8 rounded-3xl bg-card border border-border/60 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(132,175,76,0.2)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-150 group-hover:rotate-12">
                {project.icon}
              </div>
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10 text-primary shadow-inner">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>
              
              <div className="relative z-10 flex items-center text-primary font-semibold text-sm mt-auto">
                Ver detalles del proyecto 
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="py-20 border-t border-border/60 bg-muted/10">
        <div className="container mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galería de Proyectos Ejecutados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Una muestra visual de nuestro trabajo en paisajismo y mantención a lo largo de Chile.
          </p>
        </div>
        <Gallery />
      </div>

      <div className="border-t border-border/60 bg-muted/30">
        <Testimonials />
      </div>

      <Footer />
      <FloatingCTA />
      <UnderConstructionOverlay />
      <Toaster position="bottom-left" />
    </main>
  );
}
