import type { ReactNode } from "react";

export function Eyebrow({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <span
      className={`text-xs font-bold tracking-[0.14em] uppercase ${
        onDark ? "text-gold" : "text-accent"
      }`}
    >
      {children}
    </span>
  );
}
