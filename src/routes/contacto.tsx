import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Instagram, Facebook, Linkedin, Twitter, MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import FloatingBackButton from "@/components/site/FloatingBackButton";
import { Toaster } from "@/components/ui/sonner";
import GlossaryLink from "@/components/site/GlossaryLink";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto Corporativo | Paisajismo Bascharant" },
      {
        name: "description",
        content: "Agenda una visita técnica o contacta a nuestros asesores. Soluciones integrales de paisajismo en Santiago, Zapallar y Frutillar.",
      },
      { property: "og:title", content: "Contacto Corporativo — Paisajismo Bascharant" },
      {
        property: "og:description",
        content: "Hablemos de tu próximo espacio. Soluciones B2B para condominios, empresas y constructoras.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 bg-[var(--olive)]/5 pattern-dots opacity-50 pointer-events-none z-0" />
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[var(--olive)]/10 to-transparent pointer-events-none z-0" />

      {/* Hero Content */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 z-10 flex-grow flex flex-col">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 w-full flex-grow flex flex-col">
          
          <div className="mb-12 md:mb-16 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--olive)]/30 bg-[var(--olive)]/10 text-[var(--olive)] text-xs font-medium mb-6"
            >
              <MapPin size={14} />
              <span>Cobertura Nacional Central</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display tracking-tight leading-[1.05] text-balance mb-6"
            >
              Agenda una sesión <span className="italic text-muted-foreground">técnica.</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-2xl text-[14px] leading-relaxed text-muted-foreground space-y-4 mb-10"
            >
              <p>Desarrollamos soluciones de paisajismo adaptadas al cambio climático, con profesionales que aportan habilidades en evaluación de terreno, suelos y selección de especies con apoyo de viveros especializados. Cada proyecto se organiza bajo un programa claro de ejecución y mantención según sus objetivos y condiciones.</p>
              <p>Enfoques como el diseño naturalista incorporan plantas nativas y contenidos técnicos en la asesoría, vinculados a selección vegetal y <GlossaryLink>biodiversidad</GlossaryLink>; al trabajar con seres vivos, también ayudan a reducir la necesidad de riego y el consumo de agua. Además, consideramos estrategias de paisajismo ecosistémico para restaurar ecosistemas funcionales en ciudades, incluyendo rain gardens que ayudan a controlar la <GlossaryLink>escorrentía</GlossaryLink> del agua en terreno urbano.</p>
              <p>Nuestro equipo complementa su experiencia en terreno con cursos y un certificado vinculados al diseño y manejo de áreas verdes.</p>
            </motion.div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-20">
            
            {/* Primary Contact Row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {/* WhatsApp Card - Primary */}
              <a
                href="https://wa.me/56988458216"
                target="_blank"
                rel="noreferrer"
                className="group relative flex-grow overflow-hidden rounded-3xl bg-background/50 backdrop-blur-md border border-border hover:border-[var(--olive)]/50 p-8 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-8">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                      <MessageCircle strokeWidth={1.5} className="h-7 w-7" />
                    </div>
                    <ArrowRight className="text-muted-foreground/30 group-hover:text-emerald-500 group-hover:-rotate-45 transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight mb-2 group-hover:text-emerald-600 transition-colors">WhatsApp Corporativo</h3>
                    <p className="text-muted-foreground text-sm mb-4">Respuesta rápida para consultas técnicas y coordinación de visitas a terreno.</p>
                    <p className="font-mono text-lg">+56 9 8845 8216</p>
                  </div>
                </div>
              </a>

              {/* Two smaller cards row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a
                  href="tel:+56988458216"
                  className="group relative overflow-hidden rounded-3xl bg-background/50 backdrop-blur-md border border-border hover:border-[var(--olive)]/50 p-6 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--olive)]/0 via-[var(--olive)]/5 to-[var(--olive)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground group-hover:bg-[var(--olive)]/10 group-hover:text-[var(--olive)] transition-all duration-500 mb-6">
                      <Phone strokeWidth={1.5} className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-1 group-hover:text-[var(--olive)] transition-colors">Llamar</div>
                      <div className="font-medium">Línea Directa</div>
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:paisajismo@bascharant.com"
                  className="group relative overflow-hidden rounded-3xl bg-background/50 backdrop-blur-md border border-border hover:border-[var(--olive)]/50 p-6 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--olive)]/0 via-[var(--olive)]/5 to-[var(--olive)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground group-hover:bg-[var(--olive)]/10 group-hover:text-[var(--olive)] transition-all duration-500 mb-6">
                      <Mail strokeWidth={1.5} className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-1 group-hover:text-[var(--olive)] transition-colors">Correo</div>
                      <div className="font-medium truncate" title="paisajismo@bascharant.com">Enviar E-mail</div>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Maps Row (3 columns horizontally) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { city: "Santiago", query: "Santiago,Chile", zoom: 11, url: "https://www.google.com/maps/place/Santiago" },
                { city: "Zapallar", query: "Zapallar,Chile", zoom: 12, url: "https://www.google.com/maps/place/Zapallar" },
                { city: "Frutillar", query: "Frutillar,Chile", zoom: 11, url: "https://www.google.com/maps/place/Frutillar" }
              ].map((location) => (
                <div key={location.city} className="relative h-[320px] md:h-[400px] overflow-hidden rounded-3xl border border-border bg-muted group shadow-sm transition-shadow duration-500 hover:shadow-xl">
                  <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none z-20" />
                  <iframe
                    src={`https://maps.google.com/maps?q=${location.query}&t=&z=${location.zoom}&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full grayscale-[30%] contrast-[1.05] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 z-0"
                  />
                  
                  {/* Floating Map Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
                    <div className="bg-background/90 backdrop-blur-md border border-border p-4 rounded-2xl shadow-xl pointer-events-auto hover:border-[var(--olive)]/50 transition-colors">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <MapPin strokeWidth={1.5} className="h-4 w-4 text-[var(--olive)]" />
                          <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-medium">Cobertura</div>
                        </div>
                        <div className="flex items-end justify-between gap-2">
                          <div className="font-medium text-foreground leading-none">{location.city}</div>
                          <a
                            href={location.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[11px] font-medium text-[var(--olive)] hover:text-primary transition-colors group/link"
                          >
                            Ver en Maps 
                            <ArrowRight className="h-3 w-3 ml-1 group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social Links Row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {[
                { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/paisajismo-bascharat-490b06b8/", username: "Perfil Profesional" },
                { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/paisajismobascharant/", username: "@paisajismobascharant" },
                { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/people/Paisajismo-Bascharant/61590789628168/", username: "Página Oficial" },
                { name: "X (Twitter)", icon: Twitter, url: "https://x.com/Josfuentesgome2", username: "Noticias y Novedades" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col p-6 rounded-3xl bg-background/50 backdrop-blur-md border border-border hover:border-[var(--olive)]/50 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 text-center items-center justify-center gap-3"
                >
                  <social.icon strokeWidth={1.2} className="h-8 w-8 text-muted-foreground group-hover:text-[var(--olive)] group-hover:scale-110 transition-all duration-500" />
                  <div>
                    <div className="font-medium text-foreground">{social.name}</div>
                    <div className="text-[11px] text-muted-foreground mt-1">{social.username}</div>
                  </div>
                </a>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
      <FloatingBackButton />
      <Toaster position="bottom-left" />
    </main>
  );
}
