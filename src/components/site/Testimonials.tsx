import { motion } from "framer-motion";

const items = [
  { n: "MR", a: "María Reyes", r: "Cliente · Vitacura", q: "El jardín transformó completamente la sensación de la casa. El cuidado por cada detalle es notable." },
  { n: "CG", a: "Constructora Galena", r: "Empresa · Las Condes", q: "Profesionalismo de principio a fin. Las áreas verdes elevaron la imagen del edificio corporativo." },
  { n: "JP", a: "Juan Pablo Soto", r: "Café Origen · Providencia", q: "El paisajismo de la terraza se volvió parte de la identidad del local. Recibimos comentarios todos los días." },
];

export default function Testimonials() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 mb-14">
          <div className="col-span-12 md:col-span-4"><p className="eyebrow">— Testimonios</p></div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-[clamp(1.8rem,3.8vw,3.2rem)] leading-[1.05] tracking-tightest text-balance">
              La confianza de hogares y empresas
              <span className="italic text-muted-foreground"> a lo largo de Chile.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.a}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 md:p-10 transition-all duration-700 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1"
            >
              <div className="font-display text-3xl text-[var(--olive)] mb-6">"</div>
              <blockquote className="text-[15px] leading-[1.7] text-foreground/85">{t.q}</blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-[11px] tracking-wider text-foreground/70">
                  {t.n}
                </div>
                <div>
                  <div className="text-sm">{t.a}</div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">{t.r}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
