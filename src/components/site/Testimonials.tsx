import { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

const items = [
  { n: "MR", a: "María Reyes", r: "Cliente · Vitacura", q: "El jardín transformó completamente la sensación de la casa. El cuidado por cada detalle es notable." },
  { n: "CG", a: "Constructora Galena", r: "Empresa · Las Condes", q: "Profesionalismo de principio a fin. Las áreas verdes elevaron la imagen del edificio corporativo." },
  { n: "JP", a: "Juan Pablo Soto", r: "Café Origen · Providencia", q: "El paisajismo de la terraza se volvió parte de la identidad del local. Recibimos comentarios todos los días." },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 6000);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    startAutoplay();
    emblaApi.on("pointerDown", stopAutoplay);
    emblaApi.on("pointerUp", () => {
      stopAutoplay();
      setTimeout(startAutoplay, 2000);
    });
    return () => stopAutoplay();
  }, [emblaApi, startAutoplay, stopAutoplay]);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">— Testimonios</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-[clamp(1.8rem,3.8vw,3.2rem)] leading-[1.05] tracking-tightest text-balance">
              La confianza de hogares y empresas
              <span className="italic text-muted-foreground"> a lo largo de Chile.</span>
            </h2>
          </div>
        </div>

        {/* Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing w-full" ref={emblaRef}>
          {/* Container */}
          <div className="flex">
            {items.map((t) => (
              <div
                key={t.a}
                className="shrink-0 grow-0 basis-full min-w-0 flex justify-center px-2 md:px-4"
              >
                <figure className="max-w-3xl w-full rounded-2xl border border-border bg-card p-8 md:p-12 text-center transition-all duration-700 hover:shadow-[var(--shadow-soft)] relative overflow-hidden">
                  <div className="font-display text-4xl md:text-5xl text-[var(--olive)] mb-4 md:mb-6">“</div>
                  <blockquote className="text-[15px] md:text-lg leading-[1.6] md:leading-[1.7] text-foreground/90 font-display italic">
                    {t.q}
                  </blockquote>
                  <figcaption className="mt-8 flex flex-col items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-[11px] tracking-wider font-semibold text-foreground/75 border border-border/40">
                      {t.n}
                    </div>
                    <div>
                      <div className="text-sm font-semibold tracking-wide text-foreground">{t.a}</div>
                      <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-0.5">{t.r}</div>
                    </div>
                  </figcaption>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-24 bg-[var(--olive)] opacity-20" />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
