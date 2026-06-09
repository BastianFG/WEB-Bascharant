import { createFileRoute } from "@tanstack/react-router";
import ServiceLayout from "@/components/site/ServiceLayout";

export const Route = createFileRoute("/servicio-de-mantencion-de-areas-verdes")({
  head: () => ({
    meta: [
      { title: "Servicio de Mantención de Áreas Verdes | Paisajismo Bascharant Chile" },
      {
        name: "description",
        content: "Mantención profesional de áreas verdes y jardines corporativos en Santiago y Chile. Conservación, poda, informes fitosanitarios y cuidado integral B2B.",
      },
    ],
  }),
  component: MantencionPage,
});

function MantencionPage() {
  return (
    <ServiceLayout
      title="Mantención de Áreas Verdes"
      description="Conservación profesional y sustentable de jardines para empresas, condominios e industrias en Chile."
      imageSrc="/images/servicios/servicio_mantencion_1781026667167.png"
      imageAlt="Mantención de áreas verdes corporativas en Santiago de Chile"
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-display text-[var(--olive)] mb-4">
          Excelencia en el Cuidado de su Entorno
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          En Paisajismo Bascharant, entendemos que las áreas verdes de su empresa son la carta de presentación ante sus clientes y el entorno de bienestar para sus colaboradores. Nuestro servicio de <strong>mantención de áreas verdes en Chile</strong> está diseñado específicamente para el sector corporativo (B2B), inmobiliarias e instituciones.
        </p>
        <h3 className="text-xl font-medium mt-8 mb-3">¿Qué incluye nuestro servicio?</h3>
        <ul className="space-y-2 text-muted-foreground mb-8">
          <li>✓ <strong>Corte y perfilado de césped</strong> con maquinaria profesional para un acabado perfecto.</li>
          <li>✓ <strong>Poda de formación y limpieza</strong> de arbustos, setos y especies florales según la estación del año.</li>
          <li>✓ <strong>Desmalezado y limpieza general</strong>, manteniendo senderos y jardineras libres de malezas invasivas.</li>
          <li>✓ <strong>Fertilización y nutrición</strong> de suelos mediante enmiendas orgánicas y químicas certificadas.</li>
          <li>✓ <strong>Revisión periódica del sistema de riego</strong> para asegurar la eficiencia hídrica.</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Trabajamos bajo altos estándares de seguridad, con personal acreditado y entregando informes periódicos del estado fitosanitario de sus instalaciones. Asegure el valor de su inversión paisajística con nosotros.
        </p>
      </div>
    </ServiceLayout>
  );
}
