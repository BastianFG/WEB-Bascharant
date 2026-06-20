import { motion, useInView } from "framer-motion";
import { useRef, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { useGooglePlacesAutocomplete } from "@/hooks/useGooglePlacesAutocomplete";
import empresasVideo from "@/assets/Cinematic_hyper_realistic_vi.mp4";

/** Returns today's date in YYYY-MM-DD using the device's local timezone.
 *  Computed at render time so iOS Safari never caches a stale value. */
function getToday(): string {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block group text-left">
      <span className="block text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-1.5 md:mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full bg-transparent border-b border-border py-2.5 md:py-3 text-[15px] outline-none transition-all duration-500 focus:border-foreground placeholder:text-muted-foreground/60 text-foreground invalid:[&:not(:placeholder-shown)]:border-red-500/70 invalid:[&:not(:placeholder-shown)]:text-red-500 focus:invalid:border-red-500";

function sanitizeAndValidate(formData: FormData): boolean {
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") {
      // Basic XSS/Injection prevention: Reject if contains common script/html tags
      if (/<[a-z][\s\S]*>/i.test(value) || /javascript:/i.test(value) || /onload=/i.test(value) || /onerror=/i.test(value)) {
        return false;
      }
      formData.set(key, value.trim());
    }
  }
  return true;
}

function handleSubmit() {
  return async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Formspree Honeypot check: If the hidden _gotcha field is filled, it's a spam bot.
    if (formData.get("_gotcha")) {
      toast.success("Solicitud enviada con éxito", { description: "Gracias por contactarnos." });
      form.reset();
      return;
    }

    if (!sanitizeAndValidate(formData)) {
      toast.error("Validación fallida", {
        description: "El formulario contiene caracteres no permitidos. Por favor, revise sus datos.",
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/maqkkbwo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Solicitud enviada con éxito", {
          description: `Gracias. Nuestro equipo revisará los detalles y se pondrá en contacto pronto.`,
        });

        // Trigger Google Ads conversion tracking event
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "conversion", {
            send_to: "AW-18198577508/N7dvCNPOibgcEOSC4eVD",
          });
        }

        form.reset();
      } else {
        toast.error("Hubo un problema al enviar", {
          description:
            "No pudimos procesar su solicitud. Intente escribirnos al correo directo o WhatsApp.",
        });
      }
    } catch (error) {
      toast.error("Error de conexión", {
        description: "Revisa tu conexión a internet e intenta nuevamente.",
      });
    }
  };
}

