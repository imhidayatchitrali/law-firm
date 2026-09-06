import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconCheck } from "@/components/icons";

const promises = [
  "We treat you as an individual, not a number.",
  "Your case means a lot to you, and it means a lot to us as well.",
  "That's why we will fight for every dollar that you deserve.",
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
        <ul className="mx-auto mt-8 flex max-w-2xl flex-col gap-3">
          {promises.map((item) => (
            <li key={item} className="flex gap-3 text-ink-soft">
              <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
