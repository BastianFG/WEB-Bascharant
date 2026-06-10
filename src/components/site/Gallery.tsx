import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/PodaQuilicura.png";
import g8 from "@/assets/Podaaltura.png";
import g9 from "@/assets/Catapilco.png";
import g10 from "@/assets/Zap2.jpeg";

interface ProjectItem {
  slug: string;
  src: string;
  t: string;
  l: string;
  category: "ejecucion" | "mantencion" | "diseno";
  mandante: string;
  superficie: string;
  plazo: string;
  servicio: string;
}

const items: ProjectItem[] = [
  {
    slug: "proyecto-paisajismo-seco-reconversion-hidrica-quilicura-chile",
    src: g9,
    t: "Paisajismo Seco y Reconversión Hídrica",
    l: "Quilicura",
    category: "ejecucion",
    mandante: "Arauco Quilicura",
    superficie: "4.800 m²",
    plazo: "90 días",
    servicio: "Sustitución de césped y riego automatizado",
  },
  {
    slug: "proyecto-habilitacion-terraza-corporativa-las-condes-chile",
    src: g2,
    t: "Habilitación de Terraza Corporativa",
    l: "Las Condes",
    category: "ejecucion",
    mandante: "Edificio Corporativo Bash",
    superficie: "450 m²",
    plazo: "15 días",
    servicio: "Diseño e implementación macetas y arboles",
  },
  {
    slug: "proyecto-poda-preventiva-silvicultura-arbolado-quilicura-chile",
    src: g7,
    t: "Poda Preventiva y Silvicultura",
    l: "Quilicura",
    category: "mantencion",
    mandante: "Arauco San Ignacio",
    superficie: "45 ejemplares",
    plazo: "5 días",
    servicio: "Poda certificada y control fitosanitario",
  },
  {
    slug: "proyecto-mantencion-areas-verdes-industriales-san-ignacio-chile",
    src: g8,
    t: "Mantención de Áreas Verdes Industriales",
    l: "San Ignacio",
    category: "mantencion",
    mandante: "Arauco San Ignacio",
    superficie: "10 ejemplares",
    plazo: "Contrato Mantencion",
    servicio: "Poda en altura",
  },
  {
    slug: "proyecto-diseno-paisajismo-vial-copec-santiago-chile",
    src: g4,
    t: "Plano Acceso y Paisajismo Vial",
    l: "Santiago",
    category: "diseno",
    mandante: "Copec S.A.",
    superficie: "900 m²",
    plazo: "25 días",
    servicio: "Diseño paisajístico 3D y especificaciones técnicas",
  },
  {
    slug: "proyecto-muro-verde-vertical-vitacura-chile",
    src: g3,
    t: "Muro Verde Vertical de Alto Tránsito",
    l: "Vitacura",
    category: "diseno",
    mandante: "Huber Chile",
    superficie: "120 m²",
    plazo: "8 días",
    servicio: "Ingeniería de soporte y plantación artificial",
  },
  {
    slug: "proyecto-fumigacion-control-fitosanitario-quilicura-chile",
    src: g6,
    t: "Fumigación y Control Fitosanitario",
    l: "Quilicura",
    category: "mantencion",
    mandante: "Arauco Quilicura",
    superficie: "8.500 m²",
    plazo: "Servicio Mensual",
    servicio: "Prevención fitosanitaria en áreas comunes",
  },
  {
    slug: "proyecto-diseno-habilitacion-piscina-entorno-chicureo-chile",
    src: g5,
    t: "Plano Habilitación Piscina + Entorno",
    l: "Chicureo",
    category: "diseno",
    mandante: "Condominio Los Olivos",
    superficie: "700 m²",
    plazo: "15 días",
    servicio: "Modelado 3D y paisajismo",
  },
  {
    slug: "proyecto-paisajismo-residencial-zapallar-chile",
    src: g10,
    t: "Paisajismo Residencial",
    l: "Zapallar",
    category: "ejecucion",
    mandante: "Residencial Privado",
    superficie: "350 m²",
    plazo: "25 días",
    servicio: "Instalacion Pasto alfombra, sistema de riego",
  },
];

