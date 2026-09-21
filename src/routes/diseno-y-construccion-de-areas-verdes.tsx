import { createFileRoute } from "@tanstack/react-router";
import ServiceLayout from "@/components/site/ServiceLayout";

import GlossaryLink from "@/components/site/GlossaryLink";

export const Route = createFileRoute("/diseno-y-construccion-de-areas-verdes")({
  head: () => ({
    meta: [
      { title: "Diseño y Construcción de Áreas Verdes | Paisajismo Bascharant" },
      {
        name: "description",
        content: "Proyectos integrales de paisajismo corporativo, diseño de parques y construcción de áreas verdes para empresas, inmobiliarias y municipios en Chile.",
      },
    ],
  }),
  component: DisenoConstruccionPage,
});

function DisenoConstruccionPage() {
  return (
    <ServiceLayout
      title="Diseño y Construcción de Áreas Verdes"
      description="Creamos paisajes corporativos que inspiran. Desde la conceptualización y diseño 3D hasta la ejecución completa de la obra verde."
      imageSrc="/images/servicios/servicio_diseno_1781026694037.png"
      imageAlt="Diseño y construcción de áreas verdes en Santiago"
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-display text-[var(--olive)] mb-4">
          Transformamos Espacios en Experiencias Naturales
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          El <strong>diseño y construcción de áreas verdes</strong> es mucho más que plantar árboles. Es la creación de microclimas urbanos, espacios de descanso para equipos corporativos y el reflejo del compromiso medioambiental de su organización. En Bascharant, lideramos proyectos paisajísticos en todo Chile con una mirada sustentable y moderna.
        </p>
        <h3 className="text-xl font-medium mt-8 mb-3">Nuestra Metodología <GlossaryLink>B2B</GlossaryLink></h3>
        <ul className="space-y-2 text-muted-foreground mb-8">
          <li>✓ <strong>Diseño Paisajístico y Modelado 3D:</strong> Visualización previa de su parque o jardín corporativo, asegurando que la estética coincida con la identidad de su marca.</li>
          <li>✓ <strong>Ingeniería y <GlossaryLink>Cubicación</GlossaryLink>:</strong> Cálculo exacto de materiales, especies vegetales, y sustratos necesarios para optimizar la licitación.</li>
          <li>✓ <strong>Movimiento de Tierras y Preparación de Suelo:</strong> Maquinaria pesada y mejoramiento de sustratos para garantizar la supervivencia vegetal.</li>
          <li>✓ <strong>Plantación y Arborización:</strong> Selección de especies nativas o de bajo requerimiento hídrico (Xeropaisajismo) ideales para el clima chileno.</li>
          <li>✓ <strong>Urbanismo Sustentable:</strong> Incorporación de senderos, mobiliario urbano, e iluminación eficiente.</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Ya sea para un nuevo complejo industrial, un edificio residencial o la remodelación de un campus corporativo, nuestro equipo de arquitectos del paisaje y agrónomos aseguran una ejecución impecable y dentro de los plazos establecidos.
        </p>
      </div>
    </ServiceLayout>
  );
}
