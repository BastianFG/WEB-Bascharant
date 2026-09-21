import { createFileRoute } from "@tanstack/react-router";
import ServiceLayout from "@/components/site/ServiceLayout";

export const Route = createFileRoute("/poda-tala-y-transplante-profesional-de-arbolado-urbano-comercial")({
  head: () => ({
    meta: [
      { title: "Poda, Tala y Trasplante de Árboles | Paisajismo Bascharant" },
      {
        name: "description",
        content: "Servicio experto de poda en altura, tala controlada y trasplante de arbolado urbano y corporativo en Chile con máximos estándares de seguridad.",
      },
    ],
  }),
  component: PodaTalaPage,
});

function PodaTalaPage() {
  return (
    <ServiceLayout
      title="Manejo Profesional de Arbolado"
      description="Poda en altura, tala controlada y trasplantes mayores. Especialistas en arboricultura urbana y corporativa bajo estrictas normas de seguridad."
      imageSrc="/images/servicios/servicio_poda_1781026716586.png"
      imageAlt="Poda profesional y tala controlada de árboles en Chile"
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-display text-[var(--olive)] mb-4">
          Cuidado Especializado para Grandes Especies
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          El manejo del arbolado en entornos urbanos o corporativos exige conocimiento técnico y equipos especializados. Una mala práctica no solo daña irreversiblemente al ejemplar, sino que supone un riesgo grave para infraestructuras y personas. El servicio de <strong>poda, tala y trasplante en Chile</strong> de Bascharant garantiza resultados seguros y profesionales.
        </p>
        <h3 className="text-xl font-medium mt-8 mb-3">Nuestras Soluciones de Arboricultura</h3>
        <ul className="space-y-2 text-muted-foreground mb-8">
          <li>✓ <strong>Poda en Altura y Despeje:</strong> Realizada con elevadores mecánicos o técnicas de trepa profesional para despeje de líneas eléctricas, luminarias y fachadas.</li>
          <li>✓ <strong>Poda Sanitaria y de Formación:</strong> Eliminación de ramas muertas o enfermas para mejorar la estructura, la entrada de luz y prevenir accidentes por caídas.</li>
          <li>✓ <strong>Tala Controlada y Dirigida:</strong> Desmontaje seguro de árboles muertos o peligrosos en espacios confinados donde no es posible una caída libre.</li>
          <li>✓ <strong>Trasplante de Especies Mayores:</strong> Movimiento y reubicación de árboles adultos mediante técnicas especializadas para asegurar la supervivencia y el arraigo en su nuevo hábitat.</li>
          <li>✓ <strong>Gestión y Retiro de Residuos Vegetales:</strong> Chipeado in-situ de ramas y traslado de troncos a vertederos autorizados, dejando el área completamente despejada.</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Nuestros arboristas están certificados y equipados con elementos de protección personal (EPP) de última generación, además de contar con todos los seguros de responsabilidad civil requeridos para trabajar en los proyectos B2B más exigentes.
        </p>
      </div>
    </ServiceLayout>
  );
}
