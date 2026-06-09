import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";
import { Toaster } from "@/components/ui/sonner";
import { ChevronLeft } from "lucide-react";

interface ServiceLayoutProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
}

export default function ServiceLayout({
  title,
  description,
  imageSrc,
  imageAlt,
  children,
}: ServiceLayoutProps) {
  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Header */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Botón Volver (Flotante sobre la imagen) */}
        <div className="absolute top-6 left-4 md:top-8 md:left-8 z-20">
          <a
            href="/#servicios"
            className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white/90 hover:text-white transition-all duration-300 text-sm font-medium shadow-lg"
          >
            <ChevronLeft className="w-4 h-4" />
            Volver
          </a>
        </div>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 tracking-tightest text-balance drop-shadow-md">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-balance drop-shadow">
            {description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-soft p-8 md:p-12 border border-border/50">
          {children}
        </div>
      </section>

      <Footer />
      <FloatingCTA />
      <Toaster position="bottom-left" />
    </main>
  );
}
