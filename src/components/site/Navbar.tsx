import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/#empresas", label: "Cotizar" },
  { href: "/#contacto", label: "Contacto" },
  { href: "/proyecto-paisajismo", label: "Portafolio Fotográfico" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10 ${
          scrolled
            ? "glass rounded-full border border-border/60 shadow-[var(--shadow-soft)] py-2 pl-6 pr-2"
            : ""
        } transition-all duration-700`}
      >
        <a href="/#inicio" className="group flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--sage)] transition-transform duration-500 group-hover:scale-150" />
          <span className="font-display text-[17px] tracking-tight">
            Bascharant<span className="text-muted-foreground"> · Paisajismo</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[13px] text-foreground/75 transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Botón Delicado para Particulares */}
          <a
            href="https://bascharant.store"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/50 px-5 py-2.5 text-[12.5px] font-medium tracking-wide text-slate-700 transition-all duration-500 hover:bg-white hover:border-slate-300 hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:-translate-y-0.5 dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:border-slate-700"
          >
            Para Particulares
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5 text-slate-400">→</span>
          </a>

          <a
            href="/#empresas"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[12.5px] font-medium tracking-wide text-background transition-all duration-500 hover:bg-[var(--olive)] hover:shadow-[var(--shadow-lift)]"
          >
            Cotizar Empresas
            <span aria-hidden>→</span>
          </a>
        </div>

        <button
          aria-label="Menú"
          onClick={() => setOpen(!open)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full glass border border-border/60"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-px w-5 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-6 mt-3 rounded-2xl glass border border-border/60 p-6"
        >
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://bascharant.store"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-slate-100 border border-slate-200 px-5 py-3 text-center text-xs text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"
            >
              Para Particulares
            </a>
            <a
              href="/#empresas"
              onClick={() => setOpen(false)}
              className="rounded-full bg-foreground px-5 py-3 text-center text-xs text-background"
            >
              Cotizar Empresas
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
