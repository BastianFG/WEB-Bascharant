import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Editorial from "@/components/site/Editorial";
import Forms from "@/components/site/Forms";
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
    "@type": "LocalBusiness",
    "name": "Paisajismo Bascharant SpA",
    "alternateName": "Verde Arcadia Collective",
    "image": "https://bascharant.cl/assets/hero.jpg",
    "@id": "https://bascharant.cl/#organization",
    "url": "https://bascharant.cl",
    "telephone": "+56988458216",
    "email": "paisajismo@bascharant.com",
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
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": ["https://www.instagram.com/paisajismobascharant"],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Santiago"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Lo Barnechea"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Las Condes"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Vitacura"
      },
      {
        "@type": "AdministrativeArea",
        "name": "La Dehesa"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Huechuraba"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Chicureo"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Quilicura"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Conchalí"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Colina"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Lampa"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Renca"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Macul"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Ñuñoa"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Providencia"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Peñalolén"
      },
      
      {
        "@type": "AdministrativeArea",
        "name": "Cachagua"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Algarrobo"
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
    "description": "Empresa líder en paisajismo , diseño, ejecución y mantención de áreas verdes comerciales en Chile. Especialistas en contratos SLA para constructoras , oficinas , empresas , condominios y particulares.",
    "knowsAbout": [
      "Paisajismo Corporativo",
      "Diseño, Construcción y Mantención de Áreas Verdes.",
      "Trabajos de Emergencia",
      "Mantención de Áreas Verdes Empresas",
      "Cubicación Técnica de Proyectos",
      "Sistemas de Riego Tecnificado",
      "Poda en Altura Certificada",
      "Tala de Árboles",
      "Diseño paisajístico 3D",      
      "Habilitación de Oficinas Verdes",
      "Instalación de Pasto Sintético",
      "Mantenimiento de Jardines",
      "Mantenimiento de Piscinas",
      "Mantenimiento de Terrazas",
      "Mantenimiento de Patios",
      "Mantenimiento de Canchas",
      "Tratamiento de Plagas",
      "Control de Malezas",
      "Abonado Orgánico"
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
      <Contact />
      <Footer />
      <FloatingCTA />
      <Toaster position="bottom-left" />
    </main>
  );
}
