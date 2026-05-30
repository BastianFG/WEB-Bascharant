import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Instagram, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-28 md:py-36 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
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

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              <a href="https://wa.me/56988458216" target="_blank" rel="noreferrer"
                 className="group flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:border-[var(--olive)] hover:shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-4">
                  <MessageCircle strokeWidth={1.2} className="h-5 w-5 text-[var(--olive)]" />
                  <div>
                    <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">WhatsApp</div>
                    <div className="text-sm mt-1">+56 9 8845 8216</div>
                  </div>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
              <a href="tel:+56988458216" className="group flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:border-[var(--olive)] hover:shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-4">
                  <Phone strokeWidth={1.2} className="h-5 w-5 text-[var(--olive)]" />
                  <div>
                    <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Teléfono</div>
                    <div className="text-sm mt-1">+56 9 8845 8216</div>
                  </div>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
              <a href="mailto:contacto@bascharant.cl" className="group flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:border-[var(--olive)] hover:shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-4">
                  <Mail strokeWidth={1.2} className="h-5 w-5 text-[var(--olive)]" />
                  <div>
                    <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Email</div>
                    <div className="text-sm mt-1">contacto@bascharant.cl</div>
                  </div>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:border-[var(--olive)] hover:shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-4">
                  <Instagram strokeWidth={1.2} className="h-5 w-5 text-[var(--olive)]" />
                  <div>
                    <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Instagram</div>
                    <div className="text-sm mt-1">@bascharant</div>
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

          <div className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-background">
              <div className="absolute inset-0 opacity-90"
                   style={{
                     backgroundImage:
                       "linear-gradient(135deg, color-mix(in oklab, var(--sage) 18%, var(--background)) 0%, var(--background) 60%)",
                   }}
              />
              <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 400 500" fill="none">
                <g stroke="currentColor" strokeWidth="0.5" className="text-foreground/30">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <line key={`h${i}`} x1="0" y1={i * 25} x2="400" y2={i * 25} />
                  ))}
                  {Array.from({ length: 16 }).map((_, i) => (
                    <line key={`v${i}`} x1={i * 25} y1="0" x2={i * 25} y2="500" />
                  ))}
                </g>
                <path d="M 0 320 Q 100 280 180 300 T 400 260" stroke="currentColor" className="text-[var(--olive)]/60" strokeWidth="1.5" fill="none" />
                <circle cx="220" cy="280" r="6" className="fill-[var(--olive)]" />
                <circle cx="220" cy="280" r="14" className="fill-[var(--olive)]/20" />
              </svg>
              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4 border border-border/60">
                <div className="flex items-start gap-3">
                  <MapPin strokeWidth={1.2} className="h-4 w-4 mt-0.5 text-[var(--olive)]" />
                  <div>
                    <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Cobertura</div>
                    <div className="text-sm mt-1">Santiago y regiones — Chile</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
