import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import Gallery from "@/components/site/Gallery";
import Testimonials from "@/components/site/Testimonials";
import UnderConstructionOverlay from "@/components/site/UnderConstructionOverlay";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/proyecto-paisajismo")({
  head: () => ({
    meta: [
      { title: "Proyectos y Portafolio | Paisajismo Bascharant" },
      {
        name: "description",
        content:
          "Explora nuestro portafolio de proyectos de paisajismo corporativo, diseño, ejecución y mantención de áreas verdes. Soluciones ecológicas en Chile.",
      },
      { property: "og:title", content: "Proyectos— Paisajismo Bascharant" },
      {
        property: "og:description",
        content:
          "Galería de proyectos de Paisajismo Bascharant. Transformando grandes superficies con sustentabilidad, riego automatizado y silvicultura preventiva.",
      },
      {
        name: "keywords",
        content:
          "paisajismo corporativo, proyectos paisajísticos, áreas verdes , riego tecnificado, sustentabilidad hídrica, diseño de jardines chile, mantención de áreas verdes",
      },
    ],
  }),
  component: ProyectosPage,
});

function ProyectosPage() {
  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden pt-20">
      <Navbar />
      <div className="py-10">
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
