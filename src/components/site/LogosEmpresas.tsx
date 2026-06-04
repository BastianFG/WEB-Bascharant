import React from 'react';
import logoArauco from '../../assets/logo-ParqueArauco.png';
import logoCopec from '../../assets/logocopec.png';
import logoHuber from '../../assets/logohuber.png';
import logoBash from '../../assets/logobash.png';
import logoAir from '../../assets/Logoair.png';
import logoQuilicura from '../../assets/LogoQuilicura.png'; 

export function LogosEmpresas() {
  const clientes = [
    { nombre: "Arauco", logo: logoArauco },
    { nombre: "Copec", logo: logoCopec },
    { nombre: "Huber", logo: logoHuber },
    { nombre: "Bash", logo: logoBash },
    { nombre: "Air", logo: logoAir },
    { nombre: "Quilicura", logo: logoQuilicura },
  ];

  // Quadruple the array to guarantee zero seam gaps on ultra-wide screens
  const doubledClientes = [...clientes, ...clientes, ...clientes, ...clientes];

  return (
    <section className="py-16 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Elegant Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-xs md:text-sm font-semibold tracking-[0.25em] text-slate-500 dark:text-slate-400 uppercase">
            Empresas que confiaron en nosotros
          </h2>
        </div>

        {/* Marquee Viewport with Edge Fade Masks */}
        <div 
          className="relative w-full overflow-hidden select-none"
          style={{
            maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)"
          }}
        >
          {/* Infinite Running Track */}
          <div className="flex animate-marquee gap-16 py-4 items-center w-max">
            {doubledClientes.map((cliente, index) => (
              <div 
                key={index} 
                className="shrink-0 flex items-center justify-center h-20 w-44 p-3 transition-all duration-300 group"
              >
                <img
                  src={cliente.logo}
                  alt={`Logo de ${cliente.nombre}`}
                  title={cliente.nombre}
                  className="max-h-full max-w-full object-contain transition-all duration-500 ease-out hover:scale-105 cursor-pointer"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}