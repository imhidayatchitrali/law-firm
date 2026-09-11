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
          Our firm is a network of top notch lawyers all throughout Florida.
           You dont get just one attorney, but a whole network, dedicated to your case.

        </p>
        <Button href="#contact" variant="accent" className="mt-1">
          Get a Free Case Evaluation
        </Button>
      </Container>
    </section>
  );
}
