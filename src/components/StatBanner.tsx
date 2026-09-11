import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function StatBanner() {
  return (
    <section className="bg-navy py-16">
      <Container className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
        <span className="font-serif text-4xl font-bold text-white md:text-5xl">
           Millions
        </span>
        <h2 className="text-xl font-semibold text-white">Recovered for Our Clients</h2>
        <p className="text-sm text-white/80">
          You deserve to know your options. If you or someone you love has been injured due to
          negligence, our network of attorney are ready to fight for the compensation you deserve.
        </p>
        <Button href="#contact" variant="accent" className="mt-1">
          Get a Free Evaluation
        </Button>
      </Container>
    </section>
  );
}
