import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Stat } from "@/components/ui/Stat";

const results = [
  { value: "$[X],000,000", label: "Premium Verdict" },
  { value: "$[X],000,000", label: "Motor Vehicle Accident" },
  { value: "$[X],000,000", label: "Premises Liability" },
];

export function TrustStats() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <Eyebrow>Why Clients Choose Us</Eyebrow>
          <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
            Real People. Real Trust. Real Outcomes.
          </h2>
          <p className="text-ink-soft">
            Our results speak for themselves — honest, transparent, and committed to real
            outcomes for every client we represent.
          </p>
        </div>
        <div className="mt-12 grid gap-7 sm:grid-cols-3">
          {results.map((r) => (
            <div
              key={r.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-panel p-8 text-center"
            >
              <Stat value={r.value} label={r.label} size="lg" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
