import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Editorial from "@/components/site/Editorial";
import Forms from "@/components/site/Forms";
import Gallery from "@/components/site/Gallery";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import { LogosEmpresas } from "@/components/site/LogosEmpresas";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paisajismo Bascharant — Empresa de paisajismo en Chile" },
      { name: "description", content: "Diseño, ejecución y mantención de proyectos paisajísticos para empresas, hogares y espacios comerciales en Chile." },
      { property: "og:title", content: "Paisajismo Bascharant SpA" },
      { property: "og:description", content: "Empresa de paisajismo arquitectónico. Transformamos espacios en experiencias naturales." },
      { name: "google-site-verification", content: "iFdVG8aUcn3RJdL8JAym-st9Fo3KYBUDFGTF_JXIrno" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300..600,0..100&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogosEmpresas />
      <Services />
      <Editorial />
      <Forms />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
      <Toaster position="bottom-left" />
    </main>
  );
}
