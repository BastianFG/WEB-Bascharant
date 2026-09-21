import React from "react";

interface GlossaryLinkProps {
  children: React.ReactNode;
  term?: string;
}

export default function GlossaryLink({ children, term }: GlossaryLinkProps) {
  // Extract text if children is a simple string, to use as fallback query
  const queryText = term || (typeof children === "string" ? children : "");
  
  // Create URL with query parameter
  const href = queryText 
    ? `/glosario?q=${encodeURIComponent(queryText)}` 
    : "/glosario";

  return (
    <a
      href={href}
      className="text-[var(--olive)] font-medium hover:text-[var(--clay)] border-b border-[var(--olive)]/30 hover:border-[var(--clay)] transition-all cursor-help"
      title="Ver definición en el glosario"
    >
      {children}
    </a>
  );
}
