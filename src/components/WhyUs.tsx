import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function WhyUs() {
  return (
    <section id="why-us" className="bg-navy py-20 md:py-24">
      <Container className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
        <Eyebrow onDark>Trusted Representation</Eyebrow>
        <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
          Why {siteConfig.name} Is a Trusted Choice for Personal Injury Cases in{" "}
          {siteConfig.state}
        </h2>
        <p className="text-white/80">
          Our proven track record of results is why our clients trust us. Every attorney at our
          firm has one focus: getting you the maximum compensation you deserve, as quickly and
          directly as possible.
        </p>
        <Button href="#contact" variant="accent" className="mt-1">
          Get a Free Case Evaluation
        </Button>
      </Container>
    </section>
  );
}
