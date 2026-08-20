import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { steps } from "@/lib/content";

export function Steps() {
  return (
    <section className="bg-cream-alt py-20 md:py-24">
      <Container>
        <div className="flex max-w-xl flex-col gap-3">
          <Eyebrow>Know Your Rights</Eyebrow>
          <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
            What to Do After an Injury
          </h2>
          <p className="text-ink-soft">
            The moments after an accident are overwhelming. These steps protect you and your
            case.
          </p>
        </div>
        <ol className="mt-12 grid list-none gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.num} className="flex flex-col gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-serif font-bold text-white">
                {step.num}
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy">{step.title}</h3>
              <p className="text-sm text-ink-soft">{step.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-11 text-center">
          <Button href="#contact" variant="accent">
            Free Case Evaluation
          </Button>
        </div>
      </Container>
    </section>
  );
}
