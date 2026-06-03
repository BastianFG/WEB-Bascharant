import { motion } from "framer-motion";
import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import empresasImg from "@/assets/empresas.jpg";
import particularesImg from "@/assets/particulares.jpg";
const today = new Date().toISOString().split('T')[0];

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block group">
      <span className="block text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full bg-transparent border-b border-border py-3 text-[15px] outline-none transition-all duration-500 focus:border-foreground placeholder:text-muted-foreground/60";

// --- FUNCIÓN ACTUALIZADA PARA CONECTAR CON FORMSPREE ---
function handleSubmit(label: string) {
  return async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      // Tu enlace exacto de Formspree
      const response = await fetch("https://formspree.io/f/maqkkbwo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Solicitud enviada", {
          description: `Gracias. Nos pondremos en contacto para coordinar tu ${label}.`,
        });
        form.reset(); // Limpia el formulario tras el éxito
      } else {
        toast.error("Hubo un problema", { 
          description: "No pudimos enviar tu solicitud. Intenta escribirnos al correo o WhatsApp." 
        });
      }
    } catch (error) {
      toast.error("Error de conexión", { 
        description: "Revisa tu conexión a internet e intenta nuevamente." 
      });
    }
  };
}

export default function Forms() {
  const [tab, setTab] = useState<"empresas" | "particulares">("empresas");

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">— Trabajemos juntos</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tightest text-balance">
              Dos caminos para comenzar
              <span className="italic text-muted-foreground"> tu proyecto.</span>
            </h2>
          </div>
        </div>

        {/* Mobile tab switch */}
        <div className="flex md:hidden gap-2 mb-8 rounded-full bg-secondary p-1.5 w-fit">
          {(["empresas", "particulares"] as const).map((k) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`rounded-full px-5 py-2 text-xs capitalize transition-all ${
                tab === k ? "bg-foreground text-background" : "text-foreground/70"
              }`}
            >
              {k}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <EmpresasCard id="empresas" hidden={false} mobileVisible={tab === "empresas"} img={empresasImg} />
          <ParticularesCard id="particulares" mobileVisible={tab === "particulares"} img={particularesImg} />
        </div>
      </div>
    </section>
  );
}

