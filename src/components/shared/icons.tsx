import type React from "react";

export function BisturiIcon({
  className,
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      {/* Silhueta do bisturi: cabo oval (sup. dir.) + lâmina com barriga (inf. esq.) */}
      <path d="M21 3 C23 3 23 6 21 6 L18 10 C15 16 10 21 4 22 C3 23 1 22 2 20 C6 17 12 12 16 8 L19 5 C20 3 21 2 21 3 Z" />
      {/* Ranhuras de grip no cabo */}
      <line x1="17.5" y1="7" x2="19" y2="8.7" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="18.8" y1="5.6" x2="20.2" y2="7.2" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="19.8" y1="4.2" x2="21" y2="5.7" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
      {/* Janela oval na lâmina */}
      <ellipse cx="6.5" cy="19.5" rx="1" ry="1.6" transform="rotate(-45 6.5 19.5)" fill="white" />
      {/* Ponto próximo à ponta */}
      <circle cx="4" cy="21.5" r="0.9" fill="white" />
    </svg>
  );
}
