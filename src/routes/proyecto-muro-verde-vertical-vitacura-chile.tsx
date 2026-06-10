import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import img from "@/assets/g3.jpg";

export const Route = createFileRoute("/proyecto-muro-verde-vertical-vitacura-chile")({
  head: () => ({
    meta: [
      { title: "Muro Verde Vertical Alto Tránsito Vitacura Chile | Bascharant" },
      { name: "description", content: "Ingeniería e instalación de muro verde vertical en zonas de alto tránsito en Vitacura. Expertos en paisajismo corporativo e innovación." },
      { name: "keywords", content: "muro verde vertical, paisajismo corporativo vitacura, diseño areas verdes chile, jardines verticales santiago" },
      { property: "og:title", content: "Muro Verde Vertical Alto Tránsito Vitacura Chile | Bascharant" },
      { property: "og:description", content: "Ingeniería e instalación de muro verde vertical en zonas de alto tránsito en Vitacura. Expertos en paisajismo corporativo e innovación." },
    ],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{ "Muro Verde Vertical de Alto Tránsito en Vitacura" }</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden bg-muted border border-border/50 shadow-lg mb-10">
              <img 
                src={img} 
                alt="Muro Verde Vertical de Alto Tránsito en Vitacura" 
                className="w-full h-auto max-h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Descripción del Proyecto</h2>
              <p className="text-muted-foreground leading-relaxed text-[17px]" dangerouslySetInnerHTML={{ __html: 'La innovación en <strong>paisajismo urbano</strong> es clave en zonas de alto flujo. En Vitacura, diseñamos e instalamos un <strong>muro verde vertical</strong> utilizando ingeniería de soporte de primer nivel y plantación artificial de alta gama. Esta solución corporativa refleja el compromiso de Bascharant con el <strong>diseño de áreas verdes en Chile</strong> adaptadas a espacios arquitectónicos modernos.' }}></p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-32 p-8 rounded-3xl bg-secondary/30 border border-border/60 shadow-[0_10px_40px_-10px_rgba(132,175,76,0.1)]">
              <h3 className="text-xl font-bold mb-6 border-b border-border/50 pb-4">Ficha Técnica</h3>
              
              <ul className="space-y-6">
                <li>
                  <span className="block text-sm font-medium text-muted-foreground mb-1">Mandante</span>
                  <span className="block text-foreground font-semibold flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    { "Huber Chile" }
                  </span>
                </li>
                <li>
                  <span className="block text-sm font-medium text-muted-foreground mb-1">Servicio Principal</span>
                  <span className="block text-foreground font-semibold flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    { "Ingeniería de soporte y plantación artificial" }
                  </span>
                </li>
                <li>
                  <span className="block text-sm font-medium text-muted-foreground mb-1">Superficie</span>
                  <span className="block text-foreground font-semibold flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    { "120 m²" }
                  </span>
                </li>
                <li>
                  <span className="block text-sm font-medium text-muted-foreground mb-1">Plazo de Ejecución</span>
                  <span className="block text-foreground font-semibold flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-primary">{ "8 días" }</span>
                  </span>
                </li>
              </ul>
              
              <div className="mt-10 pt-8 border-t border-border/50 text-center">
                <p className="text-sm text-muted-foreground mb-4">¿Necesitas un proyecto similar?</p>
                <a 
                  href="/#contacto"
                  className="inline-flex w-full justify-center items-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                >
                  Cotizar Servicio
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
