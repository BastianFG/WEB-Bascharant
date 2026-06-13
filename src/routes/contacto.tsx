import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Instagram, Facebook, Linkedin, Twitter, MapPin } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import FloatingBackButton from "@/components/site/FloatingBackButton";
import { Toaster } from "@/components/ui/sonner";
import Forms from "@/components/site/Forms";

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

      {/* Hero Form Section */}
      <div className="relative z-10 pt-16 md:pt-24">
        <Forms />
      </div>

      {/* Alternative Contact Methods (Secondary Grid) */}
      <section className="relative pb-24 z-10 flex-grow mt-4 border-t border-border/40 pt-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-display tracking-tight text-balance mb-4">
              Canales Directos & Redes
            </h3>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              Si prefieres un trato más directo o quieres seguir nuestro trabajo, te invitamos a usar nuestros canales de comunicación rápida o a visitar nuestras redes sociales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto">
            
            {/* Primary Direct Contacts */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <a
                href="https://wa.me/56988458216"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl bg-background/50 backdrop-blur-md border border-border hover:border-[var(--olive)]/50 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <MessageCircle strokeWidth={1.5} className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium tracking-tight group-hover:text-emerald-600 transition-colors">WhatsApp</h4>
                  <p className="text-muted-foreground text-[11px] mt-0.5 font-mono">+56 9 8845 8216</p>
                </div>
              </a>

              <a
                href="tel:+56988458216"
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl bg-background/50 backdrop-blur-md border border-border hover:border-[var(--olive)]/50 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground group-hover:bg-[var(--olive)]/10 group-hover:text-[var(--olive)] transition-all duration-300">
                  <Phone strokeWidth={1.5} className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium tracking-tight group-hover:text-[var(--olive)] transition-colors">Llamar</h4>
                  <p className="text-muted-foreground text-[11px] mt-0.5">Línea Directa</p>
                </div>
              </a>

              <a
                href="mailto:paisajismo@bascharant.com"
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl bg-background/50 backdrop-blur-md border border-border hover:border-[var(--olive)]/50 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground group-hover:bg-[var(--olive)]/10 group-hover:text-[var(--olive)] transition-all duration-300">
                  <Mail strokeWidth={1.5} className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium tracking-tight group-hover:text-[var(--olive)] transition-colors">Correo</h4>
                  <p className="text-muted-foreground text-[11px] mt-0.5 truncate max-w-[150px]">paisajismo@bascharant.com</p>
                </div>
              </a>
            </motion.div>

            {/* Social Links Row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 mt-2"
            >
              {[
                { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/paisajismo-bascharat-490b06b8/" },
                { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/paisajismobascharant/" },
                { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/people/Paisajismo-Bascharant/61590789628168/" },
                { name: "X (Twitter)", icon: Twitter, url: "https://x.com/Josfuentesgome2" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col p-4 rounded-2xl bg-background/50 backdrop-blur-md border border-border hover:border-[var(--olive)]/50 transition-all duration-300 hover:shadow-sm hover:-translate-y-1 text-center items-center justify-center gap-2"
                >
                  <social.icon strokeWidth={1.5} className="h-5 w-5 text-muted-foreground group-hover:text-[var(--olive)] transition-colors duration-300" />
                  <div className="font-medium text-[12px] text-foreground">{social.name}</div>
                </a>
              ))}
            </motion.div>

            {/* Small Maps Row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mt-2"
            >
              {[
                { city: "Santiago", query: "Santiago,Chile", zoom: 12 },
                { city: "Zapallar", query: "Zapallar,Chile", zoom: 12 },
                { city: "Frutillar", query: "Frutillar,Chile", zoom: 12 }
              ].map((location) => (
                <div key={location.city} className="relative h-[120px] overflow-hidden rounded-2xl border border-border bg-muted group shadow-sm">
                  <iframe
                    src={`https://maps.google.com/maps?q=${location.query}&t=&z=${location.zoom}&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full grayscale-[40%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute bottom-2 left-2 bg-background/90 backdrop-blur-md border border-border px-2.5 py-1 rounded-lg text-[10px] uppercase tracking-wider font-semibold shadow-sm pointer-events-none flex items-center gap-1.5 text-foreground">
                    <MapPin className="h-3 w-3 text-[var(--olive)]" /> {location.city}
                  </div>
                </div>
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
