import type React from "react";

export function UterusIcon({
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
      {/* Corpo do útero */}
      <path d="M9.5 21v-2.5C7.3 17.5 6 15.5 6 13.2C6 9.8 8.7 7 12 7C15.3 7 18 9.8 18 13.2C18 15.5 16.7 17.5 14.5 18.5V21" />
      {/* Colo do útero */}
      <path d="M9.5 21h5" />
      {/* Tuba esquerda */}
      <path d="M6.8 11.5C5.5 10.8 4 10.5 3 11.2" />
      {/* Ovário esquerdo */}
      <ellipse cx="3" cy="9.5" rx="1.3" ry="1.6" />
      {/* Tuba direita */}
      <path d="M17.2 11.5C18.5 10.8 20 10.5 21 11.2" />
      {/* Ovário direito */}
      <ellipse cx="21" cy="9.5" rx="1.3" ry="1.6" />
    </svg>
  );
}
