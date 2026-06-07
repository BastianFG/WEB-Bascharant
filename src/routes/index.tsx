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
      {
        name: "description",
        content:
          "Diseño, ejecución y mantención de proyectos paisajísticos para empresas, hogares y espacios comerciales en Chile.",
      },
      { property: "og:title", content: "Paisajismo Bascharant SpA" },
      {
        property: "og:description",
        content:
          "Empresa de paisajismo arquitectónico. Transformamos espacios en experiencias naturales.",
      },
      { name: "google-site-verification", content: "iFdVG8aUcn3RJdL8JAym-st9Fo3KYBUDFGTF_JXIrno" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300..600,0..100&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LandscapingService",
    "name": "Paisajismo Bascharant SpA",
    "alternateName": "Verde Arcadia Collective",
    "image": "https://bascharant.cl/assets/hero.jpg",
    "@id": "https://bascharant.cl/#organization",
    "url": "https://bascharant.cl",
    "telephone": "+56988458216",
    "email": "Paisajismojf@gmail.com",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Santiago",
      "addressLocality": "Santiago",
      "addressRegion": "Región Metropolitana",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-33.4489",
      "longitude": "-70.6693"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": ["https://www.instagram.com/paisajismobascharant"],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Santiago"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Zapallar"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Frutillar"
      }
    ],
    "description": "Empresa líder en paisajismo corporativo, diseño, ejecución y mantención de áreas verdes comerciales a gran escala en Chile. Especialistas en contratos SLA para constructoras e industrias.",
    "knowsAbout": [
      "Paisajismo Corporativo",
      "Mantención de Áreas Verdes Industriales",
      "Cubicación Técnica de Proyectos",
      "Sistemas de Riego Tecnificado",
      "Poda en Altura Certificada",
      "Habilitación de Oficinas Verdes"
    ]
  };

  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
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