const categories = [
  { id: "all", label: "Todos los proyectos" },
  { id: "ejecucion", label: "Ejecución (Obras)" },
  { id: "mantencion", label: "Mantención Corporativa" },
  { id: "diseno", label: "Diseño & Licitaciones" },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);

  // Filter items based on selected category tab
  const filteredItems = items.filter((item) => activeTab === "all" || item.category === activeTab);

  // Limit items visible: show only 6 initially (especially important on mobile to avoid pushing content off screen)
  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section
      id="proyectos"
      className="relative py-20 md:py-36 bg-secondary/20 border-t border-border/60"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">— Portafolio B2B</p>
          </div>
          <div className="col-span-12 md:col-span-8 flex flex-col gap-6">
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] tracking-tightest text-balance">
              Nuestra trayectoria en
              <span className="italic text-muted-foreground"> grandes superficies.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-[15px] md:text-[17px] leading-relaxed">
              Explora nuestra galería de proyectos B2B de <strong>Paisajismo Bascharant</strong>. 
              Nos especializamos en el <strong>diseño sustentable</strong>, <strong>ejecución de obras paisajísticas</strong>, 
              <strong>mantención de áreas verdes industriales</strong> y <strong>soluciones de riego tecnificado</strong>. 
              Garantizamos altos estándares de calidad y compromiso ecológico para constructoras, empresas e industrias en Chile, utilizando tecnologías de vanguardia para la optimización hídrica y vegetal.
            </p>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-border/60">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setShowAll(false); // Reset expansion when tab changes
              }}
              className={`rounded-full px-5 py-2 text-[12.5px] font-medium tracking-wide transition-all ${
                activeTab === cat.id
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Symmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((it, i) => (
              <motion.article
                key={it.t}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col bg-background rounded-xl border border-border/80 overflow-hidden hover:shadow-[var(--shadow-soft)] transition-shadow duration-500"
              >
                <Link to={`/${it.slug}`} className="flex flex-col flex-grow">
                  {/* Image Container with Fixed Aspect Ratio */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted w-full">
                    <img
                      src={it.src}
                      alt={it.t}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm px-3 py-1 rounded-full border border-border/60 text-[10px] tracking-wide font-medium uppercase text-muted-foreground">
                      {it.category === "ejecucion"
                        ? "Ejecución"
                        : it.category === "mantencion"
                          ? "Mantención"
                          : "Diseño"}
                    </div>
                  </div>

                  {/* Project Specs - Corporate Ficha Técnica */}
                  <div className="p-6 flex flex-col flex-grow justify-between text-left">
                    <div>
                      <h3 className="font-display text-xl leading-snug mb-4 group-hover:text-[var(--olive)] transition-colors duration-300">
                        {it.t}
                      </h3>

                      {/* Technical Metadata Specs */}
                      <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-3 border-t border-border/50">
                        <div>
                          <div className="project-spec-label">Mandante</div>
                          <div className="project-spec-value truncate" title={it.mandante}>
                            {it.mandante}
                          </div>
                        </div>
                        <div>
                          <div className="project-spec-label">Superficie</div>
                          <div className="project-spec-value">{it.superficie}</div>
                        </div>
                        <div>
                          <div className="project-spec-label">Plazo Entregado</div>
                          <div className="project-spec-value text-[var(--olive)]">{it.plazo}</div>
                        </div>
                        <div>
                          <div className="project-spec-label">Ubicación</div>
                          <div className="project-spec-value truncate">{it.l}</div>
                        </div>
                      </div>
                    </div>

                    {/* Detailed service line */}
                    <div className="mt-5 pt-3 border-t border-border/30 text-[11.5px] text-muted-foreground italic flex justify-between items-center">
                      <span>{it.servicio}</span>
                      <span className="text-[var(--olive)] font-medium not-italic group-hover:underline">Ver proyecto &rarr;</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Expand/Collapse Control (Ver más) */}
        {filteredItems.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-3 rounded-full border border-border bg-background px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-foreground hover:bg-secondary hover:border-foreground/20 transition-all duration-300"
            >
              {showAll
                ? "Ver menos proyectos"
                : `Ver todos los proyectos (${filteredItems.length})`}
              <span>{showAll ? "↑" : "↓"}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
