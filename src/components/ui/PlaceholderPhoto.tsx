import type { ReactNode } from "react";

// Swap this out for a real optimized <Image> once photography is available:
// <Image src="/images/team.jpg" alt="..." fill className="object-cover" />
export function PlaceholderPhoto({
  label,
  icon,
  className = "",
}: {
  label: string;
  icon: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-line bg-linear-to-br from-cream-alt to-line/40 text-ink-soft ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="text-ink-soft/70">{icon}</span>
      <span className="text-xs font-semibold tracking-wide uppercase">{label}</span>
    </div>
  );
}
