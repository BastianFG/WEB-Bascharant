import { MessageCircle, Calendar } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      {/* Botón Agendar Reunión Técnica */}
      <div className="animate-float" style={{ animationDelay: "0s" }}>
        <a
          href="/#empresas"
          title="Agendar Reunión Técnica"
          className="group relative inline-flex items-center justify-center gap-0 md:gap-3 rounded-full bg-[var(--charcoal)]/95 hover:bg-white backdrop-blur-md text-background p-2.5 md:pl-3 md:pr-5 md:py-3 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-white/5 hover:border-[var(--border)] transition-all duration-500 overflow-hidden hover:-translate-y-0.5 active:scale-95 animate-fade-in-up"
          style={{ animationDelay: "1s", animationFillMode: "backwards" }}
        >
          {/* Subtle slow pulse instead of harsh ping */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <span className="relative flex h-9 w-9 items-center justify-center shrink-0">
            <span className="absolute inset-0 rounded-full bg-[var(--sage)] blur-[6px] opacity-40 group-hover:opacity-70 transition-opacity duration-500"></span>
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[var(--sage)] shadow-sm">
              <Calendar strokeWidth={1.4} className="h-5 w-5 text-[var(--charcoal)]" />
            </span>
          </span>
          <span className="hidden md:flex flex-col items-center text-center leading-tight relative z-10">
            <span className="text-[13px] font-medium text-white/90 group-hover:text-[var(--charcoal)] transition-colors duration-500">Agendar</span>
          </span>
        </a>
      </div>

      {/* Botón WhatsApp Corporativo */}
      <div className="animate-float" style={{ animationDelay: "1s" }}>
        <a
          href="https://wa.me/56988458216"
          target="_blank"
          rel="noreferrer"
          title="WhatsApp Corporativo"
          className="group relative inline-flex items-center justify-center gap-0 md:gap-3 rounded-full bg-[var(--charcoal)]/95 hover:bg-white backdrop-blur-md text-background p-2.5 md:pl-3 md:pr-5 md:py-3 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-white/5 hover:border-[var(--border)] transition-all duration-500 overflow-hidden hover:-translate-y-0.5 active:scale-95 animate-fade-in-up"
          style={{ animationDelay: "1.3s", animationFillMode: "backwards" }}
        >
          {/* Subtle slow pulse instead of harsh ping */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <span className="relative flex h-9 w-9 items-center justify-center shrink-0">
            <span className="absolute inset-0 rounded-full bg-emerald-500 blur-[6px] opacity-40 group-hover:opacity-70 transition-opacity duration-500"></span>
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-emerald-500 shadow-sm">
              <MessageCircle strokeWidth={1.4} className="h-5 w-5 text-white" />
            </span>
          </span>
          <span className="hidden md:flex flex-col items-center text-center leading-tight relative z-10">
            <span className="text-[9px] tracking-[0.2em] uppercase text-emerald-400 group-hover:text-emerald-700 transition-colors duration-500">Canal Directo</span>
            <span className="text-[13px] font-medium text-white/90 group-hover:text-[var(--charcoal)] transition-colors duration-500">WhatsApp</span>
          </span>
        </a>
      </div>
    </div>
  );
}
