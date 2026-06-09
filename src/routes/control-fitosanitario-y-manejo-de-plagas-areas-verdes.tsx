import { createFileRoute } from "@tanstack/react-router";
import ServiceLayout from "@/components/site/ServiceLayout";

export const Route = createFileRoute("/control-fitosanitario-y-manejo-de-plagas-areas-verdes")({
  head: () => ({
    meta: [
      { title: "Control Fitosanitario y Manejo de Plagas | Paisajismo Bascharant" },
      {
        name: "description",
        content: "Fumigación, control de plagas y sanidad vegetal para áreas verdes corporativas. Expertos en control fitosanitario en Santiago, Chile.",
      },
    ],
  }),
  component: ControlFitosanitarioPage,
});

function ControlFitosanitarioPage() {
  return (
    <ServiceLayout
      title="Control Fitosanitario y Manejo de Plagas"
      description="Protegemos su inversión paisajística previniendo y combatiendo enfermedades, hongos y plagas que amenazan sus áreas verdes."
      imageSrc="/images/servicios/servicio_fitosanitario_1781026704550.png"
      imageAlt="Control fitosanitario y sanidad vegetal en jardines de Chile"
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-display text-[var(--olive)] mb-4">
          Sanidad Vegetal para un Entorno Saludable
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          El <strong>control fitosanitario en áreas verdes</strong> es fundamental para mantener la vitalidad y el valor estético de los jardines corporativos. Un brote de plagas o enfermedades fúngicas puede destruir años de crecimiento en semanas. Nuestro equipo de profesionales realiza diagnósticos tempranos y aplica tratamientos precisos y seguros.
        </p>
        <h3 className="text-xl font-medium mt-8 mb-3">Nuestros Servicios Fitosanitarios</h3>
        <ul className="space-y-2 text-muted-foreground mb-8">
          <li>✓ <strong>Diagnóstico Agronómico:</strong> Evaluación experta del estado de salud de árboles, arbustos y cubiertas vegetales para detectar patógenos.</li>
          <li>✓ <strong>Fumigación y Aplicación de Agroquímicos:</strong> Uso responsable de insecticidas, fungicidas y acaricidas autorizados por el SAG en Chile, minimizando el impacto ambiental.</li>
          <li>✓ <strong>Control Biológico de Plagas:</strong> Implementación de métodos ecológicos y manejo integrado de plagas (MIP) para corporaciones con políticas de sostenibilidad estrictas.</li>
          <li>✓ <strong>Tratamientos Preventivos:</strong> Aplicaciones estacionales para prevenir la aparición de enfermedades comunes en el clima de la zona central y Santiago.</li>
          <li>✓ <strong>Inyecciones a Tronco (Endoterapia):</strong> Tratamientos de última tecnología, inyectando nutrientes y medicación directamente al sistema vascular de los árboles urbanos.</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Evite pérdidas costosas y mantenga sus áreas verdes siempre prístinas. Todos nuestros procedimientos de fumigación y control fitosanitario se realizan respetando rigurosamente las normativas de seguridad laboral y medioambiental chilenas.
        </p>
      </div>
    </ServiceLayout>
  );
}