export default function Forms() {
  const addressRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useGooglePlacesAutocomplete(addressRef);
  const isInView = useInView(containerRef, { once: true, margin: "300px" });

  return (
    <section id="empresas" className="relative py-20 md:py-32 border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-8 mb-12">
          <div className="w-full md:col-span-4">
            <p className="eyebrow">— Canal de Requerimientos</p>
          </div>
          <div className="w-full md:col-span-8">
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] tracking-tightest text-balance">
              Solicita cotizaciones o agenda una
              <span className="italic text-muted-foreground"> visita técnica.</span>
            </h2>
          </div>
        </div>

        {/* Form card wrapper */}
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-[var(--shadow-soft)]">
            {/* Header banner image for context */}
            <div ref={containerRef} className="relative aspect-[21/9] md:aspect-[24/6] overflow-hidden bg-muted">
              {isInView && (
                <video
                  src={empresasVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                  onCanPlay={(e) => {
                    (e.target as HTMLVideoElement).playbackRate = 0.8;
                  }}
                  onTimeUpdate={(e) => {
                    const video = e.target as HTMLVideoElement;
                    if (video.duration && video.currentTime >= video.duration - 0.5) {
                      video.currentTime = 0.1;
                      video.play();
                    }
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-black/25" />
            </div>

            <div className="p-6 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-8 text-left">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--olive)] font-bold">
                    Formulario Integral
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl mt-1 mb-3">
                    Asesoría Técnica y Propuestas Comerciales
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Completa este formulario para solicitar una propuesta, cotizar un trabajo preventivo o coordinar una visita técnica a terreno.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit()}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6"
                >
                  {/* Honeypot field for anti-spam bots */}
                  <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                  
                  <Field label="Nombre Completo del Solicitante">
                    <input
                      name="Nombre_Contacto"
                      required
                      autoComplete="name"
                      maxLength={120}
                      className={inputCls}
                      placeholder="Ej. Carlos Mendoza"
                    />
                  </Field>
                  <Field label="Cargo / Departamento (Opcional)">
                    <input
                      name="Cargo_Departamento"
                      autoComplete="honorific-suffix"
                      maxLength={80}
                      className={inputCls}
                      placeholder="Ej. Jefe de Operaciones"
                    />
                  </Field>
                  <Field label="Empresa / Razón Social / Condominio">
                    <input
                      name="Empresa_Razon_Social"
                      required
                      autoComplete="organization"
                      maxLength={120}
                      className={inputCls}
                      placeholder="Ej. Constructora Alianza SpA"
                    />
                  </Field>
                  <Field label="RUT Empresa (Opcional)">
                    <div className="relative w-full">
                      <input
                        name="RUT_Empresa"
                        maxLength={15}
                        pattern="^[0-9]{7,8}-[0-9Kk]{1}$"
                        title="Formato de RUT inválido. Ejemplo: 76123456-K (sin puntos y con guión)"
                        className={inputCls}
                        placeholder="Ej. 76123456-K"
                      />
                      <span className="block text-[9px] text-muted-foreground/80 mt-1">Requerido para facturación formal o licitaciones</span>
                    </div>
                  </Field>
                  <Field label="Correo Electrónico Corporativo">
                    <input
                      name="Correo_Contacto"
                      required
                      type="email"
                      autoComplete="email"
                      maxLength={150}
                      className={inputCls}
                      placeholder="nombre@empresa.cl"
                    />
                  </Field>
                  <Field label="Teléfono de Contacto">
                    <input
                      name="Telefono_Contacto"
                      required
                      type="tel"
                      autoComplete="tel"
                      defaultValue="+569 "
                      maxLength={30}
                      pattern="^\+?[0-9\s\-\(\)]{8,30}$"
                      title="Ingrese un número de teléfono válido."
                      className={inputCls}
                      placeholder="Ej. +569 1234 5678"
                    />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Ubicación del Proyecto / Oficina">
                      <input
                        ref={addressRef}
                        name="Direccion_Proyecto"
                        required
                        autoComplete="street-address"
                        maxLength={200}
                        className={inputCls}
                        placeholder="Comuna, ciudad o dirección exacta"
                      />
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <Field label="Tipo de Solicitud o Servicio Requerido">
                      <select
                        name="Tipo_Solicitud_Servicio"
                        required
                        className={inputCls}
                        defaultValue="Trabajos Preventivos o Express (Poda, Fumigación, Corte de Pasto y Jardinería)"
                      >
                        <option value="" disabled>
                          Seleccionar tipo de requerimiento
                        </option>
                        <option value="Trabajos Preventivos o Express (Poda, Fumigación, Corte de Pasto y Jardinería)">
                          Trabajos Preventivos o Express (Poda, Fumigación, Corte de Pasto y Jardinería)
                        </option>
                        <option>Agendar Reunión Técnica / Visita a Terreno</option>
                        <option>Ejecución de Obras Civiles Verdes (Construcción)</option>
                        <option>Mantención y Conservación Industrial (Contrato SLA)</option>
                        <option>Diseño Paisajístico y Planimetría 3D</option>
                        <option>Sistemas de Riego Tecnificado y Automatizado</option>
                        <option>Poda en Altura y Silvicultura Certificada</option>
                        <option>Habilitación de Oficinas y Terrazas Corporativas</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="Superficie Estimada (Opcional)">
                    <select
                      name="Superficie_Estimada"
                      className={inputCls}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seleccionar rango
                      </option>
                      <option>Menor a 500 m²</option>
                      <option>500 m² a 2.000 m²</option>
                      <option>2.000 m² a 10.000 m²</option>
                      <option>Mayor a 10.000 m²</option>
                      <option>No determinado / Requiere levantamiento</option>
                    </select>
                  </Field>
                  <Field label="Fecha Sugerida (Para inicio o reunión)">
                    <input
                      name="Fecha_Sugerida"
                      type="date"
                      min={getToday()}
                      className={inputCls}
                    />
                  </Field>

                  <div className="sm:col-span-2">
                    <Field label="Bases Técnicas / Planos / Archivos (Opcional)">
                      <div className="w-full">
                        <input
                          name="Archivos_Adjuntos"
                          type="file"
                          multiple
                          className="block w-full text-xs text-muted-foreground file:mr-4 file:rounded-full file:border-0 file:bg-foreground file:text-background file:px-4 file:py-2 file:text-[11px] file:tracking-wider file:uppercase file:font-semibold hover:file:opacity-90 file:cursor-pointer mt-2"
                        />
                        <span className="block text-[9px] text-muted-foreground/80 mt-1">Puedes adjuntar planos (PDF, CAD), especificaciones del proyecto o fotos del área</span>
                      </div>
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <Field label="Detalles del Requerimiento / Objetivos">
                      <textarea
                        name="Objetivo_Alcance_Proyecto"
                        rows={4}
                        required
                        maxLength={1000}
                        className={`${inputCls} resize-none`}
                        placeholder="Detalla brevemente qué necesitas cotizar, especificaciones técnicas, si requieres una visita, etc."
                      />
                    </Field>
                  </div>

                  <label className="sm:col-span-2 flex items-start gap-3 text-xs text-muted-foreground mt-2 cursor-pointer">
                    <input type="checkbox" defaultChecked required className="mt-1 accent-[var(--olive)]" aria-label="Confirmar veracidad de los datos" />
                    <span>
                      Confirmo la veracidad de los datos entregados y autorizo a Paisajismo
                      Bascharant a contactarme para evaluar y dar curso a mi solicitud.
                    </span>
                  </label>

                  <div className="sm:col-span-2 mt-4 text-left flex flex-col sm:flex-row sm:items-center gap-4">
                    <button className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-[13px] font-semibold tracking-wide text-background transition-all duration-500 hover:bg-[var(--olive)] hover:shadow-[var(--shadow-lift)]">
                      Enviar Solicitud al Área Técnica{" "}
                      <span className="transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                    <span className="text-xs text-muted-foreground/90 italic">
                      ⚡ Recibirás una respuesta por parte de nuestro equipo.
                    </span>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Redirect footnote for B2C/particular traffic */}
        <div className="mt-16 mx-auto max-w-2xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--olive)]/10 to-transparent border border-[var(--olive)]/20 p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left transition-all duration-500 hover:border-[var(--olive)]/40 hover:shadow-lg">
            <div className="flex-shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--olive)]/20 text-[var(--olive)]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <div className="flex-grow">
              <h4 className="text-[17px] font-semibold text-foreground mb-1.5">¿Eres un particular o buscas servicios para el hogar?</h4>
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                Para proyectos residenciales menores, jardinería en casas particulares o compras de productos, por favor visita nuestra plataforma dedicada o escríbenos al WhatsApp.
              </p>
            </div>
            <div className="flex-shrink-0 mt-4 sm:mt-0">
              <a
                href="https://bascharant.store/servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center whitespace-nowrap rounded-full text-[13px] font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-[var(--olive)] text-white hover:bg-[var(--olive)]/90 h-11 px-7 shadow-sm hover:shadow-md"
              >
                Ir a Servicios{" "}
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
