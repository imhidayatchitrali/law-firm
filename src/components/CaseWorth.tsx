import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { worthFactors } from "@/lib/content";

export function CaseWorth() {
  return (
    <section className="bg-cream-alt py-20 md:py-24">
      <Container>
        <div className="flex max-w-xl flex-col gap-3">
          <Eyebrow>Your Compensation</Eyebrow>
          <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
            How Much Is My Case Worth?
          </h2>
          <p className="text-ink-soft">Everyone wants to know. Here&apos;s what actually goes into it.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {worthFactors.map((f) => (
            <div key={f.title} className="flex flex-col gap-3 rounded-2xl border border-line bg-panel p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
                {f.icon}
              </div>
              <h3 className="font-serif text-base font-semibold text-navy">{f.title}</h3>
              <p className="text-sm text-ink-soft">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-11 text-center">
          <Button href="#contact" variant="accent">
            Get a Free, No-Obligation Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}
