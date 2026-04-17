import type React from "react";

export function BisturiIcon({
  className,
  size = 24,
  strokeWidth = 1.5,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Cabo */}
      <line x1="2" y1="22" x2="11" y2="13" />
      {/* Guarda (bolster) */}
      <line x1="10" y1="11.5" x2="13" y2="14.5" />
      {/* Dorso da lâmina */}
      <line x1="12" y1="12" x2="21" y2="3" />
      {/* Fio da lâmina (corte curvo) */}
      <path d="M12 12 Q20.5 8 21 3" />
    </svg>
  );
}
