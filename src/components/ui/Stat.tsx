export function Stat({
  value,
  label,
  onDark = false,
  size = "md",
}: {
  value: string;
  label: string;
  onDark?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = { sm: "text-2xl", md: "text-3xl", lg: "text-4xl md:text-5xl" };
  return (
    <div className="flex flex-col gap-0.5">
      <span
        className={`font-serif font-bold ${sizeClasses[size]} ${onDark ? "text-white" : "text-navy"}`}
      >
        {value}
      </span>
      <span
        className={`text-xs font-semibold tracking-wide ${onDark ? "text-white/75" : "text-ink-soft"}`}
      >
        {label}
      </span>
    </div>
  );
}
