import React from 'react';
import logoArauco from '../../assets/logo-ParqueArauco.png';
import logoCopec from '../../assets/logocopec.png';
import logoHuber from '../../assets/logohuber.png';
import logoBash from '../../assets/logobash.png';
import logoAir from '../../assets/Logoair.png';
import logoQuilicura from '../../assets/LogoQuilicura.png'; 

export function LogosEmpresas() {
  // Pasa las variables importadas en lugar de texto
  const clientes = [
    { nombre: "Arauco", logo: logoArauco },
    { nombre: "Copec", logo: logoCopec },
    { nombre: "Huber", logo: logoHuber },
    { nombre: "Bash", logo: logoBash },
    { nombre: "Air", logo: logoAir },
    { nombre: "Quilicura", logo: logoQuilicura },
  ];

  return (
    <section className="py-16 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Título elegante de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-xs md:text-sm font-semibold tracking-[0.25em] text-slate-500 dark:text-slate-400 uppercase">
            Empresas que confían en nosotros
          </h2>
        </div>

        {/* Cosas clave añadidas aquí:
          - grid-cols-2 sm:grid-cols-3 lg:grid-cols-6: Distribuye los logos equitativamente según el tamaño de pantalla.
          - items-center justify-items-center: Centra perfectamente el contenido horizontal y verticalmente.
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clientes.map((cliente, index) => (
            <div 
              key={index} 
              /* Caja contenedora fija: Garantiza que todos tengan el mismo espacio disponible
                Aumentamos la altura a h-20 en móvil y h-24 / h-28 en pantallas más grandes para mejorar la proporción general.
              */
              className="group flex items-center justify-center w-full h-20 md:h-24 lg:h-28 p-4 transition-all duration-300"
            >
              <img
                src={cliente.logo}
                alt={`Logo de ${cliente.nombre}`}
                title={cliente.nombre}
                /* - max-h-full y max-w-full: Hacen que el logo crezca hasta tocar el borde de su celda sin deformarse.
                  - opacity-60: Ajustada un poco más alta para darles mayor presencia inicial en la página.
                */
                className="max-h-full max-w-full object-contain filter grayscale opacity-60 dark:opacity-50 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}