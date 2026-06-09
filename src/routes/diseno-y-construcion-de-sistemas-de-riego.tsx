import { createFileRoute } from "@tanstack/react-router";
import ServiceLayout from "@/components/site/ServiceLayout";

export const Route = createFileRoute("/diseno-y-construcion-de-sistemas-de-riego")({
  head: () => ({
    meta: [
      { title: "Diseño y Construcción de Sistemas de Riego | Paisajismo Bascharant" },
      {
        name: "description",
        content: "Proyectos de riego tecnificado automatizado para empresas en Chile. Optimice el consumo de agua en sus áreas verdes con tecnología de vanguardia.",
      },
    ],
  }),
  component: RiegoPage,
});

function RiegoPage() {
  return (
    <ServiceLayout
      title="Sistemas de Riego Tecnificado"
      description="Eficiencia hídrica y tecnología automatizada. Proyectamos, instalamos y mantenemos sistemas de riego inteligentes para jardines de alto estándar."
      imageSrc="/images/servicios/servicio_riego_1781026727888.png"
      imageAlt="Riego tecnificado y automatizado para jardines corporativos en Chile"
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-display text-[var(--olive)] mb-4">
          Cuidamos cada Gota con Tecnología e Ingeniería
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Ante la realidad del cambio climático y la escasez hídrica en Chile, un sistema de riego eficiente dejó de ser un lujo para convertirse en una necesidad estructural. El <strong>diseño y construcción de sistemas de riego automatizado</strong> que realizamos en Bascharant asegura el suministro exacto de agua que sus plantas necesitan, reduciendo drásticamente el desperdicio y los costos operativos de su empresa.
        </p>
        <h3 className="text-xl font-medium mt-8 mb-3">Nuestras Soluciones Hídricas</h3>
        <ul className="space-y-2 text-muted-foreground mb-8">
          <li>✓ <strong>Diseño Hidráulico Integral:</strong> Planificación de redes de riego, cálculo de presiones y caudales asegurando una cobertura 100% uniforme.</li>
          <li>✓ <strong>Instalación de Riego por Goteo:</strong> Sistemas eficientes directamente a la raíz para arbustos, huertos y macizos florales, reduciendo la evaporación.</li>
          <li>✓ <strong>Riego por Aspersión y Microaspersión:</strong> Ideal para grandes extensiones de césped corporativo, parques y campos deportivos.</li>
          <li>✓ <strong>Automatización y Controladores Inteligentes:</strong> Programadores que se conectan al clima local (WiFi) para ajustar los tiempos de riego automáticamente si llueve o hay altas temperaturas.</li>
          <li>✓ <strong>Mantención y Reparación:</strong> Diagnóstico de fugas, reemplazo de electroválvulas, limpieza de filtros y re-calibración de emisores estacionales.</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Nuestros ingenieros agrónomos diseñan los sistemas seleccionando componentes de grado comercial (Rain Bird, Hunter) para garantizar durabilidad y resistencia en proyectos B2B e institucionales de alta exigencia a lo largo de Chile.
        </p>
      </div>
    </ServiceLayout>
  );
}
