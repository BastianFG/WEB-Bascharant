import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import History from "@/components/site/History";
import { Toaster } from "@/components/ui/sonner";
import Butterfly from "@/components/site/Butterfly";
import FloatingBackButton from "@/components/site/FloatingBackButton";

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
  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden pt-20">
      <Navbar />
      <Butterfly />
      <Butterfly />
      <Butterfly />
      <Butterfly />
      <Butterfly />
      <Butterfly />
      
      <div className="py-2">
        <History />
      </div>
      <Footer />
      <FloatingCTA />
      <FloatingBackButton />
      <Toaster position="bottom-left" />
    </main>
  );
}