function CardShell({
  id, dark, img, eyebrow, title, text, mobileVisible, children,
}: {
  id: string; dark?: boolean; img: string; eyebrow: string;
  title: string; text: string; mobileVisible: boolean; children: ReactNode;
}) {
  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-2xl border ${
        dark ? "bg-[var(--charcoal)] text-background border-white/10" : "bg-secondary/50 border-border"
      } ${mobileVisible ? "block" : "hidden md:block"}`}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img src={img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-105" />
        <div className={`absolute inset-0 ${dark ? "bg-gradient-to-t from-[var(--charcoal)] via-transparent to-transparent" : "bg-gradient-to-t from-secondary via-transparent to-transparent"}`} />
      </div>
      <div className="p-8 md:p-12">
        <p className={`text-[11px] tracking-[0.28em] uppercase mb-4 ${dark ? "text-white/60" : "text-muted-foreground"}`}>{eyebrow}</p>
        <h3 className="font-display text-3xl md:text-[2.4rem] leading-[1.05] tracking-tightest mb-5 text-balance">
          {title}
        </h3>
        <p className={`text-[14.5px] leading-relaxed mb-10 max-w-prose ${dark ? "text-white/70" : "text-muted-foreground"}`}>
          {text}
        </p>
        {children}
      </div>
    </motion.article>
  );
}

function EmpresasCard(p: { id: string; hidden: boolean; mobileVisible: boolean; img: string }) {
  return (
    <CardShell
      id={p.id}
      mobileVisible={p.mobileVisible}
      img={p.img}
      eyebrow="Empresas"
      title="Solicita una propuesta para tu empresa"
      text="Diseñamos propuestas de paisajismo para empresas que buscan mejorar la imagen y experiencia de sus espacios. Completa el formulario y te contactaremos para evaluar tu proyecto."
    >
      <form onSubmit={handleSubmit("evaluación")} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {/* Se agregaron los atributos 'name' a todos los campos */}
        <Field label="Empresa"><input name="Empresa" required maxLength={120} className={inputCls} placeholder="Razón social" /></Field>
        <Field label="Nombre y cargo"><input name="Nombre_Contacto" required maxLength={120} className={inputCls} placeholder="Ej. Camila Ruiz · Gerente" /></Field>
        <Field label="Teléfono"><input name="Telefono" required type="tel" maxLength={30} className={inputCls} placeholder="+56" /></Field>
        <Field label="Correo corporativo"><input name="Correo" required type="email" maxLength={150} className={inputCls} placeholder="nombre@empresa.cl" /></Field>
        <Field label="Rubro"><input name="Rubro" maxLength={80} className={inputCls} placeholder="Oficinas, retail, hotelería…" /></Field>
        <Field label="Dirección del proyecto"><input name="Direccion" maxLength={200} className={inputCls} placeholder="Comuna, ciudad" /></Field>
        
        <Field label="Tipo de espacio">
          <select name="Tipo_Espacio" className={inputCls} defaultValue="">
            <option value="" disabled>Seleccionar</option>
            <option>Oficina corporativa</option>
            <option>Inmobiliaria / condominio</option>
            <option>Municipalidad</option>
            <option>Local comercial</option>
            <option>Otro</option>
          </select>
        </Field>
        

        <Field label="Servicio requerido">
          <select name="Servicio_Requerido" className={inputCls} defaultValue="">
            <option value="" disabled>Seleccionar</option>
            <option className="text-slate-900 bg-white">Mantención de jardín</option>
            <option className="text-slate-900 bg-white">Diseño paisajístico</option>
            <option className="text-slate-900 bg-white">Instalación de riego automático</option>
            <option className="text-slate-900 bg-white">Instalación de pasto (rollo/semilla)</option>
            <option className="text-slate-900 bg-white">Fumigación y control de plagas</option>
            <option className="text-slate-900 bg-white">Poda y limpieza de áreas</option>
            <option className="text-slate-900 bg-white">Otro</option>
          </select>
        </Field>
        

        <Field label="Fecha ideal de inicio">
          <input name="Fecha_Inicio" type="date" min={today} className={inputCls} />
        </Field>
        
        <Field label="Archivos (planos, fotos)"><input name="Archivos_Adjuntos" type="file" multiple className="block w-full text-xs file:mr-4 file:rounded-full file:border-0 file:bg-foreground file:text-background file:px-4 file:py-2 file:text-[11px] file:tracking-wider file:uppercase" /></Field>
        
        <div className="sm:col-span-2">
          <Field label="Objetivo del proyecto">
            <textarea name="Objetivo_Proyecto" rows={3} maxLength={1000} className={`${inputCls} resize-none`} placeholder="Cuéntanos brevemente qué buscas lograr" />
          </Field>
        </div>
        
        <label className="sm:col-span-2 flex items-start gap-3 text-xs text-muted-foreground mt-2">
          <input type="checkbox" required className="mt-1 accent-[var(--olive)]" />
          <span>Autorizo a Paisajismo Bascharant SpA a contactarme para evaluar mi proyecto.</span>
        </label>
        
        <div className="sm:col-span-2 mt-4">
          <button className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-[12.5px] tracking-wide text-background transition-all duration-500 hover:bg-[var(--olive)] hover:shadow-[var(--shadow-lift)]">
            Solicitar evaluación <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </form>
    </CardShell>
  );
}

function ParticularesCard(p: { id: string; mobileVisible: boolean; img: string }) {
  return (
    <CardShell
      id={p.id}
      dark
      mobileVisible={p.mobileVisible}
      img={p.img}
      eyebrow="Particulares · Locales"
      title="Agenda una visita para tu hogar o local"
      text="Si quieres renovar el jardín de tu casa o mejorar la estética natural de tu local, agenda una visita y revisaremos tu espacio en terreno para proponerte una solución adecuada."
    >
      <form onSubmit={handleSubmit("visita")} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {/* Se agregaron los atributos 'name' a todos los campos */}
        <Field label="Nombre completo"><input name="Nombre_Completo" required maxLength={120} className={`${inputCls} border-white/20 focus:border-white text-white`} placeholder="Tu nombre" /></Field>
        <Field label="Teléfono"><input name="Telefono" required type="tel" maxLength={30} className={`${inputCls} border-white/20 focus:border-white text-white`} placeholder="+56" /></Field>
        <Field label="Correo"><input name="Correo" required type="email" maxLength={150} className={`${inputCls} border-white/20 focus:border-white text-white`} placeholder="nombre@correo.cl" /></Field>
        <Field label="Dirección"><input name="Direccion" maxLength={200} className={`${inputCls} border-white/20 focus:border-white text-white`} placeholder="Comuna, ciudad" /></Field>
        
        <Field label="Tipo de cliente">
          <select name="Tipo_Cliente" className={`${inputCls} border-white/20 focus:border-white text-white bg-[var(--charcoal)]`} defaultValue="">
            <option value="" disabled className="text-slate-900 bg-white">Seleccionar</option>
            <option className="text-slate-900 bg-white">Hogar</option>
            <option className="text-slate-900 bg-white">Peluquería</option>
            <option className="text-slate-900 bg-white">Barbería</option>
            <option className="text-slate-900 bg-white">Centro estético</option>
            <option className="text-slate-900 bg-white">Cafetería</option>
            <option className="text-slate-900 bg-white">Terraza comercial</option>
          </select>
        </Field>

        <Field label="Tipo de servicio">
          <select name="Tipo_Servicio" className={`${inputCls} border-white/20 focus:border-white text-white bg-[var(--charcoal)]`} defaultValue="">
            <option value="" disabled className="text-slate-900 bg-white">Seleccionar</option>
            <option className="text-slate-900 bg-white">Mantención de jardín</option>
            <option className="text-slate-900 bg-white">Diseño paisajístico</option>
            <option className="text-slate-900 bg-white">Instalación de riego automático</option>
            <option className="text-slate-900 bg-white">Instalación de pasto (rollo/semilla)</option>
            <option className="text-slate-900 bg-white">Fumigación y control de plagas</option>
            <option className="text-slate-900 bg-white">Poda y limpieza de áreas</option>
            <option className="text-slate-900 bg-white">Otro</option>
          </select>
        </Field>

        <Field label="Fecha ideal de inicio">
          <input name="Fecha_Inicio" type="date" min={today} className={`${inputCls} border-white/20 focus:border-white text-white`} />
        </Field>
        
        <Field label="Franja horaria">
          <select name="Franja_Horaria" className={`${inputCls} border-white/20 focus:border-white text-white bg-[var(--charcoal)]`} defaultValue="">
            <option value="" disabled className="text-slate-900 bg-white">Seleccionar</option>
            <option className="text-slate-900 bg-white">Mañana</option>
            <option className="text-slate-900 bg-white">Mediodía</option>
            <option className="text-slate-900 bg-white">Tarde</option>
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field label="Motivo de la visita / comentarios">
            <textarea name="Comentarios" rows={3} maxLength={1000} className={`${inputCls} border-white/20 focus:border-white text-white resize-none`} placeholder="Cuéntanos qué te gustaría lograr" />
          </Field>
        </div>
        
        <Field label="Fotos del espacio">
          <input name="Fotos_Espacio" type="file" multiple accept="image/*" className="block w-full text-xs text-white/70 file:mr-4 file:rounded-full file:border-0 file:bg-white file:text-foreground file:px-4 file:py-2 file:text-[11px] file:tracking-wider file:uppercase" />
        </Field>

        <label className="sm:col-span-2 flex items-start gap-3 text-xs text-white/60 mt-2">
          <input type="checkbox" required className="mt-1 accent-[var(--sage)]" />
          <span>Confirmo que pueden contactarme para coordinar la visita.</span>
        </label>
        
        <div className="sm:col-span-2 mt-4">
          <button className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[12.5px] tracking-wide text-foreground transition-all duration-500 hover:bg-[var(--sage)] hover:text-white hover:shadow-[var(--shadow-lift)]">
            Agendar visita <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </form>
    </CardShell>
  );
}