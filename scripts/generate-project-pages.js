import fs from 'fs';
import path from 'path';

const projects = [
  {
    slug: 'proyecto-paisajismo-seco-reconversion-hidrica-quilicura-chile',
    imageImport: 'import img from "@/assets/Catapilco.png";',
    title: 'Paisajismo Seco y Reconversión Hídrica en Quilicura',
    metaTitle: 'Proyecto Paisajismo Seco y Reconversión Hídrica Chile | Bascharant',
    metaDesc: 'Descubre nuestro proyecto de paisajismo seco y reconversión hídrica en Quilicura, Chile. Expertos en mantención de áreas verdes y eficiencia hídrica.',
    keywords: 'paisajismo seco, reconversion hidrica chile, mantencion areas verdes quilicura, riego automatizado, expertos paisajismo chile',
    mandante: 'Arauco Quilicura',
    superficie: '4.800 m²',
    plazo: '90 días',
    servicio: 'Sustitución de césped y riego automatizado',
    seoText: 'En este proyecto ejecutado en Quilicura, aplicamos los más altos estándares de <strong>paisajismo seco y reconversión hídrica</strong> para optimizar el consumo de agua. Como especialistas en <strong>mantención de áreas verdes en Chile</strong>, reemplazamos el césped tradicional por especies de bajo requerimiento hídrico e instalamos un sistema de <strong>riego automatizado</strong> altamente eficiente, garantizando la sustentabilidad a largo plazo de las instalaciones industriales de Arauco.'
  },
  {
    slug: 'proyecto-habilitacion-terraza-corporativa-las-condes-chile',
    imageImport: 'import img from "@/assets/g2.jpg";',
    title: 'Habilitación de Terraza Corporativa en Las Condes',
    metaTitle: 'Proyecto Habilitación Terraza Corporativa Las Condes | Paisajismo Chile',
    metaDesc: 'Diseño e implementación de terraza corporativa en Las Condes. Expertos en paisajismo corporativo, macetas y árboles ornamentales en Chile.',
    keywords: 'terraza corporativa, paisajismo corporativo las condes, mantencion areas verdes santiago, arboles ornamentales chile',
    mandante: 'Edificio Corporativo Bash',
    superficie: '450 m²',
    plazo: '15 días',
    servicio: 'Diseño e implementación macetas y arboles',
    seoText: 'Transformamos este espacio en Las Condes mediante el <strong>diseño y paisajismo corporativo</strong>. Proveímos e instalamos macetas y árboles ornamentales seleccionados especialmente para soportar las condiciones urbanas. Este proyecto de <strong>mantención de áreas verdes y paisajismo en Chile</strong> mejora el entorno laboral, aportando valor estético y bienestar a los colaboradores del Edificio Corporativo Bash.'
  },
  {
    slug: 'proyecto-poda-preventiva-silvicultura-arbolado-quilicura-chile',
    imageImport: 'import img from "@/assets/PodaQuilicura.png";',
    title: 'Poda Preventiva y Silvicultura en Quilicura',
    metaTitle: 'Poda Preventiva y Silvicultura Quilicura Chile | Bascharant',
    metaDesc: 'Servicios de poda certificada, silvicultura y control fitosanitario de arbolado en Quilicura. Expertos en mantención de áreas verdes en Chile.',
    keywords: 'poda preventiva chile, silvicultura urbana, control fitosanitario, mantencion areas verdes quilicura, poda certificada',
    mandante: 'Arauco San Ignacio',
    superficie: '45 ejemplares',
    plazo: '5 días',
    servicio: 'Poda certificada y control fitosanitario',
    seoText: 'La <strong>silvicultura y poda preventiva</strong> son esenciales para la seguridad industrial. En este proyecto en Quilicura, nuestros expertos en <strong>mantención de áreas verdes en Chile</strong> realizaron podas certificadas y tratamientos de <strong>control fitosanitario</strong> en 45 ejemplares. Aseguramos la salud del arbolado y mitigamos riesgos, consolidándonos como líderes en paisajismo y manejo arbóreo a nivel nacional.'
  },
  {
    slug: 'proyecto-mantencion-areas-verdes-industriales-san-ignacio-chile',
    imageImport: 'import img from "@/assets/Podaaltura.png";',
    title: 'Mantención de Áreas Verdes Industriales en San Ignacio',
    metaTitle: 'Mantención Áreas Verdes Industriales San Ignacio Chile | Bascharant',
    metaDesc: 'Contrato de mantención de áreas verdes industriales y poda en altura en San Ignacio. Empresa líder en paisajismo en Chile.',
    keywords: 'mantencion areas verdes industriales, poda en altura chile, paisajismo industrial, jardineria san ignacio',
    mandante: 'Arauco San Ignacio',
    superficie: '10 ejemplares',
    plazo: 'Contrato Mantencion',
    servicio: 'Poda en altura',
    seoText: 'Nuestro servicio continuo de <strong>mantención de áreas verdes industriales</strong> garantiza entornos corporativos seguros y estéticos. En San Ignacio, llevamos a cabo rigurosas labores de <strong>poda en altura</strong> y cuidado paisajístico bajo un modelo de contrato recurrente. En Bascharant somos la empresa experta en <strong>paisajismo en Chile</strong> orientada al sector industrial.'
  },
  {
    slug: 'proyecto-diseno-paisajismo-vial-copec-santiago-chile',
    imageImport: 'import img from "@/assets/g4.jpg";',
    title: 'Plano Acceso y Paisajismo Vial en Santiago',
    metaTitle: 'Diseño de Paisajismo Vial y Acceso Santiago Chile | Bascharant',
    metaDesc: 'Diseño de paisajismo vial y acceso corporativo en Santiago. Soluciones en diseño 3D y especificaciones técnicas para áreas verdes en Chile.',
    keywords: 'diseño paisajismo vial, paisajismo santiago chile, mantencion areas verdes, modelado 3d paisajismo',
    mandante: 'Copec S.A.',
    superficie: '900 m²',
    plazo: '25 días',
    servicio: 'Diseño paisajístico 3D y especificaciones técnicas',
    seoText: 'Para este importante cliente en Santiago, desarrollamos un proyecto integral de <strong>diseño de paisajismo vial</strong>. Utilizamos modelado 3D avanzado y entregamos especificaciones técnicas precisas para asegurar el éxito en la etapa de ejecución. Nuestro enfoque como expertos en <strong>diseño y mantención de áreas verdes en Chile</strong> garantiza proyectos viales funcionales, resilientes y de alto impacto visual.'
  },
  {
    slug: 'proyecto-muro-verde-vertical-vitacura-chile',
    imageImport: 'import img from "@/assets/g3.jpg";',
    title: 'Muro Verde Vertical de Alto Tránsito en Vitacura',
    metaTitle: 'Muro Verde Vertical Alto Tránsito Vitacura Chile | Bascharant',
    metaDesc: 'Ingeniería e instalación de muro verde vertical en zonas de alto tránsito en Vitacura. Expertos en paisajismo corporativo e innovación.',
    keywords: 'muro verde vertical, paisajismo corporativo vitacura, diseño areas verdes chile, jardines verticales santiago',
    mandante: 'Huber Chile',
    superficie: '120 m²',
    plazo: '8 días',
    servicio: 'Ingeniería de soporte y plantación artificial',
    seoText: 'La innovación en <strong>paisajismo urbano</strong> es clave en zonas de alto flujo. En Vitacura, diseñamos e instalamos un <strong>muro verde vertical</strong> utilizando ingeniería de soporte de primer nivel y plantación artificial de alta gama. Esta solución corporativa refleja el compromiso de Bascharant con el <strong>diseño de áreas verdes en Chile</strong> adaptadas a espacios arquitectónicos modernos.'
  },
  {
    slug: 'proyecto-fumigacion-control-fitosanitario-quilicura-chile',
    imageImport: 'import img from "@/assets/g6.jpg";',
    title: 'Fumigación y Control Fitosanitario en Quilicura',
    metaTitle: 'Fumigación y Control Fitosanitario Áreas Verdes Quilicura | Bascharant',
    metaDesc: 'Servicio de fumigación y control fitosanitario para grandes superficies industriales en Quilicura. Expertos en salud vegetal en Chile.',
    keywords: 'fumigacion areas verdes, control fitosanitario chile, prevencion de plagas, mantencion areas verdes quilicura',
    mandante: 'Arauco Quilicura',
    superficie: '8.500 m²',
    plazo: 'Servicio Mensual',
    servicio: 'Prevención fitosanitaria en áreas comunes',
    seoText: 'La protección de grandes extensiones vegetales requiere un manejo técnico experto. Nuestro servicio mensual de <strong>fumigación y control fitosanitario</strong> en Quilicura abarca 8.500 m², asegurando la prevención de plagas en áreas comunes. Complementamos la <strong>mantención de áreas verdes en Chile</strong> con un enfoque científico y productos amigables con el medio ambiente.'
  },
  {
    slug: 'proyecto-diseno-habilitacion-piscina-entorno-chicureo-chile',
    imageImport: 'import img from "@/assets/g5.jpg";',
    title: 'Plano Habilitación Piscina y Entorno en Chicureo',
    metaTitle: 'Habilitación de Entorno de Piscina y Paisajismo Chicureo | Bascharant',
    metaDesc: 'Modelado 3D y diseño de paisajismo para habilitación de piscinas en Chicureo. Transforma tus áreas verdes con expertos en Chile.',
    keywords: 'diseño paisajismo piscina, habilitacion entorno chicureo, diseño areas verdes chile, modelado 3d jardines',
    mandante: 'Condominio Los Olivos',
    superficie: '700 m²',
    plazo: '15 días',
    servicio: 'Modelado 3D y paisajismo',
    seoText: 'En Chicureo, realizamos el <strong>diseño de paisajismo</strong> y modelado 3D para la habilitación integral del entorno de una piscina. Como líderes en <strong>diseño de áreas verdes en Chile</strong>, proyectamos espacios que integran armoniosamente el agua, la vegetación y la arquitectura, entregando una visualización hiperrealista antes de la ejecución de la obra.'
  },
  {
    slug: 'proyecto-paisajismo-residencial-zapallar-chile',
    imageImport: 'import img from "@/assets/Zap2.jpeg";',
    title: 'Paisajismo Residencial Exclusivo en Zapallar',
    metaTitle: 'Paisajismo Residencial Zapallar Chile | Instalación y Riego',
    metaDesc: 'Proyecto de paisajismo residencial en Zapallar. Especialistas en instalación de pasto alfombra, riego automatizado y mantención de áreas verdes.',
    keywords: 'paisajismo residencial zapallar, instalacion pasto alfombra, sistema de riego chile, mantencion areas verdes',
    mandante: 'Residencial Privado',
    superficie: '350 m²',
    plazo: '25 días',
    servicio: 'Instalación Pasto alfombra, sistema de riego',
    seoText: 'Elevamos el estándar del <strong>paisajismo residencial en Zapallar</strong>. Llevamos a cabo la preparación del terreno, la instalación de pasto en rollo y la implementación de un <strong>sistema de riego tecnificado</strong>. Nuestra experiencia en la <strong>mantención y construcción de áreas verdes en Chile</strong> nos permite garantizar acabados perfectos y jardines sustentables a largo plazo.'
  }
];

