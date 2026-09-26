import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconCheck } from "@/components/icons";

const promises = [
  "Our Attorneys treat you as an individual, not a number.",
  "Your case means a lot to you, and it means a lot to us as well.",
  "That's why our Attorneys FIGHT for every dollar that you deserve!",
  // "We treat you as an individual, not a number.",
  // "Your case means a lot to you, and it means a lot to us as well.",
  // "That's why we will fight for every dollar that you deserve.",
];

export function TrustStats() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
          {/* <Eyebrow>Why Clients Choose Us</Eyebrow> */}
          <h2 className="font-serif text-5xl font-bold text-navy md:text-6xl">
            Real People. Real Trust. Real Outcomes.
          </h2>
          <p className="text-ink-soft text-xl md:text-2xl">
            Our network of Attorneys will FIGHT the insurance companies to get results that YOU deserve.
          </p>
        </div>
        <ul className="mx-auto mt-8 flex max-w-3xl flex-col gap-3">
          {promises.map((item) => (
            <li key={item} className="flex gap-3 text-ink-soft text-xl md:text-2xl">
              <IconCheck className="mt-1.5 h-5 w-5 shrink-0 text-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
