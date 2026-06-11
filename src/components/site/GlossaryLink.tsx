import React from "react";

interface GlossaryLinkProps {
  children: React.ReactNode;
}

export default function GlossaryLink({ children }: GlossaryLinkProps) {
  return (
    <a
      href="/glosario"
      className="text-[var(--olive)] font-medium hover:text-[var(--clay)] border-b border-[var(--olive)]/30 hover:border-[var(--clay)] transition-all cursor-help"
      title="Ver definición en el glosario"
    >
      {children}
    </a>
  );
}