const template = (p) => `import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
${p.imageImport}

export const Route = createFileRoute("/${p.slug}")({
  head: () => ({
    meta: [
      { title: "${p.metaTitle}" },
      { name: "description", content: "${p.metaDesc}" },
      { name: "keywords", content: "${p.keywords}" },
      { property: "og:title", content: "${p.metaTitle}" },
      { property: "og:description", content: "${p.metaDesc}" },
    ],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  return (
    <main className="relative bg-background text-foreground antialiased overflow-x-hidden pt-24">
      <Navbar />
      
      <article className="container mx-auto px-6 py-12 md:py-20 max-w-6xl">
        <div className="mb-10">
          <Link 
            to="/proyecto-paisajismo" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Proyectos
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{ "${p.title}" }</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden bg-muted border border-border/50 shadow-lg mb-10">
              <img 
                src={img} 
                alt="${p.title}" 
                className="w-full h-auto max-h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Descripción del Proyecto</h2>
              <p className="text-muted-foreground leading-relaxed text-[17px]" dangerouslySetInnerHTML={{ __html: '${p.seoText}' }}></p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-32 p-8 rounded-3xl bg-secondary/30 border border-border/60 shadow-[0_10px_40px_-10px_rgba(132,175,76,0.1)]">
              <h3 className="text-xl font-bold mb-6 border-b border-border/50 pb-4">Ficha Técnica</h3>
              
              <ul className="space-y-6">
                <li>
                  <span className="block text-sm font-medium text-muted-foreground mb-1">Mandante</span>
                  <span className="block text-foreground font-semibold flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    { "${p.mandante}" }
                  </span>
                </li>
                <li>
                  <span className="block text-sm font-medium text-muted-foreground mb-1">Servicio Principal</span>
                  <span className="block text-foreground font-semibold flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    { "${p.servicio}" }
                  </span>
                </li>
                <li>
                  <span className="block text-sm font-medium text-muted-foreground mb-1">Superficie</span>
                  <span className="block text-foreground font-semibold flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    { "${p.superficie}" }
                  </span>
                </li>
                <li>
                  <span className="block text-sm font-medium text-muted-foreground mb-1">Plazo de Ejecución</span>
                  <span className="block text-foreground font-semibold flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-primary">{ "${p.plazo}" }</span>
                  </span>
                </li>
              </ul>
              
              <div className="mt-10 pt-8 border-t border-border/50 text-center">
                <p className="text-sm text-muted-foreground mb-4">¿Necesitas un proyecto similar?</p>
                <a 
                  href="/#contacto"
                  className="inline-flex w-full justify-center items-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                >
                  Cotizar Servicio
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
`;

async function main() {
  const routesDir = path.resolve('src/routes');
  for (const p of projects) {
    const filename = p.slug + '.tsx';
    const filepath = path.join(routesDir, filename);
    fs.writeFileSync(filepath, template(p));
    console.log('✅ Created ' + filename);
  }
}

main().catch(console.error);
