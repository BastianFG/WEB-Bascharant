import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-background border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <div className="grid grid-cols-12 gap-10 mb-16">
          {/* --- COLUMNA IZQUIERDA (AQUÍ ESTÁ LA MAGIA DEL CENTRADO) --- */}
          {/* Agregamos 'relative' a la columna para que la marca de agua use este espacio como límite */}
          <div className="col-span-12 md:col-span-5 relative">
            {/* LOGO DE FONDO */}
            <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
              <img
                src={logo}
                alt=""
                /* 
                  - w-[130%] lg:w-[110%]: Hace que el logo sea un poco más ancho que la columna, dándole ese efecto de "desborde" elegante.
                  - max-w-none: Evita que el logo se comprima.
                  - opacity-[0.025]: Opacidad perfecta para no tapar la lectura.
                */
                className="w-[100%] lg:w-[65%] max-w-none object-contain filter brightness-0 invert opacity-[0.025]"
              />
            </div>

            {/* TEXTOS PRINCIPALES */}
            {/* Envolvemos el contenido en 'relative z-10' para asegurar que esté por encima de la marca de agua */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 group cursor-pointer w-fit">
                <img
                  src={logo}
                  alt="Sello Bascharant"
                  className="h-7 w-auto object-contain filter brightness-0 invert opacity-80 transition-opacity duration-300"
                />
              </div>
              <p className="font-display text-3xl md:text-4xl leading-[1.1] tracking-tightest max-w-md text-balance">
                Paisajismo contemporáneo
                <span className="italic text-white/60 block mt-1"> diseñado para perdurar.</span>
              </p>
            </div>
          </div>

          {/* Navegación */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-6">
            <div className="text-[11px] tracking-[0.25em] uppercase text-white/50 mb-5">
              Navegación
            </div>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="/#inicio" className="hover:text-white transition-colors duration-300">Inicio</a>
              </li>
              <li>
                <a href="/#servicios" className="hover:text-white transition-colors duration-300">Servicios</a>
              </li>
              <li>
                <a href="/#empresas" className="hover:text-white transition-colors duration-300">Propuesta Comercial</a>
              </li>
              <li>
                <a href="/proyecto-paisajismo" className="hover:text-white transition-colors duration-300">Proyectos</a>
              </li>
              <li>
                <a href="/sobre-nosotros" className="hover:text-white transition-colors duration-300">Sobre Nosotros</a>
              </li>
              <li>
                <a href="/glosario" className="hover:text-white transition-colors duration-300 text-[var(--olive)]">Glosario Técnico</a>
              </li>
              <li>
                <a href="/info" className="hover:text-white transition-colors duration-300 text-[var(--olive)]">Centro de Información</a>
              </li>
            </ul>
          </div>

          {/* Especialidades SEO */}
          <div className="col-span-12 md:col-span-5 lg:col-span-3">
            <div className="text-[11px] tracking-[0.25em] uppercase text-white/50 mb-5">
              Especialidades
            </div>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="/servicio-de-mantencion-de-areas-verdes" className="hover:text-white transition-colors duration-300">Mantención de Áreas Verdes</a>
              </li>
              <li>
                <a href="/diseno-y-construccion-de-areas-verdes" className="hover:text-white transition-colors duration-300">Diseño y Construcción</a>
              </li>
              <li>
                <a href="/control-fitosanitario-y-manejo-de-plagas-areas-verdes" className="hover:text-white transition-colors duration-300">Control Fitosanitario</a>
              </li>
              <li>
                <a href="/poda-tala-y-transplante-profesional-de-arbolado-urbano-comercial" className="hover:text-white transition-colors duration-300">Arbolado Urbano y Poda</a>
              </li>
              <li>
                <a href="/diseno-y-construcion-de-sistemas-de-riego" className="hover:text-white transition-colors duration-300">Sistemas de Riego</a>
              </li>
              <li>
                <a href="https://www.bascharant.store/servicios" className="hover:text-white transition-colors duration-300">Mantecion hogar</a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <div className="text-[11px] tracking-[0.25em] uppercase text-white/50 mb-5">
              Contacto
            </div>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="tel:+56988458216" className="hover:text-white transition-colors duration-300">+56 9 8845 8216</a>
              </li>
              <li>
                <a href="mailto:paisajismo@bascharant.com" className="hover:text-white transition-colors duration-300">paisajismo@bascharant.com</a>
              </li>
              <li>
                <a href="https://wa.me/56988458216" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">WhatsApp</a>
              </li>
              <li className="pt-2">
                <a href="https://www.instagram.com/paisajismobascharant/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/paisajismo-bascharat-490b06b8/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.facebook.com/people/Paisajismo-Bascharant/61590789628168/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Facebook</a>
              </li>
              <li>
                <a href="https://x.com/Josfuentesgome2" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">X (Twitter)</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea inferior de cierre */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Paisajismo Bascharant SpA. RUT: 76.280.819-6. Todos los derechos reservados.</p>
          <p className="tracking-[0.2em] uppercase text-[10px] text-white/30">
            Empresa de Paisajismo
          </p>
        </div>
      </div>
    </footer>
  );
}
