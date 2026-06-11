import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Instagram, Facebook, Linkedin, Twitter, MapPin, ArrowRight } from "lucide-react";
import FallingLeaves from "./FallingLeaves";

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden py-16 md:py-36 bg-secondary/40">
      <FallingLeaves />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 z-10">
        
        {/* Header and Title */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="eyebrow mb-6">— Contacto</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.02] tracking-tightest text-balance"
          >
            Conversemos sobre
            <span className="italic text-muted-foreground"> tu próximo espacio.</span>
          </motion.h2>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          <a
            href="https://wa.me/56988458216"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:border-[var(--olive)] hover:shadow-[var(--shadow-soft)]"
          >
            <div className="flex items-center gap-4">
              <MessageCircle strokeWidth={1.2} className="h-5 w-5 text-[var(--olive)]" />
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">WhatsApp</div>
                <div className="text-sm mt-1">+56 9 8845 8216</div>
              </div>
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>
          <a
            href="tel:+56988458216"
            className="group flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:border-[var(--olive)] hover:shadow-[var(--shadow-soft)]"
          >
            <div className="flex items-center gap-4">
              <Phone strokeWidth={1.2} className="h-5 w-5 text-[var(--olive)]" />
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Teléfono</div>
                <div className="text-sm mt-1">+56 9 8845 8216</div>
              </div>
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>
          <a
            href="mailto:paisajismo@bascharant.com"
            className="group flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:border-[var(--olive)] hover:shadow-[var(--shadow-soft)]"
          >
            <div className="flex items-center gap-4">
              <Mail strokeWidth={1.2} className="h-5 w-5 text-[var(--olive)]" />
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Email</div>
                <div className="text-sm mt-1 truncate max-w-[120px]" title="paisajismo@bascharant.com">paisajismo...</div>
              </div>
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>
          <a
            href="https://www.instagram.com/paisajismobascharant/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:border-[var(--olive)] hover:shadow-[var(--shadow-soft)]"
          >
            <div className="flex items-center gap-4">
              <Instagram strokeWidth={1.2} className="h-5 w-5 text-[var(--olive)]" />
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Instagram</div>
                <div className="text-sm mt-1 truncate max-w-[120px]">@paisajismobascharant</div>
              </div>
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>
          <a
            href="https://www.facebook.com/people/Paisajismo-Bascharant/61590789628168/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:border-[var(--olive)] hover:shadow-[var(--shadow-soft)]"
          >
            <div className="flex items-center gap-4">
              <Facebook strokeWidth={1.2} className="h-5 w-5 text-[var(--olive)]" />
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Facebook</div>
                <div className="text-sm mt-1 truncate max-w-[120px]">Paisajismo Bascharant</div>
              </div>
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>
          <a
            href="https://www.linkedin.com/in/paisajismo-bascharat-490b06b8/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:border-[var(--olive)] hover:shadow-[var(--shadow-soft)]"
          >
            <div className="flex items-center gap-4">
              <Linkedin strokeWidth={1.2} className="h-5 w-5 text-[var(--olive)]" />
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">LinkedIn</div>
                <div className="text-sm mt-1 truncate max-w-[120px]">Paisajismo Bascharant</div>
              </div>
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>
          <a
            href="https://x.com/Josfuentesgome2"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:border-[var(--olive)] hover:shadow-[var(--shadow-soft)]"
          >
            <div className="flex items-center gap-4">
              <Twitter strokeWidth={1.2} className="h-5 w-5 text-[var(--olive)]" />
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">X (Twitter)</div>
                <div className="text-sm mt-1 truncate max-w-[120px]">Paisajismo Bascharant</div>
              </div>
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>
        </div>

        {/* 3 Horizontal Maps Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { city: "Santiago", query: "Santiago,Chile", zoom: 12, url: "https://www.google.com/maps/place/Santiago" },
            { city: "Zapallar", query: "Zapallar,Chile", zoom: 12, url: "https://www.google.com/maps/place/Zapallar" },
            { city: "Frutillar", query: "Frutillar,Chile", zoom: 12, url: "https://www.google.com/maps/place/Frutillar" }
          ].map((location) => (
            <div key={location.city} className="relative h-[280px] md:h-[360px] overflow-hidden rounded-2xl border border-border bg-background hover:shadow-[var(--shadow-soft)] transition-all duration-500 group/map">
              <iframe
                src={`https://maps.google.com/maps?q=${location.query}&t=&z=${location.zoom}&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] group-hover/map:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4 border border-border/60 pointer-events-auto">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <MapPin strokeWidth={1.2} className="h-4 w-4 mt-0.5 text-[var(--olive)]" />
                    <div>
                      <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                        Cobertura
                      </div>
                      <div className="text-sm mt-1 font-medium">{location.city}</div>
                    </div>
                  </div>
                  <a
                    href={location.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--olive)] opacity-70 hover:opacity-100 hover:translate-x-0.5 transition-all text-xs self-center flex items-center gap-1 cursor-pointer"
                  >
                    Ver en Maps <ArrowRight className="h-3 w-3 ml-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
