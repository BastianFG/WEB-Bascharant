import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { useGooglePlacesAutocomplete } from "@/hooks/useGooglePlacesAutocomplete";
import empresasVideo from "@/assets/Cinematic_hyper_realistic_vi.mp4";
import particularesVideo from "@/assets/Cinematic_high_end_profession.mp4";

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
  "w-full bg-transparent border-b border-border py-2.5 md:py-3 text-[15px] outline-none transition-all duration-500 focus:border-foreground placeholder:text-muted-foreground/60 text-foreground";

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

function handleSubmit(label: string) {
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
          description: `Gracias. Un asesor comercial se pondrá en contacto para coordinar su ${label}.`,
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
  const [activeForm, setActiveForm] = useState<"propuesta" | "reunion">("reunion");
  const addressRef = useRef<HTMLInputElement>(null);
  useGooglePlacesAutocomplete(addressRef);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === "#reunion-tecnica") {
        setActiveForm("reunion");
      } else if (hash === "#empresas") {
        setActiveForm("propuesta");
      }
    };
    window.addEventListener("hashchange", checkHash);
    checkHash();
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  return (
    <section id="empresas" className="relative py-20 md:py-32 border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-8 mb-12">
          <div className="w-full md:col-span-4">
            <p className="eyebrow">— Licitaciones & Reuniones</p>
          </div>
          <div className="w-full md:col-span-8">
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] tracking-tightest text-balance">
              Canal formal para requerimientos
              <span className="italic text-muted-foreground"> corporativos e institucionales.</span>
            </h2>
          </div>
        </div>

        {/* Form Switch Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-1.5 rounded-full bg-secondary/80 p-1 w-full max-w-md shadow-sm border border-border/40">
                        <button
              id="reunion-tecnica"
              onClick={() => setActiveForm("reunion")}
              className={`flex-1 rounded-full py-3 text-xs font-semibold tracking-wide capitalize transition-all ${
                activeForm === "reunion"
                  ? "bg-foreground text-background shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              1. Agendar Reunión Técnica
            </button>
            <button
              onClick={() => setActiveForm("propuesta")}
              className={`flex-1 rounded-full py-3 text-xs font-semibold tracking-wide capitalize transition-all ${
                activeForm === "propuesta"
                  ? "bg-foreground text-background shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              2. Solicitar Propuesta Comercial
            </button>
          </div>
        </div>

        {/* Form card wrapper */}
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-[var(--shadow-soft)]">
            {/* Header banner image for context */}
            <div className="relative aspect-[21/9] md:aspect-[24/6] overflow-hidden bg-muted">
              {activeForm === "propuesta" ? (
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
                    // Ampliamos el margen a 0.5s porque onTimeUpdate se dispara cada ~250ms
                    // así aseguramos atrapar el evento antes de llegar a la pantalla negra.
                    if (video.duration && video.currentTime >= video.duration - 0.5) {
                      video.currentTime = 0.1;
                      video.play();
                    }
                  }}
                />
              ) : (
                <video
                  src={particularesVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-black/25" />
            </div>

            <div className="p-6 md:p-12">
              <AnimatePresence mode="wait">
                {activeForm === "propuesta" ? (
                  <motion.div
                    key="propuesta-form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-8 text-left">
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--olive)] font-bold">
                        Licitaciones y Presupuestos
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl mt-1 mb-3">
                        Solicitud de Propuesta Técnica y Económica
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Completa el formulario a continuación para ingresar sus bases técnicas,
                        planos o requerimientos generales.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit("propuesta comercial")}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6"
                    >
                      {/* Honeypot field for anti-spam bots */}
                      <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                      
                      <Field label="Razón Social / Institución">
                        <input
                          name="Empresa_Razon_Social"
                          required
                          autoComplete="organization"
                          maxLength={120}
                          className={inputCls}
                          placeholder="Ej. Constructora Alianza SpA"
                        />
                      </Field>
                      <Field label="RUT Empresa">
                        <div className="relative w-full">
                          <input
                            name="RUT_Empresa"
                            required
                            maxLength={15}
                            pattern="^[0-9]{7,8}-[0-9Kk]{1}$"
                            title="Formato de RUT inválido. Ejemplo: 76123456-K (sin puntos y con guión)"
                            className={inputCls}
                            placeholder="Ej. 76123456-K"
                          />
                          <span className="block text-[9px] text-muted-foreground/80 mt-1">Requerido para la facturación y licitación formal</span>
                        </div>
                      </Field>
                      <Field label="Nombre y Cargo del Encargado">
                        <input
                          name="Nombre_Contacto"
                          required
                          autoComplete="name"
                          maxLength={120}
                          className={inputCls}
                          placeholder="Ej. Carlos Mendoza · Jefe de Adquisiciones"
                        />
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
                      <Field label="Ubicación del Proyecto">
                        <input
                          ref={addressRef}
                          name="Direccion_Proyecto"
                          required
                          autoComplete="street-address"
                          maxLength={200}
                          className={inputCls}
                          placeholder="Comuna, ciudad"
                        />
                      </Field>

                      <Field label="Servicio Requerido">
                        <select
                          name="Servicio_Requerido"
                          required
                          className={inputCls}
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Seleccionar tipo de servicio
                          </option>
                          <option>Ejecución de Obras Civiles Verdes (Construcción)</option>
                          <option>Mantención y Conservación Industrial (Contrato SLA)</option>
                          <option>Diseño Paisajístico y Planimetría 3D</option>
                          <option>Sistemas de Riego Tecnificado y Automatizado</option>
                          <option>Poda en Altura y Silvicultura Certificada</option>
                          <option>Habilitación de Oficinas y Terrazas Corporativas</option>
                        </select>
                      </Field>

                      <Field label="Superficie Estimada (m²)">
                        <select
                          name="Superficie_Estimada"
                          required
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

                      <Field label="Bases Técnicas / Planos / Archivos">
                        <div className="w-full">
                          <input
                            name="Archivos_Adjuntos"
                            type="file"
                            multiple
                            className="block w-full text-xs text-muted-foreground file:mr-4 file:rounded-full file:border-0 file:bg-foreground file:text-background file:px-4 file:py-2 file:text-[11px] file:tracking-wider file:uppercase file:font-semibold hover:file:opacity-90 file:cursor-pointer mt-2"
                          />
                          <span className="block text-[9px] text-muted-foreground/80 mt-1">Puedes adjuntar planos (PDF, CAD) o especificaciones del proyecto</span>
                        </div>
                      </Field>
                      <Field label="Fecha Estimada de Inicio">
                        <input
                          name="Fecha_Estimada_Inicio"
                          type="date"
                          min={getToday()}
                          className={inputCls}
                        />
                      </Field>

                      <div className="sm:col-span-2">
                        <Field label="Objetivo y Alcance del Proyecto">
                          <textarea
                            name="Objetivo_Alcance_Proyecto"
                            rows={3}
                            maxLength={1000}
                            className={`${inputCls} resize-none`}
                            placeholder="Detalla brevemente las especificaciones del proyecto, plazos requeridos o hitos de entrega."
                          />
                        </Field>
                      </div>

                      <div className="sm:col-span-2 flex items-start gap-3 text-xs text-muted-foreground mt-2">
                        <input type="checkbox" defaultChecked required className="mt-1 accent-[var(--olive)]" />
                        <span>
                          Confirmo la veracidad de los datos entregados y autorizo a Paisajismo
                          Bascharant a emitir una cotización formal.
                        </span>
                      </div>

                      <div className="sm:col-span-2 mt-4 text-left flex flex-col sm:flex-row sm:items-center gap-4">
                        <button className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-[13px] font-semibold tracking-wide text-background transition-all duration-500 hover:bg-[var(--olive)] hover:shadow-[var(--shadow-lift)]">
                          Enviar Solicitud de Propuesta{" "}
                          <span className="transition-transform duration-500 group-hover:translate-x-1">
                            →
                          </span>
                        </button>
                        <span className="text-xs text-muted-foreground/90 italic">
                          ⚡ Respuesta estimada en menos de 48 horas hábiles.
                        </span>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="reunion-form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-8 text-left">
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--olive)] font-bold">
                        Asesoría Técnica Remota o en Terreno
                      </span>
                      <h3 className="text-xl font-display font-medium text-foreground tracking-tight">
                        Agendar Reunión Técnica con Supervisor paisajista
                      </h3>
                      <p className="text-[13px] leading-relaxed text-muted-foreground">
                        Coordinemos una videoconferencia de 15 a 30 minutos o una inspección técnica en terreno para evaluar el estado fitosanitario, riego y diseño de sus áreas verdes actuales o parques. Esta actividad incluye visitas técnicas para revisar en terreno las condiciones reales del proyecto, evaluar soluciones de riego tecnificado para mejorar la eficiencia hídrica, y entregar informes fitosanitarios con criterios técnicos e información útil para su proyecto.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit("reunión técnica")}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6"
                    >
                      {/* Honeypot field for anti-spam bots */}
                      <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                      <Field label="Nombre del Profesional">
                        <input
                          name="Nombre_Completo"
                          required
                          autoComplete="name"
                          maxLength={120}
                          pattern="^[a-zA-ZÀ-ÿ\s\.\-']+$"
                          title="Solo se permiten letras y espacios."
                          className={inputCls}
                          placeholder="Ej. Camila Ruiz"
                        />
                      </Field>
                      <Field label="Cargo / Departamento">
                        <input
                          name="Cargo_Departamento"
                          required
                          autoComplete="honorific-suffix"
                          maxLength={80}
                          className={inputCls}
                          placeholder="Ej. Administradora de Contratos"
                        />
                      </Field>
                      <Field label="Empresa u Organismo">
                        <input
                          name="Empresa_Organismo"
                          required
                          autoComplete="organization"
                          maxLength={120}
                          className={inputCls}
                          placeholder="Ej. Inmobiliaria Andes"
                        />
                      </Field>
                      <Field label="Correo Corporativo">
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
                      <Field label="Teléfono / Celular">
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

                      <Field label="Fecha Sugerida para Reunión">
                        <input
                          name="Fecha_Sugerida"
                          required
                          type="date"
                          min={getToday()}
                          className={inputCls}
                        />
                      </Field>

                      <Field label="Bloque Horario Preferido">
                        <select name="Franja_Horaria" required className={inputCls} defaultValue="">
                          <option value="" disabled>
                            Seleccionar bloque
                          </option>
                          <option>Mañana (09:00 - 12:00)</option>
                          <option>Mediodía (12:00 - 14:00)</option>
                          <option>Tarde (14:00 - 18:00)</option>
                        </select>
                      </Field>

                      <Field label="Modalidad de Reunión">
                        <select
                          name="Modalidad_Reunion"
                          required
                          className={inputCls}
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Seleccionar modalidad
                          </option>
                          <option>Videollamada (Google Meet / Teams)</option>
                          <option>Inspección técnica en Terreno (Sujeto a factibilidad)</option>
                          <option>Llamada Telefónica</option>
                        </select>
                      </Field>

                      <div className="sm:col-span-2">
                        <Field label="Cuéntanos brevemente sobre tus necesidades">
                          <textarea
                            name="Comentarios_Reunion"
                            rows={3}
                            maxLength={1000}
                            className={`${inputCls} resize-none`}
                            placeholder="Ej. Necesitamos cotizar mantención mensual para 3 condominios en Chicureo con riego automático."
                          />
                        </Field>
                      </div>

                      <div className="sm:col-span-2 flex items-start gap-3 text-xs text-muted-foreground mt-2">
                        <input type="checkbox" defaultChecked required className="mt-1 accent-[var(--olive)]" />
                        <span>
                          Acepto coordinar la reunión en la fecha solicitada o en la más cercana
                          disponible.
                        </span>
                      </div>

                      <div className="sm:col-span-2 mt-4 text-left flex flex-col sm:flex-row sm:items-center gap-4">
                        <button className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-[13px] font-semibold tracking-wide text-background transition-all duration-500 hover:bg-[var(--olive)] hover:shadow-[var(--shadow-lift)]">
                          Agendar Reunión Técnica{" "}
                          <span className="transition-transform duration-500 group-hover:translate-x-1">
                            →
                          </span>
                        </button>
                        <span className="text-xs text-muted-foreground/90 italic">
                          ⚡ Confirmación en menos de 24 horas hábiles.
                        </span>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Redirect footnote for B2C/particular traffic */}
        <div className="mt-12 text-center text-xs text-muted-foreground max-w-md mx-auto">
          ¿Eres un particular? Para proyectos residenciales menores o compras de productos, por
          favor visita nuestra{" "}
          <a
            href="https://www.bascharant.store/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground font-semibold"
          >
            Tienda Bascharant
          </a>{" "}
          o contáctanos directamente a nuestro WhatsApp corporativo.
        </div>
      </div>
    </section>
  );
}
