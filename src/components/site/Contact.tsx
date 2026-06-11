import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Instagram, Facebook, Linkedin, Twitter, MapPin } from "lucide-react";
import FallingLeaves from "./FallingLeaves";

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden py-16 md:py-36 bg-secondary/40">
      <FallingLeaves />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10">
          <div className="w-full lg:col-span-7">
            <p className="eyebrow mb-6">— Contacto</p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.02] tracking-tightest text-balance mb-8"
            >
              Conversemos sobre
              <span className="italic text-muted-foreground"> tu próximo espacio.</span>
            </motion.h2>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              <a
                href="https://wa.me/56988458216"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:border-[var(--olive)] hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle strokeWidth={1.2} className="h-5 w-5 text-[var(--olive)]" />
                  <div>
                    <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                      WhatsApp
                    </div>
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
                    <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                      Teléfono
                    </div>
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
                    <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                      Email
                    </div>
                    <div className="text-sm mt-1">paisajismo@bascharant.com</div>
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
                    <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                      Instagram
                    </div>
                    <div className="text-sm mt-1">@paisajismobascharant</div>
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
                    <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                      Facebook
                    </div>
                    <div className="text-sm mt-1">Paisajismo Bascharant</div>
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
                    <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                      LinkedIn
                    </div>
                    <div className="text-sm mt-1">Paisajismo Bascharant</div>
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
                    <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                      X (Twitter)
                    </div>
                    <div className="text-sm mt-1">Paisajismo Bascharant</div>
                  </div>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </div>

            <div className="mt-10 text-[13px] text-muted-foreground">
              <div className="eyebrow mb-2">Razón social</div>
              <div className="text-foreground/80">Paisajismo Bascharant SpA</div>
            </div>
          </div>

          <div className="w-full lg:col-span-5">
            <div className="relative aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-background hover:shadow-[var(--shadow-soft)] transition-all duration-500">
              <iframe
                src="https://maps.google.com/maps?q=Santiago,Chile&t=&z=6&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4 border border-border/60 pointer-events-auto">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <MapPin strokeWidth={1.2} className="h-4 w-4 mt-0.5 text-[var(--olive)]" />
                    <div>
                      <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                        Cobertura
                      </div>
                      <div className="text-sm mt-1">Santiago-Zapallar-Frutillar</div>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/Santiago/Zapallar/Frutillar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--olive)] opacity-70 hover:opacity-100 hover:translate-x-0.5 transition-all text-xs self-center flex items-center gap-1 cursor-pointer"
                  >
                    Ver en Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
