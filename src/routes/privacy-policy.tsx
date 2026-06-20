import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad | Paisajismo Bascharant" },
      { name: "description", content: "Política de Privacidad y Tratamiento de Datos Personales de Paisajismo Bascharant SpA." },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border/40">
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 z-10">
          <h1 className="text-4xl md:text-5xl font-display tracking-tight leading-[1.1] mb-6">
            Política de <span className="italic text-[var(--olive)]">Privacidad</span>
          </h1>
          <p className="text-muted-foreground text-sm">Última actualización: Junio de 2026</p>
        </div>
      </section>

      <section className="relative py-16 md:py-24 flex-grow">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground">
            <p>
              En <strong>Paisajismo Bascharant SpA</strong>, respetamos su privacidad y estamos comprometidos a proteger los datos personales que nos proporciona a través de nuestros canales de contacto y formularios en línea.
            </p>
            
            <h2 className="text-foreground text-2xl mt-8 mb-4">1. Información que recopilamos</h2>
            <p>
              A través de nuestro formulario de contacto, recopilamos información personal básica necesaria para atender sus requerimientos comerciales y técnicos, la cual puede incluir:
            </p>
            <ul>
              <li>Nombre completo y cargo.</li>
              <li>Empresa o Razón Social y RUT comercial.</li>
              <li>Correo electrónico corporativo y teléfono de contacto.</li>
              <li>Ubicación del proyecto y detalles de la solicitud.</li>
            </ul>

            <h2 className="text-foreground text-2xl mt-8 mb-4">2. Uso de la Información</h2>
            <p>
              Los datos recopilados son utilizados exclusivamente para los siguientes fines:
            </p>
            <ul>
              <li>Contactarle para evaluar y dar curso a su solicitud de servicios, cotizaciones o visitas técnicas.</li>
              <li>Enviar propuestas comerciales e información relevante sobre nuestros servicios de paisajismo.</li>
              <li>Gestión interna y estadística comercial.</li>
            </ul>
            <p>
              Sus datos no serán vendidos, alquilados ni compartidos con terceros con fines publicitarios ajenos a nuestra empresa.
            </p>

            <h2 className="text-foreground text-2xl mt-8 mb-4">3. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas de seguridad para proteger su información personal contra accesos no autorizados, alteración, divulgación o destrucción. Nuestro sitio web utiliza protocolos de encriptación (SSL) para la transferencia segura de datos.
            </p>

            <h2 className="text-foreground text-2xl mt-8 mb-4">4. Sus Derechos</h2>
            <p>
              Usted tiene derecho a solicitar acceso, rectificación, cancelación u oposición al tratamiento de sus datos personales. Para ejercer estos derechos, puede comunicarse directamente con nosotros al correo <strong>paisajismo@bascharant.com</strong>.
            </p>

            <h2 className="text-foreground text-2xl mt-8 mb-4">5. Consentimiento</h2>
            <p>
              Al utilizar nuestro formulario de contacto y aceptar las condiciones antes del envío, usted confirma la veracidad de los datos entregados y autoriza expresamente a Paisajismo Bascharant SpA para el tratamiento de dicha información bajo los términos descritos en esta política.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
