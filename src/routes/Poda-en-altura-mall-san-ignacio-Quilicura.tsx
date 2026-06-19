import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import { useState } from "react";
import img1 from "@/assets/Trabajos/Poda-en-altura-mall-san-ignacio-Quilicura.1.jpg";
import img2 from "@/assets/Trabajos/Poda-en-altura-mall-san-ignacio-Quilicura-2.jpg";
import img3 from "@/assets/Trabajos/Poda-en-altura-mall-san-ignacio-Quilicura-3.jpg";
import img4 from "@/assets/Trabajos/Poda-en-altura-mall-san-ignacio-Quilicura-4.jpg";

export const Route = createFileRoute("/Poda-en-altura-mall-san-ignacio-Quilicura")({
  head: () => ({
    meta: [
      { title: "Poda en Altura Mall San Ignacio | Bascharant" },
      { name: "description", content: "Poda en altura ejecutada en el Mall Arauco San Ignacio Quilicura." },
    ],
  }),
  component: ProjectDetail,
});

const images = [img1, img2, img3, img4];

function ProjectDetail() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden pt-24">
      <Navbar />
      
      <article className="container mx-auto px-6 py-12 md:py-20 max-w-6xl">
        <div className="mb-10">
          <Link 
            to="/proyecto-paisajismo" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Proyectos
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <Leaf className="w-12 h-12 text-[var(--olive)]" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Poda en Altura Mall San Ignacio Quilicura</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden bg-muted border border-border/50 shadow-lg mb-10 group">
              <img 
                src={images[currentIndex]} 
                alt={`Poda en Altura Mall San Ignacio - Imagen ${currentIndex + 1}`} 
                className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700"
              />
              
              {/* Carousel Controls */}
              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Carousel Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          idx === currentIndex ? "bg-[var(--olive)] w-6" : "bg-white/60 hover:bg-white/90"
                        }`}
                        aria-label={`Ir a la imagen ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Descripción del Proyecto</h2>
              <p className="text-muted-foreground leading-relaxed text-[17px]">
                Operativo de <strong>ejecución de obras</strong> correspondiente a la poda en altura en las instalaciones del Mall Arauco San Ignacio, ubicado en Quilicura. Las labores se llevaron a cabo de forma segura y eficiente durante un plazo de 3 días para garantizar la mantención del arbolado urbano y la seguridad de los visitantes del recinto.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-32 p-8 rounded-3xl bg-secondary/30 border border-border/60 shadow-[0_10px_40px_-10px_rgba(132,175,76,0.1)]">
              <h3 className="text-xl font-bold mb-6 border-b border-border/50 pb-4">Ficha Técnica</h3>
              
              <ul className="space-y-6">
                <li>
                  <span className="block text-sm font-medium text-muted-foreground mb-1">Mandante</span>
                  <span className="block text-foreground font-semibold flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--olive)] mt-1 flex-shrink-0" />
                    Mall Arauco San Ignacio
                  </span>
                </li>
                <li>
                  <span className="block text-sm font-medium text-muted-foreground mb-1">Año Registro</span>
                  <span className="block text-foreground font-semibold flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--olive)] mt-1 flex-shrink-0" />
                    2018 - enero
                  </span>
                </li>
                <li>
                  <span className="block text-sm font-medium text-muted-foreground mb-1">Ubicación</span>
                  <span className="block text-foreground font-semibold flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--olive)] mt-1 flex-shrink-0" />
                    Quilicura
                  </span>
                </li>
                <li>
                  <span className="block text-sm font-medium text-muted-foreground mb-1">Plazo de Entrega</span>
                  <span className="block text-foreground font-semibold flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--olive)] mt-1 flex-shrink-0" />
                    3 días
                  </span>
                </li>
              </ul>
              
              <div className="mt-10 pt-8 border-t border-border/50 text-center">
                <p className="text-sm text-muted-foreground mb-4">¿Necesitas poda en altura u otros servicios?</p>
                <a 
                  href="/#contacto"
                  className="inline-flex w-full justify-center items-center rounded-full bg-[var(--olive)] px-6 py-3.5 text-sm font-semibold tracking-wide text-white hover:bg-[var(--olive-dark)] transition-all shadow-md hover:shadow-lg"
                >
                  Contactar Asesoría
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
