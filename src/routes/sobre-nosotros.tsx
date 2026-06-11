import { createFileRoute, useRouter } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import History from "@/components/site/History";
import { Toaster } from "@/components/ui/sonner";
import Butterfly from "@/components/site/Butterfly";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Nuestra Historia | Paisajismo Bascharant" },
      {
        name: "description",
        content: "Conoce el origen de Paisajismo Bascharant, una empresa familiar líder en servicios sustentables de áreas verdes guiada por José Alfredo Fuentes Gómez (IDMA).",
      },
      { property: "og:title", content: "Nuestra Historia — Paisajismo Bascharant" },
      {
        property: "og:description",
        content: "Trayectoria familiar y bases ecológicas con el sello de calidad de José Alfredo Fuentes Gómez (IDMA) en Chile.",
      },
    ],
  }),
  component: HistoriaPage,
});

function HistoriaPage() {
  const router = useRouter();
  
  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden pt-20">
      <Navbar />
      <Butterfly />
      <Butterfly />
      <Butterfly />
      <Butterfly />
      <Butterfly />
      <Butterfly />
      
      <div className="pt-12 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <button 
          onClick={() => router.history.back()}
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a la página anterior
        </button>
      </div>
      
      <div className="py-2">
        <History />
      </div>
      <Footer />
      <FloatingCTA />
      <Toaster position="bottom-left" />
    </main>
  );
}
