import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "accent" | "outline" | "outline-dark";

const variantClasses: Record<Variant, string> = {
  accent: "bg-accent text-white hover:bg-accent-dark",
  outline: "border-2 border-white text-white hover:bg-white/10",
  "outline-dark": "border-2 border-navy text-navy hover:bg-navy hover:text-white",
};

export function Button({
  href,
  variant = "accent",
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-4 text-sm font-bold tracking-wide uppercase transition-colors ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
